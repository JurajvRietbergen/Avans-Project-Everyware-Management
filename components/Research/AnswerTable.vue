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
        <b-col>
          <h1 v-if="!selectedQuestion">
            Selecteer een categorie en vraag
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            v-if="selectedQuestion"
            :items="answerList"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            sort-by="code"
          >
            <template #cell(Afbeeldingen)="row">
              <b-button size="sm" variant="primary" @click="goToImage(row)">
                <b-icon icon="images" />
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-pagination
            v-if="selectedQuestion"
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="totalRows"
            align="fill"
            size="sm"
            class="my-0"
          />
        </b-col>
        <hr>
      </b-row>
      <b-row class="mt-1">
        <b-col>
          <b-button class="ml-1" size="sm" variant="primary" @click="getExcel()">
            Genereer Excel
          </b-button>
        </b-col>
      </b-row>
    </b-container>
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
          <b-carousel-slide :img-src="image" />
        </div>
      </b-carousel>
    </b-modal>
  </b-card>
</template>

<script>
export default {
  props: ['answers'],
  data () {
    return {
      showModal: false,
      selectedCategory: null,
      selectedQuestion: null,
      categoryList: [{ value: null, text: 'Selecteer een categorie' }],
      fields: [
        { key: 'code', label: 'User' },
        { key: 'text', label: 'Antwoord' },
        { key: 'Afbeeldingen' }
      ],
      currentPage: 1,
      perPage: 12,
      totalRows: this.answers.length,
      slide: 0,
      sliding: null,
      images: []
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
      this.$api.research.getExcelAnswers({ id: this.$route.params.research, type: 'excel' }).then((res) => {
        console.log(res)
        const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = window.URL.createObjectURL(blob)
        console.log(url)
        window.open(url)
      })
    },
    goToImage (row) {
      this.$api.research.getImagesAnswers({ usercode_id: row.item.usercode_id, questionnaire_question_id: row.item.questionnaire_question_id }).then((res) => {
        console.log(res)
        const blob = new Blob([res], { type: 'image/jpeg' })
        const url = window.URL.createObjectURL(blob)
        this.images.push(url)
        console.log(this.images)
        this.$bvModal.show('ImageModal')
      }).catch((err) => {
        console.log(err)
        this.$bvModal.msgBoxConfirm('Deze vraag heeft geen afbeeldingen')
      })
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

</style>
