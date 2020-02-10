export const ColorFontVal = (val) => { 
  let colorRGB = val.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

  if(colorRGB[0]*0.299 + colorRGB[1]*0.587 + colorRGB[2]*0.114 > 150) {
    return true;
  } else {
    return false;
  }
}