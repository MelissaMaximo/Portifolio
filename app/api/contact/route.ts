// route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook não configurado no servidor' }, { status: 500 })
  }

  try {
    const body = await request.json()

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: '📬 Nova mensagem do formulário de contato!',
        embeds: [
          {
            title: `Mensagem de ${body.name}`,
            description: body.message,
            fields: [
              {
                name: 'Email',
                value: body.email,
                inline: true
              }
            ],
            color: 0x00ff00,
            timestamp: new Date().toISOString()
          }
        ]
      })
    })

    if (!discordResponse.ok) {
      throw new Error('Falha ao enviar para o Discord')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Erro ao processar a mensagem',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

// Keep your existing GET handler for testing
export async function GET() {
  // ... existing test code ...
}
