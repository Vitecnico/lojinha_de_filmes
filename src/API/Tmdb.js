const API_KEY = `c4325c6ed6b6b11cd84f5ecbf6cc1712`;
const API_REQUISICAO = `https://api.themoviedb.org/3`;
const PT_BR_AND_KEY = `language=pt-BR&api_key=${API_KEY}`;

const simpleFetch = async(endpoint) => {
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
                itens: await simpleFetch(`/trending/all/week?${PT_BR_AND_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                itens: await simpleFetch(`/movie/top_rated?${PT_BR_AND_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await simpleFetch(`/discover/movie?witch_genrers=28&${PT_BR_AND_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await simpleFetch(`/discover/movie?witch_genrers=10749&${PT_BR_AND_KEY}`)
                
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: await simpleFetch(`/discover/movie?witch_genrers=35&${PT_BR_AND_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                itens: await simpleFetch(`/discover/movie?witch_genrers=18&${PT_BR_AND_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                itens: await simpleFetch(`/discover/movie?witch_genrers=27&${PT_BR_AND_KEY}`)
            },   
        ]
    }


}