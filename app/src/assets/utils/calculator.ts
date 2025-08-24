import z from 'zod'
import type { CalculatorInputType } from '@/assets/interfaces/calculatorInput'

import { PlantSchema } from '@/assets/interfaces/plant'
import plantsData from '@/data/plants.json'
const PlantsRecordSchema = z.record(PlantSchema)
const plants = PlantsRecordSchema.parse(plantsData)

type Season = 'spring' | 'summer' | 'fall' | 'winter'

const ORDER: Season[] = ['spring', 'summer', 'fall', 'winter']

function toAbsoluteDay(season: Season, day: number): number {
  const seasonIndex = ORDER.indexOf(season)
  return seasonIndex * 28 + day
}

export function plantIncome(
  plant: (typeof plants)[keyof typeof plants],
  input: CalculatorInputType,
) {
  const startDay = toAbsoluteDay(input.start_date.season, input.start_date.day)
  const possibleEnds = plant.season.map((s) => toAbsoluteDay(s, 28))
  const validEnds = possibleEnds.filter((d) => d >= startDay)
  const endDay = Math.max(...validEnds)

  let available_time = endDay - startDay
  let harvests = 1
  if (available_time < plant.grow) return 0
  available_time -= plant.grow
  if (plant.regrow) {
    const regrows = Math.floor(available_time / plant.regrow)
    harvests += regrows
  }
  const growingDays = plant.grow + (harvests - 1) * plant.regrow
  const plantCost = Object.keys(plant.buy).length ? Math.min(...Object.values(plant.buy)) : 0
  return (harvests * plant.price * plant.harvest_qty - plantCost) / growingDays
}

export function calculateHigherIncome(input: CalculatorInputType) {
  const filteredPlants = Object.values(plants).filter((plant) => {
    return plant.season.includes(input.start_date.season)
  })
  filteredPlants.forEach((plant) => {
    const income = plantIncome(plant, input)
    console.log(`Income for ${plant.name}: ${income.toFixed(2)}g/day`)
  })
}
