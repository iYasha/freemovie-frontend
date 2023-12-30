<template>
  <main class="w-5/6">
    <h1 class="text-5xl font-bold color-white">{{ movie.title_en }}<span class="color-red">.</span></h1>
    <h2 class="text-xl color-gray">{{ movie.short_description }}</h2>
    <div class="flex mt-10">
      <div class="w-1/4">
        <img :src="movie.poster_url"  alt="poster" class="w-half">
      </div>
      <div class="w-1/2 ml-10">

        <span v-if="!show_more" class="color-white">{{ short_description }}</span><span class="color-white" v-else>{{ movie.description }}</span>
        <br v-if="show_more">
        <span class="color-red cursor-pointer" @click="show_more = !show_more">{{ !show_more ? ' read more' : 'hide' }}</span>
      </div>
    </div>
    <div class="mt-10">
      <div id="player"></div>
    </div>

  </main>
</template>

<script>
import pjs from '../assets/playerjsloader.js';
import axios from 'axios';

// https://playerjs.com/docs/ru=chromecast

export default {
  data() {
    return {
      movie: {},
      streams: [],
      short_description: '',
      more_description: '',
      show_more: false,
      player_files: [],
      player: Object,
    };
  },
  mounted() {
    this.loadMovie();
  },
  unmounted() {
    this.player.api('stop');
    this.player.api('destroy');
  },
  methods: {
    async loadPlayer() {
      await (async () => {
        await pjs;

        this.player = new Playerjs({
          id: 'player',
          file: this.player_files,
          hlsconfig: {
            maxBufferLength: 600,
            maxMaxBufferLength: 600,
            maxBufferSize: 33554432000,
          }
        });
      })();
    },
    async loadMovie() {
      const url = import.meta.env.VITE_API_URL + '/api/v1/movies/' + this.$route.params.id + '/';
      try {
        const authToken = import.meta.env.VITE_AUTH_TOKEN; // Replace with your actual authentication token
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': authToken,
          },
        });
        this.movie = response.data.data;
        this.short_description = this.movie.description.slice(0, 200).split(' ').slice(0, -1).join(' ')
        // foreach
        this.movie.audio_tracks.forEach((audio_track) => {
          const params = this.movie.rezka_movie_id + ',' + audio_track.rezka_audio_id + ', "' + import.meta.env.VITE_API_URL + '", "' + authToken + '"';
           this.player_files.push({
             title: audio_track.title,
             // some crazy staff happens here
             file: 'js:getStreamUrl(' + params + ')',
           });
        });
        await this.loadPlayer();
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  },
};
</script>