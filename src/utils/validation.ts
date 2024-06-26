import { format } from 'date-fns'
import { z } from 'zod'

export const validationPlanSchema = z.object({
  title: z.string().min(3, { message: 'Título é obrigatório' }),
  description: z.string().min(6, { message: 'Descrição é obrigatória' }),
  initialDate: z
    .string()
    .refine(
      (data) => {
        if (!data) return false
        const date = new Date(data)
        return (
          date instanceof Date && !isNaN(date.getTime()) && date > new Date()
        )
      },
      {
        message: 'A data de início deve ser no futuro',
      },
    )
    .transform((date) => format(date, 'yyyy-MM-dd')),

  finalDate: z
    .string()
    .refine(
      (data) => {
        if (!data) return false
        const date = new Date(data)
        return (
          date instanceof Date && !isNaN(date.getTime()) && date > new Date()
        )
      },
      {
        message: 'Deve ser posterior à data de início',
      },
    )
    .transform((date) => format(date, 'yyyy-MM-dd')),

  location: z.string().min(3, { message: 'Local é obrigatório' }),
  participants: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => val > 0, {
      message: 'Número de participantes deve ser maior que 0.',
    }),
})
