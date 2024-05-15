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
                path: "/templates/all",
                controller: this.controller,
                action: "getAll"
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/free",
                controller: this.controller,
                action: "getDeploymentsByUser"
            },
            {
                method: HTTPMethods.GET,
                path: "/deployment/:id",
                controller: this.controller,
                action: "getOne"
            },
            {
                method: HTTPMethods.POST,
                path: "/deployment",
                controller: this.controller,
                action: "add"
            },
            {
                method: HTTPMethods.PUT,
                path: "/deployment/:id",
                controller: this.controller,
                action: "modify"
            },
            {
                method: HTTPMethods.DELETE,
                path: "/deployment/:id",
                controller: this.controller,
                action: "remove"
            }
        ]
    }
}