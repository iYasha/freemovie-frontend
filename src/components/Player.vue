<template>
  <div id="player" :class="{'h-screen': player !== null}"></div>
</template>

<script>

import pjs from "@/assets/playerjsloader.js";
import PlayerService from "@/services/player.service.js";

export default {
  name: "Player",
  props: {
    readyToPlay: {
      type: Boolean,
      default: false,
    },
    files: {
      type: Array,
      default: [],
    },
    currentFileKey: {
      type: String,
      default: null,
    },
    logs: {
      type: Boolean,
      default: false,
    },
    hlsDebug: {
      type: Boolean,
      default: false,
    },
    startFrom: {
      type: Number,
      default: null,
    },
  },
  watch: {
    readyToPlay: function() {
      if (this.readyToPlay) {
        this.loadPlayer();
      }
    },
    files: function() {
      if (this.readyToPlay && this.player && this.files) {
        console.log('playlist', this.files);
        // we also should start from this season, episode and time_code it doesn't implemented curently
        this.loadPlayer();
      }
    },
  },
  data () {
    return {
      player: null,
      progress_saved: false,
      time_code: 0,
    }
  },
  unmounted() {
    if (this.player !== null) {
      this.player.api('stop');
      this.player.api('destroy');
    }
  },
  methods: {

    async playerTimeEvent(event) {
      const time_code = Math.round(event.info)
      this.time_code = time_code;
      if (time_code === 0 || time_code % 10 !== 0) {
        this.progress_saved = false;
        return;
      }
      if (this.progress_saved === true) {
        return;
      }
      this.progress_saved = true;

      PlayerService.saveWatchProgress(this.player.api('playlist_id'), this.time_code).then(
          error => {
            console.log(error);
          }
      );
    },
    breakPlayerLocalStorage() {
      const url = window.location.href;
      console.log(this.currentFileKey)

      const local_storage_key = 'pljsplayfrom_player' + url.replace('https://', '').replace('http://', '');
      if (this.currentFileKey !== null) {
        localStorage.setItem(local_storage_key, this.currentFileKey);
      }
    },
    async loadPlayer() {
      this.breakPlayerLocalStorage();
      await (async () => {
        await pjs;
        const playerOptions = {
          id: 'player',
          log: this.logs,
          hlsdebug: this.hlsDebug,
          file: this.files,
          hlsconfig: {
            maxBufferLength: 600,
            maxMaxBufferLength: 600,
            maxBufferSize: 33554432000,
          },
        };

        if (this.startFrom !== null) {
          playerOptions.start = this.startFrom;
        }

        this.player = new Playerjs(playerOptions);
        document.getElementById("player").addEventListener("time", this.playerTimeEvent);
      })();
    },
  }
}
</script>

<style>
</style>