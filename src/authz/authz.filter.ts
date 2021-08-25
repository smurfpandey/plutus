import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common'
import { Response } from 'express'

@Catch(UnauthorizedException, ForbiddenException)
export class Unauthorized implements ExceptionFilter {
  constructor() {}
  catch(
    _exception: ForbiddenException | UnauthorizedException,
    host: ArgumentsHost,
  ) {
    // console.log(
    //   _exception instanceof ForbiddenException ? `@Forbidden` : `@Unauthorized`,
    // )
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    response.redirect('/auth/login')
  }
}
