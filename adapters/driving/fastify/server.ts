import fastify from 'fastify'
import { Routes } from './routes/routes'

const server = fastify({logger: true})

new Routes().init(server)
server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})