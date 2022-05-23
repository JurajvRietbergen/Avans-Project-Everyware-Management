<template>
  <b-card title="Vragen">
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(category) in categories" :key="category.category_nr">
        <div class="mb-1 d-flex">
          <h5> {{ category.name }} </h5>
        </div>
        <b-list-group v-for="(question) in category.questions" :key="question.question_nr">
          <b-list-group-item class="mb-1 d-flex justify-content-between align-items-center">
            {{ question.question }}
          </b-list-group-item>
        </b-list-group>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  props: ['info'],
  data () {
    return {
      categories: []
    }
  },
  mounted () {
    this.categories = this.info
  }
}
</script>

<style scoped>

</style>
