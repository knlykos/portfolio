<script setup>
import {ref} from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'
import router from "@/router";


const mobileMenuOpen = ref(false)
const navigateToMap = ($event) => {
  router.push('/path')
}
</script>
<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">SD Bike Paths</span>
          <img class="h-8 w-auto" src="logos/logoipsum-295.svg" alt=""/>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton @click="navigateToMap"
                         class="font-kanit flex items-center gap-x-1 text-sm  leading-6 text-gray-900">
            Trail Maps
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
          </PopoverButton>

        </Popover>

        <a href="#" class="text-sm font-kanit leading-6 text-gray-900">Route Guides</a>
        <a href="#" class="text-sm font-kanit leading-6 text-gray-900">Local Events</a>
        <a href="#" class="text-sm font-kanit leading-6 text-gray-900">Community</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-kanit leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"/>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">SD Bike Paths</span>
            <img class="h-8 w-auto" src="logos/logoipsum-295.svg" alt=""/>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                    @click="navigateToMap"
                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-kanit leading-7 text-gray-900 hover:bg-gray-50">
                  Trail Maps
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true"/>
                </DisclosureButton>

              </Disclosure>
              <a href="#"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-kanit leading-7 text-gray-900 hover:bg-gray-50">Route Guides</a>
              <a href="#"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-kanit leading-7 text-gray-900 hover:bg-gray-50 ">Local Events</a>
              <a href="#"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-kanit leading-7 text-gray-900 hover:bg-gray-50">Community</a>
            </div>
            <div class="py-6">
              <a href="#"
                 class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-kanit leading-7 text-gray-900 hover:bg-gray-50">Log
                in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

