import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CustomErrorExceptionFilter } from './custom-error-exception.filter';
import { ErrorExceptionFilter } from './error-exception.filter';
import { HttpExceptionFilter } from './http-exception.filter';
import { MongoDBExceptionFilter } from './mongodb-exception.filter';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: CustomErrorExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ErrorExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: MongoDBExceptionFilter,
    },
  ],
  exports: [],
})
export class FiltersModule {}
