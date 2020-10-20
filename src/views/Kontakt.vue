<template>
    <div class="kontakt">
        <v-container>
            <h1>KONTAKT</h1>
            <div class="line"><div></div></div>
            <p class="email"><v-icon>mdi-email</v-icon>poslovniplan.adria@gmail.com</p>
            <v-form>
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
                    label="Email *"
                    required
                    v-model="email"
                ></v-text-field>

                <v-textarea
                    filled
                    outlined
                    dense
                    color="light-blue darken-4"
                    label="Opis *"
                    v-model="poruka"
                ></v-textarea>
                <p class="error-p">{{errorMessage}}</p>
                
            </v-form>
            <div class="text-center">
                <v-btn dark large depressed color="light-blue darken-4" @click="posaljiEmail" >Pošalji upit</v-btn>
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
            email: '',
            poruka: '',
            dialog: false,
            message: '',
            errorMessage: ''
        }
    },
    methods: {
        posaljiEmail() {
            if(this.ime && this.email && this.poruka) {
                this.errorMessage = ''
                emailjs.send('contact_service', 'template_os8zaak', {
                from_name: this.ime,
                from_email: this.email,
                message: this.poruka
            },'user_n2SL5S59QUgIoTXq3j0Ir').then(response => {
                this.dialog= true,
                this.message = 'Upit uspješno poslan!'
                this.ime= ''
                this.email = ''
                this.poruka = ''
                console.log(response)
            }).catch(error => {
                this.message = 'Došlo je do pogreške.'
            })
        } else {
            this.errorMessage = 'Potrebno je ispuniti sva polja!'
        }

        }
    }
}
</script>

<style scoped>
    .kontakt {
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
    .email {
        font-weight: 600;
        text-align: center;
        margin:20px 0 50px;
    }
    .error-p{
        margin:0;
        text-align: center;
        font-size:14px;
        color:#E53935;
        padding-bottom:15px;
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

    }
</style>