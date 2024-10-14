import './page.scss';

import Posts from "./components/posts";

export default function Home() {
  return (
    <main>
      <div>
        <section className="header">
          <h1>Creando, imparando, e <i>rompendo</i> cose.</h1>
          <p>
            <b>Il mio nome è Lorenzo Barretta</b>, e questo è il mio bizzarro flusso di coscienza.
          </p>
          <p>
            Credo nell'Informazione accessibile, aperta e sincera. Per questo motivo, ho deciso di sfruttare questo spazio interamente creato a
            mano per esporre la mia visione delle cose, lontano dal rumore dei social.
          </p>
          <p>
            Non aspettarti pubblicazioni costanti.
            Non troverai nemmeno una sezione commenti, ma qualora ci tenga a dire la tua sono aperto a conversazioni articolate e ragionate via <a href="mailto:website@bavuett.com">Email</a>.
          </p>
        </section>
        <Posts />
      </div>
    </main >
  )
}
