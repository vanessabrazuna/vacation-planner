import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createPlan } from '@/data/plan'
import { validationPlanSchema } from '@/utils/validation'

type ValidationPlanData = z.infer<typeof validationPlanSchema>

export function PlanDetails() {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ValidationPlanData>({
    resolver: zodResolver(validationPlanSchema),
  })

  const { mutateAsync: createPlanFn } = useMutation({
    mutationFn: createPlan,
    onSuccess(_, variables) {
      const cached = queryClient.getQueryData(['plan'])

      queryClient.setQueryData(['plan'], (data) => {
        return [
          ...data,
          {
            id: Math.floor(Math.random() * 9000) + 1000, // id 4 dígitos
            title: variables.title,
            description: variables.description,
            initialDate: variables.initialDate,
            finalDate: variables.finalDate,
            location: variables.location,
            participants: variables.participants,
          },
        ]
      })
    },
  })

  async function handlePlanDetails(data: ValidationPlanData) {
    try {
      await createPlanFn({
        title: data.title,
        description: data.description,
        initialDate: data.startDate,
        finalDate: data.endDate,
        location: data.location,
        participants: data.participants,
      })

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Cadastro enviado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao enviar o cadastro.')
    }

    reset()
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Plano: 7463</DialogTitle>
        <DialogDescription>Detalhes do plano</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <form onSubmit={handleSubmit(handlePlanDetails)} className="space-y-4">
          <div className="space-y-4">
            <Input
              id="title"
              type="text"
              placeholder="Título"
              {...register('title')}
            />

            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}

            <Textarea
              id="description"
              placeholder="Descrição"
              className="resize-none"
              {...register('description')}
            />

            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}

            <div className="flex items-center gap-6">
              <div className="w-full">
                <Input
                  id="startDate"
                  type="date"
                  {...register('startDate')}
                  placeholder="Data inicial"
                />

                {errors.startDate && (
                  <p className="text-red-500">{errors.startDate.message}</p>
                )}
              </div>

              <div className="w-full">
                <Input
                  id="endDate"
                  type="date"
                  {...register('endDate')}
                  placeholder="Data final"
                />

                {errors.endDate && (
                  <p className="text-red-500">{errors.endDate.message}</p>
                )}
              </div>
            </div>

            {errors.endDate && (
              <p className="text-red-500">{errors.endDate.message}</p>
            )}

            <Input
              id="location"
              type="text"
              placeholder="Local"
              {...register('location')}
            />

            {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}

            <Input
              id="participants"
              type="number"
              placeholder="Participantes"
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
            Salvar plano
          </Button>
        </form>
      </div>
    </DialogContent>
  )
}
