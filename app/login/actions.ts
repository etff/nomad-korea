'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { validateCredentials } from '@/lib/utils/auth'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const user = validateCredentials(email, password)

  if (!user) {
    redirect('/login?error=Invalid credentials')
  }

  // Set a simple cookie to maintain session
  const cookieStore = await cookies()
  cookieStore.set('nomadkorea_auth', user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })

  revalidatePath('/', 'layout')
  redirect('/')
}
