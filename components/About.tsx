'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me</SectionHeading>
      <p className="mb-3">
        Front-end developer based in the United Kingdom. Hey my name is Talia,
        and i'm a passionate frontend developer. <br></br> My passion is to
        create functional and clean sites and applications for users. My current
        main tech stack is React/Next.js in combination with TailwindCSS and
        Typescript.
      </p>
    </motion.section>
  )
}
