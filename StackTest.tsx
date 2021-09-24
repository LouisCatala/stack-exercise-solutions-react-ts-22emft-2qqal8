import * as React from 'react';
import * as Exercises from './exercises';
import Stack from './Stack';
import Test from './Test';
import TestSuite from './TestSuite';

const runTestStack = (topStr: string, numItems: number) => {
  const s = new Stack<string>();
  const testArr = ["bar", "foo", "react", "computer", "science", "abc", "42"];
  const upperBound = typeof numItems === "undefined" ? Math.floor(Math.random()*100) : numItems;
  for(let i = 0; i < upperBound; i++) {
    s.push(testArr[Math.floor(Math.random()*testArr.length)]);
  }
  s.push(topStr);
  return s.top.toString();
}

const runTestStackRemove = (addItems: number, removeItems: number, finalNumber: number) => {
  
  const s = new Stack<number>();
  const numTimes = Math.floor(Math.random()*10);
  let stackSize = 0;
  for(let i = 0; i < numTimes; i++) {
    const pushNum = Math.floor(Math.random()*100);
    for(let j = 0; j < pushNum; j++) {
      s.push(Math.floor(Math.random()*100)-50);
    }
    const popNum = Math.floor(Math.random()*(stackSize+1));
    for(let j = 0; j < popNum; j++) {
      s.pop();
    }
    stackSize += pushNum-popNum;
  }
  for(let i = 0; i < stackSize; i++) {
    s.pop();
  }

  for(let i = 0; i < addItems-removeItems-1; i++) {
    s.push(Math.floor(Math.random()*100)-50);
  }
  s.push(finalNumber);
  for(let i = 0; i < removeItems; i++) {
    s.push(Math.floor(Math.random()*100)-50);
  }
  for(let i = 0; i < removeItems; i++) {
    s.pop();
  }
  if(removeItems >= addItems) {
    s.pop();
  }
  return s;
}

const isCopyStack = (s: Stack<any>, t: Stack<any>):boolean => {
  while(!s.isEmpty() && !t.isEmpty() && s.top === t.top) {
    s.pop();
    if(!t.isEmpty()) t.pop();
  }

  return s.isEmpty() && t.isEmpty() && s !== t;
}

class StackTest extends React.Component<any> {
  public render() {
    const randomStack = runTestStackRemove(15, 10, 2);
    return (
      <div>
        <TestSuite suitename="Ex. 2.1: Stack Tests">
          <Test testname = "checking push one/top" expected = "compile" actual = {runTestStack("compile", 0)}/>
          <Test testname = "checking push/top" expected = "arbitrary" actual = {runTestStack("arbitrary", 42)}/>
          <Test testname = "checking push/pop" expected = "18" actual = {runTestStackRemove(60, 20, 18).top.toString()}/>
          <Test testname = "checking push/pop" expected = "36" actual = {runTestStackRemove(40, 20, 36).top.toString()}/>
          <Test testname = "checking push/pop" expected = "36" actual = {runTestStackRemove(1, 0, 36).top.toString()}/>
          <Test testname = "checking isEmpty" expected = {false.toString()} actual = {runTestStackRemove(25, 20, 36).isEmpty().toString()}/>
          <Test testname = "checking isEmpty" expected = {true.toString()} actual = {runTestStackRemove(20, 20, 36).isEmpty().toString()}/>
        </TestSuite>
        <br />
        <TestSuite suitename="Count Down Tests">
          <Test testname = "countdown from 0 recursive" expected = "0" actual = {Exercises.countDownFrom(0)} />
          <Test testname = "countdown from 0 stack" expected = "0" actual = {Exercises.countDownFromStack(0)} />
          <Test testname = "countdown from 1 recursive" expected = "1,0" actual = {Exercises.countDownFrom(1)} />
          <Test testname = "countdown from 1 stack" expected = "1,0" actual = {Exercises.countDownFromStack(1)} />
          <Test testname = "countdown from 4 recursive" expected = "4,3,2,1,0" actual = {Exercises.countDownFrom(4)} />
          <Test testname = "countdown from 4 stack" expected = "4,3,2,1,0" actual = {Exercises.countDownFromStack(4)} />
          <Test testname = "countdown from 7 recursive" expected = "7,6,5,4,3,2,1,0" actual = {Exercises.countDownFrom(7)} />
          <Test testname = "countdown from 7 stack" expected = "7,6,5,4,3,2,1,0" actual = {Exercises.countDownFromStack(7)} />
        </TestSuite>
        <br />
        <TestSuite suitename="Ex. 2.2: Factorial Tests">
          <Test testname = "1! factorial" expected = {1} actual = {Exercises.factorial(1)} />
          <Test testname = "1! stack" expected = {1} actual = {Exercises.factorialFromStack(1)} />
          <Test testname = "2! factorial" expected = {2} actual = {Exercises.factorial(2)} />
          <Test testname = "2! stack" expected = {2} actual = {Exercises.factorialFromStack(2)} />
          <Test testname = "5! factorial" expected = {120} actual = {Exercises.factorial(5)} />
          <Test testname = "5! stack" expected = {120} actual = {Exercises.factorialFromStack(5)} />
          <Test testname = "7! recursive" expected = {5040} actual = {Exercises.factorial(7)} />
          <Test testname = "7! stack" expected = {5040} actual = {Exercises.factorialFromStack(7)} />
        </TestSuite>
        <br />
        <TestSuite suitename="Ex. 2.3: Count Up Tests">
          <Test testname = "count up to 0 recursive" expected = "0" actual = {Exercises.countUpTo(0)} />
          <Test testname = "count up to 0 stack" expected = "0" actual = {Exercises.countUpToFromStack(0)} />
          <Test testname = "count up to 4 recursive" expected = "0,1,2,3,4" actual = {Exercises.countUpTo(4)} />
          <Test testname = "count up to 4 stack" expected = "0,1,2,3,4" actual = {Exercises.countUpToFromStack(4)} />
          <Test testname = "count up to 7 recursive" expected = "0,1,2,3,4,5,6,7" actual = {Exercises.countUpTo(7)} />
          <Test testname = "count up to 7 stack" expected = "0,1,2,3,4,5,6,7" actual = {Exercises.countUpToFromStack(7)} />
        </TestSuite>
        <br />
        <TestSuite suitename="Ex. 2.4: Reverse String Tests">
          <Test testname = "reverse empty string recursive" expected = "" actual = {Exercises.reverse("")} />
          <Test testname = "reverse empty string stack" expected = "" actual = {Exercises.reverseFromStack("")} />
          <Test testname = "reverse stressed recursive" expected = "desserts" actual = {Exercises.reverse("stressed")} />
          <Test testname = "reverse stressed stack" expected = "desserts" actual = {Exercises.reverseFromStack("stressed")} />
          <Test testname = "reverse robot recursive" expected = "tobor" actual = {Exercises.reverse("robot")} />
          <Test testname = "reverse robot stack" expected = "tobor" actual = {Exercises.reverseFromStack("robot")} />
          <Test testname = "reverse racecar recursive" expected = "racecar" actual = {Exercises.reverse("racecar")} />
          <Test testname = "reverse racecar stack" expected = "racecar" actual = {Exercises.reverseFromStack("racecar")} />
        </TestSuite>
        <br />
        <TestSuite suitename="Ex. 2.5: Binary String Tests">
          <Test testname = "1 to binary string recursive" expected = "1" actual = {Exercises.toBinaryString(1)} />
          <Test testname = "1 to binary string stack" expected = "1" actual = {Exercises.toBinaryStringFromStack(1)} />
          <Test testname = "18 to binary string recursive" expected = "10010" actual = {Exercises.toBinaryString(18)} />
          <Test testname = "18 to binary string stack" expected = "10010" actual = {Exercises.toBinaryStringFromStack(18)} />
          <Test testname = "128 to binary string recursive" expected = "10000000" actual = {Exercises.toBinaryString(128)} />
          <Test testname = "128 to binary string stack" expected = "10000000" actual = {Exercises.toBinaryStringFromStack(128)} />
          <Test testname = "545 to binary string recursive" expected = "1000100001" actual = {Exercises.toBinaryString(545)} />
          <Test testname = "545 to binary string stack" expected = "1000100001" actual = {Exercises.toBinaryStringFromStack(545)} />
        </TestSuite>
        <br />
        <TestSuite suitename="Ex. 2.6: Stack Copy">
          <Test testname = "empty stack copy recursive" expected = "true" actual = {isCopyStack(Exercises.copyStack(new Stack()), new Stack()).toString()} />
          <Test testname = "empty stack copy from stack"  expected = "true" actual = {isCopyStack(Exercises.copyStackFromStack(new Stack()), new Stack()).toString()} />
          <Test testname = "random stack copy recursive" expected = "true" actual = {isCopyStack(Exercises.copyStack(randomStack), randomStack).toString()} />
          <Test testname = "random stack copy from stack" expected = "true" actual = {isCopyStack(Exercises.copyStackFromStack(randomStack), randomStack).toString()} />
        </TestSuite>
      </div>
    );
  }
}

export default StackTest;