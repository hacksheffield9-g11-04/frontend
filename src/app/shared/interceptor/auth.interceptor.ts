// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtldmluIiwibmFtZSI6IktldmluIiwiX2lkIjoiNjczOGQ3MGI3NmFmNzkwYWM0MTA1MGFjIiwiaWF0IjoxNzMxNzg0MDMyLCJleHAiOjE3MzQzNzYwMzJ9.CdQqf3x2W9A09_80xCRQLUJYl81KfVFuOHVy9uF3G8A';

  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(authReq);
};
