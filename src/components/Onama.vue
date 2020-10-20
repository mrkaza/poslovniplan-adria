<template>
    <div class="o-nama">
    <v-container>


        <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
                <h1>o nama</h1>
                <p>Osnovna djelatnost je izrada poslovnih planova za potpore za samozapošljavanje i proširenje poslovanja, te za HAMAG BICRO kredite ( esif investicijski i esif krediti za ruralni razvoj).
                </p>
                <p>Ono obuhvaća pripremu natječajne dokumentacije, izradu poslovnog plana, te kontrolu i savjetovanje.</p>
                <p>Vas posao je da nas kontaktirate kako bi vašu ideju proveli u djelo na obostrano zadovoljstvo. 
                Cijena na upit</p>
            </v-col>
        </v-row>

        <div class="izrada-plana">
            <h3>IZRADA POSLOVNOG PLANA ZA SAMOZAPOŠLJAVANJE</h3>
            <p>Od 800 kn</p>
        </div>

        <v-row class="poslovni-planovi">
            <v-col cols="12" sm="6" md="3">
                <h3>POSLOVNI PLAN</h3>
                <p>Od 800 kn</p>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <h3>INVESTICIJSKE STUDIJE</h3>
                <p>Od 15.000 kn</p>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <h3>EU PROJEKTI</h3>
                <p>cijena na upit</p>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <h3>POSLOVNO SAVJETOVANJE</h3>
                <p>cijena na upit</p>
            </v-col>
        </v-row>

    </v-container>
    </div>
</template>

<style scoped>
    p {
        letter-spacing: 0.5px;
        text-align: center;
    }
    h3 {
        margin:0 0 15px 0;
        letter-spacing: 1px;
    }
    .o-nama {
        padding-top:60px;
    }
    
    .o-nama h1 {
        text-align: center;
        text-transform:uppercase;
        margin:30px 0;
        letter-spacing: 2px;
        font-weight: 400;
        font-size:45px
    }
    .izrada-plana {
        margin:50px 0;
        padding:40px 0;
        text-align: center;
        border-bottom: 2px solid #CFD8DC;
        border-right: 2px solid #CFD8DC;
    }
    .izrada-plana p {
        margin:0;
    }
    .poslovni-planovi {
        margin:50px 0;
    }
    .poslovni-planovi .col-sm-6 {
        padding:30px 0;
        text-align: center;
        border-bottom: 2px solid #CFD8DC;
        border-right: 2px solid #CFD8DC;
    }
    .poslovni-planovi .col-sm-6 p {
        margin:0;
    }

    @media only screen and (max-width: 600px) {
        .o-nama h1 {
            font-size:30px;
            font-weight: bold;
        }
        p {
            font-size:14px;
            text-align: center;
        }
        .slika {
            display:none;
        }
        .poslovni-planovi {
            margin-top:0;
        }
        .izrada-plana {
            margin:0;
        }
    }
</style>