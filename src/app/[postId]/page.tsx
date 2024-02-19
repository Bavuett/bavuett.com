import './post.scss';

import { promises } from 'fs';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import path from 'path';
import Markdown from 'markdown-to-jsx';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post_id = params.postId - 1;

  const index_path = path.resolve(`./public`, `content`, `index.json`);
  const index_file = await promises.readFile(
    index_path,
    `utf-8`
  );

  const data = JSON.parse(index_file);

  if (post_id < 0 || post_id > data.length || isNaN(post_id)) {
    redirect('..')
  }

  return {
    title: `${data[post_id].title} — @Bavuett`,
    description: `Written on ${data[post_id].date}. ${data[post_id].description}`,
    authors: [{ name: `Lorenzo Barretta` }, { name: `@Bavuett` }],
    keywords: data.keywords,
  }
}

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
      <div className="post-details">
        <div>
          <h5>
            {data[post_id].date}
          </h5>
          <h1>
            {data[post_id].title}
          </h1>
          <p>
            {data[post_id].description}
          </p>
        </div>
        <div className="actions">
          <a href='..'>
            <button>Indietro</button>
          </a>
        </div>
      </div>
      <div className="post-content">
        <section>
          <Markdown>
            {article_file}
          </Markdown>
        </section>
      </div>
    </main>
  )
}
