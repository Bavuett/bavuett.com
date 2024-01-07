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
            Credo nell'informazione accessibile e aperta, e che quest'ultima possa essere fatta attraverso forme d'arte apparentente superficiali come il fumetto.
            Ritengo infatti possano essere efficaci quanto un libro nel descrivere la realtà che ci circonda, con tutte le varie sfaccettature che la compongono.
          </p>
          <p>
            Questo non vuol dire che io non legga libri, in quanto questo medium costituisce buona parte dei motivi per il quale ho questa opinione in merito ai mezzi di comunicazione.
          </p>
        </section>
        <Posts />
      </div>
    </main >
  )
}
