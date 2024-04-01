import { Plane, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { PlanDetails } from './plan-details'
export function PlanTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do plano</span>
            </Button>
          </DialogTrigger>

          <PlanDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">1234</TableCell>
      <TableCell className="font-medium">Lorem ipsum</TableCell>
      <TableCell className="font-medium">Lorem ipsum elit.</TableCell>
      <TableCell className="text-muted-foreground">10/04/2024</TableCell>
      <TableCell className="text-muted-foreground">07/05/2024</TableCell>
      <TableCell className="font-medium">Lisboa</TableCell>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <Plane className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Excluir
        </Button>
      </TableCell>
    </TableRow>
  )
}
