import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import Menu from "./components/template/Menu";
import Usuario from "./components/usuario/Usuario";
import UsuarioLista from "./components/usuario/UsuarioLista";
import UsuarioEditar from "./components/usuario/UsuarioEditar";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";

Vue.use(Router);

export default new Router({
  mode: "history",

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
        { path: ":id", component: UsuarioDetalhe, props: true },
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
