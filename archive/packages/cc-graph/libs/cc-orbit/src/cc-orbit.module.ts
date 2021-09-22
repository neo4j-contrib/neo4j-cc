import { Module } from '@nestjs/common';
import { CcOrbitService } from './cc-orbit.service';

@Module({
  providers: [CcOrbitService],
  exports: [CcOrbitService],
})
export class CcOrbitModule {}
