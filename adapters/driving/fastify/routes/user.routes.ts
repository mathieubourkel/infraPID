import { UserController } from "../controllers/user.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class UserRoutes {
    
    private readonly controller = new UserController()

    getRoutes():CheckRoutesInterface<UserController> {
        return [
            {
                method: HTTPMethods.GET,
                path: "/user",
                controller: this.controller,
                action: "getOne",
                middlewares: []
            },
            {
                method: HTTPMethods.PUT,
                path: "/user/:id",
                controller: this.controller,
                action: "modify",
                middlewares: []
            },
            {
                method: HTTPMethods.DELETE,
                path: "/user/:id",
                controller: this.controller,
                action: "delete",
                middlewares: []
            }
        ]
    }
}