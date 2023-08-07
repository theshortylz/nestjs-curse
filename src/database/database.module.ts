import { Module, Global } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request = http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = lastValueFrom(request);
        return (await tasks).data;
      },
      inject: [HttpService],
    },
  ],
  exports: ['TASKS'],
})
export class DatabaseModule {}
