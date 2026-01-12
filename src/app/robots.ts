import { MetadataRoute } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import { PostMetadata } from '@/types/post'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = 'https://bavuett.it'
  
  // Read the posts index to get all posts and their metadata
  const indexPath = path.resolve('./public', 'content', 'index.json')
  let posts: PostMetadata[] = []
  
  try {
    const indexFile = await fs.readFile(indexPath, 'utf-8')
    posts = JSON.parse(indexFile)
  } catch (error) {
    console.error('Error reading posts index:', error)
  }

  // Generate allow rules for each post
  const postRules = posts.map((_, index) => `/${index + 1}`)

  return {
    rules: {
      userAgent: '*',
      allow: ['/', /* [NOTE: Temporarily hidden as it is not being used.] '/posts',*/ ...postRules],
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
