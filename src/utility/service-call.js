import { APP_CONSTANTS } from '../configs/constants';

const service = (fetchData = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { url = '', method = 'GET', headers = new Headers(), body = {} } = fetchData;
            const request = new Request(`${APP_CONSTANTS.API_BASE_URL}/${url}`, {
                method,
                headers,
                body: method === 'GET' ? null : body
            });
            const response = await fetch(request);
            if (response.ok) {
                const data = await response.json();
                resolve(data);
            } else {
                reject(response.statusText);
            }
        } catch (error) {
            reject(error);
        }
    });
};

export default service;
