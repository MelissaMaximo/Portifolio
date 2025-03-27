'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { SectionTitle } from '../section-title'
import { Button } from '../button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

const ContactFormSchema = z.object({
  name: z.string().min(3, 'Nome precisa ter pelo menos 3 caracteres'),
  email: z.string().email('Por favor, insira um e-mail válido'),
  message: z.string().min(10, 'A mensagem precisa ter pelo menos 10 caracteres').max(500)
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/contact', data)

      if (response.data.success) {
        toast.success('Mensagem enviada com sucesso!')
        reset()
      } else {
        throw new Error(response.data.error || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro no envio:', error)
      toast.error(
        axios.isAxiosError(error)
          ? error.response?.data?.error || 'Erro ao enviar mensagem'
          : 'Falha na conexão'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form className="mt-12 w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              placeholder="Nome"
              className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-red-400 text-sm mt-1 block">{errors.name.message}</span>
            )}
          </div>

          <div>
            <input
              placeholder="E-mail"
              type="email"
              className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
              {...register('email')}
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-1 block">{errors.email.message}</span>
            )}
          </div>

          <div>
            <textarea
              placeholder="Mensagem"
              className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
              maxLength={500}
              {...register('message')}
            />
            {errors.message && (
              <span className="text-red-400 text-sm mt-1 block">{errors.message.message}</span>
            )}
          </div>

          <Button className="w-max mx-auto mt-6 shadow-button" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            {!isLoading && <HiArrowNarrowRight size={18} />}
          </Button>
        </form>
      </div>
    </section>
  )
}
