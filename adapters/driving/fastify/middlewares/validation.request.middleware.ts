// import { FastifyRequest } from "fastify";
// import { validate } from "class-validator"
// import { plainToInstance } from "class-transformer";

// export async function validationRequestMiddleware(request: FastifyRequest, dto:any){
//     const bodyToValidate = plainToInstance(dto, request.body)
//     const errors = await validate(bodyToValidate, { whitelist: true });
//     if (errors.length > 0) {
//         throw errors
//     }
//     request.body = bodyToValidate
// }