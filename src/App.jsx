import { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useMatches } from 'react-router-dom'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import icon from './assets/icon.png'

function getNavClass (isMobile, { isActive }) {
  let className = 'rounded-md px-3 py-2 font-medium'
  if (isMobile) {
    className = 'block text-base ' + className
  } else {
    className = 'text-sm ' + className
  }

  if (isActive) {
    className = 'bg-gray-900 text-white ' + className
  } else {
    className = 'text-gray-300 hover:bg-gray-700 hover:text-white ' + className
  }

  return className
}

function getNav (isMobile = false) {
  return (
    <>
      <NavLink to='/' className={(a) => getNavClass(isMobile, a)}>Home</NavLink>
      <NavLink to='/projects' className={(a) => getNavClass(isMobile, a)}>Projects</NavLink>
      <NavLink to='/about' className={(a) => getNavClass(isMobile, a)}>About</NavLink>
    </>
  )
}

function App () {
  const matches = useMatches()
  const { handle, data } = matches[matches.length - 1]
  const title = handle && handle.title ? handle.title(data) : 'rtm516'
  const navOnly = handle && handle.navOnly ? handle.navOnly(data) : false
  const hideFooter = handle && handle.hideFooter ? handle.hideFooter(data) : false

  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  return (
    <>
      <div className={'bg-gray-800 text-white ' + (!navOnly && 'pb-32')}>
        <Disclosure as='nav'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className={'flex h-16 items-center justify-between ' + (!navOnly && 'border-b border-gray-700')}>
                  <div className='flex items-center'>
                    <h1 className='flex-shrink-0 flex items-center'>
                      <img className='size-8' src={icon} /> rtm516
                    </h1>
                  </div>

                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {getNav()}
                    </div>
                  </div>

                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <span className='absolute -inset-0.5' />
                      <span className='sr-only'>Open navigation menu</span>
                      {open
                        ? (
                          <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                          )
                        : (
                          <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                          )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              {/* Mobile menu, show/hide based on menu state. */}
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Disclosure.Panel className='md:hidden'>
                  <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                    {getNav(true)}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        {(!navOnly &&
          <header className='py-10 flex justify-center'>
            <h2 className='px-8 text-5xl'>
              {title}
            </h2>
            {/* TODO Find better colors */}
            {/* <h2 className='px-8 text-5xl font-bold leading-normal bg-clip-text text-transparent bg-gradient-to-br from-[#1e30f3] to-[#e21e80]'>
              {title}
            </h2> */}
          </header>
        )}
      </div>

      <main className={'flex-1 ' + (!navOnly && 'mt-[-8rem]')}>
        <Outlet />
      </main>

      {(!hideFooter &&
        <footer className='bg-gray-800 text-white px-8 py-4'>
          Copyright &copy; Ryan Milner 2019-{new Date().getFullYear()}
        </footer>
      )}
    </>
  )
}

export default App
