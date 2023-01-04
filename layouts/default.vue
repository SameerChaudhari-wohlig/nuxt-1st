<template>
  <div >
    <header class="shadow-sm bg-white">
      <nav class="mx-auto p-4  flex justify-between bg-gray-300">
        <nuxt-link to="/" class="font-bold">NavBar</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <!-- Pagination -->
    <!-- <div class="pagination-row text-center py-5">
      <button class="pagination-button">Previous</button>
      <span v-for="(item, index) in new Array(10)" :key="index">
        <button class="pagination-button">{{ index + 1 }}</button>
      </span>

      <button class="pagination-button">Next</button>
    </div> -->
    <div class="mx-auto ">
      <slot />
    </div>
  </div>
</template>

<style>
.router-link-exact-active {
  color: #12b488;
}
.pagination-button {
  padding: 8px;
  margin: 2px;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
