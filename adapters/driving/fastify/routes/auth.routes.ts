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
                path: "/auth/login",
                controller: this.controller,
                action: "login",
                middlewares: []
            },
            {
                method: HTTPMethods.GET,
                path: "/auth/refreshToken",
                controller: this.controller,
                action: "refreshToken",
                middlewares: []
            }
        ]
    }
}