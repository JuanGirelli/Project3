import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}

interface JwtPayload {
  username: string;
  userId: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
          console.error('JWT verification error:', err);
          return res.sendStatus(403); // Forbidden
      }
      console.log('Decoded token payload:', user); // Log decoded payload
      req.user = user as JwtPayload;
      return next();
  });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};
