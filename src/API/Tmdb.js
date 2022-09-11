API_KEY = "c4325c6ed6b6b11cd84f5ecbf6cc1712"
API_REQUISICAO = "https://api.themoviedb.org/3"
PT_BR_AND_KEY = `language=pt-BR&api_key=${API_KEY}`

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
                itens: await simpleFetch(`/trending/all/week?${PT_BR_AND_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Bem avaliadas',
                itens:[]
            },
            {
                slug: 'action',
                title: 'Ação',
                itens:[]
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens:[]
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens:[]
            },
            {
                slug: 'drama',
                title: 'Drama',
                itens:[]
            },
            {
                slug: 'horror',
                title: 'Horror',
                itens:[]
            },   
        ]
    }


}