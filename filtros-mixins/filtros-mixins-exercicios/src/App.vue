<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ cpfDoAluno | cpf | inverter }}</p>
    <input type="text" :value="cpfDoAluno | cpf">
    <hr>
    <frutas />
	</div>
</template>

<script>
import frutas from './Frutas';
export default {
  components: { frutas },

  filters: {
    cpf(valor){
      const arr = valor.split('');

      arr.splice(3, 0, '.');
      arr.splice(7, 0, '.');
      arr.splice(11, 0, '-');

      return arr.join('');
    }
  },

  data(){
    return {
      cpfDoAluno: '18414910807'
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
</style>
