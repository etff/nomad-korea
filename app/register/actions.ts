'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { findUserByEmail, registerUser } from '@/lib/utils/auth'

export async function signup(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string || email.split('@')[0]

  // Check if user already exists
  const existingUser = findUserByEmail(email)
  if (existingUser) {
    redirect('/register?error=Email already in use')
  }

  // Register new user
  const newUser = registerUser(email, password, name)

  // Set a simple cookie to maintain session
  const cookieStore = await cookies()
  cookieStore.set('nomadkorea_auth', newUser.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })

  revalidatePath('/', 'layout')
  redirect('/')
}
