import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react"
import type { Product } from "../types"

type Props = {
  product: Product
}

export const ProductDetail = ({ product }: Props) => {
  return (
    <Card className="pb-2 max-w-96">
      <CardBody className="flex flex-col items-center p-0">
        <Image
          radius="none"
          width="100%"
          className="object-fill"
          alt={product.title}
          src={product.thumbnail}
        />
      </CardBody>
      <Divider />
      <CardFooter className="text-small justify-between">
        <b>品名</b>
        <p className="text-default-500">{product.title}</p>
      </CardFooter>
      <Divider />
      <CardFooter className="text-small justify-between">
        <b>ブランド</b>
        <p className="text-default-500">{product.brand}</p>
      </CardFooter>
      <Divider />
      <CardFooter className="text-small justify-between">
        <b>価格</b>
        <p className="text-default-500">{product.price}</p>
      </CardFooter>
      <Divider />
      <CardFooter className="text-small justify-between">
        <b>評価</b>
        <p className="text-default-500">{product.rating}</p>
      </CardFooter>
      <Divider />
      <CardFooter className="text-small justify-between">
        <p className="text-default-500">{product.description}</p>
      </CardFooter>
    </Card>
  )
}
