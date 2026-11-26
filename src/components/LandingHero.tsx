import { useMemo, useState } from 'react'
import { Play, PlusCircle, Sparkles, Trophy, Users, Zap } from 'lucide-react'

interface LandingHeroProps {
  onStartPlaying: () => void
  onCreateRoom: () => void
}

const PREVIEW_BOARD = [
  4, 11, 7, 15,
  9, 2, 14, 6,
  12, 5, 1, 16,
  8, 13, 10, 3,
]

const PREVIEW_LINES = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
]

/**
 * Bright light-theme landing hero with the primary "Start Playing Bingo" CTA,
 * secondary "Create Room" CTA directly beneath it, and an interactive preview board.
 */
export function LandingHero({ onStartPlaying, onCreateRoom }: LandingHeroProps) {
  const [marked, setMarked] = useState<Set<number>>(() => new Set([0, 5, 10, 15, 2, 9]))

  const { lineCount, winningCells } = useMemo(() => {
    const winning = new Set<number>()
    let count = 0
    for (const line of PREVIEW_LINES) {
      if (line.every((idx) => marked.has(idx))) {
        count += 1
        line.forEach((idx) => winning.add(idx))
      }
    }
    return { lineCount: count, winningCells: winning }
  }, [marked])

  const toggleCell = (idx: number) => {
    setMarked((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
      }
      return next
    })
  }

  return (
    <section className="relative overflow-hidden bg-[#FFFDFC] py-12 sm:py-16 lg:py-20">
      {/* Subtle warm radial glow in pure light palette */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#FB7185]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left column: Hero Copy + Stacked CTAs */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
            <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
            <span>Real-Time Multiplayer • Up to 4 Players</span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#1E1B18] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Build Your Board.{' '}
            <span className="bg-gradient-to-r from-rose-600 via-red-600 to-orange-500 bg-clip-text text-transparent">
              Call the Shot.
            </span>{' '}
            Claim Bingo First.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1E1B18]/75 sm:text-lg">
            Create custom N×N rooms, share a link with up to three friends, take unbiased
            shuffled turns calling numbers, and race to complete your lines in real time.
          </p>

          {/* Stacked Primary & Secondary Hero CTAs */}
          <div className="mt-8 flex max-w-sm flex-col gap-3.5">
            <button
              type="button"
              onClick={onStartPlaying}
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-orange-500 px-7 py-4 text-base font-bold text-[#FFFDFC] shadow-lg shadow-rose-600/25 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 active:translate-y-0"
            >
              <Play className="h-5 w-5 fill-current transition-transform duration-150 group-hover:scale-110" aria-hidden="true" />
              <span>Start Playing Bingo</span>
            </button>

            <button
              type="button"
              onClick={onCreateRoom}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl border-2 border-[#1E1B18]/15 bg-[#FFFDFC] px-7 py-3.5 text-base font-bold text-[#1E1B18] shadow-xs transition-all duration-150 hover:border-[#FB7185] hover:bg-[#FB7185]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 active:scale-[0.99]"
            >
              <PlusCircle className="h-5 w-5 text-[#F59E0B]" aria-hidden="true" />
              <span>Create Room</span>
            </button>
          </div>

          {/* 3-Feature Quick Highlights */}
          <div className="mt-10 grid gap-4 border-t border-[#1E1B18]/10 pt-7 sm:grid-cols-3">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FB7185]/15 text-rose-600">
                <Users className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#1E1B18]">1–4 Player Lobbies</p>
                <p className="text-xs text-[#1E1B18]/65">Live presence & custom grids</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/15 text-[#F59E0B]">
                <Zap className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#1E1B18]">Synced Cross-Mark</p>
                <p className="text-xs text-[#1E1B18]/65">Fair Fisher-Yates turns</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FB7185]/15 text-rose-600">
                <Trophy className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#1E1B18]">Streaks & H2H</p>
                <p className="text-xs text-[#1E1B18]/65">Win streaks & friend stats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive 4x4 Preview Card */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-[#1E1B18]/10 bg-[#FFFDFC] p-5 shadow-xl shadow-[#1E1B18]/5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  Interactive Preview
                </span>
                <h2 className="text-lg font-extrabold text-[#1E1B18]">4×4 Sample Card</h2>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                  lineCount > 0
                    ? 'bg-[#F59E0B]/20 text-[#1E1B18] ring-1 ring-[#F59E0B]/50'
                    : 'bg-[#1E1B18]/5 text-[#1E1B18]/70'
                }`}
              >
                {lineCount} {lineCount === 1 ? 'Line' : 'Lines'} Ready
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {PREVIEW_BOARD.map((num, idx) => {
                const isMarked = marked.has(idx)
                const isWinning = winningCells.has(idx)

                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => toggleCell(idx)}
                    aria-pressed={isMarked}
                    className={`aspect-square cursor-pointer rounded-2xl text-lg font-extrabold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 active:scale-95 ${
                      isWinning
                        ? 'bg-gradient-to-br from-rose-600 via-red-600 to-orange-500 text-[#FFFDFC] ring-2 ring-[#F59E0B] ring-offset-2 ring-offset-[#FFFDFC] shadow-md shadow-rose-600/25'
                        : isMarked
                          ? 'bg-gradient-to-br from-rose-600 via-red-600 to-orange-500 text-[#FFFDFC] shadow-sm shadow-rose-600/20'
                          : 'border border-[#1E1B18]/12 bg-[#FFFDFC] text-[#1E1B18] hover:border-[#FB7185] hover:bg-[#FB7185]/10'
                    }`}
                  >
                    {num}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-[#1E1B18]/10 bg-[#FFFDFC] px-4 py-3">
              <p className="text-xs font-medium text-[#1E1B18]/70">
                Tap tiles to test line detection.
              </p>
              <button
                type="button"
                disabled={lineCount === 0}
                onClick={onStartPlaying}
                className={`rounded-xl px-4 py-2 font-logo text-sm font-bold transition-all ${
                  lineCount > 0
                    ? 'cursor-pointer bg-gradient-to-r from-rose-600 via-red-600 to-orange-500 text-[#FFFDFC] shadow-sm shadow-rose-600/25 hover:scale-105'
                    : 'cursor-not-allowed bg-[#1E1B18]/10 text-[#1E1B18]/40'
                }`}
              >
                BINGO!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
