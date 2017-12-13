const API_KEY = '7b67f40e053a051fea40fb00e3885b06';
const LANG = 'ru';

let api = {
    getData(type = 'movie', filter = 'popular', page = '1'){
        return fetch(`https://api.themoviedb.org/3/${type}/${filter}?api_key=${API_KEY}&language=${LANG}&page=${page}`, {
            method: 'GET',
            dataType: 'jsonp',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
        })
        .then(res => {
            if(res.ok){
               return res.json();
            }
            res.text().then(data => {
                const { status, statusText } = res;
                const message = `HTTP status ${status} (${statusText}): ${data}`;
                throw new Error(message);
              });
        }).then(data => {
            data.typeData = type;
            data.filter = filter;
            data.page = page;
            return data;
        }).catch(error => {
            console.error(error);
        });
    }
}

export default api;