import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {
    // constructor
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    try {
      const user = this.createUserUseCase.execute({ name, email });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: "Usuário ja cadastrado!" });
    }
  }
}

export { CreateUserController };
