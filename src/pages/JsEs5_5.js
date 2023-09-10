import React, {useState, useEffect }from 'react';
import RuEs5_5 from '../lang/RuEs5_5';
import AmEs5_5 from '../lang/AmEs5_5';

 function JsEs5_5() {
 
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
        document.title = 'JavaScript ES5-5 | Array | forEach and map ';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-5 | Массив (Array) | forEach и map ';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-5 | Զանգված (Array) | forEach և map';
        break;
      default:
        document.title = 'JavaScript ES5-5 | java script lesson 5';
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
     
      <h1>Array</h1>
      
      <p>
        In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. An array is declared using square brackets, 
        and its elements are separated by commas.
      </p>
      
      <p><b>Example</b></p>

 <p className='darkgreen'>// An array of numbers</p>    
 <code>
  <p><span className='blue'>var </span><span className='blue'> numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p className='darkgreen'>// An array of strings</p>

  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
 </code>
 

<p><b>Array Length</b></p>

<p>The length property of an array returns the number of elements in the array.</p>

<p><b>Example</b></p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>{'console.log(numbers.length);'} <span className='darkgreen'>// Output: 5</span></p>  
</code>
 

<p><b>Array Methods</b></p>

<p>Arrays in JavaScript have built-in methods that can be used to manipulate the array data. Some commonly used array methods are:

</p>

<div>

<p><b>push()</b>: adds one or more elements to the end of an array</p>

<p><b>pop()</b>: removes the last element from an array</p>

<p><b>shift()</b>: removes the first element from an array</p>

<p><b>unshift()</b>: adds one or more elements to the beginning of an array</p>

<p><b>splice()</b>: adds or removes elements from an array at a specified index</p>

<p><b>slice()</b>: returns a new array that contains a portion of an existing array</p>

<p><b>join()</b>: joins all elements of an array into a string</p>

<p><b>concat()</b>: concatenates two or more arrays </p>

</div>

<p><b>Example:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>numbers.push(<span className='blue'>6</span>); <span className='darkgreen'>// adds 6 to the end of the array</span></p>

  <p>{'console.log(numbers);'} <span className='darkgreen'>// Output: [1, 2, 3, 4, 5, 6]</span></p>
</code>

 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>

  <p>fruits.pop(); <span className='darkgreen'>// removes the last element from the array</span></p>

  <p>{'console.log(fruits);'} <span className='darkgreen'>// Output: ["apple", "banana"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>];</p>

  <p>colors.shift(); <span className='darkgreen'> // removes the first element from the array</span></p>

  <p>{'console.log(colors);'} <span className='darkgreen'>// Output: ["green", "blue"]</span></p>
</code>

 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>cars</span> = [<span className='red'>"BMW","Audi","Mercedes"</span>];</p>

  <p>cars.unshift(<span className='red'>"Toyota","Honda"</span>); <span className='darkgreen'>//adds two elements to the beginning of the array</span></p>

  <p>{'console.log(cars);'} <span className='darkgreen'>//Output:["Toyota","Honda","BMW","Audi","Mercedes"]</span></p>
</code>


<code>
  <p><span className='blueviole'>var</span> <span className='blue'>animals</span> = [<span className='red'>"dog","cat","elephant","lion"</span>];</p>

  <p>animals.splice(<span className='blue'>2</span>,<span className='blue'>0</span>,<span className='red'>"bear"</span>,<span className='red'>"zebra"</span>); <span className='darkgreen'>// adds"bear"and"zebra" at index 2</span></p>

  <p>{'console.log(animals);'} <span className='darkgreen'>// Output: ["dog","cat","bear","zebra","elephant","lion"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>letters</span> = [<span className='red'>"a", "b", "c", "d", "e"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>slice1</span> = letters.slice(<span className='blue'>0, 2</span>); <span className='darkgreen'>// returns ["a", "b"]</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>slice2</span> = letters.slice(<span className='blue'>2</span>); <span className='darkgreen'>// returns ["c", "d", "e"]</span></p>

  <p>{'console.log(slice1);'}</p>

  <p>{'console.log(slice2);'}</p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>fruitString</span> = fruits.join(<span className='red'>", "</span>); <span className='darkgreen'>// joins array elements with a comma</span></p>

  <p>{'console.log(fruitString);'} <span className='darkgreen'>// Output: "apple,banana,orange"</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>nums1</span> = [<span className='blue'>1, 2, 3</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums2</span> = [<span className='blue'>4, 5, 6</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums3</span> = nums1.concat(nums2); <span className='darkgreen'>// concatenates nums1 and nums2</span></p>

  <p>{'console.log(nums3);'} <span className='darkgreen'>// Output: [1, 2, 3, 4, 5, 6]</span></p>
</code>


<p><b>Array Methods | Combining Arrays</b></p>

<p>You can combine two or more arrays in JavaScript using the concat() method. This method returns a new array that contains all the elements of the original arrays</p>

<h3>forEach and map </h3>

<p><b>forEach</b> is used to iterate over each element of an array and perform a function on each element. It takes a function as an argument and passes each element of the array as an argument to that function.</p>

<p>Here is an example of using forEach to print out each element of an array:</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>arr.forEach{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

  <p>{'console.log(element);'}</p>

  <p>{' });'}</p>
</code>
 
<p>This will print out:</p>

<code>
  <p className='blue'>1</p>

  <p className='blue'>2</p>

  <p className='blue'>3</p>

  <p className='blue'>4</p>

  <p className='blue'>5</p>
</code>

<p>
map, on the other hand, is used to create a new array with the results of calling a function on each element in the original array. It also takes a function as an argument and passes each element of the array as an argument to that function. The function should 
return a new value to be added to the new array.
</p>
<p>
Here is an example of using map to create a new array with each element of the original array doubled:
</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>doubledArr</span> = arr.map{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

 <p><span className='blueviole'>return</span> element * <span className='blue'>2</span>;</p>

 <p>{'});'}</p>

 <p>{'console.log(doubledArr);'}</p>
</code>
   
<p>This will print out</p>

<code><p className='blue'>[2, 4, 6, 8, 10 ]</p></code>

<p>
In summary, forEach is used to perform an operation on each element of an array, while map is used to create a new array with the results of calling a function on each element of the original array
</p>

<h3>apply method</h3>

<p>
In JavaScript, the apply() method is used to call a function with a given this value and arguments provided as an array (or an array-like object).
</p>

<p>The syntax for using the apply() method is:</p>
 
  <code>
  <p>{'functionName.apply(thisValue, [argumentsArray]) '}</p>
  </code>
 
<p><b>Where</b></p>

<p>functionName is the name of the function that you want to call.</p>

<p>thisValue is the value that you want to use as the this value inside the function. This parameter is optional. If you omit it, the global object will be used.</p>

<p>argumentsArray is an array or an array-like object that contains the arguments that you want to pass to the function. This parameter is also optional. If you don't need to pass any arguments, you can omit it.</p>

<p>Here's an example of using the apply() method with an array:</p>

  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

    <p><span className='blueviole'>function</span> <span className='blue'>sumArray</span>() {'{'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>sum</span> = <span className='blue'>0</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} <span className='blueviole'>this</span>.length; i++) {'{'}</p>

    <p>sum += <span className='blueviole'>this</span>[i];</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>return</span> sum;</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sumArray.apply(numbers);</p>

    <p>{'console.log(result);'} <span className='darkgreen'>// Output: 15</span></p>

    <p>{''}</p>
  </code>
 
<p>In this example, we have an array of numbers and a function sumArray() that calculates the sum of all the elements in an array. We call the apply() method on the sumArray() function with the numbers array as the this value. The apply() method passes the array as the this value and the sumArray() function calculates 
  the sum of all the elements in the array and returns it.</p>
  
  <p>Note that the apply() method is similar to the call() method. The only difference is that the call() method accepts the arguments as a comma-separated list, while the apply() method accepts the arguments as an array.</p>
  
  <h3>Self-Invoking Function</h3>
  
  <p>A self-invoking function is a JavaScript function that runs automatically when it's defined. It's also known as an immediately invoked function expression (IIFE). This function is wrapped in parentheses and then immediately called using the opening and closing parentheses.</p>
  
  <p>Here's an example of a self-invoking function:</p>
 
  <code>
    <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

    <p>{'console.log'}(<span className='red'>"Hello, World!"</span>);</p>

    <p>{' })();'}</p>
  </code>
  
<p>
In this example, the function is defined and then immediately called using the opening and closing parentheses. This will output "Hello, World!" to the console.
</p>
<p>
Self-invoking functions are commonly used to create a private scope in which variables and functions can be defined without polluting the global namespace. Here's an example:
</p>
 
<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>function</span> <span className='blue'>foo</span>() {'{'}</p>

  <p>{'console.log(x);'}</p>

  <p>{'}'}</p>

  <p>foo(); <span className='darkgreen'>// Outputs 10</span></p>

  <p>{'})();'}</p>
</code>

<p>In this example, the variables x and the function foo are defined inside the self-invoking function. They are not accessible from outside the function, which helps to prevent naming conflicts with other code.</p>

<p>Self-invoking functions can also take arguments, like regular functions. Here's an example:</p>
 
<code>
  <p>{'('}<span className='blueviole'>function</span>(<span className='blue'>x, y</span>) {'{'}</p>

  <p>{'console.log'}(x + y);</p>

  <p>{'})'}(10, 20); <span className='darkgreen'>// Outputs 30</span></p>
</code>
 
<p>In this example, the self-invoking function takes two arguments (x and y) and outputs their sum to the console.</p>

<p>Self-invoking functions are a powerful tool in JavaScript for creating private scopes, preventing naming conflicts, and managing global variables.</p>

</div>
      )}
       {language === 'ru' && (
        <div>
          <RuEs5_5 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_5 />
        </div>
      )}
    </div>

  )
}



export default JsEs5_5;