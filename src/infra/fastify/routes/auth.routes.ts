import { AuthController } from "../controllers/auth.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class AuthRoutes {
    private readonly controller: AuthController

    constructor(){
        this.controller = new AuthController()
    }

    getRoutes():CheckRoutesInterface<AuthController> {
        return [
            {
                method: HTTPMethods.GET,
                path: "/templates/all",
                controller: this.controller,
                action: "login"
            },
            {
                method: HTTPMethods.GET,
                path: "/templates/free",
                controller: this.controller,
                action: "refreshToken"
            }
        ]
    }
}