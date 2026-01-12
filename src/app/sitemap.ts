import { MetadataRoute } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import { PostMetadata } from '@/types/post'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Generate sitemap entries for each post with keywords and metadata
  const postEntries: MetadataRoute.Sitemap = posts.map((post, index) => {
    // Parse date from Italian format (e.g., "14 Ottobre 2024")
    const dateStr = post.date
    let lastModified = new Date()
    
    try {
      // Parse Italian date format
      const monthMap: Record<string, number> = {
        'gennaio': 0, 'febbraio': 1, 'marzo': 2, 'aprile': 3,
        'maggio': 4, 'giugno': 5, 'luglio': 6, 'agosto': 7,
        'settembre': 8, 'ottobre': 9, 'novembre': 10, 'dicembre': 11
      }
      
      const parts = dateStr.toLowerCase().split(' ')
      if (parts.length === 3) {
        const day = parseInt(parts[0])
        const month = monthMap[parts[1]]
        const year = parseInt(parts[2])
        if (!isNaN(day) && month !== undefined && !isNaN(year)) {
          lastModified = new Date(year, month, day)
        }
      }
    } catch (e) {
      console.error('Error parsing date:', dateStr, e)
    }

    return {
      url: `${baseUrl}/${index + 1}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  })

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    /* 
    /* Temporarily hidden as it is not being used at the moment.
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    */
  ]

  return [...staticPages, ...postEntries]
}
