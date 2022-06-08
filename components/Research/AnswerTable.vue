<template>
  <b-card title="Antwoorden overzicht">
    <b-container>
      <b-row class="mb-1">
        <b-col>
          <b-form-select v-model="selectedCategory" :options="categoryList" />
        </b-col>
        <b-col>
          <b-form-select v-if="selectedCategory != null" v-model="selectedQuestion" :options="questionList" />
        </b-col>
      </b-row>
      <b-row>
        <h1 v-if="!selectedQuestion">
          Selecteer een categorie en vraag
        </h1>
        <b-table
          v-if="selectedQuestion"
          :items="answerList"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          sort-by="code"
        />
        <b-pagination
          v-if="selectedQuestion"
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="totalRows"
          align="fill"
          size="sm"
          class="my-0"
        />
        <hr>
      </b-row>
      <b-row>
        <b-col>
          <b-button class="ml-1" size="sm" variant="primary" @click="getExcel()">
            Genereer Excel
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  props: ['answers'],
  data () {
    return {
      selectedCategory: null,
      selectedQuestion: null,
      categoryList: [{ value: null, text: 'Selecteer een categorie' }],
      fields: [
        { key: 'code', label: 'User' },
        { key: 'text', label: 'Antwoord' }
      ],
      currentPage: 1,
      perPage: 12,
      totalRows: this.answers.length
    }
  },
  computed: {
    questionList () {
      // Clear selected question when new cateogory is chosen.
      this.clearSelected()
      const list = [{ value: null, text: 'Selecteer een vraag' }]
      this.answers[this.selectedCategory].questions.forEach((que, index) => {
        // TODO: BUG #1, when index = 0 it is impossible to select the first question. There for they have to be set to index + 1.
        list.push({ value: index + 1, text: que.question })
      })
      console.log(list)
      return list
    },
    answerList () {
      console.log(this.selectedQuestion)
      // TODO: BUG #1, because question index has to be made +1 it has to be done -1 here.
      const table = this.answers[this.selectedCategory].questions[this.selectedQuestion - 1].answers
      console.log(table)
      return table
    }
  },
  mounted () {
    console.log(this.answers)
    this.answers.forEach((category, index) => {
      this.categoryList.push({ value: index, text: '' + category.name })
    })
    console.log(this.categoryList)
  },
  methods: {
    clearSelected () {
      this.selectedQuestion = null
    },
    getExcel () {
      this.$api.research.getAnswers({ id: this.$route.params.research, type: 'excel' }).then((res) => {
        console.log(res)
        const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = window.URL.createObjectURL(blob)
        console.log(url)
        window.open(url)
      })
    }
  }
}
</script>

<style scoped>

</style>
