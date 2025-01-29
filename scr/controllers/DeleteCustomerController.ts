import { FastifyReply, FastifyRequest } from "fastify"
import { DeleteCustomersServices } from "../services/DeleteCustomerServices"

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    const deleteCustomer = new DeleteCustomersServices()

    const customer = await deleteCustomer.execute({ id })

    reply.send(customer)
  }
}

export {
  DeleteCustomerController
}