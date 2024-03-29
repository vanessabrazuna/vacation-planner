import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Plans() {
  return (
    <>
      <Helmet title="Planos" />
      <div className="flex flex-col gap-4">
        <Button
          variant="link"
          asChild
          className="absolute right-16 top-0 md:top-8"
        >
          <Link to="/">Cadastrar plano</Link>
        </Button>

        <div className="absolute right-6 top-0.5 md:top-8">
          <ThemeToggle />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Planos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Título do plano" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border"></div>
      </div>
    </>
  )
}
