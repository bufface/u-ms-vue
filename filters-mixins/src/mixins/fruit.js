export const fruitMixin = {
  data() {
    return {
      fruits: ["Melon", "Sandía", "Banana", "Milanesas"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(fruit => {
        return fruit.match(this.filterText);
      });
    }
  }
}