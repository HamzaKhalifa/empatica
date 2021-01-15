interface IOrder {
  id: number,
  ref: string,
  status:'paid',
  tracking: tracking,
  items: Item[],
  discounts: Discount[]
}

type tracking = {
  carrier: string,
  trackingCode: string,
  status: string
}

type Item = {
  sku: string,
  name: string,
  amount: 29
}

type Discount = {
  name: string,
  type: string,
  value: number
}

export default IOrder;