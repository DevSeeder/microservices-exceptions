import { Extensions } from '../extensions';
import { HttpStatus } from '@nestjs/common';
import { CustomErrorException } from './custom-error.exception';

export class NotFoundException extends CustomErrorException {
  constructor(element: string) {
    super(
      `${element.capitalize()} not found`,
      HttpStatus.NOT_FOUND,
      HttpStatus.NOT_FOUND,
    );
  }
}
