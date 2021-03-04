import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    return await this.usersRepository.save(createUserInput);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const user = await this.usersRepository.findOne(updateUserInput.id);
    this.usersRepository.merge(user, updateUserInput);
    return await this.usersRepository.save(user);
  }

  async remove(id: string) {
    return this.usersRepository.findOne(id).then(
      (found) => {
        if (found !== undefined) {
          this.usersRepository.remove(found);
          return true;
        } else return false;
      },
      () => false,
    );
  }
}
