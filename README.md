# Bingo — Real-Time Multiplayer Bingo

A fast, bright, real-time multiplayer **Bingo** web application built with React, TypeScript, Tailwind CSS v4, and Supabase. Create custom rooms for up to 4 players, build your own board, call numbers in fair shuffled turns, and race to complete your winning lines.

---

## Features

- **Guest & Account Profiles:** Jump in instantly as a guest with a unique username or sign in to save your career stats.
- **Stats & Streaks:** Track Games Won, Games Lost, Current Winning Streak, and Highest Winning Streak.
- **Friends & Head-to-Head:** Send and accept friend requests by username and inspect head-to-head win/loss records.
- **Custom Multiplayer Lobbies (1–4 Players):** Share a room link or code with live presence indicators. Hosts customize the grid size ($3\times3$ to $6\times6$), required lines to win, and Auto-Qualify vs. Manual-Qualify line mode.
- **Custom Board Setup:** Fill your $N\times N$ board with one-click **Random Fill** or click cells sequentially to place numbers $1$ through $N^2$.
- **Unbiased Turn Calling & Sync:** Shuffled Fisher-Yates turn order where each called number automatically marks matching squares across every player's board.
- **Instant `BINGO!` Win Trigger:** As soon as your qualified lines reach the target count, hit **BINGO!** to claim victory and broadcast a confetti celebration to the room.

---

## Game Rules

1. **Join or Create a Room:** Up to 4 players join a room via link or code. The host sets the grid size ($N\times N$), target line count, and line qualification mode.
2. **Build Your Board:** Before the first call, fill every square with unique numbers from $1$ to $N^2$ either manually in sequence or using Random Fill.
3. **Take Turns Calling:** Turn order is randomized fairly at match start. On your turn, pick one uncalled number—it automatically marks that number on all players' boards.
4. **Qualify Lines:** Complete horizontal, vertical, or diagonal lines (automatically tracked or manually selected depending on room settings).
5. **Call BINGO!:** Once you have enough qualified lines, press **BINGO!** immediately—first player to press wins!

---

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, React Router
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Backend & Realtime:** Supabase (Auth, Postgres, Realtime Presence & Broadcast)
- **UI & Effects:** `lucide-react`, `canvas-confetti`

---

## Local Setup

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env` file in the project root with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build and lint:**
   ```bash
   npm run build
   npm run lint
   ```
