import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { MoviePreview } from '../pages/MoviePreview'
import { CreateMovie } from '../pages/CreateMovie'
import { SignIn } from '../pages/SignIn/Index'
import { SignUp } from '../pages/SignUp/Index'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/criar" element={<CreateMovie />} />
      <Route path="/filme" element={<MoviePreview />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}
