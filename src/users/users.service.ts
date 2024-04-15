import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  //findOne(id: number) {
   // return `This action returns a #${id} user`;
 // }

  async findCode(code: number) {
    const user = await this.usersRepository.findOne({ where: { code } });
    if (!user) {
     // throw new NotFoundException(`User with code ${code} not found`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id,updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
