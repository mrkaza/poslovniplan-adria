<template>
    <div class="slider">
        <v-carousel height="600"  :show-arrows="false"  hide-delimiter-background delimiter-icon="mdi-square-medium"
        >
            <v-carousel-item  class="izrada-plana slide">
                <div>
                    <router-link to="/poslovni-plan">IZRADA POSLOVNOG PLANA</router-link>
                </div>
            </v-carousel-item>
            <v-carousel-item class="provjera-plana slide">
                <div>
                    <router-link to="/provjera-projekta">PROVJERA PROJEKTA</router-link>
                </div>
            </v-carousel-item>
            <v-carousel-item  class="kontakt slide">
                <div>
                    <router-link to=/kontakt>KONTAKTIRAJTE NAS</router-link>
                </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>


export default {
   
}
</script>

<style scoped>

    .slide {
        background-size: cover;
        background-position:top;
        background-attachment: fixed;
        background-repeat: no-repeat;

    }
    .izrada-plana {
        background-image: url('../assets/izrada-plana.webp');
    }
    .provjera-plana {
         background-image: url('../assets/provjera-projekta.webp');
    }
    .kontakt {
         background-image: url('../assets/adria-kontakt.webp');
    }
    .slide div {
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .slide a {
        text-decoration: none;
        color:white;
        font-weight: bold;
        font-size:35px;
        padding:15px 20px;
        border:4px solid white;
        background: rgba(255,255,255,0.2);
        transition:0.7s
    }
    .slide a:hover {
        background:white;
        color:black
    }

    @media only screen and (max-width: 600px) {
        .slide a {
            font-size:20px;
            padding:10px 15px;
        }
    }


</style>