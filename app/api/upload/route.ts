import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadDir, { recursive: true });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filePath = path.join(uploadDir, file.name);

  try {
    await fs.writeFile(filePath, buffer);
    return NextResponse.json({ message: 'File uploaded successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'File upload failed', error }, { status: 500 });
  }
}
