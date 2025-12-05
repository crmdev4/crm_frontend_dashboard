"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process (no validation for development)
    setTimeout(() => {
      // Set auth token cookie
      document.cookie = `authToken=dev_token_${Date.now()}; path=/; max-age=86400` // 24 hours
      
      // Redirect to dashboard
      router.push("/dashboard")
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <Image
              src="/icons/flowqu_logo.png"
              alt="Flowqu Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <Card className="w-full shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <CardHeader className="space-y-2 text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-base text-gray-600 dark:text-gray-400">
              Masuk ke akun Anda untuk melanjutkan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </Label>
                  <Link
                    href="/auth/forgot"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Lupa password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-base shadow-md hover:shadow-lg transition-all" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Memproses..." : "Masuk"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 pt-4">
            <div className="text-sm text-center text-gray-600 dark:text-gray-400">
              Belum punya akun?{" "}
              <Link href="/auth/signup" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                Daftar sekarang
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 Flowqu. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}


