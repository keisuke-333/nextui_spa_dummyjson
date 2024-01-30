import { useEffect, useState } from "react"
import { Spacer } from "@nextui-org/react"
import toast, { Toaster } from "react-hot-toast"
import type { Category, Product, ProductListType } from "./types"

import { Layout } from "./components/Layout"
import { CategorySelect } from "./components/CategorySelect"
import { ProductList } from "./components/ProductList"
import { ProductDetail } from "./components/ProductDetail"

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
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/categories`
        )
        if (!response.ok) {
          throw new Error("Failed to fetch categories.")
        }
        const data: Category[] = await response.json()
        setCategories(data)
      } catch (error) {
        console.error(error)
        toast.error("カテゴリーの取得に失敗しました。")
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/category/${selectedCategory}`
        )
        if (!response.ok) {
          throw new Error("Failed to fetch product list.")
        }
        const data: ProductListType = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error(error)
        toast.error("商品情報の取得に失敗しました。")
      }
    }

    if (selectedCategory) {
      fetchProducts()
    }
  }, [selectedCategory])

  const handleSelectProduct = async (productId: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/${productId}`
      )
      if (!response.ok) {
        throw new Error("Failed to fetch product details.")
      }
      const data: Product = await response.json()
      setSelectedProduct(data)
    } catch (error) {
      console.error(error)
      toast.error("商品詳細情報の取得に失敗しました。")
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
      <Toaster />
    </Layout>
  )
}

export default App
