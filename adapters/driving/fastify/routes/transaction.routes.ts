import { TransactionController } from "../controllers/transaction.controller";
import { CheckRoutesInterface, HTTPMethods } from "../interfaces/routes.interface";


export class TransactionRoutes {
    private readonly controller: TransactionController

    constructor(){
        this.controller = new TransactionController()
    }

    getRoutes():CheckRoutesInterface<TransactionController> {
        return [
            {
                method: HTTPMethods.GET,
                path: "/transactions/:idUser",
                controller: this.controller,
                action: "getManyByUser",
                middlewares: []
            },
            {
                method: HTTPMethods.POST,
                path: "/transaction",
                controller: this.controller,
                action: "add",
                middlewares: []
            }
        ]
    }
}