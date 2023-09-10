import React,{ useState, useEffect } from 'react';
import AmEs6 from '../lang/AmEs6';
import RuEs6 from '../lang/RuEs6';

 function JavaScript6() {
  
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
        document.title = 'ES6 (ECMAScript 2015) is the sixth version of JavaScript | ES6 Spread Operator |  ES6 Destructuring | Arrow functions | Class (static methods) | Symbol | Promise';
        break;
      case 'ru':
        document.title = 'ES6 (ECMAScript 2015) - это шестая версия JavaScript | Оператор расширения ES6  | Деструктуризация в ES6 | Стрелочные функции(Arrow functions) | Класс (статические методы) | Символ (Symbol) |Promise (Обещание)';
        break;
      case 'am':
        document.title = 'ES6 JavaScript-ի վեցերորդ տարբերակն է, որը նոր հնարավորություններ և բարելավումներ է բերում լեզվին | Spread օպերատոր | Destructuring ES6-ում | Promise (Խոստում) ';
        break;
      default:
        document.title = 'JavaScript ES6 ';
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

       
    <h1 className='hy'>JavaScript ES6 (ECMAScript 2015) is the sixth version of JavaScript that introduced new features and syntax improvements to the language. Here are some key features of ES6:</h1>
    
      <p>1 . <b className='blueviole'>let </b>and <b className='blueviole'>const</b>: These are new variable declarations that replace the old var keyword. They provide better scoping rules and help avoid common mistakes that can occur with <b className='blueviole'>var</b>.</p>
    
      <p>2. Arrow functions: Arrow functions provide a shorter syntax for writing function expressions. They also bind the this value lexically, making it easier to reason about function scope.</p>
    
      <p>3. Template literals: This feature provides a way to embed expressions inside strings using backticks instead of quotes. It makes it easier to create strings with dynamic content.</p>
    
      <p>4. Spread operator: The spread operator is represented by three dots (...). It allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.</p>
    
      <p>5. Destructuring: Destructuring provides a way to extract data from arrays and objects into separate variables using a shorthand syntax.</p>
    
      <p>6. Classes: ES6 introduced a new class syntax that provides a simpler and more intuitive way to create objects and define their behavior.</p>
    
      <p>7. Modules: Modules are a way to organize code into separate, self-contained files that can be easily imported and exported as needed. This allows for more efficient development and maintenance of large applications. ES6 introduced a standardized module syntax using the import and export keywords, making it easier to share and reuse code across multiple files and projects.</p>
    
      <p>8. Classes: ES6 introduced a new syntax for creating classes, which allows for object-oriented programming in JavaScript. Classes can be used to create objects with properties and methods, and can also inherit from other classes. This syntax makes it easier to write and maintain complex code, and can improve the readability and reusability of your code.</p>
    
      <p>9. Promises: Promises are a way to handle asynchronous operations in JavaScript. They provide a standardized way to handle the result of an asynchronous operation, either by resolving or rejecting a value. Promises can be chained together and combined with other features like async/await to create more complex and powerful asynchronous workflows.</p>
    
      <p>These are just a few of the many features introduced in ES6. Learning and using these features can greatly improve your JavaScript code and make your development process more efficient and effective.</p>
    
      <p><b>ES6 Variables</b></p>
    
  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>num</span> = <span className='blue1'>10</span>; </p>

    <p>{'console'}.<span className='blue'>log</span>(num);<span className='green'> // 10</span></p>

    <p>{'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>num2</span> = <span className='blue1'>20</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(num2); <span className='green'>// 20</span> </p>

    <p>{'}'}</p>

    <p><span className='green'>// num2 is not defined</span></p>

    <p>{'console'}.<span className='blue'>log</span>(num); <span className='green'>// 10</span></p>
 </code>

    <p>This code is using ES6 variables. The first line creates a constant variable named "num" and assigns the value 10 to it. The second line starts a block of code using curly braces, which is a new feature in ES6.</p>

    <p>Inside this block, a new variable named "num2" is declared using the "const" keyword and assigned the value 20. This variable is only accessible inside the block because it was declared using the "const" keyword which creates a block-scoped variable. The third line outputs the value of "num2" to the console, which will be 20.</p>

    <p>After the block, another console.log statement is called, but this time it outputs the value of the variable "num", which is outside of the block and therefore accessible. Finally, the code attempts to output the value of "num2", but since it was declared inside the block and is not accessible outside of it, an error will occur, saying that "num2 is not defined".</p>

    <p><b>ES6 Variables</b></p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>//Identifier (name) has already been declared</span></p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>

    <p>{'}'}</p>

   <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
 </code>

    <p>This code declares a constant variable "name" and then tries to declare it again with a different value, which results in an error "Identifier 'name' has already been declared".</p>
    
    <p>Then the code re-declares "name" as "Leo" and creates a block scope with an if statement. Inside the block, a new variable "name" is declared with the value "Mike", which is then printed to the console. Outside the block, the original variable "name" with the value "Leo" is still in scope and is printed to the console.</p>
    
    <p>So the output of this code is "Identifier 'name' has already been declared" followed by "Mike" and "Leo".</p>

    <p><b>ES6 Variables</b></p>

  <code>
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='green'>// Temporal Dead Zone</span></p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//value is not defined</span></p>

    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'} '}</p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//undefined</span></p>
  </code>

    <p>The <b>let</b> keyword is used to declare the variable <b>value</b> within the block. However, when <b>typeof value</b> is called within the block before the declaration of <b>value</b>, the JavaScript engine throws a ReferenceError because the variable is not defined yet. This is known as the Temporal Dead Zone, which refers to the period of time between the creation of a variable and its declaration where it cannot be accessed. The <b>console.log(typeof value)</b> statement outside of the block returns <b>undefined</b> because <b>value</b> is not defined in the current scope.</p>

    <p>In the second block of code:</p>

    <code>
      <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>

      <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

      <p>{'}'}</p>
    </code>

    <p>The variable <b>value</b> is declared and assigned a value of <b>10 </b> within the block. However, because the block is not in the global scope and <b>value</b> is not returned or assigned to a variable in the outer scope, the value of <b>value </b> is effectively lost once the block finishes executing.</p>

    <p><b>ES6 Variables</b> </p>

    <code>
      <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>
    
      <p><span className='green'>// Code here</span></p>

      <p>{'}'}</p>

      <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>
 
      <hr/>
      
      <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

      <p><span className='green'>// Code here</span></p>

      <p>{' }'}</p>

      <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// i is not defined</span> </p>
    </code>

    <p>This code demonstrates the difference in variable scoping between using var and let in a for loop. In the first example, the i variable is declared using var, which has function-level scope. This means that the variable exists outside of the for loop, so the value of i is 5 when it is printed to the console.</p>

    <p>In the second example, i is declared using let, which has block-level scope. This means that the variable only exists within the for loop block, so it is not accessible outside of the loop. Therefore, when i is printed to the console outside of the loop, it throws a reference error saying that i is not defined.</p>

    <p><b>ES6 Spread Operator</b></p>

    <p>The spread operator is a new feature introduced in ES6 that allows you to spread or expand an iterable object into individual elements. This iterable object could be an array, a string, or any other iterable object.</p>

    <p><b>The spread operator is represented by three dots (...) and can be used in a variety of ways. Here are some examples:</b></p>

    <p>1. Using spread operator to concatenate arrays:</p>

   <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>

    <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
   </code>

    <p>2. Using spread operator to create a copy of an array:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>

    <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
  </code>

    <p>3. Using spread operator to pass arguments to a function:</p>

  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> a + b + c; </p>

    <p>{'}'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>

    <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
  </code>

    <p>4. Using spread operator to merge objects: </p>

    <code>
      <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>

      <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>

      <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>

      <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
    </code>
    
    <p>In all of these examples, the spread operator is used to expand an iterable object into individual elements. It's a useful feature that can simplify your code and make it more readable.</p>

    <p><b>ES6 Destructuring</b></p>

    <p>ES6 destructuring is a way of extracting values from objects or arrays and assigning them to variables in a more concise and readable way.</p>

    <p>For example, consider the following object:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>person</span> = {'{'}</p>

    <p>name: <span className='red'>'John Doe'</span>, </p>

    <p>age: <span className='blue1'>30</span>,</p>

    <p> email: <span className='red'>'john.doe@example.com'</span></p>

    <p>{'};'}</p>
  </code>

    <p>Instead of accessing each property individually like this:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = person.name;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>age</span> = person.age; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>email</span> = person.email; </p>
  </code>

    <p>You can use destructuring to assign each property to a variable in a more concise way:</p>
    
    <code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>name, age, email</span> {'}'} = person; </p></code>

    <p>This creates three variables <b>(name, age, and email)</b> and assigns them the values of their corresponding properties in the person object.</p>

    <p>You can also use destructuring with arrays. For example:</p>

    <code>
      <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

      <p><span className='blueviole'>const</span> [<span className='blue'>first</span>, <span className='blue'>second</span>, ...<span className='blue'>rest</span>] = numbers; </p>

      <p>{'console'}.<span className='blue'>log</span>(first); <span className='green'>// 1</span></p>

      <p>{'console'}.<span className='blue'>log</span>(second); <span className='green'>// 2</span></p>

      <p>{'console'}.<span className='blue'>log</span>(rest); <span className='green'>// [3, 4, 5]</span></p>
   </code>

<p>This creates three variables <b>(first, second, and rest) </b>and assigns them the values of the first two elements in the <b>numbers</b> array and the rest of the elements, respectively.</p>

<p>Destructuring can also be used with nested objects and arrays, and can even have default values assigned to variables in case the value being destructured is undefined.</p>
    
<p>Overall, destructuring is a powerful feature in ES6 that can help make your code more readable and concise.</p>

    <p><b>ES6 Cycle (for - of)</b></p>

<p>ES6 introduced a new type of loop in JavaScript called the <b>for...of</b> loop. This loop is used to iterate over elements of an iterable object like arrays, strings, maps, sets, etc.</p>
    
    <p>Here's an example of using the <b>for...of </b> loop to iterate over an array:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(num);</p>

    <p>{'} '}</p>
  </code>
    
    <p>In this example, the <b>for...of</b> loop iterates over each element in the <b>arr</b> array and logs it to the console.</p>

    <p>We can also use the <b>for...of</b> loop to iterate over the characters in a string:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(char);</p>

    <p>{'}'}</p>
  </code>

    <p>In this example, the <b>for...of</b> loop iterates over each character in the <b>str</b> string and logs it to the console.</p>
    
    <p>We can also use the <b>for...of</b> loop to iterate over the keys or values of a Map object:</p>
    
  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>map</span> = <span className='blueviole'>new</span> Map {'(['} </p>

    <p>[<span className='red'>'a'</span>, <span className='blue1'>1</span>],</p>

    <p> [<span className='red'>'b'</span>, <span className='blue1'>2</span>], </p>

    <p> [<span className='red'>'c'</span>, <span className='blue1'>3</span>] </p>

    <p>{']);'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> [<span className='blue'>key, value</span>] <span className='blueviole'>of</span> map) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(key, value);</p>

    <p>{'}'}</p>
  </code>

    <p>In this example, the <b>for...of</b> loop iterates over each key-value pair in the <b>map</b> object and logs them to the console.</p>

    <p>Overall, the <b>for...of</b> loop is a useful addition to the JavaScript language that simplifies iterating over iterable objects.</p>
    
    <p><b>ES6 function rest parameter</b></p>

    <p>The ES6 function rest parameter is a feature that allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (...) followed by the name of the parameter.</p>
    
    <p>Here is an example of using the rest parameter:</p>

  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(...<span className='blue'>numbers</span>) {'{'}</p>

    <p><span className='blueviole'>let</span> <span className='blueviole'>result</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>number</span> <span className='blueviole'>of</span> numbers) {'{'}</p>

    <p>{'result += number;'}</p>

    <p>&nbsp;{' }'}</p>

    <p><span className='blueviole'>return</span> result; </p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// Output: 6</span></p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'>// Output: 22</span></p>
  </code>

<p>In the above example, the function sum accepts an indefinite number of arguments using the rest parameter ...numbers. It then loops through the numbers array using a for...of loop to sum up the values and returns the result.</p>

<p>The rest parameter is useful when you want to write a function that can handle a variable number of arguments without having to explicitly define each argument. It is commonly used in functions that manipulate arrays or perform mathematical operations on a set of values.</p>

<p>Overall, the rest parameter is a convenient feature that makes it easier to write functions that are more flexible and versatile.</p>
    
    <p><b>Arrow functions </b></p>

<p>Arrow functions are a concise way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a more compact syntax compared to traditional function expressions, making the code easier to read and write.</p>

<p>Here is an example of a traditional function expression that takes two parameters and returns their sum:</p>
    
 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b</span>) {'{'}</p>
    
    <p><span className='blueviole'>return</span> a + b; </p>

    <p>{'}'}</p>
 </code>

    <p>The same function can be written using an arrow function in the following way:</p>

    <code><p><span className='blueviole'>const</span> <span className='blue'>sum</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>

  <p>In this example, the function is defined using the arrow syntax <b>{'=>.'}</b> The parameters <b>(a, b)</b> are enclosed in parentheses, followed by the arrow <b>{'=>'}</b> and the function body <b>a + b.</b> Since the function body is a single statement, the curly braces and <b>return</b> keyword can be omitted.</p>

  <p>Arrow functions can also be used as anonymous functions, assigned to variables, and passed as arguments to other functions. Here is an example of an arrow function that takes an array and returns a new array with each element doubled:</p>

    <code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'}arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

  <p>In this example, the arrow function{' (item => item * 2)'} is passed as an argument to the <b>map()</b> method, which applies the function to each element of the array and returns a new array with the modified values.</p>

  <p>Arrow functions also have a lexical <b>this</b> binding, meaning that this refers to the value of <b>this</b> in the enclosing scope, rather than the function's own <b>this</b>. This makes arrow functions particularly useful for working with object methods and event handlers.</p>

  <p>Overall, arrow functions provide a more concise and readable way to write functions in JavaScript, making code easier to understand and maintain.</p>

    <p><b>Prototype</b></p>

  <p>In JavaScript, every object has an internal property called [[Prototype]] (sometimes referred to as "dunder proto"), which refers to another object or null. This property is used to implement inheritance and to allow objects to inherit properties and methods from their prototypes.</p>

<p>In ES5, you can create a prototype using constructor functions and the prototype property. Here is an example:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue1'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age; </p>

  <p>&nbsp;{'} '}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Hello, my name is</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>and I am</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>years old.`</span>);</p>

  <p>{'} '}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Hello, my name is John and I am 30 years old."</span></p>
</code>

<p>In this example, we create a constructor function called <b>Person</b> that takes a <b>name</b> and an <b>age</b> as arguments and sets them as properties on the object. We then add a <b>greet</b> method to the prototype of <b>Person </b>using the <b>Person.prototype</b> object. This method logs a greeting message to the console that includes the person's name and age.</p>

<p>When we create a <b>new</b> object using the new keyword and the <b>Person</b> constructor, the new object's [[Prototype]] property will point to the <b>Person.prototype</b> object. This allows the new object to inherit the <b>greet</b> method from its prototype.</p>

<p>In ES6, you can use the <b>class</b> syntax to define a class and its prototype. Here is the same example using ES6 classes:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Person</span> {'{'}</p>

  <p>constructor(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>{'greet() { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Hello, my name is</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>and I am</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>years old.`</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Hello, my name is John and I am 30 years old."</span></p>
</code>

<p>In this example, we define a class called <b>Person</b> with a constructor that takes a <b>name </b>and an <b>age</b> and sets them as properties on the object. We then define a <b>greet</b> method directly on the class. Under the hood, the <b>class</b> syntax creates a constructor function and sets its prototype to the class's prototype.</p>

<p>Both ES5 and ES6 use the concept of prototypes to implement inheritance in JavaScript, but the syntax for defining prototypes is different. ES6 classes provide a more concise and intuitive syntax for creating classes and defining their prototypes, while ES5 prototypes provide more flexibility and control over how prototypes are defined.</p>

      <p><b> Class (static methods)</b></p>

<p>In ES6, classes were introduced as a way to create object blueprints. Classes are a template for creating objects that encapsulate data and functionality. One feature of classes is the ability to define static methods, which are methods that are called on the class itself rather than on an instance of the class.</p>

<p>A static method is a method that belongs to the class itself, rather than to any instance of the class. It can be called on the class without having to create an instance of the class first.</p>

<p>Here's an example of a class with a static method:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Car</span> {'{'}</p>

  <p>constructor(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'}'}</p>

  <p><span className='blueviole'>static</span> compare(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Same make"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span> {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Different make"</span>; </p>

  <p>&nbsp;&nbsp;{' }'}</p>

  <p>&nbsp;{' }'}</p>

  <p>{' }'}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Different make"</span> </p>
</code>

  <p>In the example above, the Car class has a static method called compare. This method takes two Car objects as parameters and returns a string indicating whether they have the same make or not. The compare method can be called on the Car class itself, rather than on an instance of the class.</p>

  <p> Note that in the compare method, the this keyword is not used, since the method is not called on an instance of the class. Instead, the method takes two Car objects as parameters and compares their make properties.</p>

  <p>In ES5, static methods can be defined on a constructor function using the constructor function's prototype property. Here's an example of how the above ES6 class might look in ES5:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'} '}</p>

  <p>Car.compare = <span className='blueviole'>function</span>(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Same make"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span>  {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Different make"</span>; </p>

  <p>&nbsp;{'}'}</p>

  <p>{'}; '}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Different make"</span> </p>
</code>

<p>In the ES5 example, the compare method is defined directly on the Car constructor function, rather than on its prototype property. This allows the method to be called on the Car constructor function itself.</p>

      <p><b>Symbol</b></p>

<p>In ES6, Symbol is a new primitive data type that represents a unique identifier. Unlike strings or numbers, symbols are guaranteed to be unique and immutable, which makes them useful for creating object keys or properties that are meant to be completely unique.</p>

<p>To create a symbol, you can use the <b>Symbol()</b> function, like this:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>

<p>You can also add a description to a symbol to make it easier to identify it later on, like this:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'My Symbol'</span>); </p></code>

<p>Symbols can be used as object keys or properties, like this:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'My Symbol'</span>); </p>

  <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>

  <p>{'obj[mySymbol]'} = <span className='red'>'Hello, World!'</span>; </p>

  <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// Output: Hello, World!</span> </p>
</code>

<p>One of the main benefits of using symbols is that they cannot be accessed or modified accidentally, because they are unique and cannot be replicated. This makes them ideal for creating private or internal properties in objects.</p>

<p>Another benefit of symbols is that they can be used to define well-known symbols, which are built-in symbols that have a specific meaning or behavior in the language. For example, the Symbol.iterator symbol is used to define the default iterator for an object.</p>
      
<p>Overall, symbols provide a powerful and flexible way to create unique identifiers and define custom behavior for objects in JavaScript.</p>

      <p><b>Promise</b></p>

<p>A Promise is a feature introduced in ES6 that allows you to handle asynchronous operations more easily and in a more organized way.</p>

<p>In simple terms, a Promise is an object that represents a value that might not be available yet, but will be at some point in the future. It provides a way to handle the results of asynchronous operations (such as API requests or database queries) without blocking the main thread of execution </p>

<p>A Promise has three states: pending, fulfilled, or rejected. When a Promise is pending, it means that the operation it represents hasn't completed yet. When a Promise is fulfilled, it means that the operation was successful and the result is available. When a Promise is rejected, it means that the operation failed and an error is available.</p>

<p>Here is an example of how to use a Promise to fetch data from an API:</p>

<code>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
</code>

<p>In this example, <b>fetch</b> is a function that returns a Promise that resolves with the response from the API. The <b>then</b> method is called on the Promise, which takes a callback function that is executed when the Promise is fulfilled. The first <b>then</b> callback parses the response as JSON and returns it. The second then callback logs the parsed data to the console. The <b>catch</b> method is called to handle any errors that occur during the operation.</p>

<p>Promises can also be created manually using the <b>Promise</b> constructor:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>

  <p>{"setTimeout(() => { "}</p>

  <p> resolve(<span className='red'>'Success!'</span>) </p>

  <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>

  <p>{"}) "}</p>

  <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'>// Output: Success!</span> </p>
</code>

<p>In this example, the Promise is created with a function that takes two parameters: <b>resolve and reject.</b> The <b>resolve</b> function is called after one second with the argument <b>'Success!'</b>. The <b>then</b> method is called on the Promise, which takes a callback function that is executed when the Promise is fulfilled. The callback logs the result to the console.</p>

      </div>
      )}
      {language === 'ru' && (
        <div>
          <RuEs6 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs6 />
        </div>
      )}
    </div>
  )
}



export default JavaScript6;