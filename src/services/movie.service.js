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
    saveWatchProgress(data) {
        return api.post('/v1/watch/progress/save', data)
    }
}

export default new MovieService();