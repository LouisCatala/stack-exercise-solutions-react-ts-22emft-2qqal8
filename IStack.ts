/**
 * Interface for Stack Abstract Data Type (ADT)
 */
interface IStack<T> {
  /**
   * top element of stack
   */
  top: T;

  /**
   * Removes the top element from the stack and returns it
   * 
   * @returns top element of stack
   */
  pop: () => T;

  /**
   * Adds item to top of Stack
   * 
   * @param item - item to put on top of stack
   */
  push: (item: T) => (void);

  /**
   * Determines whether Stack is empty
   * 
   * @returns true exactly when Stack is empty
   */
  isEmpty: () => boolean;
}

export default IStack;