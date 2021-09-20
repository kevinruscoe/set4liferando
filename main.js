class SetForLife {
    constructor() {
        this.currentLine = 0;
    }
    
    pickRandomNumbers(howMany = 1, max = 50) {
        return Array.from({length: max}, (key, value) => value + 1)
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .slice(0, howMany);
    }

    pickLine(maxLines = 1) {
        var currentLine = 0;
        var interval = 1250;

        var intervalID = setInterval(() => {
            this.fillLine(
                this.pickRandomNumbers(5, 47),
                this.pickRandomNumbers(1, 10)[0],
            );

            currentLine++;

            if (currentLine >= maxLines) {
                window.clearInterval(intervalID);
            }
        }, interval);
    }

    fillLine(baseNumbers, lifeBall) {

        document.querySelectorAll(".number_picker_initialiser")[this.currentLine].click();

        baseNumbers.forEach(ball => {
            document.querySelector(`#pool_0_label_ball_${ball}`).click();
        });

        document.querySelector(`#pool_1_label_ball_${lifeBall}`).click();

        document.querySelector("#number_selection_confirm_button").click();

        this.currentLine++;
    }
}

var set4life = new SetForLife();

// pick 1 line
set4life.pickLine();

// pick multi line
set4life.pickLine(5);

// wanna pick from random.org?
let lines = `
04-10-18-34-41 / 08
04-10-18-34-41 / 08
04-10-18-34-41 / 08
04-10-18-34-41 / 08
04-10-18-34-41 / 08
04-10-18-34-41 / 08
04-10-18-34-41 / 08
`.split("\n").filter(n => n).map(l => {
    let _line = l.split(" / ")
    return [_line[0].split("-").map(n => parseInt(n)), parseInt(_line[1])];
}).forEach(l => {
    setTimeout(() => {
        set4life.fillLine(l[0], l[1]);
    }, 1000);
});