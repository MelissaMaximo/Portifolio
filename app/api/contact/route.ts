import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = contactSchema.parse(body)

    return NextResponse.json({ success: true, data: { name, email, message } })
  } catch (error) {
    // Tratamento seguro para o erro
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido'

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 400 }
    )
  }
}
