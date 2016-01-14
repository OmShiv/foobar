
function answer(x) {
    function getMinGauges(num, gauges) {
        var gauges = gauges || [],
            sqRoot = Math.sqrt(num);
            
        if (num <= 0) {
            return gauges.length;
        }
        if (sqRoot < 2) {
            return gauges.length + num;
        } else {
            var gaugeSide = Math.floor(sqRoot);
            gauges.push(gaugeSide);
            num -= gaugeSide * gaugeSide;
            return getMinGauges(num, gauges);
        }
    }
    getMinGauges(x);
}
