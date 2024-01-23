import api from "@/services/api.js";

class GenreService {
    getAll() {
        return api.get('/v1/genres/');
    }
}

export default new GenreService();