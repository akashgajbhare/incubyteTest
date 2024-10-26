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
    const negatives = [];

    numberList.forEach((number) => {
      if (number) {
        const num = parseInt(number, 10);
        if (num < 0) {
          negatives.push(num);
        }
        total += num;
      }
    });

    if (negatives.length > 0) {
      throw new Error(`negative num not allowed ${negatives}`);
    }

    return total;
  }
}

const calculator = new StringCalculate();
console.log(calculator.add("1,2"));
console.log(calculator.add("1\n2,3"));
console.log(calculator.add("//;\n1;2"));
try {
  console.log(calculator.add("1,-2,3"));
} catch (error) {
  console.log(error.message);
}
