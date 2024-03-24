import { z } from 'zod'

export const vacationManagerSchema = z.object({
  title: z.string().min(3, { message: 'Título é obrigatório' }),
  description: z.string().min(6, { message: 'Descrição é obrigatória' }),
  startDate: z.coerce.date().refine((data) => data > new Date(), {
    message: 'A data de início deve ser no futuro',
  }),
  endDate: z.coerce.date().refine((data) => data > new Date()),
  location: z.string().min(3, { message: 'Local é obrigatório' }),
  participants: z
    .number()
    .min(1, { message: 'Número de participantes deve ser maior que 0' })
    .int()
    .positive(),
})
