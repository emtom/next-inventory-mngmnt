"use client"

import React from 'react'
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const Sidebarlink = ({
  href,
  icon: Icon,
  label,
  isCollapsed
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === '/' && href === '/dashboard');

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center 
        ${ isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'}
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors 
        ${ isActive ? 'bg-blue-200 text-white' : ''}`}>
          <Icon className='w-6 h-6 !text-gray-700' />

          <span className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-gray-700`}>
            {label}
          </span>
        </div>
    </Link>
  )
}

const Sidebar = () => {

  const dispatch = useAppDispatch(); 
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? 'px-5' : 'px-8' }`}>
        <div>logo</div>

        <h1 className={`font-extrabold text-2xl ${isSidebarCollapsed ? 'hidden' : 'block'}`}>App</h1>

        <button className='md:hidden px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
          <Menu className='w-4 h-4' />
        </button>
      </div>

      <div className='flex-grow mt-8'>
        <Sidebarlink
          href='/dashboard'
          label='Dashboard'
          icon={Layout}
          isCollapsed={isSidebarCollapsed}
        />

        <Sidebarlink
          href='/inventory'
          label='Inventory'
          icon={Archive}
          isCollapsed={isSidebarCollapsed}
        />

        <Sidebarlink
          href='/products'
          label='Products'
          icon={Clipboard}
          isCollapsed={isSidebarCollapsed}
        />

        <Sidebarlink
          href='/users'
          label='Users'
          icon={User}
          isCollapsed={isSidebarCollapsed}
        />

        <Sidebarlink
          href='/expenses'
          label='Expenses'
          icon={CircleDollarSign}
          isCollapsed={isSidebarCollapsed}
        />

        <Sidebarlink
          href='/settings'
          label='Settings'
          icon={SlidersHorizontal}
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} mb-10`}>
        <p className='text-center text-xs text-gray-500'>&copy; 2024</p>
      </div>
    </div>
  )
}

export default Sidebar