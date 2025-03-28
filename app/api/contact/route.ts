import { NextResponse } from 'next/server'

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Webhook não configurado' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  }

  try {
    const body = await request.json()

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: '📬 Nova mensagem do formulário!',
        embeds: [
          {
            title: `Mensagem de ${body.name}`,
            description: body.message,
            fields: [{ name: 'Email', value: body.email }],
            color: 0x00ff00
          }
        ]
      })
    })

    if (!discordResponse.ok) throw new Error('Falha no Discord')

    return NextResponse.json(
      { success: true },
      { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  }
}
