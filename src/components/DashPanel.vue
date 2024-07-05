<template>
  <v-app>
    <v-navigation-drawer theme="dark" permanent rail>
      <v-list-item style="height:80px" prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
        nav></v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-account" value="dashboard"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer permanent theme="dark" width="180">
      <v-list style="color:aqua">
        <v-list-item title="Inicio" value="home"></v-list-item>
        <v-list-item title="Colmenas" value="contacts"></v-list-item>
        <v-list-item value="settings" style="display: flex; align-items: center;" @click="cerrarSesion()">
          <span style="margin-right: 8px;">Cerrar Sesión</span>
          <v-icon style="color: teal; font-size: 50px; font-weight:500" icon="mdi-bee" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="fondos">
      <h2>Panel Administrador-Apicultor</h2>
      <div class="ml-4">
        <p style="color:white;">En este panel usted puede observar, editar y eliminar las nuevas
          <strong>colmenas</strong>
          <v-icon class="shake" style="font-size:60px; color: black;" icon="mdi-bee" />
          que se agregaron vía conexión Wi-Fi, para el monitoreo y supervisión.
        </p>
      </div>


      <div>
        <v-container class="ml-0">
          <v-row>
            <v-col v-for="(colmena, index) in colmenas" :key="index" cols="12">
              <v-row>
                <v-col cols="3">
                  <v-card class="mx-auto fixed-height-card" elevation="5">
                    <v-img class="align-end text-white" height="200"
                      src="https://allyouneedisbiology.wordpress.com/wp-content/uploads/2015/03/14416137894_7fa0269ddf_k.jpg?w=1038&h=576&crop=1"
                      cover>
                      <v-card-title>{{ colmena.title }}</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pt-4">{{ colmena.subtitle }}</v-card-subtitle>
                    <v-card-text>
                      <div>Nombre: Zanganos</div>
                      <div>Especie: Abejas</div>
                      <div>Familia: Melidae</div>

                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="orange" text @click="dialog = true">Editar</v-btn>
                      <v-btn color="orange" text>Eliminar</v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-dialog v-model="dialog" max-width="500">
                    <v-card>
                      <v-card-title class="headline">Editar</v-card-title>
                      <v-card-text>
                        <v-text-field></v-text-field>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Cancelar</v-btn>
                        <v-btn color="blue darken-1" text @click="saveEdit">Guardar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>

                <!-- RECORDATORIO -->
                <v-col cols="2">
                  <v-card class="pa-3 fixed-height-card" style="background-color: teal;" elevation="5">
                    <v-card-title style="color: white;">
                      Alerta
                      <v-icon class="shake" style="color: yellow;" icon="mdi-bell"></v-icon>
                    </v-card-title>

                    <v-row>
                      <v-col>
                        <v-card height="50" elevation="5">
                          <v-card-title style="color: teal;">Traslarve</v-card-title>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card elevation="5">
                          <v-card-title style="color:teal">
                            Días
                            <v-icon style="color:teal" icon="mdi-calendar" />
                          </v-card-title>
                          <v-card-text style="font-weight:600; color:red">
                            Quedan: 12 días
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card elevation="5">
                          <v-card-title style="color: teal;">Descripción</v-card-title>
                          <v-card-text style="color:black;">Se debe trasladar por que las reinas
                            ya nacieron
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>

                  </v-card>
                </v-col>

                <!-- UV -->
                <v-col cols="3">
                  <v-card class="uvcard pa-3 fixed-height-card" style="background-color:white;" elevation="5">
                    <v-card-title>
                      UV-Índice <v-icon class="rotate" style="color:darkmagenta;" icon="mdi-sun-thermometer"></v-icon>
                    </v-card-title>
                    <v-card-text style="color:teal;font-weight:bold;font-size: large;">El índice es:
                      {{ colmena.rayos_uv }}</v-card-text>
                    <!-- indices -->
                    <v-card class="mb-5" style="background-color: teal;" elevation="5">
                      <v-card-title style="color:white;font-weight:200;font-size: 10px;">Recomendaciones para la
                        colmena
                        <v-icon style="font-size:30px" icon="mdi-beehive-outline"></v-icon></v-card-title>

                    </v-card>
                    <!--bajo-->
                    <v-card style="background-color: white;" elevation="5">
                      <v-card-title style="color:teal;font-weight:500;font-size: 12px;">
                        <v-btn style="background-color:greenyellow;height:25px;width:25px" icon
                          @click="dialogbajo = true">
                          <v-icon style="color: white;">mdi-information-outline

                          </v-icon>
                        </v-btn>
                        0-2:Bajo: Fresco</v-card-title>
                    </v-card>
                    <v-dialog v-model="dialogbajo" max-width="290">
                      <v-card style="background-color: yellowgreen;">
                        <v-card-title class="headline">Recomendación
                          <v-icon icon="mdi-bee"></v-icon>
                        </v-card-title>
                        <v-card-text style="color:white;">
                          Aquí puedes dejar la colmena.<br><v-icon icon="mdi-beehive-outline"></v-icon> Pero recuerda
                          revisar también la temperatura.
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="white" text @click="dialogbajo = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-card style="background-color: white;" elevation="5">
                      <v-card-title style="color:teal;font-weight:500;font-size: 12px;">
                        <v-btn style="background-color:yellow;height:25px;width:25px" icon
                          @click="dialogmoderado = true">
                          <v-icon style="color: grey;">mdi-information-outline

                          </v-icon>
                        </v-btn>
                        3-5:Moderado: Adecuado</v-card-title>
                    </v-card>
                    <v-dialog v-model="dialogmoderado" max-width="290">
                      <v-card style="background-color: yellow;">
                        <v-card-title class="headline">Recomendación <v-icon icon="mdi-bee"></v-icon></v-card-title>
                        <v-card-text style="color: black;">
                          Es adecuado, pero recuerda que la colmena debe estar protegida contra la radiación
                          UV.<br><v-icon icon="mdi-beehive-outline"></v-icon>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="blue darken-1" text @click="dialogmoderado = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-card style="background-color: white;" elevation="5">
                      <v-card-title style="color:teal;font-weight:500;font-size: 12px;">
                        <v-btn style="background-color:orange;height:25px;width:25px" icon @click="dialogalto = true">
                          <v-icon style="color: white;">mdi-information-outline

                          </v-icon>
                        </v-btn>
                        6-7:Alto: Trasladar a la sombra</v-card-title>
                    </v-card>
                    <v-dialog v-model="dialogalto" max-width="290">
                      <v-card style="background-color: orange;">
                        <v-card-title class="headline">Recomendación <v-icon style="color: black;"
                            icon="mdi-bee"></v-icon></v-card-title>
                        <v-card-text style="color: black;">
                          Las abejas están realmente acaloradas.<br> <v-icon style="color:red"
                            icon="mdi-fire-alert"></v-icon> Te recomiendo que las traslades a un lugar con sombra.
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="blue darken-1" text @click="dialogalto = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-card style="background-color: white;" elevation="5">
                      <v-card-title style="color:teal;font-weight:500;font-size: 12px;">
                        <v-btn style="background-color:red;height:25px;width:25px" icon @click="dialogmuyalto = true">
                          <v-icon style="color: white;">mdi-information-outline

                          </v-icon>
                        </v-btn>
                        8-11:Muy Alto: Trasladar a la sombra</v-card-title>
                    </v-card>
                    <v-dialog v-model="dialogmuyalto" max-width="290">
                      <v-card style="background-color: red;">
                        <v-card-title style="color: white;" class="headline">Recomendación <v-icon
                            icon="mdi-bee"></v-icon></v-card-title>
                        <v-card-text style="color: white;">
                          Las abejas están realmente acaloradas.<br> <v-icon style="color:white"
                            icon="mdi-fire-alert"></v-icon> Te recomiendo que las traslades a un lugar con sombra.
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="blue darken-1" text @click="dialogmuyalto = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <v-card style="background-color: white;" elevation="5">
                      <v-card-title style="color:teal;font-weight:500;font-size: 12px;">
                        <v-btn style="background-color:purple;height:25px;width:25px" icon
                          @click="dialogextreme = true">
                          <v-icon style="color: white;">mdi-information-outline

                          </v-icon>
                        </v-btn>
                        +11:Extremo: Evitar la exposición</v-card-title>
                    </v-card>
                    <v-dialog v-model="dialogextreme" max-width="290">
                      <v-card style="background-color: plum;">
                        <v-card-title class="headline">Recomendación <v-icon icon="mdi-bee"></v-icon></v-card-title>
                        <v-card-text>
                          No debes exponer ninguna colmena. Mantenlas a salvo <br><v-icon
                            icon="mdi-beehive-outline"></v-icon>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="blue darken-1" text @click="dialogextreme = false">Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                  </v-card>

                </v-col>

                <v-col cols="4">
                  <!--TEMPERATURA / HUMEDAD-->
                  <v-card class="fixed-card-temp pa-2" style="background-color:grey;" elevation="5">
                    <v-card-title style="color: white;">
                      Temperatura/Humedad
                      <v-icon style="color: orange;" icon="mdi-home-thermometer-outline"></v-icon>
                      <v-icon style="color:cornflowerblue;" icon="mdi-water-percent"></v-icon>
                    </v-card-title>
                    <div>
                      <v-btn style="background-color:orange;height:25px;width:25px" icon @click="dialogtemp = true">
                        <v-icon style="color: white;">mdi-information-outline

                        </v-icon>
                      </v-btn>
                      <v-dialog v-model="dialogtemp" max-width="290">
                        <v-card style="background-color: grey;">
                          <v-card-title style="color: white;" class="headline">Recomendación <v-icon
                              icon="mdi-bee"></v-icon></v-card-title>
                          <v-card-text style="color: white;">
                            Siempre debes tener en cuenta la temperatura de la colmnena. Recuerda considerarlo.<br>
                          </v-card-text>
                          <v-card-actions>
                            <v-btn color="orange" text @click="dialogtemp = false">Cerrar</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <v-progress-linear color="deep-orange" height="30" model-value="100" striped><v-text
                          style="color: white;">{{
                            colmena.temperatura }} °C</v-text></v-progress-linear>
                      <br>
                      <v-btn style="background-color:dodgerblue;height:25px;width:25px" icon @click="dialoghume = true">
                        <v-icon style="color: white;">mdi-information-outline

                        </v-icon>
                      </v-btn>
                      <v-dialog v-model="dialoghume" max-width="290">
                        <v-card style="background-color: grey;">
                          <v-card-title style="color: white;" class="headline">Recomendación <v-icon
                              icon="mdi-bee"></v-icon></v-card-title>
                          <v-card-text style="color: white;">
                            Siempre debes tener en cuenta la humedad de la colmnena. Recuerda considerarlo.<br>
                          </v-card-text>
                          <v-card-actions>
                            <v-btn color="orange" text @click="dialoghume = false">Cerrar</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <v-progress-linear color="light-blue" height="30" model-value="94" striped><v-text
                          style="color: white;">{{
                            colmena.humedad }} %</v-text></v-progress-linear>

                    </div>

                  </v-card>

                  <!--DECIBELES-->
                  <v-card class="fixed-card-temp pa-2" style="background-color:antiquewhite" elevation="5">
                    <v-card-title>
                      Decibeles
                      <v-icon style="color: purple;" icon="mdi-music"></v-icon>
                    </v-card-title>
                    <v-row>
                      <v-col cols="2">

                        <v-btn style="background-color:purple;height:25px;width:25px" icon
                          @click="dialoghume = true">
                          <v-icon style="color: white;">mdi-information-outline

                          </v-icon>
                        </v-btn>
                        <v-dialog v-model="dialoghume" max-width="290">
                          <v-card style="background-color: grey;">
                            <v-card-title style="color: white;" class="headline">Recomendación <v-icon
                                icon="mdi-bee"></v-icon></v-card-title>
                            <v-card-text style="color: white;">
                              Siempre debes tener en cuenta la humedad de la colmnena. Recuerda considerarlo.<br>
                            </v-card-text>
                            <v-card-actions>
                              <v-btn color="orange" text @click="dialoghume = false">Cerrar</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>

                      </v-col>
                      <v-col cols="10">
                        <apexchart type="area" height="150" :options="chartOptions" :series="series"></apexchart>
                      </v-col>
                    </v-row>
                    <!--v-sparkline :auto-line-width="autoLineWidth" :fill="fill" :gradient="gradient"
                      :gradient-direction="gradientDirection" :line-width="width" :model-value="value" :padding="padding"
                      :smooth="radius || false" :stroke-linecap="lineCap" :type="type" auto-draw></v-sparkline-->

                  </v-card>

                </v-col>

              </v-row>

            </v-col>

          </v-row>
        </v-container>
      </div>
      <router-view></router-view>

    </v-main>
  </v-app>

</template>

<script>
import axios from 'axios';
import { io } from "socket.io-client";

import VueApexCharts from 'vue3-apexcharts';


export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      //
      series: [
        {
          name: 'Decibeles',
          data: [65, 72, 70, 68, 75, 80] // Ejemplo de datos de decibeles
        }

      ],
      chartOptions: {
        chart: {
          height: 500,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Hora 1', 'Hora 2', 'Hora 3', 'Hora 4', 'Hora 5', 'Hora 6'], // Ejemplo de categorías para el eje X
        },

        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      //
      dialog: false,
      colmenas: [], // ARRAY PARA TARJETAS
      token: localStorage.getItem('token'),
      config_request: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      state: {
        connected: false,
        colmenaEvents: [],
      },
      socket: null,
      dialogbajo: false,
      dialogmoderado: false,
      dialogalto: false,
      dialogmuyalto: false,
      dialogextreme: false,
      dialogtemp: false,
      dialoghume: false
    };
  },
  created() {
    this.iniciar();
  },

  mounted() {
    this.setupSocket();
    // Crear el gráfico aquí


  },
  methods: {
    async iniciar() {
      try {
        const resGet = await axios.get(`http://127.0.0.1:3001/api/colmenas`, this.config_request);
        console.log("----res get----");
        console.log(resGet.data);

        this.colmenas = resGet.data.map((colmena, index) => ({
          id: colmena.id,
          title: `Colmena ${index + 1}`,
          subtitle: `Número ${index + 1}`,
          rayos_uv: colmena.rayos_uv,
          humedad: colmena.humedad,
          temperatura: colmena.temperatura,
          frecuencia_sonido: colmena.frecuencia_sonido,
        }));
        this.state.colmenaEvents = [...this.colmenas];
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
    setupSocket() {
      const URL = "http://localhost:3001";
      this.socket = io(URL);

      this.socket.on("connect", () => {
        this.state.connected = true;
      });

      this.socket.on("disconnect", () => {
        this.state.connected = false;
      });

      this.socket.on("actualDataSensor", (data) => {
        const existingColmena = this.state.colmenaEvents.find(colmena => colmena.id === data.id);
        if (existingColmena) {
          Object.assign(existingColmena, data);
        } else {
          this.state.colmenaEvents.push(data);
        }
        this.updateColmenas();
      });
    },
    updateColmenas() {
      this.colmenas = [...this.state.colmenaEvents];
    },
    cerrarSesion() {
      console.log("hollll...adios")
      this.$router.push('/')
    },
  }
};
</script>

<style scoped>
@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.shake {
  animation: shake 2s infinite;
}

.fixed-card-temp {
  height: 200px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 2s linear infinite;
}


.btn-añadir {
  margin-left: 20px;
  width: 300px;
  color: white;
  background-color: teal;
}

.añadir {}

h2 {
  color: white;
  margin: 15px;
  font-weight: 300;
}

.fondo {
  width: 100%;
  height: 100vh;
  /* Asegura que el div ocupe toda la altura de la ventana */
  background: url('https://cdn.wallpapersafari.com/31/99/qjPlFi.jpg') no-repeat center center;
  background-size: cover;
}

.custom-card {
  margin-top: 100px;
  margin-left: 100px;
  background-color: teal;
}

.fixed-height-card {
  height: 400px;
  /* Ajusta este valor según tus necesidades */
}

.fondos {
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
}
</style>