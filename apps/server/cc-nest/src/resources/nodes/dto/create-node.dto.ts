import { ApiProperty } from "@nestjs/swagger";
import {Node} from "../entities/node.entity";

export class CreateNodeDto extends Node {
}
