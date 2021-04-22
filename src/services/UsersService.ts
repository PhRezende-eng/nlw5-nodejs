import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    async create(email: string) {
        const  usersRepository = getCustomRepository(UsersRepository);
       
        //Verificar se o o Usuário já existe
        const userExists = await usersRepository.findOne({
            email,
        });
        
        //Se existir, retornar USER
        if(userExists){
            return userExists;
        }
        
        const user = usersRepository.create({
            email,
        });
        
        await usersRepository.save(user);

        //Se não existir, salvar no Banco
        return user;
    }
}

export { UsersService };