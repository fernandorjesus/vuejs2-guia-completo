import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import Menu from "./components/template/Menu";
// import Usuario from "./components/usuario/Usuario";
// import UsuarioLista from "./components/usuario/UsuarioLista";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";

Vue.use(Router);

const Usuario = () =>
  import(/* webpackChunkName: "usuario" */ "./components/usuario/Usuario");
const UsuarioLista = () =>
  import(/* webpackChunkName: "usuario" */ "./components/usuario/UsuarioLista");
const UsuarioEditar = () =>
  import(
    /* webpackChunkName: "usuario" */ "./components/usuario/UsuarioEditar"
  );
const UsuarioDetalhe = () =>
  import(
    /* webpackChunkName: "usuario" */ "./components/usuario/UsuarioDetalhe"
  );

const router = new Router({
  mode: "history",

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  },

  routes: [
    {
      path: "/",
      // component: Inicio,
      name: "inicio",
      components: {
        default: Inicio,
        menu: Menu
      }
    },
    {
      path: "/usuario",
      component: Usuario,
      props: true,
      children: [
        { path: "", component: UsuarioLista },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log("Antes da rota -> Usuário detalhe");

            next();
          }
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario"
        }
      ]
    },
    {
      path: "/redirecionar",
      redirect: "/usuario"
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("antes das rotas -> global");

  next();
});

export default router;
