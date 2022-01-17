import * as path from 'path';
import { ExceptionFilter, Catch, NotFoundException, HttpException, ArgumentsHost } from '@nestjs/common';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus();

    const reqPath = request.originalUrl;

    if (reqPath.indexOf('/api/') != 0 && reqPath.indexOf('/auth/') != 0) {
      response.render(path.join(__dirname, '../../public/index.hbs'));
    } else {
      response.status(404).send('Nahi hai bhai!');
    }
  }
}
