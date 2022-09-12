const API_KEY = `c4325c6ed6b6b11cd84f5ecbf6cc1712`;
const API_REQUISICAO = `https://api.themoviedb.org/3`;
const PT_BR_AND_KEY = `language=pt-BR&api_key=${API_KEY}`;

const simpleFetch = async (endpoint) => {
    const req = await fetch(`${API_REQUISICAO}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () =>{
        return[
            {
                slug: 'trending',
                title: 'Populares',
                items: await simpleFetch(`/trending/all/week?${PT_BR_AND_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await simpleFetch(`/movie/top_rated?${PT_BR_AND_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await simpleFetch(`/discover/movie?with_genres=28&${PT_BR_AND_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await simpleFetch(`/discover/movie?with_genres=10749&${PT_BR_AND_KEY}`)
                
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await simpleFetch(`/discover/movie?with_genres=35&${PT_BR_AND_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await simpleFetch(`/discover/movie?with_genres=18&${PT_BR_AND_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await simpleFetch(`/discover/movie?with_genres=27&${PT_BR_AND_KEY}`)
            },   
        ]
    }


}