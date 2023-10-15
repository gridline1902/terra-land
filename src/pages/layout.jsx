import NavAppBar from "../components/NavBar";
import { useWallet } from '@solana/wallet-adapter-react'


 
export default function Layout({ children }) {
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