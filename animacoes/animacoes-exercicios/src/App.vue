<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <!-- <b-button class="mb-4" variant="primary" @click="exibir = !exibir">Mostrar mensagem</b-button> -->

    <!-- <transition name="fade" appear>
      <b-alert variant="info" show v-if="exibir"> {{ msg }}</b-alert>
    </transition>

    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="exibir"> {{ msg }}</b-alert>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated rotateOut"
      >
      <b-alert variant="info" show v-show="exibir"> {{ msg }}</b-alert>
    </transition>-->

    <!-- <hr />

    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>

    <hr />

    <button @click="exibir2 = !exibir2">Alternar</button>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr />

    <div class="mb-4">
      <b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
      <b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Adventência</b-button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>-->

    <b-button variant class="mb-4" @click="adicionarAluno">Adicionar</b-button>

    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="i">
        <b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

// <script>
// import AlertaAdvertencia from "./AlertaAdvertencia";
// import AlertaInfo from "./AlertaInfo";

export default {
  // components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      alunos: ["Roberto", "Julia", "Teresa", "Paulo"],
      msg: "Uma mensagem de informação para o usuário",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      laguraBase: 0
      // componenteSelecionado: AlertaInfo
    };
  },

  methods: {
    // animar(el, done, negativo) {
    //   let rodada = 1;

    //   const temporizador = setInterval(_ => {
    //     const novaLargura =
    //       this.laguraBase + (negativo ? -rodada * 10 : rodada * 10);
    //     el.style.width = `${novaLargura}px`;
    //     rodada++;

    //     if (rodada > 30) {
    //       clearInterval(temporizador);
    //       done();
    //     }
    //   }, 20);
    // },

    adicionarAluno() {
      const s = Math.random()
        .toString(36)
        .substring(2);
      this.alunos.push(s);
    },

    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },

    beforeEnter(el) {
      this.laguraBase = 0;
      el.style.width = `${this.laguraBase}px`;
    },

    enter(el, done) {
      this.animar(el, done, false);
    },

    afterEnter(el) {
      console.log("afterEnter");
    },

    enterCancelled(el) {
      console.log("enterCancelled");
    },

    beforeLeave(el) {
      this.laguraBase = 300;
      el.style.width = `${this.laguraBase}px`;
    },

    leave(el, done) {
      this.animar(el, done, true);
    },

    afterLeave(el) {
      console.log("afterLeave");
    },

    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  background: lightgreen;
  height: 100px;
  width: 300px;
  margin: 30px auto;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>
