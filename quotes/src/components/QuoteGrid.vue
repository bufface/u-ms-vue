<template>
  <div class="row">
    <app-quote :key="idx" v-for="(quote, idx) in quotes">{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  }
}
</script>