<template>
  <div class="task" :class="stateClass" @click="$emit('taskStateChanged', task)">
    <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true }
  },

  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      };
    }
  }
};
</script>

<style>
.task {
  border-left: 12px solid;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 300;
  width: 350px;
  height: 150px;
  padding: 10px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.pending {
  border-color: #b73229;
  background: #f44336;
}
.done {
  border-color: #0a8f08;
  background: #4caf50;
  color: #ddd;
  text-decoration: line-through;
}

.pending .close {
  background: #b73229;
}

.done .close {
  background: #0a8f08;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 20px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>