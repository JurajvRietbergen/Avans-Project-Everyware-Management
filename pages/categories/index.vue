<template>
  <div>
    <CategoryOverview />
    <CategoryForm />
  </div>
</template>

<script>
import CategoryOverview from '~/components/Category/CategoryOverview.vue'
import CategoryForm from '~/components/Category/CategoryForm.vue'

export default {
  components: {
    CategoryOverview,
    CategoryForm
  }
}
</script>
