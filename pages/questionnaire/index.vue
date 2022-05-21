<template>
  <div>
    <questions-overview :categories="categories" />
  </div>
</template>

<script>
import QuestionsOverview from '~/components/Questionnaire/QuestionsOverview.vue'

export default {
  components: {
    QuestionsOverview
  },
  async asyncData ({ $api }) {
    const categories = await $api.questionnaire.getCategories()
    console.log(categories)
    return { categories }
  },
  data () {
    return {
      categories: {}
    }
  }
}
</script>
