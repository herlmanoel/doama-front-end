import { auth as authOptions } from '@/lib/auth-config'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { BsShieldCheck } from 'react-icons/bs'

const linkItems = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Auth (Client)',
    path: '/auth-client'
  },
  {
    label: 'Auth (Server)',
    path: '/auth-server'
  },
  {
    label: 'Admin Only',
    path: '/admin-only'
  }
] as const

type LinkType = (typeof linkItems)[number]

const NavBar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <header>
      <nav className="shadow-b--md container my-2 flex items-center justify-around border-b-[0.5px]  py-2 shadow-green-100/20">
        <button>
          <BsShieldCheck
            color={session ? 'green' : 'red'}
            className="h-24 w-24"
          />
        </button>
        <div className="flex space-x-2">
          {linkItems.map(({ label, path }: LinkType) => (
            <Link
              className="rounded-sm  bg-green-800/40 p-2"
              key={label}
              href={path}
            >
              {label}
            </Link>
          ))}
        </div>
        <button>
          {session ? (
            <Link href={'/api/auth/signout?callbackUrl=/'}>
              <BiLogOut color="red" className="h-10 w-10" />
            </Link>
          ) : (
            <Link href={'/api/auth/signin?callbackUrl=/'}>
              <BiLogIn color="green" className="h-10 w-10" />
            </Link>
          )}
        </button>
      </nav>
    </header>
  )
}

export default NavBar
