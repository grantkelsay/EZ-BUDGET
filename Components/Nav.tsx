"use client";

import { useState } from 'react';
import { Bars3Icon, XMarkIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';


const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'About', href: '#' },
]

const Nav = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className="bg-[#303c43]">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <CurrencyDollarIcon className='text-[#53D2DC] font-bold h-8 w-auto'/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#53D2DC]"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-[#53D2DC]">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-[#53D2DC]">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
    </div>
  )
}

export default Nav