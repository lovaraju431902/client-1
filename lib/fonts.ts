// lib/fonts.ts
import { Fraunces, Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  axes: ['opsz'],          // enables the optical size axis (9–144)
  variable: '--font-fraunces',
  display: 'swap',
})