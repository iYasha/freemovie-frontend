<template>
  <div>
    <svg width="0" height="0">
      <linearGradient id="rg" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="rgba(0,0,0,0)"/>
        <stop :offset="unfilledPercent + '%'" stop-color="rgba(0,0,0,0)"/>
        <stop :offset="unfilledPercent + '%'" stop-color="rgba(243, 156, 18, 1)"/>
        <stop offset="100%" stop-color="rgba(243, 156, 18, 1)"/>
      </linearGradient>
    </svg>
    <svg class="svg-inline--fa fa-star mr-1 h-7 w-7 color-orange" aria-hidden="true" focusable="false"
         data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 576 512"
         v-for="i in filledStars"
    >
      <path class="" fill="currentColor"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            stroke="#f39c12" stroke-width="30"></path>
    </svg>
    <svg class="svg-inline--fa fa-star mr-1 h-7 w-7 custom-fill" aria-hidden="true" focusable="false"
         data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 576 512">
      <path class="" fill="currentColor"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            stroke="#f39c12" stroke-width="30"></path>
    </svg>
    <svg class="svg-inline--fa fa-star mr-1 h-7 w-7" aria-hidden="true" focusable="false"
         data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 576 512"
         v-for="i in unfilledStars"
    >
      <path class="" fill="none"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            stroke="#f39c12" stroke-width="30"></path>
    </svg>
  </div>
</template>

<script>

export default {
  name: "Rating",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.filledStars = Math.floor(this.value / 2);
    this.unfilledStars = 4 - this.filledStars;
    this.unfilledPercent = 100 - Math.round((this.value / 2 - this.filledStars) * 100);
  },
  data () {
    return {
      filledStars: 0,
      unfilledStars: 0,
      unfilledPercent: 0,
    }
  },
}
</script>

<style>

.custom-fill * {
  fill: url(#rg);
}
</style>