import {useAuthStore} from "@/stores/auth.js";
import api from "@/services/api.js";
class PlayerService {
    baseUrl = '/v1/watch/progress'

    generatePlaylistId(movie_id, tv_series_id, translator_hash, season=null, episode=null) {
        return movie_id + '_' + tv_series_id + '_' + translator_hash + '_' + season + '_' + episode;
    }
    parsePlaylistId(playlist_id) {
        const playlist = playlist_id.split('_');
        return {
            movie_id: playlist[0] === 'null' ? null : playlist[0],
            tv_series_id: playlist[1] === 'null' ? null : playlist[1],
            translator_hash: playlist[2],
            season: playlist[3] === 'null' ? null : playlist[3],
            episode: playlist[4] === 'null' ? null : playlist[4],
        };
    }
    mapParamsForStreamUrl(movie_id, tv_series_id, translator_hash, season = 1, episode = 1, return_data = false) {
        const auth_store = useAuthStore();
        return `${movie_id},${tv_series_id},"${translator_hash}","${import.meta.env.VITE_API_URL}","Bearer ${auth_store.accessToken}",${season},${episode},${return_data}`;
    }
    saveWatchProgress(playlist_id, time_code) {
        const playlist = this.parsePlaylistId(playlist_id);
        console.log(playlist)
        return api.post(`${this.baseUrl}/save`, {
            "movie_id": playlist.movie_id,
            "tv_series_id": playlist.tv_series_id,
            "translator_hash": playlist.translator_hash,
            "time_code": time_code,
            "season_no": playlist.season,
            "episode_no": playlist.episode,
        });
    }
}

export default new PlayerService();