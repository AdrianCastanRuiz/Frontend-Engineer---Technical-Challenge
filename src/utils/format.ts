export function imageUrl(path: string, size: 'w342' | 'w500' | 'original' = 'w342') {
if (!path) return ''
const base = 'https://image.tmdb.org/t/p'
return `${base}/${size}${path}`
}