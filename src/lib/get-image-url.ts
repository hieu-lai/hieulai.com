export const getImageUrl = (imageKey: string): string => {
  const imageCdnOrigin = import.meta.env.VITE_IMAGE_CDN_ORIGIN

  return `${imageCdnOrigin}/${imageKey}`
}
