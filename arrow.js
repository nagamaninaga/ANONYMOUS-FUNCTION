const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop()
     {
    
      this.numbers.forEach(
        function (number) {
          console.log(this.phrase, number)
        }.bind(this),
      )
    },
    let sum = (a, b) =>
     {
      let result = a + b;
      return result;
  }
  
  let result1 = sum(2,4);
  console.log(result1); 

  

  }
  
  printNumbers.loop()




  
  