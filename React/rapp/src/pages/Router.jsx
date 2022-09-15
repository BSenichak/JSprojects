import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Todos } from './Todos'
import { Editor } from './Editor'

export function Router({ children }) {
  return (
    <BrowserRouter>
      <div>{children}</div>
      <div>
        <Routes>
          <Route path="/todos" element={<Todos />}/>
          <Route path="/editor" element={<Editor />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
