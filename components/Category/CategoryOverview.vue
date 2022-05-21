
<template>
  <div>
    <b-table striped hover :items="items" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      // TODO get from database
      items: [
        { naam: 'Website', toevoeging: '' },
        { naam: 'Entree', toevoeging: 'Benoem zowel je positieve als negatieve ervaringen' },
        { naam: 'Informatiebalie' },
        { naam: 'Garderobe' },
        { naam: 'Tentoonstellingen' }
      ]
    }
  }
}
</script>
<style>
</style>
