<template>
  <header class="h-[75vh] relative">
    <img src="https://picsum.photos/id/7/1700/1020" alt="" class="object-cover w-screen h-full">
    <!--    <div class="absolute inset-x-0 bottom-0 text-center">-->
    <!--      <h1 class="mb-24 font-bold text-6xl text-white">-->
    <!--        about-->
    <!--      </h1>-->
    <!--    </div>-->
  </header>

  <section>
    <div class="container grid md:grid-cols-12 py-12 gap-12 items-center">
      <div class="md:col-span-12">
        <h2 class="text-3xl font-bold">EL PROGRAMA ESNNA Y NUESTRO COMPROMISO</h2>
        <p>El Ministerio de Comercio Exterior y Turismo ha creado la política contra explotación sexual de niñas, niños y adolescentes (ESNNA). El código ESNNA y Happy Llamas Travel  tienen un convenio de acciones conjuntas para prevenir y erradicar dicho problema.</p>
        <p>La explotación sexual es una violación a los derechos humanos y vulnera el desarrollo físico, social y emocional de las niñas, niños y adolescentes afectadas por esta situación. La ESNNA además se puede manifestar de diversos modos y en diferentes contextos, como: ESNNA en el ámbito del turismo y los viajes ESNNA en línea (en Internet y por medio del uso de las TIC)</p>

        <h3 class="text-xl my-4 font-semibold">ACCIONES CONCRETAS – CÓDIGO ESNNA</h3>
        <p>La adhesión al Código de Conducta del programa ESNNA nos compromete a poner en práctica constante una serie de acciones que se realizan y refuerzan como parte de las actividades. Nuestro personal de oficina, así como el staff de logística (guías, cocineros, conductores, porteadores y todo el personal de apoyo) ya están debidamente capacitados para contribuir con el Código de Conducta. Al turista, ya sea nacional o extranjero, no se le ofrece de ninguna manera ni tampoco se accede a ninguna solicitud referente a turismo sexual con niños o adolescentes, por razones tanto éticas como legales. En esa misma línea, actuamos en conjunto con nuestros asociados (hoteles, restaurantes, etc y la totalidad de su personal) para que se cumplan los objetivos y compromisos con el programa ESNNA en todos los sectores y etapas de los servicios de turismo que brindamos. Todos nosotros en Happy Llamas Travel  y asimismo los socios en nuestras operaciones tenemos el compromiso de hacer cumplir el Código de Conducta ENNSA y denunciar a las autoridades cuando sea necesario. Las acciones del código ESNNA y Happy Llamas Travel  destacan y tienen prioridad dentro de nuestras políticas de responsabilidad social. Buscamos que el turismo sea una actividad que deje solamente beneficios para la región y el país, de acuerdo a lo estipulado en la misión, visión y valores corporativos.</p>

        <h3 class="text-xl my-4 font-semibold">¿QUÉ PODEMOS HACER PARA EVITAR QUE EL PROBLEMA CREZCA MÁS?</h3>
        <ul class="list-disc list-outside ml-4 mt-4">
          <li>Mantener una actitud de rechazo a la ESNNA, advertir la pena de cárcel.</li>
          <li>Denunciar inmediatamente todo caso de ESNNA ante el Ministerio Público o la Policía Nacional.</li>
          <li>Tener a la mano los números telefónicos del:</li>
          <li>Ministerio del Interior: línea 0800-2-3232</li>
          <li>Ministerio de la Mujer y Poblaciones Vulnerables (Centro Emergencia Mujer): línea 100</li>
          <li>Policía Nacional (Comisaría más cercana) Fiscalía.</li>
          <li>Defensorías del Niño y del Adolescente.</li>
        </ul>

        <h3 class="text-xl my-4 font-semibold">EN ESTA AGENCIA</h3>
        <p>No promovemos ni permitimos la explotación sexual de niños, niñas y adolescentes; ni cualquier otro ilícito penal del cual tomemos conocimiento en el desarrollo de nuestra actividad conforme dispuesto en la ley N° 29408.</p>
        <p>Si conoces algún caso de explotación sexual en menores de 18 años, no dudes en denunciarlo.</p>
        <p>Atte. Happy Llamas Travel SAC</p>

      </div>

    </div>
  </section>


</template>


<script lang="ts" setup>

import Testimonials from "~/components/sections/testimonials.vue";

onMounted(async () => {

  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }

})

</script>