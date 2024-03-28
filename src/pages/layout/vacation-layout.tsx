import { NotepadText } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function VacationLayout() {
  return (
    <div className="grid min-h-screen auto-cols-auto lg:grid-cols-2">
      <div className="flex h-[500px] flex-col justify-between border-r border-foreground/5 bg-muted bg-zinc-800 p-10 text-muted-foreground lg:h-full">
        <div className="flex items-center gap-3 text-lg text-foreground text-zinc-50">
          <NotepadText className="h-5 w-5" />
          <span className="font-semibold">vacation.planner</span>
        </div>
        <footer className="text-sm">
          Painel do cadastro &copy; vacation.planner -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
