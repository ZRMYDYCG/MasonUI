<script setup lang="ts">
interface INullData {
  message?: string
}

withDefaults(defineProps<INullData>(), {
  message: '暂时没有数据',
})
</script>

<template>
  <div class="null-data-wrapper">
    <svg
      t="1745976220890"
      class="icon shake-glow"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1830"
      width="200"
      height="200"
    >
      <path d="M938.666667 561.777778l-105.244445-36.977778-2.844444-125.155556c-2.844444-59.733333 19.911111-119.466667 36.977778-174.933333l-95.288889 9.955556-42.666667-152.177778-75.377778 122.311111-75.377778-42.666667-12.8 201.955556L389.688889 112.355556 369.777778 214.755556c0 7.111111-17.066667 17.066667-27.022222 17.066666l-39.822223-9.955555c-29.866667-7.111111-62.577778-17.066667-92.444444-27.022223L184.888889 184.888889l257.422222 257.422222L631.466667 597.333333 711.111111 392.533333l-49.777778 244.622223 39.822223 46.933333-9.955556 7.111111-2.844444 2.844444L867.555556 873.244444l17.066666-12.8-160.711111-153.6L938.666667 561.777778z" fill="#1FDBEA" p-id="1831" />
      <path d="M187.733333 187.733333l9.955556 27.022223c9.955556 29.866667 19.911111 59.733333 27.022222 92.444444l9.955556 39.822222c2.844444 7.111111-9.955556 27.022222-17.066667 27.022222l-102.4 19.911112L366.933333 568.888889l-201.955555 12.8 42.666666 75.377778L85.333333 733.866667l152.177778 39.822222-9.955555 95.288889c56.888889-17.066667 119.466667-39.822222 174.933333-36.977778l125.155555 2.844444 36.977778 105.244445 142.222222-209.066667 152.177778 159.288889 12.8-17.066667L694.044444 696.888889l-2.844444 2.844444-7.111111 11.377778-46.933333-39.822222-244.622223 49.777778L597.333333 641.422222 445.155556 445.155556l-2.844445-2.844445" fill="#1FDBEA" p-id="1832" />
    </svg>
    <p class="message">
      {{ message }}
    </p>
  </div>
</template>

<style scoped>
.null-data-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 30%;
  height: 100px;
  flex: 1;
}

.message {
  font-size: 20px;
  font-weight: 100;
  margin-top: 20px;
  color: #999;
}

/* 抖动 */
.shake-glow {
  animation:
    shake 2s ease-in-out infinite alternate,
    glow 2s ease-in-out infinite alternate;
}

@keyframes shake {
  0% {
    transform: translateX(-3px) rotate(-2deg);
  }
  25% {
    transform: translateX(3px) rotate(2deg);
  }
  50% {
    transform: translateX(-3px) rotate(-2deg);
  }
  75% {
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    transform: translateX(-3px) rotate(-2deg);
  }
}

@keyframes glow {
  0% {
    filter: drop-shadow(0 0 5px #1fdbea) drop-shadow(0 0 10px rgba(31, 219, 234, 0.5));
  }
  100% {
    filter: drop-shadow(0 0 15px #1fdbea) drop-shadow(0 0 20px rgba(31, 219, 234, 0.8));
  }
}
</style>
