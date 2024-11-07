class Calculate {
    static num1 = null;
    static num2 = null;
    static operation = null;

    static operations = {
        0: (a, b) => a + b,
        1: (a, b) => a - b,
        2: (a, b) => a * b,
        3: (a, b) => a / b
    }

    static calculate = (a, b, operation) => {
        this.num1 = parseInt(a);
        this.num2 = parseInt(b);
        this.operation = operation;
        return this.operations[operation](this.num1, this.num2);
    }

}

//export { Calculate };



