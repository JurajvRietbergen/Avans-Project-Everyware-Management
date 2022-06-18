<template>
  <b-card>
    <b-row no-gutters class="mb-1">
      <b-col md="6">
        <b-card-text v-if="categories.length === 0" class="d-flex align-items-center">
          <h1> Voeg categorieën toe </h1>
        </b-card-text>
        <div>
          <b-list-group>
            <b-list-group-item v-for="(category, category_index) in categories" :key="category.category_nr">
              <div class="mb-1 d-flex">
                <h5> {{ category.name }} - {{ category.addition }} </h5>
                <b-button class="ml-1" size="sm" variant="primary" @click="deleteCategory(category_index, category.name)">
                  <b-icon icon="trash" aria-hidden="true" />
                </b-button>
              </div>
              <b-list-group v-for="(question, question_index) in category.questions" :key="question.question_nr">
                <b-list-group-item class="mb-1 d-flex justify-content-between align-items-center">
                  {{ question.question }}
                  <b-button size="sm" variant="primary" @click="deleteQuestion(category_index, question_index)">
                    <b-icon icon="trash" aria-hidden="true" />
                  </b-button>
                </b-list-group-item>
              </b-list-group>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
      <b-col>
        <div class=" ml-2 d-flex flex-column">
          <b-card title="Categorie toevoegen" class="mb-2">
            <div class="d-flex mb-1">
              <b-form-input v-model="add_category" placeholder="Voeg categorie toe" />
            </div>
            <div class="d-flex justify-content-between">
              <b-form-input v-model="add_category_description" placeholder="Voeg categorie descriptie toe" />
              <b-button class="ml-1" size="sm" variant="primary" @click="addCategory()">
                Toevoegen
              </b-button>
            </div>
          </b-card>
          <b-card title="Vraag toevoegen">
            <div class="d-flex flex-column justify-content-between">
              <b-form-input v-model="question.question" class="mb-1" placeholder="Voeg vraag toe" />
              <b-form-select v-model="question.selected_type" class="mb-1" :options="type_options" />
              <b-form-select v-model="question.selected_category" :options="category_options" />
            </div>
            <b-button class="mt-1" size="sm" variant="primary" @click="addQuestion()">
              Toevoegen
            </b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex justify-content-between">
        <b-button size="sm" variant="primary" @click="$emit('switchTab', -1)">
          Terug
        </b-button>
        <b-button size="sm" variant="primary" @click="$emit('switchTab', 1)">
          Doorgaan
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: ['info'],
  data () {
    return {
      categories: [],
      add_category: null,
      add_category_description: null,
      question: { question: null, selected_type: null, selected_category: null },
      type_options: [{ value: null, text: 'Selecteer een type' }, { value: 'Open', text: 'Open' }, { value: 'Digit', text: 'Digit' }],
      category_options: [{ value: null, text: 'Selecteer een categorie' }]
    }
  },
  mounted () {
    if (this.info) {
      this.categories = this.info

      if (Array.isArray(this.categories) && this.categories.length) {
        this.categories.forEach(category => this.category_options.push({ value: category.name, text: category.name }))
      }
    }
  },
  methods: {
    addCategory () {
      if (this.add_category && this.add_category_description) {
        if (!this.categories.find(c => c.name === this.add_category)) {
          this.categories.push({ name: this.add_category, addition: this.add_category_description, questions: [] })
          this.category_options.push({ value: this.add_category, text: this.add_category })
          this.add_category = null
          this.add_category_description = null
          const updateCategory = JSON.parse(JSON.stringify(this.categories))
          this.$store.commit('UPDATE_CATEGORIES', updateCategory)
        } else {
          this.$bvModal.msgBoxOk('Deze categorie bestaat al')
        }
      } else {
        this.$bvModal.msgBoxOk('Voer een categorie in')
      }
    },
    addQuestion () {
      if (this.question.question && this.question.selected_type && this.question.selected_category) {
        this.categories.find(c => c.name === this.question.selected_category).questions.push({ question: this.question.question, type: this.question.selected_type })
        this.question = { question: null, selected_type: null, selected_category: null }
        const updateQuestion = JSON.parse(JSON.stringify(this.categories))
        this.$store.commit('UPDATE_CATEGORIES', updateQuestion)
      } else {
        this.$bvModal.msgBoxOk('Voer alle vragen velden in')
      }
    },
    // TODO Remove category from category_options
    deleteCategory (cIndex, category) {
      this.categories.splice(cIndex, 1)
      const removeIndex = this.category_options.findIndex(option => option.text === category)
      this.category_options.splice(removeIndex, 1)
      const updateQuestion = JSON.parse(JSON.stringify(this.categories))
      this.$store.commit('UPDATE_CATEGORIES', updateQuestion)
    },
    deleteQuestion (cIndex, qIndex) {
      this.categories[cIndex].questions.splice(qIndex, 1)
      const updateQuestion = JSON.parse(JSON.stringify(this.categories))
      this.$store.commit('UPDATE_CATEGORIES', updateQuestion)
    }
  }
}
</script>

<style scoped>
</style>
