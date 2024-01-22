"use client"
import { useRouter } from "next/navigation"
export default function AuthLayout() {
  const router = useRouter()

  return (
    <>
      <h1>Авторизация</h1>
      <button onClick={() => router.push('/')}>Переход на корень</button>
    </>      
  )
}
