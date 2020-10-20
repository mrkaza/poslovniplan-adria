<template>
    <div class="poduzeca">
    <v-container>
        <h1>ZA MIKRO, MALA I SREDNJA PODUZEĆA OTVORENA SU 4 JAVNA POZIVA MINISTARSTVA GOSPODARSTVA, PODUZETNIŠTVA I OBRTA:</h1>
        <div class="line">
            <div></div>
        </div>

        <v-row>
            <v-col cols="12" sm="6">
                <h3>1. KOMERCIJALIZACIJA INOVACIJA U PODUZETNIŠTVU:</h3>
                <p><strong>Prihvatljivi prijavitelji:</strong> mikro, ​mala i srednja poduzeća</p>
                <p><strong>​I​ntenzitet potpore:</strong> 50% prihvatljivih troškova</p>
                <p><strong>​Iznos potpore:</strong> 760.000 kuna – 7.600.000 kuna</p>
                <p><strong>​Prihvatljive aktivnosti:</strong> potpore za inovacije procesa i organizacije poslovanja, troškovi instrumenata i opreme, zgrada, zemljišta​</p>
            </v-col>
            <v-col cols="12" sm="6">
                <h3>2. INTERNACIONALIZACIJA POSLOVANJA MSP-OVA</h3>
                <p><strong>Prihvatljivi prijavitelji:</strong>  mikro, mala i srednja poduzeća ​</p>
                <p><strong>​I​ntenzitet potpore:</strong>  65% – ​85% prihvatljivih troškova</p>
                <p><strong>​Iznos potpore:</strong> ​100.000 kuna – 1.000.000 kuna</p>
                <p><strong>​Prihvatljive aktivnosti:</strong> nastupi na međunarodnim sajmovima, prezentacije MSP-a u okviru međunarodnog sajma, sudjelovanje na b2b poslovnim razgovorima i susretima,​ troškovi istraživanja inozemnog tržišta</p>
            </v-col>
            <v-col cols="12" sm="6">
                <h3>3. CERTIFIKACIJOM PROIZVODA DO TRŽIŠTA</h3>
                <p><strong>Prihvatljivi prijavitelji:</strong> mikro, mala i srednja poduzeća ​</p>
                <p><strong>​I​ntenzitet potpore:</strong> 65% – ​85% prihvatljivih troškova</p>
                <p><strong>​Iznos potpore:</strong>  ​20.000 kuna – 1.000.000 kuna</p>
                <p><strong>​Prihvatljive aktivnosti:</strong> certifikacija​ proizvoda, odnosno ocjenjivanje sukladnosti proizvoda s određenom normom ili specifikacijom</p>
            </v-col>
            <v-col cols="12" sm="6">
                <h3>4. POVEĆANJE RAZVOJA NOVIH USLUGA KOJI PROIZLAZE IZ AKTIVNOSTI ISTRAŽIVANJA I RAZVOJA</h3>
                <p><strong>Prihvatljivi prijavitelji:</strong>  mikro, mala i srednja poduzeća</p>
                <p><strong>​I​ntenzitet potpore:</strong> 45% – 100%​</p>
                <p><strong>​Iznos potpore:</strong> 190.000 – 56.000.000 kuna</p>
                <p><strong>​Prihvatljive aktivnosti:</strong> aktivnosti istraživanja i razvoja, aktivnosti početnih ulaganja u materijalnu i nematerijalnu imovinu u cilju jačanja kapaciteta za istraživanje i razvoj</p>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        padding:50px 20px 20px 20px;
        letter-spacing: 2px;
        font-weight: 400;
    }
    p {
        margin-bottom:3px;
        font-size:15px;
        opacity:0.8
    }
    h3 {
        margin-bottom:15px
    }
    .poduzeca {
        background-color: #ECEFF1;
        padding-bottom:50px;
    }
    .line {
        display:flex;
        justify-content: center;
    }
    .line div {
        width:200px;
        border:2px solid #FFEA00
    }
    .row {
        padding-top:50px;
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
    }
</style>