import { NotepadText } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function VacationLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r bg-zinc-800 p-10">
        <div className="text-foreground flex items-center gap-3 text-lg text-zinc-50">
          <NotepadText className="h-5 w-5" />
          <span className="font-semibold">vacation.planner</span>
        </div>
        <footer className="text-sm">
          Painel do cadastro &copy; vacation.planner -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
