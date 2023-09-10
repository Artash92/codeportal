import React, { useState, useEffect } from 'react';
import RuEs5_1 from '../lang/RuEs5_1';
import AmEs5_1 from '../lang/AmEs5_1';


function JsEs5_1() {
   
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
        document.title = 'JavaScript ES5-1 | ECMAScript defines 7 data types| Boolean Data Type ';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-1 | ECMAScript определяет 7 типов данных | Тип данных Boolean ';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-1 | ECMAScript-ը սահմանում է տվյալների 7 տեսակ | Բուլյան տվյալների տեսակը';
        break;
      default:
        document.title = 'JavaScript ES5-1 | java script lesson 1';
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
          <h1>JavaScript</h1>
          
      <p>
      JavaScript was created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation. 
      The language was originally called Mocha, but was later renamed to LiveScript before finally being named JavaScript. 
      The name change was mainly due to marketing reasons and to capitalize on the popularity of Java at the time. 
      Brendan Eich is an American technologist and programmer who has worked for companies like Mozilla, Netscape, and Brave Software. 
      He is considered to be the creator of JavaScript and has made significant contributions to other programming languages as well.
      </p>
      <h3>ECMAScript defines 7 data types:</h3>
      
      <code>
      <ul>
        <li><span className='blue'>Number:</span> represents numeric values, including integers and floating-point numbers. Example: <span className='blue'>1, 3.14, -42</span>.</li>
        
        <li><span className='blue'>String:</span> represents textual data, enclosed in single or double quotes. Examples: <span className='red'>"hello", 'world', "123"</span>.</li>
        
        <li><span className='blue'>Boolean:</span> represents a logical entity and can have only two values: true or false. Example: <span className='blue'> true, false</span>.</li>
        
        <li><span className='blue'>Undefined:</span> represents a variable that has been declared but has not been assigned a value. Example: <span className='blueviole'>var</span> <span className='blue'>x</span>; console.log(x); <span className='darkgreen'>// Output: undefined</span></li>
        
        <li><span className='blue'>Null:</span> represents the intentional absence of any object value. Example: <span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blueviole'>null</span>; console.log(x); <span className='darkgreen'>// Output: null</span></li>
        
        <li><span className='blue'>Symbol:</span> represents a unique identifier that is not exposed to the calling code. Example: <span className='blueviole'>const</span> <span className='blue'>sym1</span> = Symbol(<span className='red'>'foo'</span>);</li>
        
        <li><span className='blue'>Object:</span> represents a collection of related data and/or functionality. Example: <span className='blueviole'>var</span> <span className='blue'>obj</span> = {'{'} name: <span className='red'>"John"</span>, age: <span className='blue'>30</span> {'}'}; <span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3</span>];</li>
      </ul>
      </code>
      
      <h2>Boolean Data Type</h2>
      
      <p>The Boolean data type has only two values: true and false. It is commonly used in comparison operations using the following operators:</p>
      
   
 <code>
    <ul>
       <li>=== and ==</li>
        <li>{'>'} and {'<'}=</li>
        <li>{'>='} and {'<'}=</li>
      </ul>
 </code>
      
      <p>Examples:</p>
      
      <code>
      <ul>
        <li><span className='blue'>10</span> {'<'} <span className='blue'>16</span> == <span className='blue'>true</span></li>
        
        <li><span className='blue'>10</span> {'>'} <span className='blue'>16</span> == <span className='blue'>false</span></li>
      </ul>
   </code>
      
      <h2>Boolean Operators</h2>
     
      <code>
      <ul>
        <li>NOT (!)</li>
        <li>AND (&&)</li>
        <li>OR (||)</li>
      </ul>
      </code>
      
      <p>When evaluating a condition, the Boolean data type is used. The following values are converted to false: 0 and an empty string. The following values are converted to true: all other numbers and non-empty strings.</p>
      
      <h3>Examples:</h3>
      
 <code>
 <p><span className='blue'>5</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>6</span> && <span className='blue'>0 </span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='blue'>true</span> && <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>5</span> || <span className='blue'>6</span> <span className='darkgreen'>// 5</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>6</span> || <span className='blue'>7</span> <span className='darkgreen'> // 6</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'> // false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>50</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>10</span> && <span className='blue'>0</span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='red'>'Hello'</span> && <span className='red'>'World'</span> <span className='darkgreen'>// "World"</span></p>
  
  <p><span className='red'>'Hello'</span> && <span className='red'>''</span> <span className='darkgreen'>// ''</span></p>
  
  <p>!<span className='blue'>true</span> <span className='darkgreen'>// false</span></p>
 
 </code>
  
  
  <h3>Expressions and Statements</h3>
  
<p>These are examples of expressions and operators in JavaScript. An expression is a combination of values, variables, operators, that can be evaluated to some value. Expressions can be used in other expressions or in statements.</p>

<p>Operators such as *, +, etc., are used to create expressions. The first three lines show examples of expressions with different data types: numbers, strings, and boolean values.</p>

<p>Operators can be used in the form of operator expressions, which are part of operators. The next three lines show examples of operator expressions, which are operators.</p>

<p>Each operator expression ends with an operator (;), which makes it a statement.</p>
  
  <ul>
    <li><strong className='blue'>Expression</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> </li>
    
    <li><strong className='blue'>Expression</strong>: <span className='red'>"Hello, there!"</span></li>
    
    <li><strong className='blue'>Expression</strong>: <span className='blue'>false</span></li>
    
    <li><strong className='blue'>Statement</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> ;</li>
    
    <li><strong className='blue'>Statement</strong>: <span className='red'>"Hello, there!"</span>;</li>
    
    <li><strong className='blue'>Statement</strong>: <span className='blue'>false</span>;</li>
  </ul>
  <h2>JavaScript Special Values and Functions</h2>
  
  <h5>NaN</h5>
  
  <p>NaN stands for "Not a Number" and is a special value in JavaScript that represents an undefined or unrepresentable value resulting from an arithmetic operation. For example, dividing zero by zero will result in NaN.</p>
  
  <h5>typeof</h5>
  
  <p>typeof is a unary operator in JavaScript that returns a string indicating the data type of an operand. For example, typeof "hello" will return "string" and typeof 42 will return "number".</p>
  
  <h5>isNaN()</h5>
  
  <p>isNaN() is a global function in JavaScript that returns true if the argument is NaN (Not a Number), and false otherwise. For example, isNaN("hello") will return true, and isNaN(42) will return false.</p>
  
  <h5>isFinite()</h5>
  
  <p>isFinite() is a global function in JavaScript that returns true if the argument is a finite number, and false otherwise. For example, isFinite(42) will return true, and isFinite(Infinity) will return false.</p>
  
  <h2>Variables</h2>

<ul>
  <li>Declaration of variables (a-A, $, _)</li>
 
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>studentName</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>firstName, lastName, age</span>;</code></li>
  </ul>
 
  <li>Declaration and assignment of variables</li>
  
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>carModel</span> = <span className='red'>"Tesla"</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>carModel</span> = <span className='red'>"Tesla"</span>, <span className='blue'>year</span> = <span className='blue'>2022</span>, <span className='blue'>isElectric</span> = <span className='blue'>true</span>;</code></li>
  </ul>
  
  <li>Usage of variables</li>
  
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>quantity</span> = <span className='blue'>5</span>;</code></li>
    <li><code>quantity = quantity + <span className='blue'>3</span>;</code></li>
    <li><code>quantity += <span className='blue'>2</span>;</code></li>
  </ul>
</ul>

<h2>Null and Undefined</h2>
 
  <ul>
    <li>Null is a special value in JavaScript that represents the absence of any object value. It is a primitive value and represents a deliberate non-value or empty value. It is often used to indicate that a variable has no value or that a function returns no value.</li>
    <li>Undefined is a value that a variable can have if it has not been assigned a value or if it has been explicitly assigned the value undefined. It is also a primitive value in JavaScript.</li>
    <li>The typeof operator is used to determine the type of a value. If the value is undefined, typeof returns the string "undefined". If the value is null, typeof returns the string "object". This is a known bug in JavaScript that has existed since the language was first created.</li>
    <li>Null and undefined are often confused with each other because they both represent the absence of a value. However, they are not the same thing. null represents a deliberate absence of a value, while undefined represents an accidental absence of a value.</li>
    <li>The == operator in JavaScript performs type coercion, which means that it will try to convert values of different types to a common type before comparing them. When comparing null and undefined with ==, the result is true because they are both considered falsy values.</li>
    <li>The === operator in JavaScript performs a strict comparison that does not perform type coercion. When comparing null and undefined with ===, the result is false because they are not the same type of value.</li>
    <li>The parseInt, parseFloat, and Number functions are used to convert a string to a number. When passed the value null, all three functions return NaN, which stands for "Not a Number". This is because null is not a valid number and cannot be converted to a number.</li>
  </ul>
  </div>
     )}
      {language === 'ru' && (
        <div>
          <RuEs5_1 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_1 />
        </div>
      )}
    
    </div>
  )
}




export default   JsEs5_1;