module.exports = function toReadable (number) {
  let str = "";
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let dozens = ['','','twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety ']
  
  if(number ==0){str+='zero'}
  if (Math.trunc(number/100)!=0) {str+=units[Math.trunc(number/100)]+' hundred '};
  if (Math.trunc(number%100)>=10 && Math.trunc(number%100)<=19) {str+=tens[Math.trunc(number%10)]}
  if (Math.trunc(number%100)>=20 && Math.trunc(number%100)<=99) {str+=dozens[Math.trunc(Math.trunc(number%100)/10)]};
  if ((Math.trunc(number%100)<=9 || Math.trunc(number%100)>=20) && Math.trunc(Math.trunc(number%100)%10)!=0) {str+=units[Math.trunc(number%10)]};
  return str.trim();
}