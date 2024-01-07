import './posts.scss';

import { promises } from 'fs';
import path from 'path';

export default async function Posts() {
  const index_path = path.resolve(`./public`, `content`, `index.json`);
  const file = await promises.readFile(
    index_path,
    `utf8`
  );

  const data = JSON.parse(file);

  return (
    <section className="posts">
      <div className="introduction">
        <h2>Ordine di Coscienza.</h2>
        <p>
          Userò questo spazio per esprimere la <b>mia</b> visione delle cose.
        </p>
        <p>
          Non aspettarti pubblicazioni costanti. Non troverai nemmeno una sezione commenti, ma qualora
          ci tenga a dire la tua sono aperto a conversazioni <b>articolate e ragionate</b> su Mastodon e via Email.
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
