import { MetadataRoute } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = 'https://bavuett.com'
  
  // Read the posts index to get all posts and their metadata
  const indexPath = path.resolve('./public', 'content', 'index.json')
  let posts: any[] = []
  
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
      allow: ['/', '/posts', ...postRules],
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
