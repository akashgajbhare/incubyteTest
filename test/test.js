class StringCalculate {
    add(value) {
        if (!value) return 0;

        const delimiter = /,|\n/; 

        const numberList = value.split(delimiter);
        
        let total = 0;
        console.log(numberList);
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