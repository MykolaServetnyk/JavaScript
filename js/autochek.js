function getBitcoin(bitcoinPrice, howMuch$DoYouHave) {
    let youCanBuy = howMuch$DoYouHave / bitcoinPrice;

    return youCanBuy;
}

console.log(getBitcoin(21000, 1000));