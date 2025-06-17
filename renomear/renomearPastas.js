'use strict'
exports.__esModule = true
var fs_1 = require('fs')
var path_1 = require('path')

var folderPath = path_1.join(__dirname, '..', 'public', 'backup_torres')

function renameFiles(dir) {
  var files = fs_1.readdirSync(dir)
  files.forEach(function (file) {
    var fullPath = path_1.join(dir, file)
    var stat = fs_1.statSync(fullPath)
    if (stat.isDirectory()) {
      renameFiles(fullPath)
    } else {
      var newFileName = file.replace(/\s+/g, '_').toLowerCase()
      var newFullPath = path_1.join(dir, newFileName)
      if (fullPath !== newFullPath) {
        fs_1.renameSync(fullPath, newFullPath)
        console.log('Renomeado: '.concat(file, ' \u2192 ').concat(newFileName))
      } else {
        console.warn('⚠️ Já existe: '.concat(newFileName, ' — pulando'))
      }
    }
  })
}

renameFiles(folderPath)
