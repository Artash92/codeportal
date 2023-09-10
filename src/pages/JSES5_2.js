import React , { useState, useEffect } from 'react'
import RuEs5_2 from '../lang/RuEs5_2';
import AmEs5_2 from '../lang/AmEs5_2';

 function JsEs5_2() {
 
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
        document.title = 'JavaScript ES5-2 | JavaScript Loops and Conditionals | Conditional (ternary) Operator ';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-2 | Циклы и условные конструкции в JavaScript | Оператор условного (тернарный) оператор ';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-2 | JavaScript Ցիկլեր և Պայմաններ | Պայմանական (ternary) Օպերատոր';
        break;
      default:
        document.title = 'JavaScript ES5-2 | java script lesson 2';
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
        
        <h3>JavaScript Loops and Conditionals</h3>
  
  <p><b>1. The while loop</b></p>
  
  <p>The while loop is used to execute a block of code repeatedly while a specified condition is true.</p>

<p>Here is an example:</p>
  
   <code>
<p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// initialize the counter variable</span></p> 

<p><span className='blueviole'>while</span> (i {'<'}<span className='blue'> 5</span>) {'{'}<span className='darkgreen'> // set the condition</span></p>

<p>{'console.log'}(<span className='blue'>i</span>); <span className='darkgreen'>// execute the code block</span></p>

<p>i++; <span className='darkgreen'>// update the counter variable</span></p>

<p>{'}'}</p>
   </code>
   
  <p>
  In this example, the loop will run as long as the value of i is less than 5. The code block will be executed each time the loop runs, and the value of i will be incremented by 1 until it reaches 5.
The output of this code will be:
  </p>

<code>

<p className='blue'>0</p>

<p className='blue'>1</p>

<p className='blue'>2</p>

<p className='blue'>3</p>

<p className='blue'>4</p>

</code>
 <p> <b>2. The for loop</b></p>
  
  <p>The for loop is used to execute a block of code a specified number of times.
Here is an example:</p>

<code>
<p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> i = <span className='blue'>0</span>; i {'<'} <span className='blue'>5</span>; i++) {'{'} </p>

<p>{'console.log(i);'}</p>

<p>{'}'}</p>
 
</code>
 
 
  <p>
  In this example, the loop will run 5 times, since the condition specifies that i must be less than 5. The code block will be executed each time the loop runs, and the value of i will be incremented by 1 each time.

The output of this code will be the same as the previous example:
  </p>

<code>
<p className='blue'>0</p>

<p className='blue'>1</p>

<p className='blue'>2</p>

<p className='blue'>3</p>

<p className='blue'>4</p>
</code>
  
<p> <b>3. The do-while loop</b></p>
  
  <p>
  The do-while loop is similar to the while loop, but it executes the code block at least once, even if the condition is initially false.
Here is an example:
  </p>
<code>
<p><span className='blueviole'>var</span> i = <span className='blue'>0</span>; <span className='darkgreen'>// initialize the counter variable</span></p>

<p><span className='blueviole'>do</span> {'{'}</p>

<p>{'console.log(i);'} <span className='darkgreen'>// execute the code block</span></p>

<p>i++; <span className='darkgreen'>// update the counter variable</span></p>

<p>{'}'}</p>

<p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>); <span className='darkgreen'>// set the condition</span></p>
</code>

  <p>
  In this example, the loop will run at least once, since the condition is checked after the code block is executed. The code block will be executed each time the loop runs, and the value of i will be incremented by 1 each time, until it reaches 5.
The output of this code will be the same as the previous examples:
  </p>

<code>
<p className='blue'>0</p>

<p className='blue'>1</p>

<p className='blue'>2</p>

<p className='blue'>3</p>

<p className='blue'>4</p>
</code>
  
<p> <b>4. The ++ and -- operators</b></p>
  
  <p>The ++ and -- operators are used to increment or decrement a variable by 1. Here are some examples:</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// initialize a variable</span></p>

  <p>i++; <span className='darkgreen'>// increment the variable</span></p>

  <p>{'console.log(i);'} <span className='darkgreen'>// output: 1</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue'>2</span>; <span className='darkgreen'>// initialize another variable</span></p>

  <p>j--; <span className='darkgreen'>// decrement the variable</span> </p>

  <p>{'console.log(j);'} <span className='darkgreen'>// output: 1</span></p>
</code>
  
  
 
  <p>These operators are often used in loops to keep track of the current iteration.</p>
 
  <b>5. The if, else, and else if statements</b>
 
  <p>The if statement is used to execute a block of code if a specified condition is true. The else statement is used to execute a block of code if the condition is false. The else if statement is used to test multiple conditions. Here is an example:</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>15</span>; <span className='darkgreen'>// initialize a variable</span></p>

  <p><span className='blueviole'>if</span> (x {'>'} <span className='blue'>10</span>) {'{'} <span className='darkgreen'>// check the condition</span></p>

  <p>{'console.log'}(<span className='red'>"x is greater than 10"</span>)</p>

  <p>{'}'}</p>
</code>

 
  <h3>Conditional (ternary) Operator</h3>
  
<p>The Conditional (ternary) Operator is a shorthand way of writing an if-else statement in JavaScript. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax for the conditional operator is: (condition) ? true-value : false-value Here are some examples of using the conditional operator in JavaScript:</p>
 
<p><b>Example 1:</b></p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>5</span>;</p>

  <p><span className='blueviole'>var</span><span className='blue'> result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>

  <p>document.getElementById(<span className='red'>"example1"</span>).innerHTML = result;</p>
</code>
   
<p>Output: true Explanation: In this example, we set the value of variable a to 5, and then we use the conditional operator to check if a is equal to 5. Since it is true, the value "true" is returned and assigned to the variable result, which is then printed in the HTML div element.</p>

<p><b>Example 2:</b></p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>

  <p>document.getElementById(<span className='red'>"example2"</span>).innerHTML = result;</p>
</code>

<p>Output: false Explanation: In this example, we set the value of variable a to 10, and then we use the conditional operator to check if a is equal to 5. Since it is false, the value "false" is returned and assigned to the variable result, which is then printed in the HTML div element.</p>

<p><b>Example 3:</b></p>

<code>

  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>7</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = ( a {'>'} <span className='blue'>10</span>) ? <span className='red'>"greater than10"</span>: (a {'<'} <span className='blue'>5</span>) ? <span className='red'>"less than 5"</span> : <span className='red'>"between 5 and 10"</span> ;</p>

  <p>document.getElementById(<span className='red'>"example3"</span>).innerHTML = result;</p>

</code>


<p>Output: between 5 and 10 Explanation: In this example, we set the value of variable a to 7, and then we use the conditional operator to check if a is greater than 10. Since it is false, we move to the second condition which checks if a is less than 5. Since this is also false, we move to the third condition which returns the value "between 5 and 10" since it is the only option left. The result is then printed in the HTML div element.</p>
</div>

)}

{language === 'ru' && (
        <div>
          <RuEs5_2 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_2 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_2;