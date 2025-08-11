<script setup lang="ts">
// 1. vue & composables
import { ref, watch } from 'vue'
import { useDark } from '@vueuse/core'

// 2. shadcn/ui components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'

// 3. internal components
import ListOfPlants from './components/ListOfPlants.vue'

// 4. assets
import sun from '@/assets/images/daytime/sun.png'
import moon from '@/assets/images/daytime/moon.png'
import Calculator from './components/Calculator.vue'

// 5. code
const isFading = ref(false)
const isDark = useDark()

const day_time = ref(isDark.value ? moon : sun)

watch(isDark, (dark) => {
  day_time.value = dark ? moon : sun
})

const switch_day_time = () => {
  isFading.value = true
  setTimeout(() => {
    isDark.value = !isDark.value
    isFading.value = false
  }, 150)
}
</script>

<template>
  <body class="selection:bg-[#aaf] selection:text-[#004]">
    <nav class="h-16 border-b bg-muted/40 flex justify-between items-center px-6">
      <Progress :model-value="66" class="w-5xl" />
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
    <div class="m-10">
      <Calculator />
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent> Card Content </CardContent>
        <CardFooter> Card Footer </CardFooter>
      </Card>
    </div>
    <ListOfPlants />
  </body>
</template>

<style scoped></style>
