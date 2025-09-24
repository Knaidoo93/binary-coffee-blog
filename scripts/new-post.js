import fs from 'fs'
import path from 'path'

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Usage: npm run new-post -- "My Post Title"')
  process.exit(1)
}

const title = args[0]
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const date = new Date().toISOString().slice(0,10)
const filename = `${date}-${slug}.md`
const filepath = path.join(process.cwd(), 'docs', filename)

const content = `---\ntitle: "${title}"\ndate: ${date}\ntags: []\n---\n\n# ${title}\n\nWrite your post here.\n`

fs.writeFileSync(filepath, content)
console.log('Created', filepath)
