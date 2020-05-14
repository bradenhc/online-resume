class HttpConnection {
  constructor(url) {
      this._url = url;
  }

  async get() {
    try {
      return this._request('GET', this._url);
    } catch (err) {
      throw err;
    }
  }

  _request(method, url, data = null) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          return resolve(this.response);
        } else {
          return reject(this.response);
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

export default HttpConnection;
