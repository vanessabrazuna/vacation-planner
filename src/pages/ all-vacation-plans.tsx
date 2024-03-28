import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'

export function AllVacationPlans() {
  return (
    <>
      <Helmet title="All Vacation Plan" />
      <div className="p-8">
        <Button variant="link" asChild className="absolute right-12 top-2">
          <Link to="/">Cadastrar plano</Link>
        </Button>

        <div className="absolute right-3 top-2">
          <ThemeToggle />
        </div>

        <h1>Lista de planos de férias</h1>
      </div>
    </>
  )
}
