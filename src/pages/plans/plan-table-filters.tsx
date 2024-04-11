import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const plansFiltersSchema = z.object({
  id: z.string(),
  title: z.string(),
})

type PlansFiltersData = z.infer<typeof plansFiltersSchema>

export function PlanTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
  const title = searchParams.get('title')

  const { register, handleSubmit } = useForm<PlansFiltersData>({
    resolver: zodResolver(plansFiltersSchema),
    values: {
      id: id ?? '',
      title: title ?? '',
    },
  })

  function handleFilterPlans({ id, title }: PlansFiltersData) {
    setSearchParams((state) => {
      if (id) {
        state.set('id', id)
      } else {
        state.delete('id')
      }

      return state
    })

    setSearchParams((state) => {
      if (id) {
        state.set('title', title)
      } else {
        state.delete('title')
      }

      return state
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilterPlans)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do plano"
        className="h-8 w-auto"
        {...register('id')}
      />
      <Input
        placeholder="Título do plano"
        className="h-8 w-[320px]"
        {...register('title')}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
    </form>
  )
}
