import { ArchitectureController } from "../controllers/architecture.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class TemplateRoutes {
    
    private readonly controller = new ArchitectureController()

    getRoutes():CheckRoutesInterface<ArchitectureController> {
        return [
            {
                method: HTTPMethods.GET,
                path: "/templates/all",
                controller: this.controller,
                action: "getAll",
                middlewares: []
            },
            // {
            //     method: HTTPMethods.GET,
            //     path: "/template/:id",
            //     controller: this.controller,
            //     action: "getArchiTemplateById",
            //     middlewares: []
            // },
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
            // {
            //     method: HTTPMethods.POST,
            //     path: "/template",
            //     controller: this.controller,
            //     action: "add",
            //     middlewares: []
            // },

            // {
            //     method: HTTPMethods.PUT,
            //     path: "/template/:id",
            //     controller: this.controller,
            //     action: "modify",
            //     middlewares: []
            // },
            // {
            //     method: HTTPMethods.DELETE,
            //     path: "/template/:id",
            //     controller: this.controller,
            //     action: "remove",
            //     middlewares: []
            // }
        ]
    }
}