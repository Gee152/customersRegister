import { FastifyReply, FastifyRequest } from "fastify"
import CreateCustomerServices from "../services/CreateCustomerServices"

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {name, email } = request.body as { name: string, email: string }
 
    const customerServices = new CreateCustomerServices()
    const customer = await  customerServices.execute({name, email})

    reply.send(customer)
  }
}

export default CreateCustomerController