export default defineNuxtRouteMiddleware (async (to, from) => {
  
  const uri = "https://fakestoreapi.com/products/" + to.params.id;
  if (isNaN(to.params.id)) {
    return navigateTo ('/products')
  }
//   const { data: product } = await useFetch(uri);
//   console.log("uri",uri);
//   if (!product.value) {
//     throw createError({
//       statusCode: 404,
//       statusMessage: "Product Not Found",
//     });
//   }

});
