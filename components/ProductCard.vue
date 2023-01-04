<template>
  <div class="card text-center bg-gray-200 ">
    <img :src="product.image" alt="Product image" class="imag" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <nuxt-link :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </nuxt-link>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.imag {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}

.card {
  padding: 3px;
 
  font-size: small;
  border: 1px solid rgb(193, 42, 42);
  border-radius: 10px;
}

.btn {
  background-color: rgb(10, 222, 10);
  border-radius: 10px;
}
</style>
