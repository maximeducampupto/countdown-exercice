let timer = {

    display: document.getElementById('time'),
    startButton: document.getElementById('start-button'),
    minutes: '10',
    seconds: '30',
    total: null,

    init: function()
    {
        this.display.innerHTML = this.minutes + ":" + this.seconds;

        timer.total = parseInt((timer.minutes * 60) + parseInt(timer.seconds));
        this.startButton.addEventListener('click', this.run);
    },

    run: function()
    {

        setTimeout(function() {
            timer.total--;
            timer.update();
            timer.run();
        }, 1000);

    },

    update: function()
    {
        let minutes = Math.floor(timer.total % 3600 / 60),
            seconds =  Math.floor(timer.total % 3600 % 60);

        timer.display.innerHTML = minutes+":"+seconds;
    }
};


timer.init();