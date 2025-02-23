import NavBar from '@/components/nav-bar'
import AuthProvider from '@/components/providers/auth-provider'
import './globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="light">
        <AuthProvider>
          {/* <NavBar /> */}
            {children}
        </AuthProvider>
      </body>
    </html>
  )
}
