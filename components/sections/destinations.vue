<template>
  <h2 class="text-3xl font-bold text-center">Destinos</h2>
<!--  <div class="flex md:justify-center w-full gap-3 my-6 overflow-x-scroll focus:touch-pan-x">-->
<!--    <button type="button" class="px-5 py-2 font-medium rounded-full" :class="[countries == country.url ? 'bg-[#D6DD85] text-primary':'bg-gray-50 text-gray-800']" @click="countries = country.url" v-for="country in listPais">{{country.nombre}}</button>-->
<!--&lt;!&ndash;    <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Bolivia</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Chile</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Ecuador</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Colombia</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Argentina</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Brasil</button>&ndash;&gt;-->
<!--  </div>-->
  <template v-for="country2 in listPais">
  <div class="grid md:grid-cols-12 md:gap-24 gap-6 items-center my-12" v-if="countries == country2.url">
<!--    <div class="col-span-6">-->
<!--      &lt;!&ndash;      <transition name="pop" appear>&ndash;&gt;-->
<!--      &lt;!&ndash;        <img :src="country2.imagen_s" alt="" class=" rounded-xl w-full object-cover">&ndash;&gt;-->
<!--      &lt;!&ndash;      </transition>&ndash;&gt;-->
<!--      <img src="/images/banners/maps.png" alt="">-->
<!--    </div>-->
    <div class="col-span-12">
      <h3 class="text-3xl font-bold"><nuxt-link :to="'/destinations/countries/'+country2.url">{{ country2.nombre }}</nuxt-link></h3>
      <div class="md:pr-24">
        <transition name="left" appear>
        <div class="my-6" v-html="country2.descripcion"></div>
        </transition>
      </div>
      <transition name="pop" appear>
        <img :src="country2.imagen_s" alt="" class=" rounded-xl w-full object-cover h-96">
      </transition>
    </div>

  </div>
  </template>

</template>

<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listPais = ref([])
const countries = ref('peru')

const getPais = async () => {
  const res:any = await packageStore.getPais()

  listPais.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

const paises = computed(() => {
  return listPais.value.filter(pais => pais.url === countries.value)
})


onMounted(async () => {
  await getPais()

})

</script>