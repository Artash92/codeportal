import React,{useState, useEffect } from 'react';
import RuEs5_4 from '../lang/RuEs5_4';
import AmEs5_4 from '../lang/AmEs5_4';

 function JsEs5_4() {
  
  const [language, setLanguage] = useState('en'); // по умолчанию язык выбран английский
  
  const handleEnglishClick = () => {
    setLanguage('en');
  };

  const handleRussianClick = () => {
    setLanguage('ru');
  };

  const handleArmenianClick = () => {
    setLanguage('am');
  };
  
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'JavaScript ES5-4 | Recursion | Object ';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-4 | Рекурсия | Объект ';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-4 | Ռեկուրսիա (Recursion) | Օբյեկտ ';
        break;
      default:
        document.title = 'JavaScript ES5-4 | java script lesson 4';
    }
  }, [language]);


  return (
    <div className='java-script'>
      <div>
        <button onClick={handleEnglishClick}>English</button>
        <button onClick={handleRussianClick}>Русский</button>
        <button onClick={handleArmenianClick}>Հայերեն</button>
      </div>
      {language === 'en' && (
        <div>
     
      <h3>Recursion </h3>

      <p>
      Recursion is a programming technique where a function calls itself until it reaches a base case. It is often used to solve problems that can be broken down into smaller, similar sub-problems.

      In JavaScript ES5, recursion can be used to traverse through a tree or a nested structure, to perform certain calculations or to generate all possible combinations of a set of elements.

      Here's an example of a function that uses recursion to calculate the factorial of a given number:
      </p>
    
  <code>
      <p> <span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

      <p><span className='blueviole'>if</span> (num {'<='}<span className='blue'> 1</span>) {'{'}</p>

      <p><span className='blueviole'>return</span> <span className='blue'>1</span>;</p>

      <p>{'}'}<span className='blueviole'> else</span> {'{'}</p>

      <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

      <p>{' }'}</p>

      <p>{'}'}</p>

      <p>{'console.log'}(factorial(<span className='blue'>5</span>)); <span className='darkgreen'>// Output: 120</span></p>
 </code>
 
 
<p>In this example, the factorial() function calls itself with a smaller</p>

<p>number until it reaches the base case of  {'num <='} , at which point it</p>

<p>returns 1. The final result is calculated by multiplying all the returned values together. </p> 
  
<p>
It's important to note that recursion can be memory-intensive, especially for large inputs, so it's important to design your recursive functions carefully and ensure they have a base case to prevent infinite loops.
</p>

<p><b>Example</b></p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

  <p><span className='blueviole'>if</span> (num === <span className='blue'>0</span> || num === <span className='blue'>1</span>) {'{'} </p>

  <p><span className='blueviole'>return</span> <span className='blue'>1</span>; </p>

  <p>{'}'} <span className='blueviole'>else</span> {'{'} </p>

  <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

  <p> {'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = factorial(<span className='blue'>5</span>);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// Output: 120</span></p>
</code>

<p>
In the updated example, we've defined a function factorial that takes a single parameter num. The function first checks if the given number is 0 or 1, in which case it immediately returns 1. Otherwise, it calculates the factorial of the number recursively by calling the same function factorial with a decremented value of num and multiplying it with the current value of num.

When we call the factorial function with the argument 5, it recursively calculates the factorial by calling itself with decreasing values until it reaches the base case of num === 1, at which point it returns 1 and the recursion unwinds, returning the final result of 5 * 4 * 3 * 2 * 1 = 120.
</p>

<h3>Object</h3>

<p>
An object is a data structure in JavaScript that allows you to store collections of related data and functionality. It is a key concept in JavaScript and is used extensively throughout the language. Objects are defined using curly braces {} and consist of key-value pairs, where the key is a string and the value can be any data type, including other objects or functions.

Objects are used in JavaScript for a wide variety of purposes, including creating complex data structures, organizing code, and providing a way to encapsulate related data and behavior. They are an important part of object-oriented programming in JavaScript and are a fundamental building block for many of the language's advanced features and libraries
</p>

<p><b>Explame</b></p>
 
<p className='darkgreen'>// Creating an object</p>
 
<code>

  <p><span className='blueviole'>var</span> car = {'{'} </p>

  <p>make: <span className='red'>"Toyota"</span>,</p>

  <p> model: <span className='red'>"Camry"</span>,</p>

  <p>year: <span className='blue'>2021</span>,</p>

  <p> start: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"Starting the car..."</span>);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='darkgreen'>// Accessing object properties</span></p>

  <p>{'console.log(car.make);'} <span className='darkgreen'>// Toyota</span></p>

  <p>{'console.log(car.year);'}<span className='darkgreen'> // 2021</span> </p>

  <p><span className='darkgreen'>// Invoking object methods</span></p>

  <p>{'car.start(); '}<span className='darkgreen'>// Starting the car...</span></p>

 </code>

 
<p><b>Properties of an object</b></p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>person</span> = {'{'} </p>

  <p> name: <span className='red'>"John"</span>,</p>

  <p>age: <span className='blue'>30</span>,</p>

  <p>gender: <span className='red'>"male"</span></p>

  <p>{'};'}</p>

  <p>person.email = <span className='red'>"john@example.com"</span>;</p>

  <p>{'console.log(person.name);'} <span className='darkgreen'>// John</span></p>

  <p>{'console.log(person.email);'} <span className='darkgreen'>// john@example.com</span></p>
</code>

<p><b>Methods of an object</b></p>

<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>calculator</span> = {'{'}</p>

<p>add: <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'} </p>

<p> <span className='blueviole'>return</span> a + b; {'}'},</p>

<p>subtract: <span className='blueviole'>function</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'} </p>

<p><span className='blueviole'>return</span> a - b;</p>

<p>{'}'}</p>

<p>{'};'}</p>

<p>{'console.log'}(calculator.add(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 8</span></p>

<p>{'console.log'}(calculator.subtract(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 2</span></p>

</code>
 
<p><b>Object-oriented type - array</b></p>
 

<p className='darkgreen'>// Creating an array</p>
<code>

<p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>]; <span className='darkgreen'>// Accessing array elements</span></p>

<p>{'console.log'}(colors[<span className='blue'>0</span>]); <span className='darkgreen'>// red</span></p>

<p>{'console.log'}(colors[<span className='blue'>2</span>]); <span className='darkgreen'>// blue</span></p>

<p><span className='darkgreen'>// Adding a new element to the array </span></p>

<p>{'colors.push'}(<span className='red'>"yellow"</span>); </p>

<p><span className='darkgreen'>// Looping through the array</span></p>

<p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} colors.length; i++) {'{'}</p>

<p>{' console.log(colors[i]);'}</p>

<p>{'}'}</p>

</code>
 
<p><b>Properties and methods of a function</b></p>

<code>
<p><span className='blueviole'>function</span> <span className='blue'>greeting</span>(<span className='blue'>name</span>) {'{'}</p>

<p>{'console.log'}(<span className='red'>"Hello "</span> + name);</p>

<p>{'}'}</p>

<p>{'console.log(greeting.length);'} <span className='darkgreen'>// 1 (the number of expected arguments)</span></p>

<p><span className='darkgreen'>// Adding a new property to the function</span></p>

<p>greeting.language = <span className='red'>"English"</span>;</p>

<p><span className='darkgreen'>// Accessing function properties</span></p>

<p>{'console.log(greeting.language);'} <span className='darkgreen'>// English</span></p>

<p><span className='darkgreen'>// Invoking function greeting("John"); // Hello John</span></p>
</code>


<h3>this</h3>

<p>
In JavaScript ES5, this is a keyword that refers to the current object or context in which the code is being executed. It can refer to different objects depending on how and where it is used.

When this is used inside a function that is called as a method of an object, it refers to the object itself. For example:
</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>myObject</span> = {'{'}</p>

  <p>name: <span className='red'>"John"</span>,</p>

  <p>sayHello: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{' }'}</p>

  <p>{'};'}</p>

  <p>{'myObject.sayHello();'} <span className='darkgreen'>// Output: "Hello, my name is John"</span></p>
</code>

<p>
In this example, this refers to the myObject object because sayHello() is being called as a method of myObject.
</p>
<p>
However, when this is used inside a regular function (i.e. not called as a method of an object), it refers to the global object (window in the browser or global in Node.js) by default. For example:
</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sayHello</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>name</span> = <span className='red'>"John"</span>;</p>

  <p>{'sayHello();'} <span className='darkgreen'>// Output: "Hello, my name is undefined"</span></p>
</code>

<p>
In this case, this refers to the global object because sayHello() is not being called as a method of an object. Since the global object does not have a name property, this.name is undefined.

It's important to note that the value of this can be explicitly set using methods like call(), apply(), and bind(). These methods allow you to call a function with a specific this value, regardless of how it is being called.
</p>

<h3>Function as an object</h3>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>user</span> = {'{'}</p>

  <p>name: <span className='red'>"John"</span>,</p>

  <p>age:<span className='blue'>20</span></p>

  <p>{'};'}</p>

  <p><span className='blueviole'>function </span><span className='blue'> foo</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'}</p>

  <p>{'console.log'}(<span className='blueviole'>this</span>.name);</p>

  <p>{'console.log(a + b);'}</p>

  <p>{'}'}</p>

  <p><span className='darkgreen'>//Using the call method to set this to the user object foo.call(user, 3, 5);</span></p>

  <p><span className='darkgreen'>// Accessing the length property of the function {'console.log(foo.length);'}</span></p>
</code>

<h3>Object arguments</h3>

<p>arguments object is a local variable that's available within all functions. It contains an array-like list of the arguments passed to the function.

Here's an example of how to use the arguments object:</p>
 
<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>sum</span>() {'{'} </p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span><span className='blue'> i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'} </p>

  <p>{'result += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> result;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>total</span> = sum(<span className='blue'>1, 2, 3, 4</span>);</p>

  <p>{'console.log(total);'} <span className='darkgreen'>// Output: 10</span></p>
</code>
 
<p>
In the example above, the sum function accepts any number of arguments, and the arguments object is used to loop through each argument and add them together. The function then returns the total sum.
</p>
<p>Another example of using the arguments object is to create a function that concatenates all the arguments passed in</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>concatenate</span>() {'{'}</p>

  <p> <span className='blueviole'>var </span><span className='blue'>result</span> = <span className='red'>" "</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'}</p>

  <p>{'result += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> result;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = concatenate(<span className='red'>"Hello", " ", "world", "!"</span>); </p>

  <p>{'console.log(str);'}<span className='darkgreen'>// Output: "Hello world!"</span></p>
</code>

<p>
In this example, the concatenate function accepts any number of arguments and concatenates them together into a single string, which is returned.
</p>
</div>
      )}
       {language === 'ru' && (
        <div>
          <RuEs5_4 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_4 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_4;