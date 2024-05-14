import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

interface Props {
  navLinks: { href: string; title: string }[]
}

const Header = ({ navLinks }: Props) => {
  return (
    <header className={`my-2 flex h-12 w-full flex-shrink-0 items-center justify-between`}>
      <Link href="/" aria-label={siteMetadata.headerTitle} className="h-full">
        <Logo className="h-full w-auto max-w-[50vw] py-1" />
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            {link.title}
          </Link>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
