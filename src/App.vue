<template>
  <v-app class="grey lighten-4">
    <Toolbar></Toolbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  },
  data () {
    return {
    }
  }
}
</script>
