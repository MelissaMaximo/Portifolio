import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(3, 'Nome muito curto (mínimo 3 caracteres)'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem muito curta (mínimo 10 caracteres)')
})

export async function POST(req: Request) {
  try {
    // 1. Validar os dados recebidos
    const body = await req.json()
    const { name, email, message } = contactSchema.parse(body)

    // 2. Enviar para o Discord
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (!discordWebhookUrl) {
      throw new Error('Webhook do Discord não configurado')
    }

    const discordPayload = {
      embeds: [
        {
          title: 'Novo Contato Recebido',
          color: 0x0099ff,
          fields: [
            { name: 'Nome', value: name },
            { name: 'E-mail', value: email },
            { name: 'Mensagem', value: message }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    }

    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload)
    })

    if (!discordResponse.ok) {
      throw new Error('Falha ao enviar mensagem para o Discord')
    }

    // 3. Retornar sucesso
    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro no processamento:', error)

    // 4. Tratar diferentes tipos de erro
    let errorMessage = 'Erro interno do servidor'
    let statusCode = 500

    if (error instanceof z.ZodError) {
      errorMessage = error.errors.map((e) => e.message).join(', ')
      statusCode = 400
    } else if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({ success: false, error: errorMessage }, { status: statusCode })
  }
}
