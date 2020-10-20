<template>
    <div class="footer">
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <h3>Poslovni plan - Adria</h3>  
                <p>Osnovna djelatnost je izrada poslovnih planova.</p>
            </v-col>
            <v-col cols="12" sm="4">
                <h3>USLUGE </h3>
                <div class="usluge">
                    <router-link to="/poslovni-plan"><p>Izrada poslovnih planova</p></router-link>
                    <router-link to="/provjera-projekta"><p>Provjera projekta</p></router-link>
                </div>   
            </v-col>
            <v-col cols="12" sm="4">
                <h3>KONTAKT </h3>
                <p><v-icon small color="white">mdi-email</v-icon>   poslovniplan.adria@gmail.com</p>
                <p><v-icon small color="white">mdi-web</v-icon> www.poslovniplan-adria.hr</p>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<style scoped>
    .footer {  
        background-color:#212331;
        font-family: 'Montserrat', sans-serif;
        color:#ECEFF1;
        padding:20px 0 50px 0;
    }
    h3 {
        text-align: center;
        color:#ECEFF1;
        font-weight: 600;
        letter-spacing: 1px;
        padding:30px 0;
    }
    p {
        font-size:14px;
        letter-spacing: 0.5px;
        opacity:0.7
    }

    .usluge a {
        text-decoration: none;
        color:#ECEFF1;
        text-transform: uppercase;
        width:100%;
    }
    .usluge p {
        border: 1px solid #ECEFF1;
        margin:0;
        padding:10px 0;
        text-align: center;

    }
    .usluge a:hover {
        color:#FFEA00
    }

    .router-link-exact-active p{
        color:#ffea00
    }
    .col-12 {
        border-bottom: 1px solid rgba(255, 234, 0, 0.2);
        border-right: 1px solid rgba(255, 234, 0, 0.2)
    }

     @media only screen and (max-width: 600px) {
         h3 {
             padding:15px 0;
         }
         p {
             text-align: center;
         }
         .col-12 {
             padding-top:20px;
             padding-bottom:20px
         }
    }
</style>