const API_KEY = 'fa0170b016f44c10f6d6cabdd9c3e524';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {
        return[
            {
                slug: "toprated",
                title: "Recomendados Para Você",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Em Alta",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "releases",
                title: "Lançamentos",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&language=pt-BR&primary_release_year=2022&year=2022`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
                    break;

                case 'tv':
                    info = basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`);
                    break;
                
                default:
                    info = null; 
                    break;
            }
        }
        return info;
    },

    getSearchList: async () => {
        return await basicFetch(`/discover/movie?language=pt-BR&page=1&api_key=${API_KEY}`);
    }

}