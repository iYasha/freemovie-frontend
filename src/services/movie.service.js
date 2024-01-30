import api from "@/services/api.js";

class MovieService {
    get(params) {
        return api.get('/v1/movies/', {
            params: params,
        });
    }
    detail(id) {
        return api.get(`/v1/movies/${id}/`);
    }
    get_stream(id, translator_hash=null) {
        return api.get(`/v1/movies/${id}/stream/`, {
            params: {
                translator_hash: translator_hash,
            }
        });
    }
}

export default new MovieService();