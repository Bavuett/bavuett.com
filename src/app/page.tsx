import Posts from "./components/posts";

export default function Home() {
  return (
    <main>
      <div>
        <section>
          <h1>Creando, imparando, e <i>rompendo</i> cose.</h1>
          <p>
            <b> Il mio nome è Lorenzo Barretta. </b> Studio all'Università, fruisco di contenuti e
            cerco di crearne a mia volta quando possibile.
          </p>
          <p>
            Sono appassionato di Informatica sin da quando ero bambino. Per questo motivo ho
            iniziato presto a mettere in pratica le conoscenze acquisite nel corso della mia vita
            curando semplici progetti, alternando queste attività alla lettura nei momenti di riposo.
          </p>
        </section>
        <Posts />
      </div>
    </main >
  )
}
