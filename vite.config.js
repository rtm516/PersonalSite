import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), copyDistFilePlugin({
    input: 'index.html',
    output: '404.html'
  })]
})

function copyDistFilePlugin ({ input, output }) {
  return {
    name: 'copy-dist-file-plugin',
    apply: 'build',
    writeBundle (outputOptions) {
      const inputPath = path.resolve(outputOptions.dir, input)
      const outputPath = path.resolve(outputOptions.dir, output)

      fs.copyFile(inputPath, outputPath, (err) => {
        if (err) throw err
      })
    }
  }
}
