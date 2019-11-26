<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ nome }}</strong>
    </p>
    <p>
      Idade do usuário <strong>{{ idade }}</strong>
    </p>

    <button @click="reiniarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome (Callback )</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    nome: {
      type: String,
      default: "Anônimo"
      // required: true
      // default: function() {
      //   return Array(10)
      //     .fill(0)
      //     .join(",");
      // }
    },
    reiniciarFn: Function,
    idade: Number
  },
  created() {
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade;
    });
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniarNome() {
      this.nome = "Pedro";
      this.$emit("nomeMudou", this.nome);
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
