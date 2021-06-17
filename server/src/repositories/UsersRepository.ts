import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

// dizer para a classe que ela será uma repositório
@EntityRepository(User)
class UsersRepository extends Repository<User> {

}

export { UsersRepository };