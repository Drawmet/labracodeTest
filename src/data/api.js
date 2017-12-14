const API_KEY = '7b67f40e053a051fea40fb00e3885b06';
const LANG = 'ru-RU';

/* api fetch methods: getData for get content by type(movie or tv), by filter, and by number of page.
    search for search by api and get back data by search.
    getDetails for get movie or tv details by id*/

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
    },
    getSearch(type='movie', query='clasic'){
        return fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=${LANG}&query=${query}`, {
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
            data.query = query;
            console.log(data);
            return data;
        }).catch(error => {
            console.error(error);
        });
    },
    getDetails( type="movie", id="1"){
        return fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=${LANG}`, {
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
            return data;
        }).catch(error => {
            console.error(error);
        });
    },
}

export default api;