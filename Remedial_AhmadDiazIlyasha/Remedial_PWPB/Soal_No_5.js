function main() {
    var increase = prompt("masukan harga")
    var prices = prompt("masukan diskon")
    //your code goes here
    var result = []
    for(let i = 0; i< prices.length; i++){
    result[i] = prices[i] + increase
    }
    console.log(result)
    
}