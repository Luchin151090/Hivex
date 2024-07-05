<template>
  <div>
    <div id="login-app">
      <router-view></router-view>
    </div>

  </div>
 
</template>

<script>
import Login from './components/Login.vue';
import DashPanel from './components/DashPanel.vue';

export default {
  name: 'App',
  components: {
    Login,
    DashPanel
  },
  data() {
    return {
      isLoginPage: true // Puedes cambiar esto según el contexto
    }
  }
}
</script>

<style>
#login-app {
  /*background-image: url('https://s0.smartresize.com/wallpaper/72/151/HD-wallpaper-artwork-green-pattern-beehive-patterns-hexagon.jpg')!important;

  background-size: cover;
  height: 100vh; /* Ajusta la altura si es necesario */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilo adicional solo para el componente Login si es necesario */
#login-app .additional-styling {
  /* Agrega estilos adicionales según sea necesario */
  background-image: url('https://s0.smartresize.com/wallpaper/72/151/HD-wallpaper-artwork-green-pattern-beehive-patterns-hexagon.jpg')!important;
}
</style>
