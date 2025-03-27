import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})

export async function POST(req: Request) {
  try {
    // Lê o corpo da requisição
    const body = await req.json()
    const { name, email, message } = contactSchema.parse(body)

    // Criação do payload para o Discord
    const discordMessage = {
      content: `Novo Contato:
      Nome: ${name}
      Email: ${email}
      Mensagem: ${message}`
    }

    // Envia para o Discord
    const webhookUrl =
      'https://discord.com/api/webhooks/1354675483727630397/kHdfAXLsDpVsbCRp7VA84lngHpK8c48cgepYPml-zUwdO8GYrfBQms18nlUYPdgJcu1g'
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(discordMessage)
    })

    // Verifica se o envio foi bem-sucedido
    if (!discordResponse.ok) {
      throw new Error('Erro ao enviar a mensagem para o Discord')
    }

    // Retorna a resposta com sucesso
    return NextResponse.json({ success: true, data: { name, email, message } })
  } catch (error) {
    // Tratamento de erro
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 })
  }
}
