import { ImageLoaderProps } from 'next/image'
/* eslint-disable */
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import Jimp from 'jimp'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

optimize()

async function optimize() {
  const outPath = 'out'
  const items = (
    await fs.readFile(
      path.join(__dirname, '.next/custom-optimized-images.nd.json'),
      'utf-8',
    )
  )
    .trim()
    .split(/\n/g)
    .map((line) => JSON.parse(line))

  await Promise.all(
    items.map(async (item) => {
      const srcPath = path.join(__dirname, outPath, item.src)
      const destPath = path.join(__dirname, outPath, item.output)
      console.log({ srcPath, destPath })
      const img = await Jimp.read(srcPath)
      await img.resize(item.width, Jimp.AUTO)
      await img.quality(item.quality)
      await img.writeAsync(destPath)
    }),
  )
}

const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (process.env.NODE_ENV === 'development') {
    // This doesn't bother optimizing in the dev environment. Next complains if the
    // returned URL doesn't have a width in it, so adding it as a throwaway
    return `${src}?width=${width}`
  }

  // Generate a reasonably unique base folder. Doesn't have to be perfectly unique
  const [path, extension] = src.split(/\.([^.]*$)/) || []
  if (!path || !extension) {
    throw new Error(`Invalid path or no file extension: ${src}`)
  }
  const filename = path.match(/([^\/]+)$/)?.[1] || ''

  const output = `/_optimized${path}/${filename}_${width}_${quality || 75}.${extension}`

  if (typeof window === 'undefined') {
    const json = { output, src, width, quality: quality || 75 }
    const fs = require('fs')
    const path = require('path')
    fs.appendFileSync(
      path.join(process.env.DIRNAME, '.next/custom-optimized-images.nd.json'),
      JSON.stringify(json) + '\n',
    )
  }

  return output
}

export default customLoader