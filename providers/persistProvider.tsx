'use client';

import { store } from '@/store';
import React, { PropsWithChildren } from 'react'
import { persistStore } from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'


let persistor = persistStore(store);

export default function PersistProvider({children}: PropsWithChildren) {
  return (
    <PersistGate persistor={persistor}>
        {children}
    </PersistGate>
  )
}
