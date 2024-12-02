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
        <h2 class="text-3xl font-bold">POLITICA DE PROTECCION DE DATOS</h2>
        <h3 class="text-xl my-4 font-semibold">Política de Privacidad</h3>
        <p>Happy Llamas Travel  se compromete a preservar la confidencialidad de la información personal que usted suministra en nuestro portal web. Esta Declaración de Privacidad detalla cómo gestionamos la información personal que obtenemos cuando visita www.happyllamastravel.com  Esta política no es aplicable a otros sitios web.</p>
        <h3 class="text-xl my-4 font-semibold">Compromiso de privacidad</h3>
        <p>Aunque la información constituye la base fundamental de nuestra capacidad para ofrecer un servicio de excelencia, la confianza de nuestros clientes es nuestro activo más preciado. En Happy Llamas Travel   valoramos enormemente la protección de la información de nuestros clientes y nos comprometemos a utilizarla únicamente de acuerdo con sus preferencias. A continuación, presentamos nuestra garantía para cada cliente individual:</p>
        <ol class="list-decimal list-outside ml-4 mt-4">
          <li>Cualquier información del cliente compartida con nosotros estará resguardada según rigurosos estándares de seguridad y confidencialidad.</li>
          <li>Recopilaremos y utilizaremos únicamente la cantidad mínima de información del cliente necesaria para brindar un servicio al cliente superior, lo cual incluye informar a los clientes acerca de nuestros productos, servicios y otras oportunidades, así como gestionar nuestro negocio.</li>
          <li>Restringiremos el acceso a esta información al personal autorizado capacitado en el manejo adecuado de los datos de los clientes. Los empleados que incumplan nuestra Promesa de Privacidad serán disciplinados conforme a nuestros procedimientos estándar.</li>
          <li>No divulgaremos información del cliente a ninguna organización externa, a menos que el cliente haya otorgado su consentimiento para la divulgación o que la ley nos obligue a hacerlo.</li>
          <li>Mantendremos un estricto control sobre la privacidad de los datos de nuestros clientes. En caso de que un cliente exprese interés en un servicio o producto específico de una empresa reconocida, podríamos compartir su información con esa empresa. Es importante tener en cuenta que esta Declaración de Privacidad no se aplica al uso de la información del cliente por parte de dichas empresas externas.</li>
          <li>Al contratar a otras organizaciones para brindar servicios de soporte, exigiremos que cumplan con nuestros estándares de privacidad y nos permitan auditar su cumplimiento</li>
        </ol>

        <h3 class="text-xl my-4 font-semibold">Información que recopilamos</h3>
        <p>Datos generales: Podemos recolectar información de identificación personal sobre usted al registrarse y en otros momentos, incluyendo su nombre, dirección, número de teléfono, dirección de correo electrónico e información sobre su computadora. No obstante, no recopilamos conscientemente información personal de niños menores de trece años. Además, si es menor de 18 años, no puede proporcionarnos información personal sin el consentimiento de sus padres. Cuando visita nuestro sitio web, automáticamente recopilamos su dirección IP e información sobre su uso del sitio. Esta información nos ayuda a evaluar cómo nuestros visitantes y clientes utilizan y navegan por nuestro sitio web de manera agregada, incluyendo el número, la frecuencia y la duración de sus visitas a cada página web.</p>

        <h3 class="text-xl my-4 font-semibold">Cómo utilizamos la información recopilada</h3>
        <p>Podemos emplear su información de la siguiente manera:</p>
        <ol class="list-decimal list-outside ml-4 mt-4">
          <li>Para los propósitos específicos para los cuales proporcionó la información.</li>
          <li>Para informarle acerca de nuestros productos y servicios nuevos o existentes, ofertas especiales o para comunicarnos con usted de otra manera.</li>
          <li>Desarrollar nuevas características, productos y servicios, o mejorar los existentes.</li>
          <li>Permitiéndonos adaptar el contenido y los anuncios que usted y otros ven en función de sus características o preferencias personales.</li>
          <li>Podemos divulgar y utilizar información de identificación personal cuando así lo exija la ley o para hacer cumplir nuestros Términos de servicio (por ejemplo, cuando sea necesario para proteger nuestros derechos de propiedad intelectual). Además, podemos divulgar o utilizar su información personal si creemos, de buena fe, que la ley nos exige hacerlo.</li>
        </ol>

        <h3 class="text-xl my-4 font-semibold">Cookies</h3>
        <p>Empleamos tecnología de cookies para ayudar a los visitantes y clientes a moverse más rápidamente a través de nuestro sitio. Cuando inicia sesión en nuestro sitio web o utiliza diversas funciones clave, podemos transferir cookies a su computadora. Una cookie es una cadena de información enviada por un sitio web y almacenada en su disco duro o temporalmente en la memoria de su computadora.</p>

        <h3 class="text-xl my-4 font-semibold">Seguridad</h3>
        <p>Su información de identificación personal se almacena en servidores con acceso restringido. Tomaremos precauciones para salvaguardar la seguridad de estos servidores y su información de identificación personal.</p>

        <h3 class="text-xl my-4 font-semibold">Modificaciones de políticas</h3>
        <p>Esta Política de Privacidad puede ser modificada ocasionalmente. Cualquier modificación será publicada en esta página, por lo que le recomendamos revisarla periódicamente. No obstante, puede estar seguro de que si en el futuro se modifica la Política de privacidad, no utilizaremos su información personal de una manera que sea materialmente inconsistente con esta Política de privacidad sin su consentimiento previo.</p>

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