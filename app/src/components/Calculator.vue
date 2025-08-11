<template>
  <div>
    {{ form.values }}
    <Form @submit="onSubmit">
      <FormField type="checkbox" v-slot="{ componentField }" name="use_limit_date">
        <FormItem>
          <FormLabel>Limit Date</FormLabel>
          <FormControl>
            <Checkbox v-bind="componentField" />
          </FormControl>
          <FormDescription>use this if you want to have a limit date</FormDescription>
          <FormMessage>teste</FormMessage>
        </FormItem>
      </FormField>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { calculatorInput } from '@/assets/interfaces/calculatorInput'
import Checkbox from './ui/checkbox/Checkbox.vue'

const form = useForm({
  validationSchema: calculatorInput,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<style scoped></style>
