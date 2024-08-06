import { PropsWithChildren } from "react";
import NavAppBar from "../components/layout/NavBar";
import { useWallet } from '@solana/wallet-adapter-react'


 
export default function Layout({ children }: PropsWithChildren) {
  const { connected, publicKey } = useWallet()
  return (
    <>
      <NavAppBar connected={connected} publicKey={publicKey} />
      <main>
      {children}
      </main>
    </>
  )
}