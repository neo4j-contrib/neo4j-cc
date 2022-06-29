import { Controller } from '@nestjs/common';
import { ManageService } from './manage.service';

@Controller('manage')
export class ManageController {
  constructor(private readonly manageService: ManageService) {}
}
