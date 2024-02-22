const sumFibonacci = (n, prev = 0, current = 1, sum = 0, count = 0) => {
  // Проверка на неположительные числа и нечисловые значения
  if (n <= 0 || typeof n !== 'number') {
    return 0;
  }

  // Базовый случай: если достигнуто количество чисел Фибоначчи n
  if (count === n) {
    return sum;
  }

  // Первый случай, если текущее число = первое
  if (count === 0) {
    sum += prev;
    return sumFibonacci(n, prev, current, sum, count + 1);
  }

  // Второй случай, если текущее число = второе
  if (count === 1) {
    sum += current;
    return sumFibonacci(n, prev, current, sum, count + 1);
  }

  // Рекурсивное вычисление следующего числа фибоначчи и суммы
  let next = prev + current;
  prev = current;
  current = next;
  sum += current;

  return sumFibonacci(n, prev, current, sum, count + 1);
}

// Примеры использования
console.log(sumFibonacci(1)); // 0 (только первое число Фибоначчи)
console.log(sumFibonacci(2)); // 1 (0 + 1)
console.log(sumFibonacci(3)); // 2 (0 + 1 + 1)
console.log(sumFibonacci(4)); // 4 (0 + 1 + 1 + 2)
console.log(sumFibonacci(5)); // 7 (0 + 1 + 1 + 2 + 3)
console.log(sumFibonacci(-1)); // 0
console.log(sumFibonacci('abc')); // 0
