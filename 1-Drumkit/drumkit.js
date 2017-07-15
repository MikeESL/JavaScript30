
var drumkit = {
    removeTransition: function(e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    },
    init: function (){
      var i;
      window.addEventListener('keydown', function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        // stop function if key has no audio:
        if (!audio){
          return;
        }
        // add class 'playing' to selected div:
        key.classList.add('playing');
        // always 'rewind' the audio file before playing:
        audio.currentTime = 0;
        audio.play();
        //transition end event to remove 'playing' class:
        const allKeys = document.querySelectorAll('.key');
        for (i = 0; i < allKeys.length; i++) {
            if (allKeys[i].classList.contains('playing')) {
              allKeys[i].addEventListener('transitionend', drumkit.removeTransition);
            }
        }
      });
    }
};

drumkit.init();
