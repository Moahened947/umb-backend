import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRiskDto } from './dto/create-risk.dto';
import { UpdateRiskDto } from './dto/update-risk.dto';
import { Risk } from './entities/risk.entity';

@Injectable()
export class RisksService {
  constructor(
    @InjectRepository(Risk)
    private risksRepository: Repository<Risk>,
  ) {}

  
  create(createRiskDto: CreateRiskDto) {
    return this.risksRepository.save(createRiskDto);
  }

  findAll():Promise<Risk[]> {
    return this.risksRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} risk`;
  }

  update(id: number, updateRiskDto: UpdateRiskDto) {
    return this.risksRepository.update(id,updateRiskDto);
  }

  remove(id: number) {
    return this.risksRepository.delete(id);
  }
}
