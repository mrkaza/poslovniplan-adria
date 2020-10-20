<template>
    <div>
        <v-container>
            <h1>IZRADA KOMPLETNE DOKUMENTACIJE, PRIPREMA I PROVEDBA PROJEKTA</h1>
            <h3>HORIZON 2020</h3>
            <div class="line">
                <div></div>
            </div>
            <p>U posljednje tri godine, Program Obzor 2020 usmjeren je na uže teme s većim proračunom, čime se izravno podržava politika Europske komisije. Ova četiri područja u razdoblju od 2018-2020 predstavljaju kombinirani proračun u iznosu od 7 milijardi eura:</p>
            <p><v-icon>mdi-menu-right</v-icon> niskougljična, klimatski zdravija budućnost,</p>
            <p><v-icon>mdi-menu-right</v-icon>povezivanje gospodarskih i ekoloških rezultata – kružno gospodarstvo,</p>
            <p><v-icon>mdi-menu-right</v-icon>digitalizacija i transformacija europske industrije i usluga,</p>
            <p><v-icon>mdi-menu-right</v-icon>povećanje učinkovitosti Sigurnosne unije</p>

            
        </v-container>
        <div class="hrvatska-banka">
        <v-container>
            <h1>HRVATSKA BANKA ZA OBNOVU I RAZVITAK</h1>
            <h3>OSNOVNI MODELI KREDITIRANJA</h3>
            <div class="line">
                <div></div>
            </div>
            <v-row class="modeli">
                <v-col cols="12" sm="6">
                    <h3>START-UP</h3>
                    <div class="line"><div></div></div>
                    <p><strong>Iznos kredita:</strong> do 700 tisuća kuna (kreditiranje 100% vrijednosti investicije);
                    <br> 700 tisuća do 1,8 milijuna kuna (kreditiranje do 85% vrijednosti investicije)</p>
                    <p><strong>Rok oplate:</strong> do 14 godina</p>
                    <p><strong>Kamatna stopa:</strong> do 2%</p>
                </v-col>
                <v-col cols="12" sm="6">
                    <h3>PODUZETNIŠTVO ŽENA</h3>
                    <div class="line"><div></div></div>
                    <p><strong>Iznos kredita:</strong> do 700 tisuća kuna (kreditiranje 100% vrijednosti investicije)</p>
                    <p><strong>Rok oplate:</strong> do 12 godina</p>
                    <p><strong>Kamatna stopa:</strong> do 2%</p>
                </v-col>
                <v-col cols="12" sm="6">
                    <h3>MLADI PODUZETNICI</h3>
                    <div class="line"><div></div></div>
                    <p><strong>Iznos kredita:</strong>  do 700 tisuća kuna (kreditiranje 100% vrijednosti investicije)</p>
                    <p><strong>Rok oplate:</strong> do 12 godina</p>
                    <p><strong>Kamatna stopa:</strong> do 2%</p>
                </v-col>
                <v-col cols="12" sm="6">
                    <h3>PRONALASCI</h3>
                    <div class="line"><div></div></div>
                    <p><strong>Iznos kredita:</strong>  nije ograničen</p>
                    <p><strong>Rok oplate:</strong> do 14 godina</p>
                    <p><strong>Kamatna stopa:</strong> 2% do 4%</p>
                </v-col>
            </v-row>
        </v-container>
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin-top:50px;
        margin-bottom:50px;
    }
    h1 {
        text-align: center;
        font-weight: 400;
        padding:0 20px;
        margin-bottom:20px;
        letter-spacing:2px;
    }
    h3 {
        margin:10px 0 20px 0;
        text-align: center;
        font-size:23px;
        letter-spacing: 1.5px;
    }

    p {
        font-size:15px;
        letter-spacing: 0.7px;
    }

    .line {
        display:flex;
        justify-content: center;
        margin-bottom:50px;
    }
    .line div {
        width:200px;
        border:2px solid #FFEA00
    }

    .hrvatska-banka {
        background-color: #ECEFF1;
        padding:30px 0;
    }
    .hrvatska-banka .container {
        margin-top:0;
    }

    .modeli .line div {
        width:75px;
        border:1px solid #FFEA00;
        
    }
    .modeli .line {
        margin-bottom:30px;
    }
    .modeli h3 {
        font-size:19px;
        margin-bottom:5px;
    }
    .modeli p {
        margin-bottom:3px;
        font-size:15px;
        opacity:0.8
    }
     .col-12 {
         border-bottom: 1px solid #CFD8DC;
        border-right: 1px solid #CFD8DC;
        padding:30px;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size:20px;
        }
        p {
            font-size:14px;
        }
    }
</style>