/**
 * 1) Ask: 
 * You have deposited a specific amount of money into your bank account. 
 * Each year your balance increases at the same growth rate. 
 * With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.
 * 
 * 1a) Example: For deposit = 100, rate = 20, and threshold = 170, output = 3.
 * year 0: 100;
 * year 1: 120;
 * year 2: 144;
 * year 3: 172.8.
 * 
 * 2) Math
 * 
 * @param {*} deposit 
 * @param {*} rate 
 * @param {*} threshold 
 */
function solution(deposit, rate, threshold) {
    // set year = 0
    let year = 0;
    // accumulate = deposit
    let accumulate = deposit;
    // interestRate = 1 + (rate/100)
    let interestRate = 1 + (rate/100);

    // while loop (accumulate < threshold)
    while (accumulate < threshold) {
        accumulate = accumulate * interestRate
        year++;
    }

    console.log("Years Required = " + year);
    
    // return year
    return year;
}

solution(100, 20, 170) // 3


