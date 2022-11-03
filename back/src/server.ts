import Fastify from 'fastify'
import cors from '@fastify/cors'
import z from 'zod'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true
  })



  fastify.get('/api/user/:id', async (request, reply) => {
    try {
      const getUserData = z.object({
        id: z.string(),
      })

      const { id } = getUserData.parse(request.params);

      const user = await prisma.user.findFirst({
        where: {
          id
        }
      })

      return reply.status(200).send(user)
    } catch (e) {
      console.error("error on create", e)
      return reply.status(400).send({ msg: "get user data error", error: e })
    }
  })

  fastify.post('/api/card/generate', async (request, reply) => {


    try {
      const createUserBody = z.object({
        name: z.string(),
        githubUrl: z.string(),
        linkedinUrl: z.string(),
      })

      const { name: userName, githubUrl, linkedinUrl } = createUserBody.parse(request.body);
      const createUser = await prisma.user.create({
        data: {
          name: userName,
          github: githubUrl,
          linkedin: linkedinUrl,
        }
      })

      const { id, name } = createUser
      return reply.status(201).send({ id, name })
    } catch (e) {
      console.error("error on create", e)
      return reply.status(400).send({ msg: "create user error", error: e })
    }

    r
  })

  await fastify.listen({ port: 3333, host: "0.0.0.0" })
}

bootstrap()