import {
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Antes...');

        const now = Date.now();

        return next
            .handle()
            .pipe(tap(() => console.log(`Depois... ${Date.now() - now}ms `)));
    }
}
