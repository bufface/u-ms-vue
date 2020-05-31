<template>
  <div class="container">
    <app-new-quote @quoteAdded="addQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
  data() {
    return {
      quotes: ['Sample quote'],
      maxQuotes: 10
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  },
  methods: {
    addQuote(quote) {
      this.quotes.push(quote)
    }
  }
}
</script>

<style>
</style>
