import fs from 'fs'
import path from 'path'

const folderPath = path.join(__dirname, 'backup_torres')

function renameFiles(dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      renameFiles(fullPath)
    } else {
      const newFileName = file.replace(/\s+/g, '_').toLowerCase()

      const newFullPath = path.join(dir, newFileName)

      if (fullPath !== newFullPath) {
        fs.renameSync(fullPath, newFullPath)
        console.log(`Renomeado: ${file} → ${newFileName}`)
      } else {
        console.warn(`⚠️ Já existe: ${newFileName} — pulando`)
      }
    }
  })
}

renameFiles(folderPath)
