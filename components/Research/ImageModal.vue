<template>
  <b-modal id="ImageModal" title="Afbeeldingen" hide-footer>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="(image) in images" :key="image">
        <b-carousel-slide img-src="image.url" />
      </div>
    </b-carousel>
  </b-modal>
</template>

<script>
export default {
  data () {
    return {
      images: [{ url: 'test' }]
    }
  }
}
</script>

<style>

</style>
