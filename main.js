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

    pickLine(amount = 1) {
        if (amount > 1) {
            this.pickMultiLines(amount);
        } else {
            this.fillLine(
                this.pickRandomNumbers(5, 47),
                this.pickRandomNumbers(1, 10)[0],
            );
        }
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


    pickMultiLines(maxInterations) {
        var currentIteration = 0;
        var pause = 1250;

        var intervalID = setInterval(function () {
            this.pickLine();

            currentIteration++;

            if (currentIteration >= maxInterations) {
                window.clearInterval(intervalID);
            }
        }.bind(this), pause);
    }
}

var set4life = new SetForLife();
// set4life.pickLine();
