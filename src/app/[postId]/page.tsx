import { promises } from 'fs';
import { redirect } from 'next/navigation';
import path from 'path';

export default async function Post({ params }: any) {
  const post_id = params.postId - 1;
  const post_id_fs = params.postId;

  const index_path = path.resolve(`./public`, `content`, `index.json`);
  const index_file = await promises.readFile(
    index_path,
    `utf-8`
  );

  const data = JSON.parse(index_file);

  if (post_id < 0 || post_id > data.length || isNaN(post_id)) {
    redirect('..');
  }

  const article_path = path.resolve(`./public`, `content`, post_id_fs, `article.md`);
  const article_file = await promises.readFile(
    article_path,
    `utf-8`
  );

  return (
    <main>
      <section>
        <div>
          <h1>
            {data[post_id].title}
          </h1>
        </div>
        <div>
          <p>
            {article_file}
          </p>
        </div>
      </section>
    </main>
  )
}
