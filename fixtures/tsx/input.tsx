import * as React from 'react'

export interface TAppProps { children: React.ReactNode }

export function App({ children }: TAppProps) { return ( <div><h1>{children}</h1></div> ) }
