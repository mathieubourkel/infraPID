import { DeploymentController } from "../controllers/deployment.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class DeploymentRoutes {
    private readonly controller: DeploymentController

    constructor(){
        this.controller = new DeploymentController()
    }

    getRoutes():CheckRoutesInterface<DeploymentController> {
        return [
            {
                method: HTTPMethods.GET,
                path: "/deployments/all",
                controller: this.controller,
                action: "getAll",
                middlewares: []
            },
            {
                method: HTTPMethods.GET,
                path: "/deployments/free",
                controller: this.controller,
                action: "getDeploymentsByUser",
                middlewares: []
            },
            {
                method: HTTPMethods.GET,
                path: "/deployment/:id",
                controller: this.controller,
                action: "getOne",
                middlewares: []
            },
            {
                method: HTTPMethods.POST,
                path: "/deployment",
                controller: this.controller,
                action: "add",
                middlewares: []
            },
            {
                method: HTTPMethods.PUT,
                path: "/deployment/:id",
                controller: this.controller,
                action: "modify",
                middlewares: []
            },
            {
                method: HTTPMethods.DELETE,
                path: "/deployment/:id",
                controller: this.controller,
                action: "remove",
                middlewares: []
            }
        ]
    }
}