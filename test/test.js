class StringCalculate {
    add(value) {
        if (!value) return 0;

        let delimiter = /,|\n/;

        if (value.startsWith("//")) {
            const parts = value.split("\n", 2);
            delimiter = new RegExp(parts[0].slice(2)); 
            value = parts[1];
        }

        const numberList = value.split(delimiter);
        let total = 0;

        numberList.forEach(number => {
            if (number) {  
                total += parseInt(number, 10);
            }
        });

        return total;
    }
}

const calculator = new StringCalculate();
console.log(calculator.add("1,2"));
console.log(calculator.add("1\n2,3"));
console.log(calculator.add("//;\n1;2"));