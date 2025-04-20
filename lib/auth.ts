// lib/auth.ts
// You can add helper functions for authentication here,
// such as JWT generation/verification, session management, etc.

// Example (if using JWT):
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// export const generateToken = (payload: object) => {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
// };

// export const verifyToken = (token: string) => {
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     return decoded;
//   } catch (error) {
//     return null;
//   }
// };