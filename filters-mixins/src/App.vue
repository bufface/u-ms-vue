<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>

        {{ text | toUppercase | to-lowercase }}
        <hr />
        <input v-model="filterText">
        <ul>
          <li :key="fruit" v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'Some random text',
        fruits: [ 'Melon', 'Sandía', 'Banana', 'Milanesas' ],
        filterText: ''
      }
    },
    filters: {
      toUppercase(val) {
        return val.toUpperCase()
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter(fruit => {
          return fruit.match(this.filterText)
        })
      }
    }
  }
</script>