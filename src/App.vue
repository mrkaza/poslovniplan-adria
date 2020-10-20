<template>
  <v-app>
    <!-- MENU ZA >960px -->
    <v-app-bar
    v-if="menuPc"
      app
      color="light-blue darken-4"
      dark
      flat
    >

    <v-container class="d-flex">
      
      <div class="d-flex align-center">
        <router-link class="icon" to="/">Poslovni Plan - Adria.hr</router-link>
      </div>

      <v-spacer ></v-spacer>

      <div class="d-flex align-center navbar-links">
        <router-link to="/"><v-btn tile text>početna</v-btn></router-link>

        <v-menu transition="slide-y-reverse-transition" open-on-hover bottom offset-y>
          <template v-slot:activator="{on,attrs}">
            <v-btn tile text v-bind="attrs" v-on="on" v-bind:class="{uslugeBorder : usluge}">
              USLUGE
            </v-btn>
          </template>
          <v-list color="light-blue darken-4" class="usluge">
            <v-list-item>
              <router-link class="usluge-link" to="/poslovni-plan">Izrada poslovnih planova za potpore za samozapošljavanje i prošitenje poslovanja</router-link>
            </v-list-item>
            <v-list-item>
              <router-link class="usluge-link" to="/poslovni-plan">Izrada poslovnih planova za Hamag bicro kredite</router-link>
            </v-list-item>
          </v-list>
        </v-menu>

        <router-link to="/provjera-projekta"><v-btn tile text>provjera projekta</v-btn></router-link>

        <router-link to="/kontakt"><v-btn tile text>kontakt</v-btn></router-link>
      </div>
    </v-container>

    </v-app-bar>


    <!-- MENU ZA >960px -->
    <v-app-bar v-if="menuMob"
      app
      color="light-blue darken-4"
      dark
      flat
    >

    <div class="d-flex mob-menu">
      <v-btn icon fab @click.stop="drawer=!drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <router-link class="icon" to="/">Poslovni Plan - Adria.hr</router-link>
      </div>

    </div>

    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      app

      temporary
      dark
      width="80%"
      class="light-blue darken-4"
    >
      <v-list>
        <v-list-item class="list">
          <router-link to="/"><v-btn tile text>početna</v-btn></router-link>
        </v-list-item>
        
        <v-list-item>
          <v-expansion-panels accordion flat >
            <v-expansion-panel class="light-blue darken-4" >
              <v-expansion-panel-header v-bind:class="{uslugeBorderMob : usluge}">USLUGE</v-expansion-panel-header>
              <v-expansion-panel-content>
                <router-link class="usluge-mob" to="/poslovni-plan">Izrada poslovnih planova za potpore za samozapošljavanje i prošitenje poslovanja</router-link>
                <br>
                <hr>
                <router-link class="usluge-mob" to="/poslovni-plan">Izrada poslovnih planova za Hamag bicro kredite</router-link>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>

        <v-list-item class="list">
          <router-link to="/provjera-projekta"><v-btn tile text>provjera projekta</v-btn></router-link>
        </v-list-item>

        <v-list-item class="list">
          <router-link to="/kontakt"><v-btn tile text>kontakt</v-btn></router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Footer
  },

  data: () => ({
    menuPc: true,
    menuMob: false,
    drawer: false,
    usluge: false
  }),
  created() {
    if(screen.width<960) {
      this.menuPc = false
      this.menuMob = true
    }
  },
  watch: {
    $route(to,from) {
      if(to.path == '/poslovni-plan') {
        this.usluge = true
      } else {
        this.usluge = false
      }
    }
  }
};
</script>

<style scoped>
  p {
    margin-bottom:0;
  }

  a {
    text-decoration:none;
    margin:0 5px
  }

  .v-application {
    font-family: 'Montserrat', sans-serif;
  }
  .v-main {
    color: #263238;
  }

  .v-menu__content {
    border-radius: 0px;
    max-width:400px
  }

  .usluge-link {
    margin:10px 5px;
    color:#ECEFF1;
    border-bottom:1px solid #FFEA00;
    width:100%;
  }
  .icon {
    color:white;
  }


  .navbar-links .router-link-exact-active .v-btn{
    border-bottom:2px solid #FFEA00;
  }
  .uslugeBorder {
    border-bottom:2px solid #FFEA00;
  }


  .uslugeBorderMob {
    border-bottom:1px solid #ffea00;
    color:#ffea00;
  }

  .list .v-btn {
    font-weight: bold;

  }
  .v-btn {
    letter-spacing:0.5px
  }

  .list .router-link-exact-active .v-btn{
    color:#FFEA00;
    border-bottom:1px solid #FFEA00
  }

  .v-expansion-panel-header {
    padding:0 24px;
    max-height: 36px;
    font-weight: bold;
  }
  .usluge-mob {
    color:#CFD8DC;
    font-size:14px;
    margin-top:10px;
    letter-spacing: 0.3px;
  }
  hr {
    margin:10px 0;
  }
  .mob-menu {
    width:100%;
  }
</style>
