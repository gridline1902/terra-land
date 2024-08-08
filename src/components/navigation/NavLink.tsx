import Link from 'next/link'
import { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
}

export function NavLink({ href, children }: Readonly<NavLinkProps>) {
  return (
    <Link
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-50 hover:text-slate-900"
      href={href}
    >
      {children}
    </Link>
  )
}
