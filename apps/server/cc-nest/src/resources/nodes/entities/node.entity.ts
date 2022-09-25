import { ApiProperty } from "@nestjs/swagger";

export class Node {
  
  @ApiProperty()
  labels: string[]
  @ApiProperty()
  properties: Record<string, string | number | boolean>
}
