import { Select, SelectItem } from "@nextui-org/react"
import type { Dispatch, SetStateAction } from "react"
import type { Category } from "../types"

type Props = {
  categories: Category[]
  selectedCategory: Category | null
  onSelectCategory: Dispatch<SetStateAction<Category | null>>
}

export const CategorySelect = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <Select
      label="カテゴリー"
      placeholder="選択してください"
      color="primary"
      variant="faded"
      className="max-w-xs"
      value={selectedCategory || ""}
      onChange={(e) => onSelectCategory(e.target.value as Category)}
    >
      {categories.map((category) => (
        <SelectItem key={category} value={category}>
          {category}
        </SelectItem>
      ))}
    </Select>
  )
}
