import { useEffect, useState } from "react"
import { Spacer } from "@nextui-org/react"
import type { Category, Product, ProductListType } from "./types"

import { Layout } from "./components/Layout"
import { CategorySelect } from "./components/CategorySelect"
import { ProductList } from "./components/ProductList"
import { ProductDetail } from "./components/ProductDetail"

const API_BASE = "https://dummyjson.com/products"

const App = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_BASE}/categories`)
        const data: Category[] = await response.json()
        setCategories(data)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
        throw error
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE}/category/${selectedCategory}`)
        const data: ProductListType = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    if (selectedCategory) {
      fetchProducts()
    }
  }, [selectedCategory])

  const handleSelectProduct = async (productId: number) => {
    try {
      const response = await fetch(`${API_BASE}/${productId}`)
      const data: Product = await response.json()
      setSelectedProduct(data)
    } catch (error) {
      console.error("Failed to fetch product details:", error)
    }
  }

  return (
    <Layout>
      <p className="text-3xl font-bold">
        お買い物.<span className="text-blue-500">com</span>
      </p>
      <Spacer y={2} />
      <CategorySelect
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Spacer y={4} />
      <ProductList products={products} onSelectProduct={handleSelectProduct} />
      <Spacer y={6} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </Layout>
  )
}

export default App
