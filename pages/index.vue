<script setup lang="ts">
// import { OrbitControls } from '@tresjs/clientos'
definePageMeta({
  title: 'Nuxtopia'
})
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center items-center gap-12 bg-gray-950">
    <NavMain />
    <h1 class="text-5xl font-bold text-center z-50">Welcome to <span class="text-primary">Nuxt</span>opia</h1>
    <UButton to="/documentation" size="xl" class="z-50">Get Started</UButton>
    <TresCanvas alpha window-size>
      <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
      <TresAmbientLight color="teal" />
      <!-- <OrbitControls/> -->
      <TresMesh :rotation-z="Math.PI * 2" :rotation-x="Math.PI * 1" :rotation-y="2">
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshBasicMaterial color="#004227" />
      </TresMesh>
      <TresAmbientLight :intensity="1" />
    </TresCanvas>


  </main>
</template>