<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import sun from '@/assets/images/daytime/sun.png'
import moon from '@/assets/images/daytime/moon.png'
import { onMounted, ref } from 'vue'
import ListOfPlants from './components/ListOfPlants.vue'
const day_time = ref(sun)

onMounted(() => {
  if (document.documentElement.classList.contains('dark')) {
    day_time.value = moon
  }
})

const switch_day_time = () => {
  const html = document.documentElement
  isFading.value = true
  setTimeout(() => {
    day_time.value = day_time.value === sun ? moon : sun
    html.classList.toggle('dark')
    isFading.value = false
  }, 150)
}
const isFading = ref(false)
</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <div></div>
    <Avatar class="h-12 w-12">
      <AvatarImage
        @click="switch_day_time()"
        :src="day_time"
        class="cursor-pointer transition-all duration-300 scale-90 hover:scale-100"
        :class="{ 'opacity-0': isFading, 'opacity-100': !isFading }"
        alt="tema"
      />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  </nav>
  <ListOfPlants />
  <div class="m-10">
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent> Card Content </CardContent>
      <CardFooter> Card Footer </CardFooter>
    </Card>
  </div>
</template>

<style scoped></style>
