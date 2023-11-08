"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = () => {
  return ( 
  
  <header className="sticky top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

    {/* Left */}
      <div className="flex items-center h-10 my-auto">
        <Button variant={"miss"} className=" w-full md:w-auto py-2 rounded-md cursor-pointer flex-row items-center text-xl font-exo font-semibold">
            MY.PASAR
        </Button>
      </div>

    {/* Middle */}
      <div className=" flex my-auto w-full gap-1">
        <Input type="search" placeholder="Search" />
          <Button type="submit" className="hidden md:inline-flex">
              Search
          </Button>
      </div>

    {/* Right */}
    <Menu as="div" className="flex my-auto justify-self-end text-left">
            <div>
                <Menu.Button className="inline-flex w-48 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-50">
                     LOGIN
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

            <Menu.Items className="absolute right-6 top-12 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                 <div className="py-3 ">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="hover:bg-gray-300 flex rounded-md "
                >
                  Account settings
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className= "hover:bg-gray-300 flex"
                >
                  Support
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#" className="cursor-pointer ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className="hover:bg-gray-300 w-full flex"
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
            </div>
            </Menu.Items>
            </Transition>
            </Menu>
  </header> 

  );
}
 
export default Header;