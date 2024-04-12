import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { format } from 'date-fns'
import { Plane, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'

import { Pagination } from '@/components/pagination'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getPlan } from '@/data/plans'

import { PlanDetails } from './plan-details'
import { PlanTableFilters } from './plan-table-filters'

export function Plans() {
  const [searchParams] = useSearchParams()
  const queryClient = useQueryClient()

  const id = searchParams.get('id')
  const title = searchParams.get('title')

  const { data: plans } = useQuery({
    queryKey: ['plans', id, title],
    queryFn: () =>
      getPlan({
        id,
        title,
      }),
  })

  const mutation = useMutation({
    mutationFn: () => {
      return queryClient.cancelQueries({ queryKey: ['plan'] })
    },
    onSuccess: () => {
      alert('excluido')
    },
  })

  return (
    <>
      <Helmet title="Planos" />
      <div className="flex flex-col gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              asChild
              className="absolute right-16 top-0 md:right-20 md:top-8"
            >
              <Link to="/">Cadastrar plano</Link>
            </Button>
          </DialogTrigger>

          <PlanDetails />
        </Dialog>

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
                  <TableHead className="w-[10px]">Id</TableHead>
                  <TableHead className="w-[80px]">Título</TableHead>
                  <TableHead className="w-[100px]">Descrição</TableHead>
                  <TableHead className="w-[30px]">Data inicial</TableHead>
                  <TableHead className="w-[30px]">Data final</TableHead>
                  <TableHead className="w-[14px]">Localização</TableHead>
                  <TableHead className="w-[4px]">Participantes</TableHead>
                  <TableHead className="w-[14px]"></TableHead>
                  <TableHead className="w-[14px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans?.map((plan) => {
                  return (
                    <TableRow key={plan.id}>
                      <TableCell></TableCell>
                      <TableCell className="font-mono text-xs font-medium">
                        {plan.id}
                      </TableCell>
                      <TableCell className="font-medium">
                        {plan.title}
                      </TableCell>
                      <TableCell className="font-medium">
                        {plan.description}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {format(plan.initialDate, 'dd/MM/yyyy')}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {format(plan.finalDate, 'dd/MM/yyyy')}
                      </TableCell>
                      <TableCell className="font-medium">
                        {plan.location}
                      </TableCell>
                      <TableCell className="font-medium">
                        {plan.participants}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="xs">
                          <Plane className="mr-2 h-3 w-3" />
                          Aprovar
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => mutation.mutate()}
                        >
                          <X className="mr-2 h-3 w-3" />
                          Excluir
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
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
