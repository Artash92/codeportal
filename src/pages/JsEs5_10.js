import React,{useState, useEffect} from 'react';
import RuEs5_10 from '../lang/RuEs5_10';
import AmEs5_10 from '../lang/AmEs5_10';

function JsEs5_10() {
 
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
        document.title = 'JavaScript ES5-10 | Function to calculate the power of a number | JavaScript functions for generating Fibonacci series ';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-10 | Функция для вычисления степени числа  | Создание пирамиды с помощью звездочек в JavaScript | JavaScript функции для генерации чисел Фибоначчи ';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-10 | Թվի աստիճանը հաշվելու ֆունկցիա | Աստղանիշներով բուրգի ստեղծում JavaScript-ում | JavaScript ֆունկցիաներ Ֆիբոնաչիի թվեր ստեղծելու համար ';
        break;
      default:
        document.title = 'JavaScript ES5-10 | java script lesson 10';
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
        
        
        <h1>JavaScript ES5 Examples</h1>

<p><b>Function to calculate the power of a number</b></p>
    
<code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>   

<p><b>pow(num, exp)</b>: This function calculates the power of a number. It takes two parameters, num and exp, and returns the value of num raised to the power of exp. The function uses a while loop and a counter to repeatedly multiply num by itself exp number of times until the counter reaches exp.</p>

<p><b>Function to calculate the power of a number (alternative version)</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>

  <p>{'num3 *= num1;'}</p>

  <p>&nbsp;{'}'}</p>

  <p><span className='blueviole'>return</span> num3;</p>

  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: This function calculates the power of a number. It takes two parameters, num1 and num2, and returns the value of num1 raised to the power of num2. The function uses a for loop to repeatedly multiply num1 by itself num2 number of times until the loop completes.</p>

<p><b>Function to check if a number is prime</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 

  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 

  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 

  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 

  <p><span className='blueviole'>return</span> undefined;</p> 

  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>

   <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 

   <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>

   <p>&nbsp;{' }'}</p>

   <p>{'}'}</p>

   <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code> 

<p><b>isPrime(number)</b>: This function checks whether a number is prime or not. It takes a parameter number and returns true if the number is prime, otherwise it returns false. The function first checks if the number is less than 2, in which case it immediately returns false. If the number is undefined, it returns undefined. Otherwise, the function uses a for loop to check if any number between 2 and number (exclusive) divides number evenly. If such a number is found, the function returns false. If no such number is found, the function returns true.</p>

<h4>Creating a pyramid using asterisks in JavaScript</h4>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>

<p>The code creates a pyramid pattern using asterisks ('*') and spaces.</p>

<p>The code starts by defining a variable 'x' with a value of 6 and an empty string variable 'string'. Then, it uses a for loop to iterate through each row of the pyramid, starting from 1 and going up to 'x'.</p>

<p>Inside the first for loop, another for loop is used to add spaces before the asterisks. It adds (x-i) number of spaces before each row of asterisks.</p>

<p>Then, the second for loop is used to add asterisks to the string. The number of asterisks added in each row is given by the formula 2*i-1, where 'i' is the current row number.</p>   

<p>Finally, a newline character is added to the end of each row, and the completed string is printed to the console using the console.log() method.</p>  

<p><b>Creating a Pyramid Pattern with Stars and Numbers</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
</code>

<p>The code creates a pattern of stars and numbers in a pyramid shape. It first defines the number of lines for the pyramid and the symbol to use (in this case, ''). It then uses nested loops to build each line of the pyramid, starting with the base and adding one symbol at a time until it reaches the top. The numbers in the pattern are represented by the digit '1'. Each line of the pyramid is constructed by adding the appropriate number of '1's, followed by the symbol, and then a newline character. The symbol used for each line is updated using the string concatenation operator to add an additional '' for each new line. Finally, the resulting pattern is printed to the console using the 'console.log' function.</p>

    <h3>JavaScript functions for generating Fibonacci series</h3>


    <p><b>Explame</b></p>
    
    <code>
      <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>

      <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

      <p><span className='blueviole'>return</span> <span className='red'>'ERROR'</span>; </p>

      <p>{" } "}</p>

      <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

      <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

      <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

      <p>{" secondN = firstN + secondN; "}</p>

      <p>{"firstN = secondN - firstN; "}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>

      <p>fibo(<span className='blue'>55</span>);</p>
    </code>

    <p><b>Explame</b></p>

    <code>
      <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>

      <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>

      <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>

      <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"write only numbers"</span>);</p>

      <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

      <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>

      <p>{" console"}.<span className='blue'>log</span>(num1);</p>

      <p>{" i = num1 + num2;"}</p>

      <p>{"num1 = num2;"}</p>

      <p>{"num2 = i;"}</p>

      <p>&nbsp;&nbsp;{" }"}</p>

      <p>&nbsp;{" }"}</p>

      <p>{"}"}</p>

      <p>fibonachi(<span className='blue'>100</span>);</p>
    </code>

    <p><b>Example</b></p>
    
    <code> 
      <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

      <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

      <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>for</span> (; a {'<'} n;) {"{"}</p>

      <p>{"console"}.<span className='blue'>log</span>(a)</p>

      <p>{"result = a + b;"}</p>

      <p>{"  a = b;"}</p>

      <p>{" b = result; "}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

      <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"please write only number"</span>)</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>
   </code>

<p>These are three different implementations of the Fibonacci sequence generator in JavaScript</p>

<p>The first implementation (fibo) uses a while loop to generate Fibonacci numbers up to a given limit (num) and prints them using console.log(). It first checks if the input is a valid number, and if not, it returns an error message.</p>

<p>The second implementation (fibonachi) uses a for loop to generate Fibonacci numbers up to a given limit (num) and prints them using console.log(). It first checks if the input is a valid number, and if not, it prints an error message to the console.</p>    

 <p>The third implementation (fibonachi) also uses a for loop to generate Fibonacci numbers up to a given limit (n) and prints them using console.log(). It first checks if the input is a valid number, and if not, it prints an error message to the console. This implementation uses three variables to generate the next Fibonacci number: a, b, and result. It starts with a = 0 and b = 1, and for each iteration, it calculates the sum of a and b, stores the result in result, sets a to b, and sets b to result.</p>   
    
   
 <h3>Chess board JavaScript</h3>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>

    <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"Invalid params"</span>);</p>

    <p> <span className='blueviole'>return</span>; </p>

    <p>{"}"}</p>

    <p>rows = rows || <span className='blue1'>8</span>;</p>

    <p> symbolOne = symbolOne ||<span className='red'> " ⬛"</span>;</p>
  
    <p>symbolTwo = symbolTwo || <span className='red'>" ⬜"</span>;</p>

    <p>currentRow = currentRow || <span className='blue1'>1</span>;</p>

    <p><span className='blueviole'>if</span> (currentRow {'>'} rows) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} rows / <span className='blue1'>2</span>; i++) {"{"}</p>

    <p>{"symbol += symbolOne + symbolTwo;"}</p>

    <p>{" }"}</p>

    <p>symbol += <span className='red'>"\n"</span>; </p>

    <p>symbol += chess(rows, symbolTwo, symbolOne, currentRow + <span className='blue1'>1</span>);</p>

    <p><span className='blueviole'>return</span> symbol;</p>
  
    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
  </code>  

  <p>This code defines a recursive function called "chess" that takes four parameters: "rows", "symbolOne", "symbolTwo", and "currentRow". It aims to create a string representation of a chessboard pattern by alternating two symbols, "symbolOne" and "symbolTwo", for each square on the board.</p>
   
  <p>The function first checks whether the input parameters are valid, i.e., whether "rows" is a number and "symbolOne" and "symbolTwo" are strings. If any of the parameters are invalid, it returns an error message and exits the function</p>  
    
  <p>Then, it sets default values for "rows", "symbolOne", and "symbolTwo" if they were not provided. The default value for "rows" is 8, while the default values for "symbolOne" and "symbolTwo" are two Unicode characters that represent a black square and a white square, respectively.</p>  

  <p>Next, the function checks whether it has reached the end of the chessboard (i.e., whether "currentRow" is greater than "rows"). If so, it returns an empty string and exits the function.</p>

  <p>If the end of the chessboard has not been reached, the function creates a string "symbol" by appending "symbolOne" and "symbolTwo" alternately "rows / 2" times (since each row consists of "rows / 2" pairs of symbols).</p>

  <p>It then appends a newline character to the "symbol" string and makes a recursive call to the "chess" function, swapping "symbolOne" and "symbolTwo" and increasing "currentRow" by 1.</p>  
    
  <p>Finally, it returns the "symbol" string, which contains the entire chessboard pattern. The last line of code invokes the "chess" function with "rows" set to 8 and "symbolOne" and "symbolTwo" set to the Unicode characters representing black and white squares, respectively, and logs the resulting chessboard pattern to the console.</p> 
   
  </div>

)}

  
  {language === 'ru' && (
        <div>
          <RuEs5_10 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_10 />
        </div>
      )}
   
  
    </div>
  )
}

export default JsEs5_10;