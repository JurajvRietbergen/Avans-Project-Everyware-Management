<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Vragen" active>
        <QuestionsOverview />
      </b-tab>
      <b-tab title="Algemeen">
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab title="Codes">
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import QuestionsOverview from '~/components/Questionnaire/QuestionsOverview.vue'

export default {
  components: {
    QuestionsOverview
  }
}
</script>
