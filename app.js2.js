function checkPrimeNumber() {
    const value = prompt("Введите число");
    const number = +value;
  
    if (typeof number === "number" && !isNaN(number)) {
      if (number <= 1 || number > 1000) {
        console.log("Данные неверны");
      } else {
        let isPrime = true;
        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          console.log("Простое число");
        } else {
          console.log("Не простое число");
        }
      }
    } else {
      console.log("Упс, кажется, вы ошиблись");
    }
  }
  
  checkPrimeNumber();