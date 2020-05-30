<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Inrease</button>
    <hr>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('🔥')
  }
}
</script>