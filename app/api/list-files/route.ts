import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  
  try {
    const files = await fs.readdir(uploadDir);
    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json({ error: 'Could not list files' }, { status: 500 });
  }
}
