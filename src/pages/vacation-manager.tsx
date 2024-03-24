import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { vacationManagerSchema } from '@/utils/validation'

type vacationManagerData = z.infer<typeof vacationManagerSchema>

export function VacationManager() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<vacationManagerData>({
    resolver: zodResolver(vacationManagerSchema),
  })

  async function handleVacationPlans(data: vacationManagerData) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Cadastro enviado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao enviar o cadastro.')
    }
  }

  return (
    <>
      <Helmet title="Home" />
      <div className="p-8 shadow-lg">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cadastre seu plano de férias
            </h1>
            <p className="text-muted-foreground text-sm">
              Aqui você pode cadastrar seu plano de férias.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleVacationPlans)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" type="text" {...register('title')} />

              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}

              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                className="resize-none"
                {...register('description')}
              />

              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}

              <div className="flex items-center justify-around">
                <div>
                  <Label htmlFor="startDate">Data inicial</Label>
                  <Input
                    id="startDate"
                    type="date"
                    {...register('startDate')}
                  />

                  {errors.startDate && (
                    <p className="text-red-500">{errors.startDate.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="endDate">Data final</Label>
                  <Input id="endDate" type="date" {...register('endDate')} />
                </div>

                {errors.endDate && (
                  <p className="text-red-500">{errors.endDate.message}</p>
                )}
              </div>

              <Label htmlFor="location">Local</Label>
              <Input id="location" type="text" {...register('location')} />

              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}

              <Label htmlFor="participants">Participantes</Label>
              <Input
                id="participants"
                type="number"
                {...register('participants')}
              />

              {errors.participants && (
                <p className="text-red-500">{errors.participants.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full disabled:hover:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Enviar cadastro
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
