import api from "@/services/api.js";

class WatchlistService {
    baseUrl = '/v1/watchlist';

    toggle(content_id, content_type, state) {
        const stateSuffix = state ? `/add` : `/remove`;
        const contentType = content_type === 'film' ? 'movie' : 'tv_series';
        const data = {
            content_id: content_id,
            content_type: contentType
        };
        return api.post(`${this.baseUrl}${stateSuffix}`, data);
    }

    list(page) {
        return api.get(`${this.baseUrl}/list?page=${page}`);

    }
}

export default new WatchlistService();