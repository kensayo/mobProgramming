function birthdayCakeCandles(candles) {
    let tallest = 0;
    let count = 0;
    candles.forEach((candle) => {
        if (candle > tallest){
            tallest = candle;
            count = 1;
        } else if(candle === tallest) {
            count += 1;
        }
    });    
    
    return count;
}

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
