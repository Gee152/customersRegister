import { FastifyReply, FastifyRequest } from "fastify"
import { ListCustomerServicer } from "../services/ListCustomerServices"

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const ListCustomer = new ListCustomerServicer()
    
    const customers = await ListCustomer.execute()

    reply.send(customers)
  }
}

export {
  ListCustomerController
}