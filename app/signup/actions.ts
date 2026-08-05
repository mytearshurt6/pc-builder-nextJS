'use server'

import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

const MIN_PASSWORD_LENGTH = 8
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type SignUpState = { error?: string }

export async function signUpAction(
  _prevState: SignUpState | null,
  formData: FormData,
): Promise<SignUpState> {
  //maybe always validate on the client to not add undefined here, 1(?)
  const name = formData.get('name') as string | undefined
  const email = formData.get('email') as string | undefined
  const password = formData.get('password') as string | undefined

  if (!email) {
    return {
      error: 'Enter an email',
    }
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      error: 'Incorrect email format',
    }
  }

  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    return {
      error: 'Password must be at least 8 characters long',
    }
  }

  const isUser = await prisma.user.findUnique({
    where: { email },
  })

  if (isUser) {
    return {
      error: 'Email is already taken',
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  })

  redirect('/login')
}
