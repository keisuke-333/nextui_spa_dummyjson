export type Category =
  | "smartphones"
  | "laptops"
  | "fragrances"
  | "skincare"
  | "groceries"
  | "home-decoration"
  | "furniture"
  | "tops"
  | "womens-dresses"
  | "womens-shoes"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches"
  | "womens-watches"
  | "womens-bags"
  | "womens-jewellery"
  | "sunglasses"
  | "automotive"
  | "motorcycle"
  | "lighting"

export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type ProductListType = {
  products: Product[]
  total: number
  skip: number
  limit: number
}
