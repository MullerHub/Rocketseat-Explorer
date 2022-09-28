import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn/Index'
import { SignUp } from '../pages/SignUp/Index'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  )
}