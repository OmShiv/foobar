def answer(x):
    def reduceSumRecur(num, lastSum): 
        lastSum += num % 10;
        if lastSum > 9:
            lastSum = lastSum - 9;
        num = int(num/10);
        return reduceSumRecur(num, lastSum) if num > 0 else lastSum;
    return reduceSumRecur(x, 0)
