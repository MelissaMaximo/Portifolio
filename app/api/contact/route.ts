/* eslint-disable prettier/prettier */
import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string() // Prettier mantém a vírgula se trailingComma estiver como "all"
})

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    contactSchema.parse({ name, email, message })
    return NextResponse.json({ success: true, data: { name, email, message } })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'

    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 })
  }
}
