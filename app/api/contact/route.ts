import { NextResponse } from "next/server"
import {z} from "zod"
import axios from 'axios';

const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string()
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST (request: Request) {

    try{

        const body = await request.json()
        const { name, email, message} = bodySchema.parse(body)

        const messageData = {
            embeds: [
                {
                    title: 'Mensagem de contato',
                    color: 0x4983f5,
                    fields: [
                        {
                            name: 'Nome',
                            value: name,
                            inLine: true,
                        },
                        {
                            name: 'E-mail',
                            value: email,
                            inLine: true,
                        },
                        {
                            name: 'Mensagem',
                            value: message,
                        },
                    ],
                },
            ],
        }

        await axios.post(WEBHOOK_URL, messageData)

        return NextResponse.json({
            message: 'Mensagem enviada com sucesso!'
        })

    } catch (err) {
        console.error(err)
        return NextResponse.error()
    }

}