import fastify from 'fastify'
import cors from '@fastify/cors'
import routes from './routes'

const app = fastify({ logger: true })

const server = async () => {
  app.register(routes)
  app.register(cors)

  try {
    app.listen({port: 3000})
  } catch (error) {
    process.exit(1)
  }
}

server()