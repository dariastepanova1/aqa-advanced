const handleEven = () => console.log('Even number');
const handleOdd = () => console.log('Odd number');

const handleNumber = (number, handleEven, handleOdd) => {
  if (number % 2 === 0) {
     return handleEven();
  }
     return handleOdd();
  };

handleNumber(4, handleEven, handleOdd);
handleNumber(7, handleEven, handleOdd);