import { LandingHero } from '../components/LandingHero'

interface HomePageProps {
  onStartPlaying: () => void
  onCreateRoom: () => void
}

/**
 * Primary landing route rendering the Bingo hero section.
 */
export function HomePage({ onStartPlaying, onCreateRoom }: HomePageProps) {
  return (
    <main className="flex-1 bg-[#FFFDFC]">
      <LandingHero onStartPlaying={onStartPlaying} onCreateRoom={onCreateRoom} />
    </main>
  )
}
