import { TimelineMax } from 'gsap'

export const itemsBlogAnimate = (itemsPost) => {
  const tl = new TimelineMax();

  tl.staggerFrom(itemsPost, .8, {
    scale: 0,
    opacity: 0
  }, .4)
}