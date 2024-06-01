import { BuildController } from "../controllers/build.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class BuildRoutes {
    private readonly controller = new BuildController()

    getRoutes():CheckRoutesInterface<BuildController> {
        return [
            {
                method: HTTPMethods.POST,
                path: "/build/infra",
                controller: this.controller,
                action: "createFileInfra",
                middlewares: []
            },
        ]
    }
}