import { NextResponse } from 'next/server';
import { dbConnect, Explanation } from '@/lib/db';

export async function GET() {
  try {
    await dbConnect();
    const explanations = await Explanation.find({});
    return NextResponse.json(explanations);
  }
  catch (error) {
    console.log(error);
  }
}
