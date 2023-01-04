<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetch the product
const { data: product } = await useFetch(uri, {
  key: id,
});
if (!product.value) {
  navigateTo("/products");
  // throw createError({
  //   statusCode: 404,
  //   statusMessage: "Product Not Found",
  // });
}

definePageMeta({
  layout: "products",
  middleware: "checkproduct",
});
</script>
