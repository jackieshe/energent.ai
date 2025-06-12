import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { NavItem } from '../types/index'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const location = useLocation()
  const { t } = useTranslation()

  const navigation: NavItem[] = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.chat'), href: '/chat' },
    { name: t('nav.features'), href: '/features' },
    { name: t('nav.about'), href: '/about' },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {t('home.title')}
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href
                          ? 'border-primary-500 text-gray-900 dark:text-white'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-600',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <LanguageSwitcher />
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">{t('nav.language')}</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-primary-50 dark:bg-gray-700 border-primary-500 text-primary-700 dark:text-white'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors duration-200'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 