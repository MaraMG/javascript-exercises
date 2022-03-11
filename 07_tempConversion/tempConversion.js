const ftoc = function(tempf) {

  let tempc = (tempf - 32) * (5/9);
  let rounded = Math.round(tempc * 10) / 10;
  return rounded;

  
};

const ctof = function(tempc) {

  let tempf = (tempc * 9/5) + 32;
  let rounded = Math.round(tempf * 10) / 10;
  return rounded;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
