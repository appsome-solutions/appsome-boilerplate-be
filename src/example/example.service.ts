import { Injectable } from '@nestjs/common';
import { Example } from './dto/example.dto';

@Injectable()
export class ExampleService {
  async getExample(): Promise<Example> {
    return {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
    };
  }
}
