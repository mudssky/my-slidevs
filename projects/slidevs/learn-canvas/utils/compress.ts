/**
 *
 *  使用canvas进行图片压缩
 * @export
 * @param {HTMLImageElement} imgDom
 * @param {{
 *     type?: string //支持webp和jpeg，默认压缩jpeg
 *     quality?: number //0.1-1之间的数据
 *   }} [options]
 * @return {*}
 */
export async function compressImgDom(
  imgDom: HTMLImageElement,
  options?: {
    type?: string
    quality?: number //0.1-1之间的数据
  }
): Promise<Blob | null> {
  return new Promise((resolve, reject) => {
    const { quality = 0.1, type = 'image/jpeg' } = options || {}
    const canvasDom = document.createElement('canvas')
    try {
      const ctx = canvasDom.getContext('2d')!
      ctx.drawImage(imgDom, 0, 0, imgDom.width, imgDom.height)
      canvasDom.toBlob(
        (bolb) => {
          resolve(bolb)
        },
        type,
        quality
      )
    } catch (err) {
      reject(err)
    }
  })
}
