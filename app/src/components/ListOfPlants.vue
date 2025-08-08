<template>
  <div v-for="(plant, key, index) in crops" :key="index">
    {{ plant.harvest_image }} {{ key }}
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

const harvestImages = import.meta.glob('@/assets/images/harvests/*.png', {
  eager: true,
  import: 'default',
})

const seedsImages = import.meta.glob('@/assets/images/seeds/*.png', {
  eager: true,
  import: 'default',
})

const crops = Object.fromEntries(
  Object.entries(plants).map(([key, value]) => {
    // Monta a chave para acessar a imagem certa
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

console.log(crops)
</script>

<style scoped></style>
