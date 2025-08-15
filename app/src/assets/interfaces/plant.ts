import * as z from 'zod'

export const PlantSchema = z.object({
  name: z.string(),
  season: z.array(z.enum(['spring', 'summer', 'fall', 'winter'])),
  regrow: z.number().int().min(0),
  grow: z.number().int().min(0),
  harvest_qty: z.number().int().min(1),
  price: z.number().int().min(0),
  buy: z.record(z.number().int()),
})
