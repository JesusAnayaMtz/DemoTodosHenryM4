import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersDBService {
    
    
    
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    getUsers() {
        return this.userRepository.find();
    }

    //le colocamos el omit para omitir el id ya que estamos usando el dto pero el dto no tiene el id
    saveUser(user: Omit<User, 'id'>) {
        this.userRepository.save(user)
    }

    getUsersByName(name: string) {
        return this.userRepository.find({where: {name}});
    }

    getUserById(id: string) {
        return this.userRepository.findOne({where: {id}})
    }

}