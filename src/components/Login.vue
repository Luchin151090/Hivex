<template>

  <v-container class="fondito d-flex justify-center align-center" fluid style="height: 100vh;">

    <v-card class="custom1-card"
      style="background-image: url('https://s0.smartresize.com/wallpaper/72/151/HD-wallpaper-artwork-green-pattern-beehive-patterns-hexagon.jpg'); background-position: left;"
      elevation="5">
      <div class="d-flex flex-column">
        <div class="card-dialog">
          <h1 class="text-sm-center mb-10" style="color: blanchedalmond;">Hivex</h1>
        </div>
        <div>
          <p class="presentacion font-weight-light text-sm-left ma-10" style="color: white;"> Es una plataforma virtual que complementa las labores de apicultura, haciendo que sea más fácil tomar decisiones a la hora de trabajar con colmenas.
          </p>
        </div>

      </div>
    </v-card>

    <v-card class="custom-card" elevation="4">
      <v-card-subtitle>
      </v-card-subtitle>
      <v-img class="align-end text-white" height="200"
        src="https://vidauniversitaria.uanl.mx/wp-content/uploads/2020/06/abeja-nativa.jpg" cover>

      </v-img>


      <!-- Contenido de la tarjeta -->
      <div class="d-flex flex-column justify-center align-center" style="height: 60%;">
        <p class="textob mb-5" style="font-size:15px; color: wheat;">
          Bienvenido a Hivex
        </p>
        <div class="campos">
          <v-text-field label="Usuario" v-model="user" style="color: white; width: 300px;"
            variant="underlined"></v-text-field>
        </div>
        <div class="campos">
          <v-text-field label="Contraseña" v-model="contrasena" style="color:white; width: 300px;"
            variant="underlined"></v-text-field>
        </div>
        <div class="forgoto">
          <v-btn class="forgot" variant="text" style="width: 180px; color: wheat">¿Olvidaste tu contraseña?</v-btn>
        </div>
        <div class="mt-5 mb-4">
          <v-btn rounded="pill" variant="flat" style="width: 180px; font-size: 10px;" @click="iniciarSesion">Iniciar
            Sesión</v-btn>
        </div>
        <div class="mt-0 mb-4">
          <v-btn rounded="pill" variant="flat" style="width: 180px; font-size: 10px;"
            @click="registrarse">Registrarse</v-btn>
        </div>


      </div>
    </v-card>

  </v-container>

</template>
<script>
import axios from 'axios';


export default {
  // Lógica del componente
  data() {
    return {
      user: '',
      contrasena: ''
    }
  },
  methods: {
    async registrarse() {

    },
    async iniciarSesion() {
      try {


        this.$router.push('/panel')


      } catch (error) {
        console.log(`Error inicio de sesión: ${error}`);
      }
    }
  }
};
</script>


<style scoped>
.fondito{
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
}
.campos {
  font-size: 15px;
  /*color: red;*/
  width: 300px;
  /*background-color: red;*/
}

.forgoto {
  width: 200px;
  margin-left: 150px;

}

.forgot {
  font-size: 9.5px;
}

.custom-card {
  width: 400px;
  /* Anchura fija */
  height: 600px;
  /* Altura fija */
  background-color: rgb(18, 80, 80);
}

.textob {
  font-size: 20px;
  font-style: unset;
}

.card-dialog {
  margin-top: 160px;
}

.custom1-card {
  background-size: 700px;
  width: 400px;
  height: 600px;
}

.box {
  width: 50px;
  height: 50px;
  background-color: lightblue;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>