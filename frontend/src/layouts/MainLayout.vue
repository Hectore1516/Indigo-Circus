<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar class="header">
            <div id="logo" @click="this.$router.push('/')">INDIGO Circus Academy</div>

            <div id="menu">
                <q-btn flat color="primary" text-color="white" label="Nuestras Clases" @click="$router.push('/nuestras_clases')"></q-btn>
                <q-btn flat color="primary" text-color="white" label="Maestros" @click="$router.push('/maestros')"></q-btn>
                <q-btn flat color="primary" text-color="white" label="Reserva tu clase" @click="$router.push('/reserva_tu_clase')"></q-btn>
                <q-btn flat color="primary" text-color="white" label="Perfil" @click="$router.push('/perfil')"></q-btn>
            </div>

            <div id="acciones">
                <!-- <q-btn flat color="primary" text-color="white" icon="logout" @click="$router.push('/')"></q-btn> -->

                <q-btn flat color="primary" text-color="white" icon="person">
                    <q-menu v-if="!state.sesionActiva">
                        <div class="row no-wrap q-pa-sm">

                            <div class="column items-center" style="width: 150px">

                                <div class="text-subtitle1 q-mt-xs q-mb-xs">
                                    Bienvenido
                                </div>

                                <div class="q-pt-sm">
                                    <q-btn color="primary" label="Iniciar sesión" @click="iniciarSesion" push size="md" v-close-popup />
                                </div>

                                <div class="q-pt-sm">
                                    <q-btn color="primary" label="Crear cuenta" @click="crearCuenta" push size="md" v-close-popup />
                                </div>

                            </div>

                        </div>
                    </q-menu>

                    <q-menu v-if="state.sesionActiva">
                        <div class="row no-wrap q-pa-sm">

                            <div class="column items-center" style="width: 150px">

                                <div class="text-subtitle1 q-mt-md q-mb-xs">
                                    Bienvenido, {{state.nombreCliente}}
                                </div>

                                <q-btn color="primary" label="Cerrar sesión" @click="cerrarSesion" push size="md" v-close-popup />

                            </div>

                            <q-separator vertical inset class="q-mx-lg" />

                            <div class="column items-center">
                                <q-list style="min-width: 150">
                                    <q-item clickable v-close-popup>
                                        <q-item-section>Mi cuenta</q-item-section>
                                    </q-item>
                                    <q-separator />
                                    <q-item clickable v-close-popup>
                                        <q-item-section>Mis pedidos</q-item-section>
                                    </q-item>
                                </q-list>
                            </div>

                        </div>
                    </q-menu>
                </q-btn>
            </div>
        </q-toolbar>
    </q-header>

    <q-page-container>
        <router-view />
    </q-page-container>

    <!-- <q-footer elevated reveal>
         <div
            class="row text-white text-center items-start"
         >
            <div class="col-4">
               <h6>Maco Design</h6>
            </div>
            <div class="col-4">
               <h6>Menú</h6>
            </div>
            <div class="col-4">
               <h6>Redes sociales</h6>
            </div>
         </div>
      </q-footer> -->

</q-layout>
</template>

<script>
import {
    defineComponent,
    onMounted,
    reactive,
    watch,
    watchEffect
} from "vue";
import {
    useRouter
} from "vue-router";

export default defineComponent({
    name: "MainLayout",

    components: {},

    setup() {

        const router = useRouter();

        const state = reactive({
            sesionActiva: false,
            nombreCliente: ""
        });

        onMounted(async () => {
            window.addEventListener('token-localstorage-changed', (event) => {
                state.sesionActiva = event.detail.storage != "" ? true : false
            });
            window.addEventListener('nombre-localstorage-changed', (event) => {
                state.nombreCliente = event.detail.storage;
            });
        });

        function iniciarSesion() {
            router.push("/login");
        }

        function crearCuenta() {
            router.push("/crear_cuenta");
        }

        function cerrarSesion() {
            localStorage.clear();
            location.reload();
        }
        return {
            state,
            iniciarSesion,
            cerrarSesion,
            crearCuenta
        };
    },
});
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
        font-size: 1.5em;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.5s ease-in-out;

        &:hover {
            transform: scale(1.05, 1.05);
            cursor: pointer;
        }
    }
}

h6 {
    font-size: 14px;
}
</style>
