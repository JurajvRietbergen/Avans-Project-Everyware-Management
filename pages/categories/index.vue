<template>
  <div>
    <CategoryOverview />
    <CategoryForm />
  </div>
</template>

<script>
import CategoryOverview from '~/components/CategoryOverview.vue'
import CategoryForm from '~/components/CategoryForm.vue'

export default {
  components: {
    CategoryOverview,
    CategoryForm
  }
}
</script>
