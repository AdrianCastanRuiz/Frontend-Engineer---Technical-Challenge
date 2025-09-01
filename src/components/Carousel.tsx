import { ReactNode, useRef } from 'react'
import './../styles/components/carousel.scss'

interface CarouselProps {
title: string
children: ReactNode
}


export default function Carousel({ title, children }: CarouselProps) {
const scrollerRef = useRef<HTMLDivElement>(null)


const scrollBy = (dir: 'left' | 'right') => {
const el = scrollerRef.current
if (!el) return
const amount = Math.round(el.clientWidth * 0.9)
el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
}


return (
<section className="carousel" aria-label={title}>
<div className="carousel__header">
<h2>{title}</h2>
<div className="carousel__controls">
<button aria-label={`Scroll ${title} left`} onClick={() => scrollBy('left')}>&larr;</button>
<button aria-label={`Scroll ${title} right`} onClick={() => scrollBy('right')}>&rarr;</button>
</div>
</div>
<div className="carousel__scroller" ref={scrollerRef}>
{children}
</div>
</section>
)
}