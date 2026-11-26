import { Link } from 'react-router-dom'
import { UserRound } from 'lucide-react'

interface NavbarProps {
  onOpenProfile: () => void
}

/**
 * Top navigation bar featuring the playful gradient-red "Bingo" wordmark
 * on the left and the "Visit Profile" action button on the right.
 */
export function Navbar({ onOpenProfile }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#1E1B18]/10 bg-[#FFFDFC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 focus:outline-none"
          aria-label="Bingo Home"
        >
          <span className="inline-flex h-9 w-9 -rotate-6 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 via-red-600 to-orange-500 font-logo text-xl font-bold text-[#FFFDFC] shadow-sm shadow-rose-600/25 transition-transform duration-200 group-hover:rotate-0 group-hover:scale-105">
            B
          </span>
          <span className="font-logo text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-rose-600 via-red-600 to-orange-500 bg-clip-text transition-transform duration-200 group-hover:scale-[1.02]">
            Bingo
          </span>
          <span
            className="mt-2 h-2 w-2 rounded-full bg-[#F59E0B] transition-transform duration-200 group-hover:scale-125"
            aria-hidden="true"
          />
        </Link>

        <button
          type="button"
          onClick={onOpenProfile}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#1E1B18]/15 bg-[#FFFDFC] px-4 py-2 text-sm font-semibold text-[#1E1B18] shadow-xs transition-all duration-150 hover:border-[#FB7185] hover:bg-[#FB7185]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 active:scale-[0.98]"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F59E0B]/15 text-[#F59E0B]">
            <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span>Visit Profile</span>
        </button>
      </div>
    </header>
  )
}
