import { Extensions } from '../extensions';
import { HttpStatus } from '@nestjs/common';
import { CustomErrorException } from './custom-error.exception';

export class EmptyPropException extends CustomErrorException {
  constructor(element: string) {
    super(
      `The property '${element.capitalize()}' cannot be empty`,
      HttpStatus.NOT_ACCEPTABLE,
      2,
    );
  }
}
