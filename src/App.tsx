import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { PhaseNoticeModal, type ModalKind } from './components/PhaseNoticeModal'
import { HomePage } from './pages/HomePage'

/**
 * Application root configuring routing, shared Navbar, and Phase 1 preview modals.
 */
export function App() {
  const [modalKind, setModalKind] = useState<ModalKind>(null)

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#FFFDFC] text-[#1E1B18]">
        <Navbar onOpenProfile={() => setModalKind('profile')} />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onStartPlaying={() => setModalKind('play')}
                onCreateRoom={() => setModalKind('create-room')}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <PhaseNoticeModal kind={modalKind} onClose={() => setModalKind(null)} />
      </div>
    </BrowserRouter>
  )
}

export default App
