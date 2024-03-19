import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import digitalhippo from '@/public/digitalhippo.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Developer',
    location: 'United Kingdom',
    description:
      'I am a full-stack developer working on developing applications for the business. My tech stack includes, C#, .NET, PowerPlatform, Python, Azure, Docker and more.',
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
] as const

export const projectsData = [
  {
    title: 'DigitalHippo',
    description:
      'A FullStack E-commerce website built with React, Next.js, MongoDB, Tailwind, and Stripe. It has a fully functional shopping cart and payment processing.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Stripe'],
    imageUrl: digitalhippo,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Express',
  'Framer Motion',
] as const
