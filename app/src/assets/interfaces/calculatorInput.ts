import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const dateSchema = z.object({
  season: z.enum(['spring', 'summer', 'fall', 'winter']).default('spring'),
  day: z.number().int().min(1).max(30).default(1),
})

export const calculatorInput = toTypedSchema(
  z.object({
    start_date: dateSchema,
    limit_date: dateSchema,
    cash: z.number().min(0).default(0),
    use_limit_date: z.boolean().optional(),
  }),
)
