import React  from "react";
//basic page where I tell about the project

function Home () {
    return(
        <article className="backgroundEtusivu">
        <div className="container">
            <section className="containerForm">
            <h1>Esittely</h1>

            <p className="tekstiOsa">
                Tämä on minun ensimmäinen React aplikaationi, 
                joten olen tulokseen ajankäytön ja oppimisen puitteissa tyytyväinen.
                Jatkokehityksen kohteina ja mielellään otan vinkkejä vastaan 
                koodikatsemoinnissa:
                -Tähtien arvojen lähetys DB ja palautus näkyviin -puhekuplaan.
                -Kolme puhekuplaa, joissa palaute vaihtuu (3 kerrallaan), napista.
                -Alle keskimääräisesti annettu tähtien arvo.
                -Kosoli ylläpitäjälle, jossa voi poistaa palautteita.
                -Plugin - WordPress alustalle ja näyttäminen sivun kentässä 
                 eri komponentit eri sivuille? (short-code-avulla?)
                -Lomake, josta tiedot haetaan -GravityForms, rajapinnan kautta.
            </p>
           
            <p className="tekstiOsa2">
                Toistaiseksi aplikaatiossa on lomake, josta tieto lähetetään MongoDB.
                Tiedot haetaan Palute sivulle ja esitellään puhekuplassa.
                Tietoja voi selata nuolinäppäimien avulla tai arpoa seuraanvan palautteen.
                Käytin liikaa aikaa WordPress plugin tekoon, joka osottautui haasteeksi.
                Olen kuitenkin melko lähellä ratkaisua ja jatkan kehittämistä. 
                Kurssin esitystä varten tein apin näkyville näin. Opittu tässä 
                vaiheessa lähtötasoon nähden valtavasti.
                
                Toiminnallisuudet ovat kuitenkin näkyvissä ja kehitystyö jatkuu.
            </p>
            </section>
        </div>
        </article>
    );
    }
export default Home;