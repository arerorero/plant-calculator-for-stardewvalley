import z from 'zod'
import type { CalculatorInputType } from '../assets/interfaces/calculatorInput'

import { PlantSchema } from '@/assets/interfaces/plant'
import plantsData from '@/data/plants.json'
const PlantsRecordSchema = z.record(PlantSchema)
const plants = PlantsRecordSchema.parse(plantsData)

export function plantIncome(
  plant: (typeof plants)[keyof typeof plants],
  input: CalculatorInputType,
) {
  console.log(`Calculating income for ${plant.name}...`)
  let available_time = plant.season.length * 28 - input.start_date.day
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
    console.log(`Income for ${plant.name}:`, income)
  })
}
