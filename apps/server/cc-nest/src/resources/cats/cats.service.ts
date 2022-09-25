import { Injectable } from '@nestjs/common';
import { Neo4jService } from '@nhogs/nestjs-neo4j';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(private readonly neo4jService: Neo4jService) {}
  
  async create(createCatDto: CreateCatDto) {
    const queryResult = await this.neo4jService.run(
      {
        cypher: 'CREATE (c:`Cat`) SET c=$props RETURN properties(c) AS cat',
        parameters: {
          props: createCatDto,
        },
      },
      { write: true },
    );

    return queryResult.records[0].toObject().cat;
  }

  async findAll(): Promise<Cat[]> {
    return (
      await this.neo4jService.run({
        cypher: 'MATCH (c:`Cat`) RETURN properties(c) AS cat',
      })
    ).records.map((record) => record.toObject().cat);
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
