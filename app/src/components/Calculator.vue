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
      <Button type="submit" class="cursor-pointer"> Submit </Button>
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
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'

import { calculateHigherIncome } from '@/utils/calculator'
import { calculatorInput, type CalculatorInputType } from '@/assets/interfaces/calculatorInput'

const form = useForm({
  validationSchema: calculatorInput,
})

const onSubmit = form.handleSubmit((values: CalculatorInputType) => {
  calculateHigherIncome(values)
})
</script>

<style scoped></style>
