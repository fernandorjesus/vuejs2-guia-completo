<template>
  <div class="new-task">
    <input
      class="form-element"
      placeholder="Nova tarefa"
      v-model="name"
      @keydown.enter="add"
      type="text"
    />
    <button class="form-element" @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },

  methods: {
    add() {
      this.$emit("taskAdded", { name: this.name });
      this.name = "";
    }
  }
};
</script>

<style>
.new-task {
  margin: 35px;
}

::placeholder {
  color: #fff;
}

.form-element {
  border: 1px solid #ddd;
  color: #fff;
  outline: none;
  font-size: 2rem;
  padding: 5px 10px 8px;
}

input.form-element {
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 500px;
}

button.form-element {
  background: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>