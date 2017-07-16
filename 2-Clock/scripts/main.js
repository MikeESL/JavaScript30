var clock = {
  secondHand: document.querySelector('.second-hand'),
  minuteHand: document.querySelector('.min-hand'),
  hourHand: document.querySelector('.hour-hand'),
  setDate: function(){
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes =  time.getMinutes();
    const hour =  time.getHours();
    // turn seconds into degrees and offset by 90 deg:
    const secs2degs = ((seconds/60) * 360) + 90;
    // turn mins into degress and again, offset by 90deg:
    const mins2degs = ((minutes/60) * 360) + 90;
    // turn hour to degrees:
    const hr2degs = ((hour/12) * 360) + 90;
    // ES6 'template strings' to rotate all clock hands:
    clock.secondHand.style.transform = `rotate(${secs2degs}deg)`;
    clock.minuteHand.style.transform = `rotate(${mins2degs}deg)`;
    clock.hourHand.style.transform = `rotate(${hr2degs}deg)`;
  },
  init: function(){
    setInterval(clock.setDate, 1000);
  }
};

clock.init();
