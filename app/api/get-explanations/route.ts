import { NextResponse } from 'next/server';
import { dbConnect, Explanation } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  await dbConnect();
  const explanations = await Explanation.find({});
  return NextResponse.json(explanations);
}
