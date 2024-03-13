<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
export default {

  data () {
    return {
      show: false,
      showLogin: true
    }
  },
  methods: {
    openMain() {
      this.show = true
      this.showLogin = false
    }
  },
  components: {Navbar, Login}
}
</script>

<template>
  <Navbar v-if="show" />
  <div v-if="showLogin">
    <Login @open="openMain"/>
  </div>
  <router-view v-if="show"/>
</template>

<style scoped>

</style>
