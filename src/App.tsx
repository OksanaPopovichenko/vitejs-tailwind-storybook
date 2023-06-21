import React from 'react'
import { Header } from './components/Header'

export default function App(): JSX.Element {
  return (
    <div className="max-w-[1024px] m-auto">
      <h1 className="bg-orange-200 font-bold p-4">Hello world!</h1>
      <Header
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    </div>
  )
}
