<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.q-layout {
  background-image: url(/assets/bgnutrition.png);
  background-size: cover;
}

</style>
