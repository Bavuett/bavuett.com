import './posts.scss';

import { promises } from 'fs';
import path from 'path';

export default async function Posts() {
  const index_path = path.resolve(`${process.cwd()}`, `public`, `content`, `index.json`);
  const file = await promises.readFile(
    index_path,
    `utf8`
  );

  const data = JSON.parse(file);

  return (
    <section className="posts">
      <div className="introduction">
        <h1>
          <i> Ordine </i> di Coscienza.
        </h1>
        <p>
          Come leggere aiuta a <b> conoscere la realtà </b> che mi circonda, scrivere mi permette di dare
          un <b>Ordine</b> al mio <b>Flusso di Coscienza</b>.
        </p>
        <p>
          Non aspettarti pubblicazioni costanti. Questo è uno spazio libero da distrazioni e interazioni
          futili, nel quale pubblico informazioni di potenziale utilità.
        </p>
        <p>
          Potresti ritrovarti a leggere
          una guida su un particolare argomento, come potrebbero capitare analisi su fenomeni mi hanno
          interessato a tal punto da voler scrivere qualcosa al riguardo.
        </p>
      </div>
      <div className="posts-list">
        {
          data.map((post: any, index: number) => {
            return (
              <div className="post" key={index + 1}>
                <h5>
                  Pagina {index + 1} — {post.date}
                </h5>
                <h3>
                  <a href={`./${index + 1}`}>
                    {post.title}
                  </a>
                </h3>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
