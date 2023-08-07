import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>, // private configService: ConfigService,
  ) {}

  getHello(): any {
    return this.configService;
  }
}
