import './post.scss';

import { promises } from 'fs';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import { PostMetadata } from '@/types/post';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const resolvedParams = await params;
  const post_id = resolvedParams.postId - 1;
  const post_id_fs = resolvedParams.postId;

  const index_path = path.resolve(`./public`, `content`, `index.json`);
  const index_file = await promises.readFile(
    index_path,
    `utf-8`
  );

  const data: PostMetadata[] = JSON.parse(index_file);

  if (post_id < 0 || post_id > data.length || isNaN(post_id)) {
    redirect('..')
  }

  const post = data[post_id];
  const postUrl = `https://bavuett.com/${post_id_fs}`;
  const postTitle = `${post.title}`;
  const postDescription = `${post.description}`;
  
  // Helper to check if post has valid keywords
  const hasKeywords = Array.isArray(post.keywords) && post.keywords.length > 0;
  const postKeywords = hasKeywords ? post.keywords : ['Lorenzo Barretta', 'Bavuett', 'Blog'];

  return {
    title: postTitle,
    description: postDescription,
    authors: [{ name: `Lorenzo Barretta` }, { name: `@Bavuett` }],
    keywords: postKeywords,
    openGraph: {
      type: 'article',
      locale: 'it_IT',
      url: postUrl,
      title: postTitle,
      description: postDescription,
      siteName: '@Bavuett',
      publishedTime: post.date,
      authors: ['Lorenzo Barretta'],
      tags: hasKeywords ? post.keywords : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postDescription,
      creator: '@Bavuett',
    },
  }
}

export default async function Post({ params }: any) {
  const resolvedParams = await params;
  const post_id = resolvedParams.postId - 1;
  const post_id_fs = resolvedParams.postId;

  const index_path = path.resolve(`./public`, `content`, `index.json`);
  const index_file = await promises.readFile(
    index_path,
    `utf-8`
  );

  const data: PostMetadata[] = JSON.parse(index_file);

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
        <div className="title-desc">
          <div className="title">
            <h1>
              {data[post_id].title}
            </h1>
          </div>
          <div className="desc">
            <h3>
              {data[post_id].description}
            </h3>
          </div>
          <div className="metadata">
            <h5>Pubblicato</h5>
            <h4>
              {data[post_id].date}
            </h4>
          </div>
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