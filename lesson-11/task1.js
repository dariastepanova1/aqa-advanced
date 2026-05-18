function printTextwithDelay (text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

printTextwithDelay('Hello', 1000);