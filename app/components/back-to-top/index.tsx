{/** 
'use client'

import { Button } from '../button'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  // Função para rolar até a seção de contatos
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Função para mostrar/ocultar o botão de rolar para o topo com base na rolagem da página
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
     
      {show && (
        <motion.div
          className="fixed left-4 bottom-4 z-20"
          initial={{ opacity: 0, left: -10 }}
          animate={{ opacity: 1, left: 16 }}
          exit={{ opacity: 0, left: -10 }}
        >
          <Button
            onClick={handleContact} // Ação de rolar para a seção de contatos
            className="shadow-lg shadow-emerald-400/20"
          >
            Ir para Contatos
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
*/}