import Posts from "./components/posts";

export default function Home() {
  return (
    <main>
      <div>
        <section>
          <h1>Creando, imparando, e <i>rompendo</i> cose.</h1>
          <p>
            <b>Il mio nome è Lorenzo Barretta.</b> Sin da bambino sono appassionato, oltre che di Informazione in generale, di Informatica e tutt'ora la studio all'Università.
          </p>
          <p>
            Credo nell'Informazione accessibile, aperta e sincera. Per questo motivo, ho deciso di sfruttare questo spazio interamente creato a
            mano per esporre la mia visione delle cose, lontano dal rumore dei social.
          </p>
          <p>
            Non aspettarti pubblicazioni costanti.
            Non troverai nemmeno una sezione commenti, ma qualora ci tenga a dire la tua sono aperto a conversazioni articolate e ragionate via Email.
          </p>
        </section>
        <Posts />
      </div>
    </main >
  )
}
