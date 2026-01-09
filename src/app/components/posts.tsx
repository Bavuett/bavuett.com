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
  
  const posts = Array.isArray(data) ? data.slice().reverse() : data;

  return (
    <section className="posts">
      <div className="posts-list">
        {
          posts.map((post: any, index: number) => {
            const post_id = Array.isArray(data) ? (data.length - index) : (index + 1);
            
            return (
              <div className="post" key={index + 1}>
                <h4>
                  {post.date}
                </h4>
                <h3>
                  <a href={`./${post_id}`}>
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
