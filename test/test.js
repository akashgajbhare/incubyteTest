class StringCalculate {
    add(value) {
        if (!value) return 0;
        if(value){
            return value.length;
        }
       
    }
}

const calculator = new StringCalculate();
console.log(calculator.add("12"));