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
                <p>
                  {post.description}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
