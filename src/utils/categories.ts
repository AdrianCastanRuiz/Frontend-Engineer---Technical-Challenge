export type Category = 'action' | 'comedy' | 'drama'


// Map de géneros TMDB a nuestras 3 categorías
const actionIds = new Set([28, 12, 14, 16, 27, 53, 80, 878])
const comedyIds = new Set([35, 10751])
const dramaIds = new Set([18, 10749, 9648, 99, 36])


export function categoryFromGenres(genreIds: number[]): Category {
if (genreIds.some((id) => actionIds.has(id))) return 'action'
if (genreIds.some((id) => comedyIds.has(id))) return 'comedy'
return 'drama'
}


export function labelForCategory(cat: Category) {
switch (cat) {
case 'action':
return 'Action'
case 'comedy':
return 'Comedy'
case 'drama':
default:
return 'Drama'
}
}