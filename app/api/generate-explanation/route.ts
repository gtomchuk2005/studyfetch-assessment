import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';
import { dbConnect, Explanation } from '@/lib/db';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  const input = await request.json()
  console.log(input)
  
  const response = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 128,
    system: "Explain every topic given like the user is 5 years old. Keep responses very short and brief, you have a limited number of characters.",
    messages: [{ role: "user", content: JSON.stringify(input.topic) }],
  });

  let output = response.content[0];

  dbConnect();
  const explanation = new Explanation({ name: input.name, topic: input.topic, explanation: output.text});

  await explanation.save();

  console.log(output)

  return NextResponse.json({explanation: output})
}
