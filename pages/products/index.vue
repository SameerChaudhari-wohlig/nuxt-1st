<template>
<div class="grid grid-cols-4 gap-5 bg-gray-300 ">
    <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
    </div>
</div>
</template>

<script setup>
definePageMeta({
    layout: "products",
});

// Fetch the products
const {
    data: products
} = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
