import { TemplateController } from "../controllers/template.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class TemplateRoutes {
    private readonly controller: TemplateController

    constructor(){
        this.controller = new TemplateController()
    }

    getRoutes():CheckRoutesInterface<TemplateController> {
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
                action: "getFreeTemplates"
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/paying",
                controller: this.controller,
                action: "getPayingTemplates"
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/boughts",
                controller: this.controller,
                action: "getAlreadyBoughtTemplates"
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/no-boughts",
                controller: this.controller,
                action: "getNotBoughtTemplates"
            },
            {
                method: HTTPMethods.POST,
                path: "/template",
                controller: this.controller,
                action: "add"
            },

            {
                method: HTTPMethods.PUT,
                path: "/template/:id",
                controller: this.controller,
                action: "modify"
            },
            {
                method: HTTPMethods.DELETE,
                path: "/template/:id",
                controller: this.controller,
                action: "remove"
            }
        ]
    }
}