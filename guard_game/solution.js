/*
 * A more easier, logical and efficient JavaScript solution
 * based on elementary Mathematics
 * O(n) Linear complexity
 */

function answer(number) {
    var number = x;
    function reduceSumRecur(number, lastSum) {
        lastSum = lastSum || 0;
        lastSum += number % 10;
        if (lastSum > 9) {
            lastSum = lastSum - 9;
        }
        number = Math.floor(number/10);
        return (number > 0) ? reduceSumRecur(number, lastSum) : lastSum;
    }
    return reduceSumRecur(number);
}
