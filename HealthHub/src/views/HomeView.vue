<template>
  <main>
    <Main />
    <Services />
    <Footer />
  </main>
</template>

<script>
import Main from '../components/Main.vue'
import Services from '../components/Services.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Main, Services, Footer
  }
}
</script>

<style scoped>
  main {
    margin-top: 0;
    background-image: url(../assets/images/background.jpg);
    background-size: 1500px 660px;
    background-repeat: no-repeat;
  }
</style>
