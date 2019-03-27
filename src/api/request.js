class ApiRequest {
    constructor() {
        this.initialized = false;
        this.base = null;
    }

    async initialize() {
        try {
            let config = await this._request('GET', 'assets/config.json');
            this.base = config.baseUrl;
        } catch (err) {
            throw new Error('Failed to initialize API');
        }
    }

    async get(url) {
        try {
            if (!this.initialized) {
                await this.initialize();
            }
            await this._request('GET', url);
        } catch (err) {
            throw err;
        }
    }

    _request(method, url, data) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onload = function() {
                try {
                    let data = JSON.parse(this.response);
                    if (this.status >= 200 && this.status < 300) {
                        return resolve(data);
                    } else {
                        return reject(data);
                    }
                } catch (err) {
                    return reject({ message: 'Failed to retrieve information from response', details: err.message });
                }
            };
            if (data) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send();
            }
        });
    }
}

const api = new ApiRequest();

export default api;
