import { ArchitectureController } from "../controllers/architecture.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class TemplateRoutes {
    private readonly controller: ArchitectureController

    constructor(){
        this.controller = new ArchitectureController()
    }

    getRoutes():CheckRoutesInterface<ArchitectureController> {
        return [
            {
                method: HTTPMethods.GET,
                path: "/templates/all",
                controller: this.controller,
                action: "getAll",
                middlewares: []
            },
            {
                method: HTTPMethods.POST,
                path: "/templates/create-infra",
                controller: this.controller,
                action: "createInfra",
                middlewares: []
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/free",
                controller: this.controller,
                action: "getFreeTemplates",
                middlewares: []
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/paying",
                controller: this.controller,
                action: "getPayingTemplates",
                middlewares: []
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/boughts",
                controller: this.controller,
                action: "getAlreadyBoughtTemplates",
                middlewares: []
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/no-boughts",
                controller: this.controller,
                action: "getNotBoughtTemplates",
                middlewares: []
            },
            {
                method: HTTPMethods.POST,
                path: "/template",
                controller: this.controller,
                action: "add",
                middlewares: []
            },

            {
                method: HTTPMethods.PUT,
                path: "/template/:id",
                controller: this.controller,
                action: "modify",
                middlewares: []
            },
            {
                method: HTTPMethods.DELETE,
                path: "/template/:id",
                controller: this.controller,
                action: "remove",
                middlewares: []
            }
        ]
    }
}