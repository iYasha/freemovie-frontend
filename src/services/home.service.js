import api from "@/services/api.js";

class HomeService {
    baseUrl = '/v1/home';

    getPopularThisWeek() {
        return api.get(`${this.baseUrl}/popular/this-week/` );
    }
    getContinueToWatch() {
        return api.get(`${this.baseUrl}/continue-to-watch/`)
    }
}

export default new HomeService();