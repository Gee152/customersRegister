import { PrismaClient } from "@prisma/client"
import prisma from "../prisma"

interface DeleteCustomersServicesProps {
  id: string
}
class DeleteCustomersServices {
  async execute({id}: DeleteCustomersServicesProps) {
    if(id) {
      throw new Error('Solicitação invalida')
    }

    const findCustomer = await prisma.customer.findFirst({
      where:{
        id: id
      }
    })

    if(!findCustomer) {
      throw new Error('Cliente não encontrado')
    }

    await prisma.customer.delete({
      where: {
        id: findCustomer.id
      }
    })
    return {message: 'Cliente deletado com sucesso'}
  }
}

export {
  DeleteCustomersServices
}