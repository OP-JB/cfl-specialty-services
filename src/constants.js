export const services = [
  {
    title: 'On Site Crating/Uncrating',
    rows: ['Solid/slate', 'Art work', 'Electronics', 'Marble/glass']
  },
  {
    title: 'Specialty Services',
    rows: ['Pianos', 'Grandfather clocks', 'Pool tables', 'TV mounting', 'Artwork hanging', 'Light fixtures']
  },
  {
    title: 'Assembling/Disassembling',
    rows: ['Appliances services', 'Furniture', 'Exercise equipment']
  }
]

const galleryLength = 35;
export const galleryCarouselImages = [...Array(galleryLength).keys()].map((n) => `assets/img/gallery/${String(n + 1)}.jpg`)

export const heroCarouselImages = [
  'assets/img/glass-metal_text.png',
  'assets/img/flag_text.png',
  'assets/img/grandfather-clock_text.png',
  'assets/img/chandelier_text.png'
]
