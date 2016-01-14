import math
def answer(x):
    def getMinGauges(num, gauges=[]):
        sqRoot = math.sqrt(num)

        if num <= 0:
            return len(gauges)
        if sqRoot < 2:
            return len(gauges) + num
        else:
            gaugeSide = int(sqRoot)
            gauges.append(gaugeSide)
            num -= gaugeSide * gaugeSide
            return getMinGauges(num, gauges)

    return getMinGauges(x)
