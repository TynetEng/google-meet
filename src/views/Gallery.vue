<template>
  <main>
    <div class="gallery">
        <canvas></canvas>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style lang="scss">
  .gallery{
    display: block;
    width: 100vh;
    height: 100vh;
    box-sizing: border-box;
    padding: 25px;
    margin: auto;
    canvas{
      display: block;
      width: 100%;
      max-width: 1280px;
      margin: 0 auto !important;
      box-shadow: 6px 6px 12px 0px transparentize($color: #171717, $amount: 0.5);
    }
  }
</style>