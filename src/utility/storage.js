export const getStorage = (key = '') => {
    return JSON.parse(localStorage.getItem(key) || '{}');
};

export const setStorage = (data = {}) => {
    return new Promise((resolve, reject) => {
        const { storageKey, dataKey, value } = data;
        const storageData = getStorage(storageKey);
        storageData[dataKey] = value;
        localStorage.setItem(storageKey, JSON.stringify(storageData));
        resolve(value);
    });
};

export const clearStorage = (key = '') => {
    localStorage.removeItem(key);
};
