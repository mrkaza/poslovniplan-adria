<template>
    <div class="provjera-projekta">
        <v-container>
            <h1>PROVJERA PROJEKTA</h1>
            <div class="line"><div></div></div>

             <h3>PROVJERITE MOŽE LI SE VAŠ PROJEKT FINANCIRATI !</h3>

             <v-form class="provjera">
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    label="Ime i prezime *"
                    required
                    v-model="ime"
                ></v-text-field>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    label="Naziv organizacije *"
                    required
                    v-model="naziv"
                ></v-text-field>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    label="Sjedište organizacije *"
                    required
                    v-model="sjediste"
                ></v-text-field>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    label="OIB organizacije *"
                    required
                    v-model="oib"
                ></v-text-field>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    label="Kontakt *"
                    required
                    v-model="kontakt"
                ></v-text-field>
             </v-form>

             <h3>UPITIK : UPITNIK ZA PROVJERU PRIHVATLJIVOSTI</h3>

             <v-form class="provjera">
                 <p>1. Vrsta prijavitelja 
                    <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        color="light-blue darken-4"
                        small
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        mdi-information
                        </v-icon>
                    </template>
                    <span>Mikro, malo ili srednje poduzeće, veliko poduzeće, organizacija civilnog društva, jedinica lokalne i regionalne samouprave, znanstveno-istraživačka organizacija, ustanova, klaster i ostalo (navedite).</span>
                    </v-tooltip>
                 </p>
                 <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_1"
                 ></v-text-field>

                 <p>2. Djelatnost po NKD-u (samo glavne)</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_2"
                 ></v-text-field>

                 <p>3. Imate li povezanih poduzeća?</p>
                 <v-radio-group dense v-model="pitanje_3">
                     <v-radio label="Da" value="Da"></v-radio>
                     <v-radio label="Ne" value="Ne"></v-radio>
                 </v-radio-group>

                 <p>4. Koliko imate zaposlenih?</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_4"
                 ></v-text-field>

                 <p>5. Jeste li ikada bili u blokadi?</p>
                <v-radio-group dense v-model="pitanje_5">
                     <v-radio label="Da" value="Da"></v-radio>
                     <v-radio label="Ne" value="Ne"></v-radio>
                 </v-radio-group>

                 <p>6. Ako ste na prethodno pitanje odgovorili potvrdno, navedite kada i koliko ste dugo bili u blokadi.</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_6"
                 ></v-text-field>

                 <p>7. Imate li pozitivno poslovanje u prethodnoj kalendarskoj godini?</p>
                <v-radio-group dense v-model="pitanje_7">
                     <v-radio label="Da" value="Da"></v-radio>
                     <v-radio label="Ne" value="Ne"></v-radio>
                 </v-radio-group>

                 <p>8. Jeste li primili potpore po de minimis pravilima u protekle tri godine? 
                    <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        color="light-blue darken-4"
                        small
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        mdi-information
                        </v-icon>
                    </template>
                    <span>De minimis pravilo ili pravilo potpora manje vrijednosti utvrđuje između ostaloga da pravni subjekt ima pravo u 3 fiksalne godine dobiti ukupno maksimalno 200.000 eur iz sredstava javnih potpora; Poduzetniku u sektoru cestovnog prometa potpora ne smije premašivati 200.000 eur - u natječajima je jasno naznačeno je li riječ o de minimis potpori</span>
                    </v-tooltip>
                 </p>
                <v-radio-group dense v-model="pitanje_8">
                     <v-radio label="Da" value="Da"></v-radio>
                     <v-radio label="Ne" value="Ne"></v-radio>
                 </v-radio-group>

                 <p>9. Imate li nepodmirene obveze prem zaposlenicima ili državi?</p>
                <v-radio-group dense v-model="pitanje_9">
                     <v-radio label="Da" value="Da"></v-radio>
                     <v-radio label="Ne" value="Ne"></v-radio>
                 </v-radio-group>

                 <p>10. U što želite ulagati?</p>
                <v-radio-group dense v-model="pitanje_10">
                     <v-radio label="Oprema" value="Oprema"></v-radio>
                     <v-radio label="Izgradnja i rekonstrukcija" value="Izgradnja i rekonstrukcija"></v-radio>
                     <v-radio label="Ljudski resursi" value="Ljudski resursi"></v-radio>
                     <v-radio label="Promocija i resursi" value="Promocija i resurci"></v-radio>
                     <v-radio label="Edukacija" value="Edukacija"></v-radio>
                     <v-radio label="Ostalo (u nastavku navedite što)" value="Ostalo"></v-radio>
                 </v-radio-group>
                 <p>Ostalo</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="ostalo"
                 ></v-text-field>

                 <p>11. Ukratkno opišite vaš projekt</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_11"
                 ></v-text-field>

                 <p>12. Navedite pozitivne učinke ulaganja na Vaše poslovanje (smanjenje troškova, povećanje prihoda, novozapošljavanje itd.</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_12"
                 ></v-text-field>

                 <p>13. Jeste li započeli s provedbom projekta?</p>
                <v-radio-group dense v-model="pitanje_13">
                     <v-radio label="Da" value="Da"></v-radio>
                     <v-radio label="Ne" value="Ne"></v-radio>
                 </v-radio-group>

                 <p>14. Navedite ukupnu vrijednost projekta u kunama (bez PDV-a)</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_14"
                 ></v-text-field>

                 <p>15. Navedite iznos vlastitih sredstava i izvor ostalih sredstava (kredit od banke itd.)</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_15"
                 ></v-text-field>

                 <p>16. Hoće li Vaš projekt pozitivno utjecati na okoliš (smanjenje škarta, energetski efikasnija proizvodnja itd.)? Ukratko opišite!</p>
                <v-text-field
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    v-model="pitanje_16"
                 ></v-text-field>

                <p class="error-p">{{errorMessage}}</p>
             </v-form>
            <div class="posalji">
                <v-btn @click="posaljiProvjeru" large depressed color="light-blue darken-4">POŠALJI</v-btn>
            </div>

            <div class="text-center">
                <v-dialog v-model="dialog" width="300">
                   <v-card height="110">
                       <div class="uspjesno">
                           <p>{{message}}</p>
                           <router-link to="/">Početna</router-link>
                       </div> 
                   </v-card>
                </v-dialog>
            </div>

             
        </v-container>
    </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            ime: '',
            naziv: '',
            sjediste: '',
            oib: '',
            kontakt: '',
            errorMessage: '',
            pitanje_1: '',
            pitanje_2: '',
            pitanje_3: '',
            pitanje_4: '',
            pitanje_5: '',
            pitanje_6: '',
            pitanje_7: '',
            pitanje_8: '',
            pitanje_9: '',
            pitanje_10: '',
            pitanje_11: '',
            pitanje_12: '',
            pitanje_13: '',
            pitanje_14: '',
            pitanje_15: '',
            pitanje_16: '',
            ostalo: '',
            dialog: false,
            message: ''
        }
    },
    methods: {
        posaljiProvjeru() {

            if(this.ime && this.naziv && this.sjediste && this.oib && this.kontakt) {
                this.errorMessage = ''
                emailjs.send('contact_service', 'template_t7nja0n', {
                    ime: this.ime,
                    naziv: this.naziv,
                    kontakt: this.kontakt,
                    sjediste: this.sjediste,
                    oib: this.oib,
                    pitanje_1: this.pitanje_1,
                    pitanje_2: this.pitanje_2,
                    pitanje_3: this.pitanje_3,
                    pitanje_4: this.pitanje_4,
                    pitanje_5: this.pitanje_5,
                    pitanje_6: this.pitanje_6,
                    pitanje_7: this.pitanje_7,
                    pitanje_8: this.pitanje_8,
                    pitanje_9: this.pitanje_9,
                    pitanje_10: this.pitanje_10,
                    pitanje_11: this.pitanje_11,
                    pitanje_12: this.pitanje_12,
                    pitanje_13: this.pitanje_13,
                    pitanje_14: this.pitanje_14,
                    pitanje_15: this.pitanje_15,
                    pitanje_16: this.pitanje_16,
            },'user_n2SL5S59QUgIoTXq3j0Ir').then(response => {
                this.dialog = true
                this.message = 'Upit uspješno poslan!'

            }).catch(error => {
                this.message = 'Došlo je do pogreške.'
            })
                
            } else {
                this.errorMessage = 'Molimo vas ispunite obavezna polja.'
            }
           
        }
    }
}
</script>
<style scoped>
    .provjera-projekta {
        padding:50px 0;
    }
    h1 {
        text-align: center;
        font-size:45px;
        margin-bottom:20px;
        letter-spacing:2px
    }
    h3 {
        padding:25px 0;
        font-size:25px;
        border-top:1px solid #cfd8dc;
        border-bottom:1px solid #cfd8dc
    }
    p {
        margin:0;
        margin-top:5px;
        font-size:15px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }
    .error-p{
        margin:0;
        text-align: center;
        font-size:14px;
        color:#E53935;
        padding-bottom:15px;
    }
    .provjera {
        margin:30px 0;
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

    .v-label {
        font-size:14px;
    }

    .posalji {
        text-align: center;
        
    }
    .posalji button {
        color:white;
    }

    .uspjesno {
        text-align: center;
    }
    .uspjesno p{
        margin:0;
        padding:20px 0;
    }




    @media only screen and (max-width: 600px) {

        h1 {
            font-size:25px;
        }
        h3 {
            font-size:20px
        }
        p {
            font-size:13px;
            margin-bottom:5px;
        }

    }
</style>