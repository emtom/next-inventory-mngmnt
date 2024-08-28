'use client';

import React from 'react'
import LayoutProvider from '@/app/(components)/layout-provider';
import StoreProvider from '@/app/redux';

interface StateProviderProps {
  children: React.ReactNode;
}

const StateProvider = ({ children }: StateProviderProps) => {
  return (
    <StoreProvider>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </StoreProvider>
  )
}

export default StateProvider;
