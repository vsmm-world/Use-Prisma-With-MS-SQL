import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Sql, raw } from '@prisma/client/runtime/library';
import { exec } from 'child_process';

@Injectable()
export class CrudService {
  constructor(private prisma: PrismaService) {}
  async create(createCrudDto: CreateCrudDto) {
    return this.prisma.user.create({
      data: {
        ...createCrudDto,
      },
    });
  }

  async findAll() {
    
 return this.prisma.$queryRaw`EXEC GetAllUsers`;
 
    
  }

  findOne(id: string) {
    return `This action returns a #${id} crud`;
  }

  update(id: string, updateCrudDto: UpdateCrudDto) {
    return `This action updates a #${id} crud`;
  }

  remove(id: string) {
    return `This action removes a #${id} crud`;
  }
}
