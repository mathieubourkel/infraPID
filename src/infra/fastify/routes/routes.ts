import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { RouteInterface, RoutesInterface } from "../interfaces/routes.interface"
import { UserRoutes } from "./user.routes"
import { TemplateRoutes } from "./template.routes"
import { TransactionRoutes } from "./transaction.routes"
import { DeploymentRoutes } from "./deployment.routes"
import { AuthRoutes } from "./auth.routes"

export class Routes {
    routes: RoutesInterface = []

    constructor() {
        this.routes = [
            ...new UserRoutes().getRoutes(),
            ...new TemplateRoutes().getRoutes(),
            ...new TransactionRoutes().getRoutes(),
            ...new DeploymentRoutes().getRoutes(),
            ...new AuthRoutes().getRoutes()
        ]
    }

    init(fastify: FastifyInstance, options?: any) {
        this.routes.forEach((route: RouteInterface) => {
            const {method, path, controller, action} = route
        
            fastify[method](path, async(req: FastifyRequest, reply: FastifyReply) => {
                try {
                    const result = await controller[action](req, reply, options)
                    reply.code(200).send(result)
                } catch (error) {
                    req.log.error(error);
                    reply.code(500).send(error)
                }
            })
        })
    }
}