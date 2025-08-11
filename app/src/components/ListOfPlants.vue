<template>
  <section class="grid grid-cols-12 gap-4 justify-items-center">
    <div v-for="(plant, key, index) in crops" :key="index" class="col-span-2 m-5">
      <Card>
        <CardHeader>
          <CardTitle>{{ key }}</CardTitle>
          <CardDescription class="flex items-center">
            <img class="m-2" :src="plant.harvest_image" alt="harvest image" />
            <img class="m-2" :src="plant.seeds_image" alt="seed image" />
          </CardDescription>
        </CardHeader>
        <CardContent> price: {{ plant.price }}$ </CardContent>
        <CardFooter>
          <ul>
            seasons:
            <li v-for="(season, index) in plant.season" :key="index">
              {{ season }}
            </li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import plants from '@/data/plants.json'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const crops = Object.fromEntries(
  Object.entries(plants).map(([key, value]) => {
    const harvests_path = `/src/assets/images/harvests/${key}.png`
    const seeds_path = `/src/assets/images/seeds/${key}_seeds.png`

    return [
      key,
      {
        ...value,
        harvest_image: harvests_path,
        seeds_image: seeds_path,
      },
    ]
  }),
)
</script>

<style scoped></style>
