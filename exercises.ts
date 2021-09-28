import Stack from './Stack';
//Louis catala
export const countDownFrom = (n: number): string => {
  if (n === 0) {
    return n.toString();
  } else {
    return n + ',' + countDownFrom(n - 1);
  }
};

export const countDownFromStack = (n: number): string => {
  const callStack = new Stack<number>();
  let returnValue = null;
  while (n !== 0) {
    callStack.push(n);
    n = n - 1;
  }
  callStack.push(0); // base case input - first row, first column
  n = callStack.pop(); // remove base case input of 0 from stack
  returnValue = n.toString(); // base case output - first row, first column
  while (!callStack.isEmpty()) {
    n = callStack.pop(); // current input
    returnValue = n + ',' + returnValue;
  }
  return returnValue;
};

export const factorial = (n: number): number => {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

export const factorialFromStack = (n: number): number => {
  let stack = new Stack<number>();
  let result = 1;
  while (n > 0) {
    stack.push(n);
    n--;
  }
  while (!stack.isEmpty()) {
    result *= stack.pop();
  }
  return result;
};

export const countUpTo = (n: number): string => {
  if (n == 0) return 0 + '';
  return countUpTo(n - 1) + ',' + n;
};

export const countUpToFromStack = (n: number): string => {
  let stack = new Stack<number>();
  let result = '0';
  while (n > 0) {
    stack.push(n);
    n--;
  }
  while (!stack.isEmpty()) {
    result += ',' + stack.pop();
  }
  return result;
};

export const reverse = (s: string): string => {
  if (s == '') return s;
  return s.charAt(s.length - 1) + reverse(s.substring(0, s.length - 1));
};

export const reverseFromStack = (s: string): string => {
  let stack = new Stack<string>();
  let result = '';
  for (let i = 0; i < s.length; i++) {
    stack.push(s.charAt(i));
  }
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
};

export const toBinaryString = (n: number): string => {
  if (n == 0) return 0 + '';
  if (n == 1) return 1 + '';
  if (n % 2 == 0) return toBinaryString(Math.floor(n / 2)) + 0 + '';
  return toBinaryString(Math.floor(n / 2)) + 1 + '';
};

export const toBinaryStringFromStack = (n: number): string => {
  if (n == 0) return 0 + '';
  let stack = new Stack<number>();
  let result = '1';
  while (n > 1) {
    stack.push(+(n % 2 == 1));
    n = Math.floor(n / 2);
  }
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
};

export const copyStack = <T>(s: Stack<T>): Stack<T> => {
  let result = new Stack<T>();
  if (s.isEmpty()) return new Stack();
  else {
    let topElement = s.pop();
    result = copyStack(s);
    result.push(topElement);
    s.push(topElement);
    return result;
  }

  //   if (s.isEmpty()) return new Stack<T>();
  //   let medium = new Stack<T>();
  //   copyHelper(s, medium);
  //   let final = new Stack<T>();
  //   restpreHelper(medium, s, final);
  //   return final;
  // };

  // const copyHelper = <T>(from: Stack<T>, to: Stack<T>) => {
  //   if (from.isEmpty()) return;
  //   to.push(from.pop());
  //   return copyHelper(from, to);
  // };

  // const restpreHelper = <T>(
  //   from: Stack<T>,
  //   origin: Stack<T>,
  //   final: Stack<T>
  // ) => {
  //   if (from.isEmpty()) return;
  //   let current = from.pop();
  //   origin.push(current);
  //   final.push(current);
  //   restpreHelper(from, origin, final);
};

export const copyStackFromStack = <T>(s: Stack<T>): Stack<T> => {
  let medium = new Stack<T>();
  while (!s.isEmpty()) {
    medium.push(s.pop());
  }
  let result = new Stack<T>();
  while (!medium.isEmpty()) {
    let current = medium.pop();
    result.push(current);
    s.push(current);
  }
  return result;
};
