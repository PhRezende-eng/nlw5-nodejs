import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    private usersRepository: Repository<User>;
    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        //Verificar se o o Usuário já existe
        const userExists = await this.usersRepository.findOne({
            email,
        });
        
        //Se existir, retornar USER
        if(userExists){
            return userExists;
        }
        
        const user = this.usersRepository.create({
            email,
        });
        
        await this.usersRepository.save(user);

        //Se não existir, salvar no Banco
        return user;
    }
}

export { UsersService };