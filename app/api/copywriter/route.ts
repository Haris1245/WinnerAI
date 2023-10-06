import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



const instruction: OpenAI.Chat.ChatCompletionMessage = {
  role: "system",
  content: "You are a copywriters",
};
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse('Replicate API Key not configured', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openai.chat.completions.create({

      model: "gpt-3.5-turbo",

      messages: [instruction, ...messages],

  })

  return new NextResponse(JSON.stringify(response.choices[0].message))
;
  } catch (error) {
    console.error('[CONSULTANT ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}