import fs from 'fs'
import path from 'path'

const docsDir = path.join(process.cwd(), 'docs')
const files = fs.readdirSync(docsDir)

const posts = files
  .filter(f => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f))
  .map(f => ({
    file: f,
    title: (() => {
      const content = fs.readFileSync(path.join(docsDir, f), 'utf8')
      const m = content.match(/^---\s*[\s\S]*?title:\s*"([^"]+)"[\s\S]*?---/m)
      return m ? m[1] : f.replace(/\.md$/, '')
    })()
  }))
  .sort((a,b) => b.file.localeCompare(a.file))

const indexPath = path.join(docsDir, 'posts', 'index.md')
let out = '---\ntitle: Posts\n---\n\n# Posts\n\n'
for (const p of posts) {
  const link = `/${p.file.replace(/\.md$/, '')}`
  out += `- [${p.title}](${link})\n`
}

fs.writeFileSync(indexPath, out)
console.log('Wrote', indexPath)
