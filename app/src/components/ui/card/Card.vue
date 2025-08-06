<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'flex flex-col gap-6 py-6 font-pixel bg-[#fdf6e3] text-[#3c2f1b] p-6 rounded-lg shadow-[0_0_0_4px_#7b4a12,0_2px_8px_rgba(0,0,0,0.25)] border-4 border-[#a9713d] max-w-md mx-auto',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
