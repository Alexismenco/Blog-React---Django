import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'


const navigation = [
    { name: 'Inicio', href: '/', current: true },
    { name: 'Blog', href: '/blog', current: true },
    { name: 'Quienes somos', href: '/about', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar(){

    // SEARCH
    const [term,setTerm]=useState('')

    const handleChange=e=>{
      setTerm(e.target.value)
    }

    const onSubmit= e =>{
      e.preventDefault()
      setTimeout(() => window.location.href=('/search/'+term), 0.2);
      setTerm('')
    }

    return(
        <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-dark shadow-sm lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                    <h3 className='texto text-xl'>Economy Inc.</h3>
                    </NavLink>
                    
                  </div>
                </div>

                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <form onSubmit={e=>onSubmit(e)} className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Buscar
                      </label>
                      <div className="relative">
                        <button
                        type="submit"
                        className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </button>
                        <input
                          id="search"
                          name="search"
                          required
                          onChange={(e)=>{handleChange(e)}}
                          className="block w-full bg-dark border text-white border-red-400 rounded-md py-2 pl-10 pr-3 text-sm placeholder-red-400 focus:outline-none focus:text-white focus:placeholder-red-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                          placeholder="Buscar"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-red-500 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4 t">
                {navigation.map((item) => (
                  
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.href===window.location.pathname ? 'bg-transparent text-white font-bold ' : 'hover:text-white text-indigo-600 hover:font-extrabold',
                      'block rounded-md py-2 px-3 text-base font-medium '
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
                </div>
              </div>
            </div>
            
            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.href===window.location.pathname ? 'bg-transparent text-white font-bold ' : 'hover:bg-gray-50 text-indigo-600',
                      'block rounded-md py-2 px-3 text-base font-medium '
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Popover.Panel>
           
          </>
        )}
      </Popover>
    </>
    )
}

export default Navbar