import IStack from './IStack';

class Stack<T> implements IStack<T> {
  private stack: T[]; // Array of T's - uncomment when you implement

  constructor() {
    this.stack = new Array<T>();
  }
  public pop() {
    return this.stack.pop();
  }
  public push(item: T) {
    return this.stack.push(item);
  }
  public isEmpty() {
    return this.stack.length == 0;
  }
  public get top() {
    return this.stack[this.stack.length - 1];
  }
}

export default Stack;