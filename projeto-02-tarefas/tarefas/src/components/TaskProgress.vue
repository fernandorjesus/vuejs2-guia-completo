<template>
  <div class="tasks-progress">
    <span class="progress-value">{{ progress }}%</span>
    <div class="progress-bar" :style="{width: progress + '%'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: { type: Number, default: 0 }
  }
};
</script>

<style>
.tasks-progress {
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  position: relative;
  width: 80%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-bar {
  position: absolute;
  border-radius: 8px;
  height: 100%;
  background: #4caf50;
  transition: width 0.5s ease;
  align-self: flex-start;
}

.progress-value {
  z-index: 1;
  font-size: 1.5rem;
}
</style>