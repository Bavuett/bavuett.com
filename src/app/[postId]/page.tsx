import { promises } from 'fs';
import { redirect } from 'next/navigation';

export default async function Post({ params }: any) {
  const post_id = params.postId - 1;

  const file = await promises.readFile(
    `${process.cwd()}/src/app/content/index.json`,
    `utf-8`
  );

  const data = JSON.parse(file);

  if (post_id < 0 || post_id > data.length || isNaN(post_id)) {
    redirect('..');
  }

  return (
    <main>
      <section>
        <div>
          <h1>
            {post_id}
          </h1>
        </div>
        <div>
        </div>
      </section>
    </main>
  )
}
