import { NextResponse } from 'next/server';
import { connectDB, query } from '@/lib/db';

export async function GET(request: Request) {
  try {
    await connectDB();
    const jobsResult = await query('SELECT * FROM jobs');
    const jobs = jobsResult.rows;
    return NextResponse.json(jobs);
  } catch (error: any) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch jobs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const { title, company, location, type, description, salary } = await request.json();

    if (!title || !company || !location || !type || !description) {
      return NextResponse.json({ error: 'Missing required job details' }, { status: 400 });
    }

    const newJobResult = await query(
      'INSERT INTO jobs (title, company, location, type, description, salary) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [title, company, location, type, description, salary]
    );

    const newJobId = newJobResult.rows[0]?.id;

    return NextResponse.json({ message: 'Job added successfully', jobId: newJobId }, { status: 201 });
  } catch (error: any) {
    console.error('Error adding job:', error);
    return NextResponse.json({ error: error.message || 'Failed to add job' }, { status: 500 });
  }
}