function main() {
    var amount = 1000;
    var rate = 2.2;

    console.log(convert(amount, rate));
}
function convert(amount, rate) {
    return amount*rate;
}
document.write(convert(amount, rate));
