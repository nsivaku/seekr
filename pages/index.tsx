import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className="navbar bg-base-100">
    <a className="btn btn-ghost normal-case text-xl">Seekr</a>
    <a>center</a>
  </div>
  )
}
