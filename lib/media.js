import { getApiURL } from "./api"

export function getStrapiMedia(media) {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getApiURL(url) : url
  return imageUrl
}
