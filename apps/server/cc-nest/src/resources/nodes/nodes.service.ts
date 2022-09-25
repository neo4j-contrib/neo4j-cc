import { Injectable } from '@nestjs/common';
import { Neo4jService } from '@nhogs/nestjs-neo4j';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';
import { Node } from './entities/node.entity'

@Injectable()
export class NodesService {
  constructor(private readonly neo4jService: Neo4jService) {}
  
  async create(createNodeDto: CreateNodeDto) {
    const queryResult = await this.neo4jService.run(
      {
        cypher: `
        CALL apoc.create.node($labels, $props) YIELD node
        RETURN node`,
        parameters: {
          labels: createNodeDto.labels,
          props: createNodeDto.properties
        },
      },
      { write: true },
    );
  }

  async findAll(): Promise<Node[]> {
    return (
      await this.neo4jService.run({
        cypher: 'MATCH (n) RETURN { labels: labels(n), properties: properties(n) } AS node',
      })
    ).records.map((record) => record.toObject().node);
  }

  findOne(id: number) {
    return `This action returns a #${id} node`;
  }

  update(id: number, updateNodeDto: UpdateNodeDto) {
    return `This action updates a #${id} node`;
  }

  remove(id: number) {
    return `This action removes a #${id} node`;
  }
}
