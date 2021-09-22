import { Module } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookResolver } from './notebook.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Notebook } from './notebook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notebook])],
  providers: [NotebookResolver, NotebookService],
})
export class NotebookModule {}
