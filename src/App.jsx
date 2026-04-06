import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './components/Layout.jsx'
import BoardPage from './pages/BoardPage.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
