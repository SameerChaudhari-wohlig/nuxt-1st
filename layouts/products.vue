<template>
  <div class="bg-blue-200">
    <header class="shadow-sm bg-white">
      <nav class="text-center mx-auto p-4 bg-gray-300">
        <nuxt-link to="/products" class="font-bold ">Nuxt Products page</nuxt-link>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot/>
    </div>
<footer class="bg-gray-400 mx-auto p-4 flex justify-evenly border-t-2">
           <ul class="flex gap-4 text-2xl">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
</footer >

  </div>
</template>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
