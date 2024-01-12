import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RisksService } from './risks.service';
import { CreateRiskDto } from './dto/create-risk.dto';
import { UpdateRiskDto } from './dto/update-risk.dto';

@Controller('risks')
export class RisksController {
  constructor(private readonly risksService: RisksService) {}

  @Post()
  create(@Body() createRiskDto: CreateRiskDto) {
    return this.risksService.create(createRiskDto);
  }

  @Get()
  findAll() {
    return this.risksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.risksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiskDto: UpdateRiskDto) {
    return this.risksService.update(+id, updateRiskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.risksService.remove(+id);
  }
}
