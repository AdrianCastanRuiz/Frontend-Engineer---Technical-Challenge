import { categoryFromGenres, labelForCategory } from "src/utils/categories"

export default function CategoryBadge({ genreIds }: { genreIds: number[] }) {
const cat = categoryFromGenres(genreIds)
return <span className={`badge badge--${cat}`}>{labelForCategory(cat)}</span>
}