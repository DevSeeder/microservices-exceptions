import { HttpException } from '@nestjs/common';

export class CustomErrorException extends HttpException {
  private statusCode: number;
  constructor(
    public message: string,
    status: number,
    public errCode: number = -1,
  ) {
    super(message, status);
    this.statusCode = status;
  }

  getStatus(): number {
    return this.statusCode;
  }

  get type(): string {
    return this.constructor.name;
  }
}
