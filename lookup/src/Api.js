export const Api = {
    get(url) {
        return fetch(url).then((res) => res.json());
    }
};

