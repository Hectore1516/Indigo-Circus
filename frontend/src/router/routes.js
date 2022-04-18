const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/maestros",
        name: "Maestros",
        component: () => import("pages/cliente/Maestros.vue"),
      },
      {
        path: "/perfil",
        name: "Perfil",
        component: () => import("pages/cliente/Perfil.vue"),
      },
      {
        path: "/nuestras_clases",
        name: "NuestrasClases",
        component: () => import("pages/cliente/NuestrasClases.vue"),
      },
      {
        path: "/reserva_tu_clase",
        name: "ReservaTuClase",
        component: () => import("pages/cliente/ReservaTuClase.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("pages/cliente/Login.vue"),
      },
      {
        path: "/crear_cuenta",
        name: "CrearCuenta",
        component: () => import("pages/cliente/CrearCuenta.vue"),
      },
    ],
    // beforeEnter: (to, from, next) => {
    //     if (localStorage.getItem('token'))
    //         next();
    //     else
    //         next({ name: 'Login' });
    // }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
