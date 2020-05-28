new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true
      this.monsterHealth = 100
      this.playerHealth = 100
    },
    attack: function() {
      var max = 10
      var min = 3
      var damage = Math.max(Math.floor(Math.random() * max), min)
      this.monsterHealth -= damage

      if (this.monsterHealth <= 0) {
        alert('You won')
        this.gameIsRunning = false
        return
      }

      var max = 12
      var min = 5
      var damage = Math.max(Math.floor(Math.random() * max), min)
      this.playerHealth -= damage

      if (this.playerHealth <= 0) {
        alert('You lost')
        this.gameIsRunning = false
      }
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {}
  }
})