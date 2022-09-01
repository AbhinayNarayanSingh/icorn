export const INR_STYLE_HELPER = (x) => {
    x = x.toString();
    let lastThree = x.substring(x.length - 3);
    let otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + ".00";
    return res;
};

// var x=12345652457.557;
// x=x.toString();
// var afterPoint = '';
// if(x.indexOf('.') > 0)
//    afterPoint = x.substring(x.indexOf('.'),x.length);
// x = Math.floor(x);
// x=x.toString();
// var lastThree = x.substring(x.length-3);
// var otherNumbers = x.substring(0,x.length-3);
// if(otherNumbers != '')
//     lastThree = ',' + lastThree;
// var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

// alert(res);