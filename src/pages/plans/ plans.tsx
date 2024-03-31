import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Pagination } from '@/components/pagination'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { PlanTableFilters } from './plan-table-filters'
import { PlanTableRow } from './plan-table-row'

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

        <div className="space-y-2.5">
          <PlanTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[4px]"></TableHead>
                  <TableHead className="w-[2px]">Id</TableHead>
                  <TableHead className="w-[430px]">Título</TableHead>
                  <TableHead className="w-[570px]">Descrição</TableHead>
                  <TableHead className="w-[40px]">Data inicial</TableHead>
                  <TableHead className="w-[40px]">Data final</TableHead>
                  <TableHead className="w-[14px]">Localização</TableHead>
                  <TableHead className="w-[4px]">Participantes</TableHead>
                  <TableHead className="w-[160px]">Status</TableHead>
                  <TableHead className="w-[14px]"></TableHead>
                  <TableHead className="w-[14px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 7 }).map((_, i) => {
                  return <PlanTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={52} perPage={7} />
        </div>
      </div>
    </>
  )
}
