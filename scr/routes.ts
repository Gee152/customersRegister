import {FastifyPluginOptions, FastifyRequest, FastifyReply} from  'fastify'
import { FastifyInstance } from "fastify/types/instance"
import CreateCustomerController from './controllers/CreateCustomerController'
import { ListCustomerController } from './controllers/ListCustomerController'
import { DeleteCustomerController } from './controllers/DeleteCustomerController'

export default function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply)  
  })

  fastify.get('/listCustomer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerController().handle(request, reply)  
  })

  fastify.get('/delCustomer', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply)  
  })
}