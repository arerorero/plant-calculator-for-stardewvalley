<template>
  <div v-for="(plant, key, index) in crops" :key="index">
    <Avatar class="h-12 w-12">
      <AvatarImage :src="plant.harvest_image" :alt="key" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
    <Avatar class="h-12 w-12">
      <AvatarImage :src="plant.seeds_image" :alt="`${key}_seed`" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import plants from '@/data/plants.json'

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
