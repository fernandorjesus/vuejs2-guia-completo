<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Codigo:</strong> {{ id }}</p>
    <p>
      <strong>Completo:</strong> {{ $route.query.completo ? "Sim" : "Não" }}
    </p>

    <p><strong>Lingua:</strong> {{ $route.query.lingua }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"]
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   }
  // },
};
</script>
