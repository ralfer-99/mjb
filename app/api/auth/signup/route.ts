import { NextResponse } from 'next/server';
import { connectDB, query } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 });
    }

    const existingUserResult = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUserResult.rows.length > 0) {
      return NextResponse.json({ error: 'Email address is already registered' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserResult = await query(
     'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, hashedPassword]
    );

    const newUser = newUserResult.rows[0];

    return NextResponse.json({ message: 'Signup successful', user: newUser }, { status: 201 });
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}