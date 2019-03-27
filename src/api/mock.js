import initial from 'state/initial-state';

class ApiRequest {
    constructor() {}

    async get(url) {
        switch (url) {
            case '/info':
                return Object.assign({}, initial);
            default:
                throw new Error('Failed to get mock data: invalid path');
        }
    }
}

const api = new ApiRequest();

export default api;
