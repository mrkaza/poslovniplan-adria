<template>
<div class="pocetna">
    <HomeSlider></HomeSlider>
    <Onama></Onama>
    <Poduzeca></Poduzeca>
    <div class="kontakt d-flex align-center">
    <v-container>
        <h3>
        VAŠ POSAO JE DA NAS KONTAKTIRATE I PREPUSTITE SE TIMU VRHUNSKIH STRUČNJAKA KAKO BI VAŠU IDEJU PROVELI U DJELO NA OBOSTRANO ZADOVOLJSTVO. SVOJ POSAO ODRAĐUJEMO SAVJESNO I PROFESIONALNO.
        </h3>
        <router-link to="/kontakt" class="kontaktirajte-nas">KONTAKTIRAJTE NAS</router-link>
    </v-container>
    </div>
    <Dokumentacija></Dokumentacija>
    <Hamag></Hamag>
    <div class="kontakt d-flex align-center">
        <v-container>
        <h3>ORJENTIRANI SMO NA REALIZACIJU VAŠE PODUZETNIČKE IDEJE I OSTVARENJU VAŠIH CILJEVA . TO POSTIŽEMO MARLJIVIM RADOM, INDIVIDUALNIM PRISTUPOM I POTPUNOM PREDANOŠĆU SVOM POSLU.</h3>
        <router-link to="/kontakt" class="kontaktirajte-nas">KONTAKTIRAJTE NAS</router-link>
        </v-container>
    </div>
</div>
    
</template>

<script>
import HomeSlider from '../components/HomeSlider'
import Onama from '../components/Onama'
import Poduzeca from '../components/Poduzeca'
import Dokumentacija from '../components/Dokumentacija'
import Hamag from '../components/Hamag'

export default {
    components: {
        HomeSlider,
        Onama,
        Poduzeca,
        Dokumentacija,
        Hamag
    }
}
</script>

<style scoped>
    .kontakt {
        height: 500px;
        background-image: url('../assets/bcg.webp');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
    }
    .kontakt h3 {
        letter-spacing: 2px;
        font-weight: 600;
        text-shadow: 2px 2px 4px black,
                    -2px -2px 4px black;
        padding:70px 20%;
        color:white;
    }

    .kontaktirajte-nas {
        color:white;
        text-decoration: none;
        border:2px solid #FFEA00;
        font-weight: bold;
        padding:30px;
        transition:0.5s;
        margin-bottom:30px;
        background:rgba(255, 234, 0, 0.1);
        text-shadow: 2px 2px 4px black;
    }
    .kontaktirajte-nas:hover {
        background:#ffea00;
        color:black;
        text-shadow:none;
    }
    .container {
        padding-bottom:30px;
    }

    @media only screen and (max-width: 600px) {
       .kontakt h3 {
            padding:50px 0;
        }
    }
</style>