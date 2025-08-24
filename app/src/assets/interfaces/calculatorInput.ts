import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const dateSchema = z.object({
  season: z.enum(['spring', 'summer', 'fall', 'winter']).default('spring'),
  day: z.coerce.number().int().min(1).max(30).default(1),
})

const rawCalculatorInput = z.object({
  start_date: dateSchema,
  limit_date: dateSchema,
  cash: z.coerce.number().min(0).default(0),
  use_limit_date: z.boolean().optional(),
})

export type CalculatorInputType = z.infer<typeof rawCalculatorInput>
export const calculatorInput = toTypedSchema(rawCalculatorInput)
