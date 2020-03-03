class Temperature {
    constructor(c) {
        this.c = c;

        this.getc = function () {
            return this.c;
        }
        this.getf = function () {
            return this.c * 1.8;
        }
        this.getk = function () {
            return this.c + 273.15;
        }
    }
}

function convert() {
    let c = +prompt(" độ C:")
    let Temper = new Temperature(c);
    let f = Temper.getf();
    let k = Temper.getk();
    document.write("độ f = " + f);
    document.write("độ k = " + k);
}
