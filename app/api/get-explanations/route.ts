import { NextResponse } from 'next/server';
import { dbConnect, Explanation } from '@/lib/db';

export async function GET() {
  await dbConnect();
  const explanations = await Explanation.find({});
  return NextResponse.json(explanations);
}
