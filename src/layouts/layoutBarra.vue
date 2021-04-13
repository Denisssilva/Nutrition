<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~src/assets/Icon/favicon-16x16.png">
          </q-avatar>
          NutritioN
        </q-toolbar-title>
        <q-btn class="glossy" round color="primary" icon="west" to="/menu"/>
        <q-btn flat round color="secondary" icon="home" to="/"/>



      </q-toolbar>
    </q-header>

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
