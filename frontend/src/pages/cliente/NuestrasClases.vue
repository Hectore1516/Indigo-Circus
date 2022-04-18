<template>
<q-page padding>
    <!-- <div class="fit column text-center content-center">
        <q-icon name="grass" label="Pedido" size="3.5rem" color="primary" />
        <span class="text-primary text-bold">
            Pedido
        </span>
    </div> -->
    <!-- <h2 class="fit row justify-center q-pb-md text-primary">Realiza tu pedido personalizado</h2> -->

    <div class="tools q-pb-xl">
        <div class="titulo">Contacto</div>
    </div>

    <h4 class="fit row justify-center q-pb-md text-primary">¿Quieres una meceta personalizada según tus necesidades? Completa el formulario para hacer tu pedido.</h4>

    <form class="container" @submit.prevent="enviarCorreo" >
        <div class="box">

            <q-input filled type="text" v-model="state.nombre" label="Nombre" hint="Ej. Juan" maxlength="50" lazy-rules :rules="[
               (val) =>
                  (val && val.length > 0) || 'Este campo no puede estar vacío',
               (val) =>
                  (val && val.length < 50) ||
                  'El nombre debe tener menos de 50 caracteres',
            ]" />

            <q-input filled type="text" v-model="state.apellidos" label="Apellidos" hint="Ej. Pérez González" maxlength="50" lazy-rules :rules="[
               (val) =>
                  (val && val.length > 0) || 'Este campo no puede estar vacío',
               (val) =>
                  (val && val.length < 50) ||
                  'Los apellidos deben tener menos de 50 caracteres',
            ]" />

        </div>
        <div class="box">

            <q-input filled type="email" v-model="state.correo" label="Correo" hint="Ej. juan.perez@gmail.com" maxlength="50" lazy-rules :rules="[
               (val) =>
                  (val && val.length > 0) || 'Este campo no puede estar vacío',
               (val) =>
                  val.includes('@') || 'Por favor, escriba un correo válido',
               (val) =>
                  (val && val.length < 50) ||
                  'El correo debe tener menos de 50 caracteres',
            ]" />

            <q-input filled type="tel" mask="phone" v-model="state.telefonoMail" label="Teléfono" hint="Ej. (818) 323 - 8328" lazy-rules :rules="[
               (val) =>
                  (val && val.length > 0) || 'Este campo no puede estar vacío',
                  (val) =>
                    (val && val.length == 16) || 'El número de teléfono debe tener 10 dígitos',
            ]" />

        </div>
        <div class="box-descripcion">
            <q-input filled type="textarea" v-model="state.descripcionMail" maxlength="501" autogrow label="Descripción" lazy-rules :rules="[
               (val) =>
                  (val && val.length > 0) || 'Este campo no puede estar vacío',
               (val) =>
                  (val && val.length < 500) ||
                  'El correo debe tener menos de 500 caracteres',
            ]" />
        </div>

        <div class="fit row justify-center q-pb-md">
            <q-btn type="submit" color="primary" padding="1rem 4rem" label="Enviar correo" />
        </div>
    </form>

    <h4 class="fit row justify-center q-pb-md text-primary">O también puedes mandar un mensaje de WhatsApp</h4>

    <form class="container" @submit.prevent="enviarWA">

        <div class="fit row justify-center q-pt-md">

            <div class="box-descripcion">
                <q-input filled type="textarea" v-model="state.descripcionWA" maxlength="501" autogrow label="Descripción" lazy-rules :rules="[
               (val) =>
                  (val && val.length > 0) || 'Este campo no puede estar vacío',
               (val) =>
                  (val && val.length < 500) ||
                  'El correo debe tener menos de 500 caracteres',
            ]" />
            </div>

        </div>

        <div class="fit row justify-center q-pb-md">
            <q-btn type="submit" color="primary" padding="1rem 4rem" label="Enviar mensaje" />
        </div>

    </form>

</q-page>
</template>
