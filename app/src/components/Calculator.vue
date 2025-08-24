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
      <FormField type="input" v-slot="{ componentField }" name="cash">
        <FormItem>
          <FormLabel>Cash</FormLabel>
          <FormControl>
            <Input
              v-bind="componentField"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              placeholder="0"
              @input="
                (e: Event) => {
                  const target = e.target as HTMLInputElement
                  const v = target.value.replace(/\D/g, '')
                  if (target.value !== v) target.value = v
                  componentField.onInput?.(e)
                }
              "
            />
          </FormControl>
          <FormDescription>use this if you want to have a limit date</FormDescription>
          <FormMessage>teste</FormMessage>
        </FormItem>
      </FormField>
      <FormField type="select" v-slot="{ componentField }" name="start_date.season">
        <FormItem>
          <FormLabel>Limit Date</FormLabel>
          <FormControl>
            <Select v-bind="componentField">
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="spring"> spring </SelectItem>
                  <SelectItem value="summer"> summer </SelectItem>
                  <SelectItem value="fall"> fall </SelectItem>
                  <SelectItem value="winter"> winter </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>use this if you want to have a limit date</FormDescription>
          <FormMessage>teste</FormMessage>
        </FormItem>
      </FormField>
      <FormField type="input" v-slot="{ componentField }" name="start_date.day">
        <FormItem>
          <FormLabel>Limit Date Day</FormLabel>
          <FormControl>
            <Input
              v-bind="componentField"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              placeholder="1"
              @input="
                (e: Event) => {
                  const target = e.target as HTMLInputElement
                  let v = target.value.replace(/\D/g, '')
                  let num = v ? parseInt(v, 10) : 1
                  if (num > 28) num = 28
                  if (num < 1) num = 1
                  target.value = num.toString()
                  componentField.onInput?.(e)
                }
              "
            />
          </FormControl>
          <FormDescription>use this if you want to have a limit date</FormDescription>
          <FormMessage>teste</FormMessage>
        </FormItem>
      </FormField>
      <div v-if="form.values.use_limit_date">
        <FormField type="select" v-slot="{ componentField }" name="limit_date.season">
          <FormItem>
            <FormLabel>Limit Date</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="spring"> spring </SelectItem>
                    <SelectItem value="summer"> summer </SelectItem>
                    <SelectItem value="fall"> fall </SelectItem>
                    <SelectItem value="winter"> winter </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription>use this if you want to have a limit date</FormDescription>
            <FormMessage>teste</FormMessage>
          </FormItem>
        </FormField>
        <FormField type="input" v-slot="{ componentField }" name="limit_date.day">
          <FormItem>
            <FormLabel>Limit Date Day</FormLabel>
            <FormControl>
              <Input
                v-bind="componentField"
                type="text"
                inputmode="numeric"
                autocomplete="off"
                placeholder="1"
                @input="
                  (e: Event) => {
                    const target = e.target as HTMLInputElement
                    let v = target.value.replace(/\D/g, '')
                    let num = v ? parseInt(v, 10) : 1
                    if (num > 28) num = 28
                    if (num < 1) num = 1
                    target.value = num.toString()
                    componentField.onInput?.(e)
                  }
                "
              />
            </FormControl>
            <FormDescription>use this if you want to have a limit date</FormDescription>
            <FormMessage>teste</FormMessage>
          </FormItem>
        </FormField>
      </div>
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'

import { calculateHigherIncome } from '@/assets/utils/calculator'
import { calculatorInput, type CalculatorInputType } from '@/assets/interfaces/calculatorInput'

const form = useForm({
  validationSchema: calculatorInput,
})

const onSubmit = form.handleSubmit((values: CalculatorInputType) => {
  calculateHigherIncome(values)
})
</script>

<style scoped></style>
