import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { EditePrato } from "../pages/EditePrato"
import { Menu } from "../pages/Menu"
import { NewPrato } from "../pages/NewPrato"
import { Prato } from "../pages/Prato"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editeprato" element={<EditePrato />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/newprato" element={<NewPrato />} />
      <Route path="/prato/:id" element={<Prato />} />

    </Routes>
  )
} 