// route.ts
import { NextResponse } from 'next/server'

// Handler para OPTIONS (necessário para CORS)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }
  )
}

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  // Log para debug (aparecerá nos logs do Vercel)
  console.log('Iniciando processamento do POST...')
  console.log('Webhook URL:', webhookUrl ? '***[REDACTED]***' : 'NÃO CONFIGURADO')

  if (!webhookUrl) {
    console.error('Erro: Webhook não configurado')
    return NextResponse.json(
      { error: 'Webhook não configurado no servidor' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }

  try {
    const body = await request.json()
    console.log('Corpo da requisição:', body)

    // Validação básica dos campos
    if (!body.name || !body.email || !body.message) {
      console.error('Dados incompletos:', body)
      return NextResponse.json(
        { error: 'Dados incompletos no formulário' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    const discordPayload = {
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
    }

    console.log('Enviando para Discord:', discordPayload)
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload)
    })

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text()
      console.error('Erro do Discord:', discordResponse.status, errorText)
      throw new Error(`Falha ao enviar para o Discord: ${errorText}`)
    }

    console.log('Mensagem enviada com sucesso para o Discord')
    return NextResponse.json(
      { success: true },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  } catch (error) {
    console.error('Erro no processamento:', error)
    return NextResponse.json(
      {
        error: 'Erro ao processar a mensagem',
        details: error instanceof Error ? error.message : String(error)
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
}

// GET handler para testes
export async function GET() {
  return NextResponse.json(
    { message: 'Use POST para enviar mensagens' },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  )
}
