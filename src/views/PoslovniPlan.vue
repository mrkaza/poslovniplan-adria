<template>
<div class="izrada-plana">
    <v-container>
        <h1>IZRADA POSLOVNOG PLANA</h1>
        <div class="line"><div></div></div>
        <p>Poslovni plan sadržava poslovne ideje i mjere koje su potrebne za realizaciju posla . Također sadrži i procjenu potrebnih ljudskih i financijskih troškova i očekivani prihod kako bi se procijenila isplativost same investicije . Poslovni planovi danas su potrebni za dobivanje povoljnih kredita koje nudi HAMAG BICRO i HBOR . Također sve poslovne banke za odobravanje kredita većeg iznosa zahtjevaju izradu poslovnog plana .</p>

        <h3>PREPORUČENI SADRŽAJ POSLOVNOG PLANA :</h3>
        <div class="sadrzaj-plana">
        <div>
            <p>1. PODAVI O PODUZETNIKU</p>
            <p>1.1. O OSOBI PODUZETNIKA</p>
            <p>1.2. PROCJENA PODUZETNIČKE SPOSOBNOSTI</p>
        </div>
        <div>
            <p>2. POLAZIŠTE</p>
            <p>2.1. NASTANAK PODUZETNIČKE IDEJE</p>
            <p>2.2. RAZLOZI OSNIVANJA</p>
            <p>2.3. VIZIJA I ZADAĆA PODUZETNIČKOG POTHVATA</p>
        </div>
        <div>
            <p>3. PREDMET POSLOVANJA ( PROIZVOD ILI USLUGE )</p>
        </div>
        <div>
            <p>4. TRŽIŠNA OPRAVDANOST</p>
            <p>4.1. TRŽIŠTE NABAVE</p>
            <p>4.2. TRŽIŠTE PRODAJE</p>
        </div>
        <div>
            <p>5. TEHNOLOŠKO – TEHNIČKI ELEMENTI POTHVATA</p>
            <p>5.1. OPIS TEHNOLOGIJE</p>
            <p>5.2. STRUKTURA TROŠKOVA</p>
            <p>5.3. STRUKTURA I BROJ ZAPOSLENIH</p>
        </div>
        <div>
            <p>6. LOKACIJA</p>
            <p>7. ZAŠTITA OKOLINE</p>
            <p>8. FINANCIJSKI ELEMENTI POTHVATA</p>
            <p>9. ZAKLJUČAK</p>
        </div>
        </div>
        
        <p>Da bi neka usluga ili proizvod dobili svoje mjesto na tržištu ,moraju imati kvalitetno pripremljen poslovni plan .  Znalo se dogoditi da mnogo izvrsnih ideja i projekata bude odbijeno radi loše napisanog poslovnog plana . Nemojte da se to dogodi i vama.</p>
    </v-container>
</div>
    
</template>

<style scoped>
    .izrada-plana {
        padding:50px 0;
    }
    h1 {
        text-align: center;
        font-size:45px;
        margin-bottom:20px;
        letter-spacing:2px
    }
    p {
        font-size:15px;
        letter-spacing: 0.5px;
        padding-bottom:25px;
        margin:0;
    }
    h3 {
        padding:25px 0;
        font-size:25px;
        border-top:1px solid #cfd8dc
    }
    .sadrzaj-plana {
        margin-bottom:25px;
        padding-bottom:25px;
        border-bottom: 1px solid #CFD8DC;
    }
    .sadrzaj-plana div {
        margin-top:20px;
    }
    .sadrzaj-plana p {
        padding-bottom:2px;
        font-size:14px;
        
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

    @media only screen and (max-width: 600px) {
        h1 {
            font-size:25px;
        }
        h3 {
            font-size:20px
        }

    }
</style>