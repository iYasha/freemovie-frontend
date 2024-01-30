<template>
  <div class="trailer" @click="stop" v-if="isPlaying">
    <iframe id="ytplayer" type="text/html"
            :src="`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1`"
            frameborder="0"
            allow="autoplay;fullscreen;picture-in-picture"
            width="80%"
            height="80%"
    ></iframe>
  </div>
</template>

<script>

export default {
  name: "YoutubePlayer",
  props: {
    videoId: String,
    isPlaying: Boolean,
  },
  watch: {
    isPlaying: function (val) {
      setTimeout(() => {
        if (val) {
          this.watch()
        } else {
          this.stop()
        }
      }, 600)
    }
  },
  data () {
    return {

    }
  },
  methods: {
    watch() {
      const html = document.getElementsByTagName('html')[0];
      html.style.overflow = 'hidden';
      this.postMessageToPlayer({event: "command", func: "playVideo"});
    },
    postMessageToPlayer(command) {
      const iframe = document.getElementById("ytplayer");
      iframe.contentWindow.postMessage(JSON.stringify(command), "*");
    },
    stop() {
      const html = document.getElementsByTagName('html')[0];
      html.style.overflow = 'auto';
      this.$emit('update:isPlaying', false)
    },
  }
}
</script>

<style scoped>
.trailer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(24, 24, 24, 0.6);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trailer #ytplayer {
  z-index: 1002;
}
</style>