/**
 * Dùng vòng lặp for kiểm tra số nguyên tố
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false
 */

function isPrimeNumber(n) {
  if(n < 2) {
    return false;
  }
  for (i = 2; i < (n - 1); i++) {
    if(n % 2 === 0) {
      return false;
    }
  }
  return true;
  // console.log(n);
}
isPrimeNumber(6);