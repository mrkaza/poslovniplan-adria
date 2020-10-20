<template>
    <div class="hamag-bicro">
    <v-container>
        <h1>HAMAG BICRO – ESIF ZAJMOVI</h1>
        <div class="line"><div></div></div>
        <p>Hrvatska agencija za malo gospodarstvo, inovacije i investicije  i Ministarstvo regionalnoga razvoja i fondova Europske unije, potpisali su 30. lipnja 2016. godine Sporazum o financiranju za provedbu financijskih instrumenata u okviru Operativnog programa „Konkurentnost i kohezija“ 2014. – 2020.</p>
        <p>Temeljem navedenog, HAMAG-BICRO raspisao je Programe ESIF Mikro i Malih zajmova.</p>
        <p>Program ESIF Mikro zajmovi dijele se na programe mikro investicijskih zajmova i mikro zajmova za obrtna sredstva i program je namijenjen mikro i malim poduzetnicima.</p>
        <p>Program ESIF Malih zajmova namijenjen je mikro, malim i srednjim poduzetnicima.</p>

        <v-row>
            <v-col cols="12" sm="3">
                <h3>COVID-19 ZAJAM ZA OBRTNA SREDSTVA</h3>
            </v-col>
            <v-col cols="12" sm="3">
                <h3>MIKRO ZAJMOVI ZA OBRTNA SREDSTVA</h3>
            </v-col>
            <v-col cols="12" sm="3">
                <h3>MALI ZAJMOVI</h3>
            </v-col>
            <v-col cols="12" sm="3">
                <h3>MIKRO INVESTICIJSKI ZAJMOVI</h3>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        font-weight: 400;
        padding:0 20px;
        margin-bottom:20px;
        letter-spacing:2px;
    }
    h3 {
        text-align: center;
    }
    p {
        font-size:15px;
        letter-spacing: 0.7px;
    }
    .hamag-bicro {
        padding: 50px 0;
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
    .row {
        margin-top:60px;
    }

    .col-12 {
        border-bottom: 1px solid #CFD8DC;
        border-right: 1px solid #CFD8DC;
        padding:30px;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size:20px;
            font-weight: bold;
        }
        p {
            font-size:14px;
            text-align: center;
        }
    }
</style>