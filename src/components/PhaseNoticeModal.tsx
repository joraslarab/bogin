import { X } from 'lucide-react'

export type ModalKind = 'profile' | 'play' | 'create-room' | null

interface PhaseNoticeModalProps {
  kind: ModalKind
  onClose: () => void
}

const MODAL_CONTENT: Record<Exclude<ModalKind, null>, { badge: string; title: string; body: string }> = {
  profile: {
    badge: 'Phase 2 Preview',
    title: 'Player Profile & Guest Access',
    body: 'Sign in, pick a unique Guest Username, inspect your win/loss streaks, and manage friends with Head-to-Head records here once Phase 2 is enabled.',
  },
  play: {
    badge: 'Phase 3 & 4 Preview',
    title: 'Start Playing Bingo',
    body: 'Quick-join an active room or jump into a lobby with a room code. Room lobbies and live N×N gameplay arrive in Phases 3 and 4.',
  },
  'create-room': {
    badge: 'Phase 3 Preview',
    title: 'Create Custom Multiplayer Room',
    body: 'Generate a shareable link for up to 4 players, choose grid size (3×3 to 6×6), set target lines, and toggle Auto or Manual line qualification in Phase 3.',
  },
}

/**
 * Light-theme modal providing clean interactive feedback for Phase 1 UI triggers.
 */
export function PhaseNoticeModal({ kind, onClose }: PhaseNoticeModalProps) {
  if (!kind) return null

  const content = MODAL_CONTENT[kind]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1B18]/30 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="phase-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl border border-[#1E1B18]/10 bg-[#FFFDFC] p-6 shadow-2xl shadow-[#1E1B18]/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-full bg-[#F59E0B]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
            {content.badge}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="cursor-pointer rounded-full p-1.5 text-[#1E1B18]/60 transition-colors hover:bg-[#FB7185]/15 hover:text-[#1E1B18]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <h3 id="phase-modal-title" className="mt-4 text-xl font-extrabold text-[#1E1B18]">
          {content.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#1E1B18]/75">{content.body}</p>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-orange-500 px-5 py-2.5 text-sm font-bold text-[#FFFDFC] shadow-sm shadow-rose-600/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
