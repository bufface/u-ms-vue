<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="addQuote"></app-new-quote>
    <app-quote-grid @quoteDeleted="quoteDeleted" :quotes="quotes"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'

export default {
  data() {
    return {
      quotes: ['Sample quote'],
      maxQuotes: 10
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Remove quotes first!')
      }
      this.quotes.push(quote)
    },
    quoteDeleted(index) {
      this.quotes.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
