import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

export function spaHandler(req: Request, res: Response, next: NextFunction) {
  const { url } = req;
  if (url.indexOf('/api') === 1) {
    // it starts with /api --> continue with execution
    next();
  } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
    // it has a file extension --> resolve the file
    next();
  } else {
    // in all other cases, redirect to the index.html!
    // res.render('index', { message: 'Hello world!', user: JSON.stringify(req.session.passport.user) });
  }
};

// @Catch(NotFoundException)
// export class NotFoundExceptionFilter implements ExceptionFilter {
//   catch(_exception: NotFoundException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse();
//     response.render('index');
//   }
// }
