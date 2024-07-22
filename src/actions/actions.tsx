'use server'

import { revalidatePath } from 'next/cache'

export async function submitForm(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    number: formData.get('number'),
    message: formData.get('text'),
    agreement: formData.get('agreement'),
  }

  console.log(rawFormData)

  revalidatePath('/products')
}
