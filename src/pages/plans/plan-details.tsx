import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export function PlanDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Plano: 7463</DialogTitle>
        <DialogDescription>Detalhes do plano</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Título</TableCell>
              <TableCell className="flex justify-end">Lorem ipsum</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Descrição</TableCell>
              <TableCell className="flex justify-end">
                Lorem ipsum elit.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Data inicial
              </TableCell>
              <TableCell className="flex justify-end">10/04/2024</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Data final
              </TableCell>
              <TableCell className="flex justify-end">07/05/2024</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Local</TableCell>
              <TableCell className="flex justify-end">Lisboa</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Participantes
              </TableCell>
              <TableCell className="flex justify-end">03</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button className="w-full disabled:hover:cursor-not-allowed">
          Salvar plano
        </Button>
      </div>
    </DialogContent>
  )
}
