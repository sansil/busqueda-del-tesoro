<template>
  <div id="clock">
    <p class="time">{{zeroPadding(hours)}}:{{zeroPadding(minutes)}}:{{zeroPadding(seconds)}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      millis: 0,
      running: false,
      tickCallback: null
    };
  },
  mounted() {
    this.startClock();
  },
  methods: {
    startClock() {
      this.running = true;
      this.tickCallback = setInterval(() => {
        this.tick();
      }, 100);
    },
    tick() {
      let millis = this.millis + 1;
      let seconds = this.seconds;
      let minutes = this.minutes;
      let hours = this.hours;

      if (millis === 10) {
        millis = 0;
        seconds = seconds + 1;
      }

      if (seconds === 60) {
        millis = 0;
        seconds = 0;
        minutes = minutes + 1;
      }
      if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
      }

      this.update(millis, seconds, minutes, hours);
    },
    update(millis, seconds, minutes, hours) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.millis = millis;
    },
    stop() {
      if (this.running) {
        clearInterval(this.tickCallback);
        this.running = false;
      }
    },
    zeroPadding(value) {
      return value < 10 ? `0${value}` : value;
    }
  }
};
</script>

<style lang="scss" scoped>
#clock {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }

  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
}
</style>