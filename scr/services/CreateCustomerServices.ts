import prisma from '../prisma'

interface CreateCustomerProps {
  name: string
  email: string
}
class CreateCustomerServices {
  async execute({name, email}: CreateCustomerProps) {
    if(!name && !email) {
      throw new Error('Name and email are required')
    }

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        status: 'ACTIVE'
      }
    })
    return customer
  }
}

export default CreateCustomerServices

