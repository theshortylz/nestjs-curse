import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `What's going on man`;
  }

  @Get('new')
  newEndpoint() {
    return `I'm new!`;
  }

  @Get('/ruta/')
  Hello() {
    return 'con / slash /';
  }

  @Get('/api')
  getDataFromExternAPI(): string {
    return this.appService.getHello();
  }
}
