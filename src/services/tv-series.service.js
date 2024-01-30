import api from "@/services/api.js";

class TVSeriesService {
    baseUrl = '/v1/tv-series';

    get(params) {
        return api.get(`${this.baseUrl}/`, {
            params: params,
        });
    }
    detail(id) {
        return api.get(`${this.baseUrl}/${id}/`);
    }
    get_stream(id, translator_hash=null, season=null, episode=null) {
        return api.get(`${this.baseUrl}/${id}/stream/`, {
            params: {
                translator_hash: translator_hash,
                season_no: season,
                episode_no: episode,
            }
        });
    }
}

export default new TVSeriesService();