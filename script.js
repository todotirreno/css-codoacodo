let ladder = {
    step: 0,
    up() {
      this.step++;
      return this.step;
    },
    down() {
      this.step--;
      return this.step;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0