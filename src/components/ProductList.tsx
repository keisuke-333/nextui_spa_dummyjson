import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react"
import type { Product } from "../types"

type Props = {
  products: Product[]
  onSelectProduct: (productId: number) => Promise<void>
}

export const ProductList = ({ products, onSelectProduct }: Props) => {
  return (
    <Table
      color="primary"
      selectionMode="single"
      aria-label="product table"
      className="max-w-4xl"
    >
      <TableHeader>
        <TableColumn>品名</TableColumn>
        <TableColumn>ブランド</TableColumn>
        <TableColumn>価格</TableColumn>
        <TableColumn>評価</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"カテゴリーを選択してください"}>
        {products.map(({ id, title, brand, price, rating }) => (
          <TableRow
            key={id}
            onClick={() => onSelectProduct(id)}
            className="cursor-pointer"
          >
            <TableCell>{title}</TableCell>
            <TableCell>{brand}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{rating}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
