import prisma from "../prisma"

class ListCustomerServicer {
  async execute() {
    const ListCustomer = await prisma.customer.findMany()
    return ListCustomer
  }
}

export {
  ListCustomerServicer
}