<template>
  <div>
    <questions-overview :category="categories" />
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
    return categories
  },
  data () {
    return {
      categories: {}
    }
  }
}
</script>
