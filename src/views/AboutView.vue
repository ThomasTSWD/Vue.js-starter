<template>
  <main>
  <div class="about">
    <h1 ref="myElement">This is an about page</h1>
    
  </div>
</main>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    // Use GSAP to animate the element with a 1-second duration and slide it to the right
    gsap.to(this.$refs.myElement, { duration: 1, x: 100 });
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
