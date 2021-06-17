import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
  async index(req: Request, res: Response) {
    const userRepository = getCustomRepository(UsersRepository);

    const users = await userRepository.query(`select * from users`);

    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      linkedin,
      pitch,
      bio,
    } = req.body;

    const userRepository = getCustomRepository(UsersRepository);

    const user = userRepository.create({
      name,
      avatar,
      whatsapp,
      linkedin,
      pitch,
      bio,
    });

    await userRepository.save(user);

    return res.json(user);
  }
}

export { UserController };
