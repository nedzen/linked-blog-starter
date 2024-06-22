import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <h3><Link href="/" className="block hover:underline" aria-label="Marius was here"> Marius was here </Link></h3>
    </header>
  )
}

export default Header
