const isInteger = (n) => {
    return Number(n) === n && n % 1 === 0;
}

export const INR_STYLE_HELPER = (x) => {
    if (isInteger(x)) {
        x = x.toString();
        let lastThree = x.substring(x.length - 3);
        let otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != "") lastThree = "," + lastThree;
        let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + ".00";
        return res;
    } else {
        x = x.toString();
        var afterPoint = '';
        if (x.indexOf('.') > 0)
            afterPoint = x.substring(x.indexOf('.'), x.length);
        x = Math.floor(x);
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
        return res;
    }
};



const card = (cardnumber) => {
     var match = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})| (6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9]) [0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})|(6(?!011)(?:0[0-9]{14}|52[12][0-9]{12})))$/.exec(cardnumber);

     if (match) {
        // List of card types, in the same order as the regex capturing groups
        var types = ['Visa', 'MasterCard', 'Discover', 'American Express',
                     'Diners Club', 'JCB','Rupay'];
        for (var i = 1; i < match.length; i++) {
          if (match[i]) {
            // Display the card type for that group
            console.log(types[i - 1])
            break;
          }
        }
    } else {
      console.log("Invalid card")
    }
}
