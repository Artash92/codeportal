import React,{ useState, useEffect } from 'react';
import RuEs5_6 from '../lang/RuEs5_6';
import AmEs5_6 from '../lang/AmEs5_6';

 function JsEs5_6() {
  
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
        document.title = 'JavaScript ES5-6 | Global object in JavaScript | String manipulation in JavaScript ES5';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-6 | Глобальный объект в JavaScript | Работа со строками в JavaScript ES5';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-6 | Գլոբալ օբյեկտ JavaScript-ում | Աշխատել տողերի հետ JavaScript ES5-ում';
        break;
      default:
        document.title = 'JavaScript ES5-6 | java script lesson 6';
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
     
     
      <h3>Global object in JavaScript</h3>
      
      <p>Global object in JavaScript is a built-in object that is available everywhere in the code. It provides properties and methods that are used by 
      various parts of the language and can also be extended with custom functionality.</p>
      <div>
    
    <p>Some of the properties and methods of the global object in JavaScript include:</p>
    
    <p><span className='blue'>1.</span> Infinity - represents the mathematical infinity value</p>
    
    <p><span className='chocolate'>Example:</span> console.log(Infinity);</p>
    
    <p><span className='blue'>2.</span> NaN - represents the "Not a Number" value.</p>
    
    <p><span className='chocolate'>Example:</span> console.log(NaN);</p>
    
    <p><span className='blue'>3.</span> console - provides methods for logging information to the console.</p>
    
    <p><span className='chocolate'>Example:</span> console.log('Hello, world!');</p>
    
    <p><span className='blue'>4.</span> parseInt() - parses a string and returns an integer.</p>
    
    <p><span className='chocolate'>Example:</span> console.log(parseInt('10'));</p>
    
    <p><span className='blue'>5.</span> parseFloat() - parses a string and returns a floating-point number.</p>
    
    <p><span className='chocolate'>Example:</span> console.log(parseFloat('3.14'));</p>
    
    <p><span className='blue'>6.</span> encodeURIComponent() - encodes a URI component.</p>
    
    <p><span className='blue'>7.</span> Date - provides methods for working with dates and times.</p>
    
    <p><span className='chocolate'>Example:</span> console.log(new Date());</p>
    
    <p><span className='blue'>8.</span> Math - provides mathematical functions and constants.</p>
    
    <p><span className='chocolate'>Example:</span> console.log(Math.PI);</p>
    </div>
    
    <p>Global object methods can be called from anywhere in the code, without the need to create an instance of the object. However, care should be taken when extending the global object with custom methods, 
    as they can potentially conflict with built-in methods or other custom methods.</p>
    
    <p>
    It is important to note that in modern JavaScript environments, the global object is not always available in all contexts, such as in module-based code or in strict mode.
    </p>

    <h3>String manipulation in JavaScript ES5</h3>
    
    <p>
    In JavaScript ES5, a string is a sequence of characters and can be manipulated using various methods. Two methods for extracting substrings from a string are slice() and substring().
    </p>
    
    <p>
    The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. It takes two parameters: the starting index and the ending index (optional). If the ending index is not provided, the method will extract to the end of the string. If the starting index is negative, it counts from the end of the string.
    </p>
    
    <p>
    The substring() method is similar to slice(), but does not accept negative indices. If the starting index is greater than the ending index, the two indices are swapped to prevent an error.
    </p>
    
    <p>Here are some examples</p>

    <p><span className='darkgreen'>// Get the substring "is"</span></p>
  
  <code>
    <p>str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>

    <p>str.substring(<span className='blue'>5</span>,<span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
   </code>
  
   <p><span className='darkgreen'>// Get the substring "is"</span></p>
 
  <code>

    <p>{'console.log'}(str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

    <p><span className='darkgreen'>// Get the substring "is my text"</span></p>

    <p>{'console.log'}(str.slice(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>
  
  </code>
 
  <p><span className='darkgreen'>// Get the substring " "</span></p>
 
 <code>

    <p>{'console.log'}(str.slice(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//"is"</span> </p>
    
</code>


 <p><span className='darkgreen'>// Get the substring "my"</span></p>

<code>
    <p>{'console.log'}(str.slice(-<span className='blue'>7</span>, -<span className='blue'>5</span>)); <span className='darkgreen'> //"my"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>7</span>,<span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
</code>
 

<p>
In the examples above, slice() and substring() are used to extract substrings from the str variable. The first example extracts the substring "is", while the second example extracts "is my text". The third and fourth examples show how slice() and substring() handle cases where the indices are out of order. Finally, the fifth example shows how slice() can be used with negative indices to extract a substring from the end of the string.
</p>

<h3>The topic is "String Searching" in JavaScript ES5.</h3>

<p>In JavaScript, you can search for a specific substring within a string using various 
  methods. Here are some commonly used methods:
</p>

<p>1. The topic is "String Searching" in JavaScript ES5.

In JavaScript, you can search for a specific substring within a string using various methods. Here are some commonly used methods:

indexOf(substring, start): This method searches for a substring within 
a string and returns the index of the first occurrence of the substring. You can also specify the starting position of the search by passing an optional start parameter. If the substring is not found, it returns -1.</p>
   
   <p><b>Example</b></p>
   
 
<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Hello world"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.indexOf(<span className='red'>"world"</span>);</p>

  <p>{'console.log(index);'} <span className='darkgreen'>// 6</span></p>

 </code>
 
 
 
<p>2. lastIndexOf(substring, end): This method works the same way as indexOf, but it searches for the last occurrence of the substring within the string, searching backwards from the end of the string. You can also specify the ending position of the search by passing an optional end parameter.</p>

<p><b>Example</b></p>

 
<code>
<p><span className='blueviole'>var</span><span className='blue'> message</span> = <span className='red'>"Hello world, hello!"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.lastIndexOf(<span className='red'>"hello"</span>);</p>

<p>{'console.log(index);'}<span className='darkgreen'> // 13</span></p>
</code>
 

<p>
  Note that the case of the substring matters when using these methods. For example, searching for "hello" when the string only contains "Hello" will not find the substring.
</p>

<p>3.includes(substring): This method checks whether the given substring is present in the string or not, and returns a boolean value indicating the result.</p>
    
    <p><b>Example</b></p>
    
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>found</span> = message.includes(<span className='red'>"world"</span>);</p>

  <p>{'console.log(found);'} <span className='darkgreen'>// true</span></p>
</code>
 
  
 
<p>4. search(regex): This method searches for a regular expression within the string and returns the index of the first match. If there is no match, it returns -1.</p>
    
    <p><b>Example</b></p>

 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Hello world, hello!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.search(<span className='red'>/hello/i</span>);<span className='darkgreen'>// the "i" flag makes it case-insensitive</span></p>

  <p>{'console.log(index);'}<span className='darkgreen'> // 0</span></p>
   </code>
 

<p>In your example, the variable str contains the string "This is my text". The following lines of code demonstrate the usage of the string searching methods described above:</p>

 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"This is my text"</span>;</p>

<p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//2</span></p>

<p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>, <span className='blue'>3</span>));<span className='darkgreen'> //5</span></p>

<p>{'console.log'}(str.lastIndexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//5</span></p>

<p>{'console.log'} (str.lastIndexOf(<span className='red'>"is"</span>, <span className='blue'>4</span>)); <span className='darkgreen'>//2</span></p>

<p>{'console.log'}(str.indexOf(<span className='red'>"some"</span>)); <span className='darkgreen'>//-1</span></p>
</code>
 

<p>These lines of code search for the substring "is" and "some" within the str string, and return their indexes using the indexOf and lastIndexOf methods. The second parameter of indexOf specifies the starting position of the search, while the second parameter of lastIndexOf specifies the ending position of the search.</p>
    
    <h3>RegEx</h3>

    <p>RegExp is a built-in object that provides a way to create regular expressions. Regular expressions are patterns used to match character combinations in strings.</p>
    
    <p><b>Here is an example of creating a regular expression object using the constructor function:</b></p>
    
 
  <code>
    <p> <span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>"some", "long"</span>);</p>
  </code>
 
 
<p>Here, some is the regular expression flag, and long are optional flags that modify the behavior of the regular expression.</p>
<p>
Here is an example of using the test() method of the RegExp object to test if a string matches a regular expression:
</p>

 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" The quick brown fox jumps over the lazy dog "</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>result</span> = regex.test(str);</p>

<p>{'console.log(result);'} <span className='darkgreen'>// true </span></p>
</code>
 
 
<p>In this example, /fox/i is a regular expression pattern that matches the word "fox" in a case-insensitive manner. The test() method returns a boolean value indicating whether or not the regular expression pattern matches the string str.</p>
    
  <p>
  Here is another example of using the match() method of the String object with a regular expression to extract matched values:
  </p>

 
 <code>
 <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" The quick brown fox jumps over the lazy dog "</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>

<p><span className='blueviole'>var</span><span className='blue'> result</span>  = str.match(regex);</p>

<p>{'console.log(result);'} <span className='darkgreen'> // <span>[</span>"fox"<span>]</span></span></p>
 </code>
 

 

  <p>In this example, the match() method returns an array containing the matched substring(s) if the regular expression pattern is found in the string.

</p>
    <b>And here are some commonly used special characters in regular expressions:</b>
    
    <p>.- Matches any character except newline \n</p>
    
    <p>\w - Matches any ASCII word character [a-zA-Z0-9_]</p>
    
    <p>\W - Matches any non-word character [^a-zA-Z0-9_]</p>
    
    <p>\d - Matches any ASCII digit [0-9]</p>
    
    <p>\D - Matches any non-digit character [^0-9]</p>
    
    <p>\s - Matches any Unicode whitespace character</p>
    
    <p>\S - Matches any non-whitespace character</p>
    
    <code>
      <p><span className='blueviole'>var</span> <span className='blue'>myStr</span> = <span className='red'>"awesome Text"</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>myRegExp</span> = <span className='red'>/[a-zA-Z0-9]/</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span> = myRegExp.test(myStr);</p>

      <p>{'console.log(result);'}<span className='darkgreen'> //true</span></p>
    </code>
 
<p><b>^ - Matches the beginning of a string</b></p>

<p><b>$ - Matches the end of a string</b></p>

<p>Flags:</p>

<p><b>i - ignoreCase</b></p>
 
 
 <code>
  <p><span className='blueviole'>var</span><span className='blue'> exp</span> = <span className='red'>/a/i</span> <span className='darkgreen'>// searches for both uppercase and lowercase letters</span></p> 
  </code> 
 
  
<p><b>g - global</b></p>

<p><b>Searches for all occurrences of a pattern in a string</b></p>


 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Borobudur"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/[ou]/g</span>;</p>

<p>{'console.log'}(str.replace(pattern, <span className='red'>"a"</span>)); <span className='darkgreen'>//"Barabadar"";</span></p>
</code>
 


<p><b>m - multiline</b></p>

<p><b>Searches for all occurrences of a pattern in all lines of a string</b></p>

 
  <code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Some text And some more And yet This is the end"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'> pattern</span> = <span className='red'>/\w+\s/g</span>;</p>

<p>{'console.log(str.match(pattern));'} <span className='darkgreen'>//  [ "Some ", "text ", "And ", "some ", "more ", "And ", "yet ", "This ", "is ", "the ", "end"]</span></p>
  </code>
 
 
   <p>
   Here, we define a string str with the value "this is my text". We then define a regular 
   expression pattern that matches the beginning of the string (^) followed by one or more lowercase letters ([a-z]+) 
   separated by spaces, and the end of the string ($). We use parentheses to capture each group of letters as a separate subpattern.
   </p>
   <p>
   Finally, we use the replace() method on the string, passing in the pattern and a replacement string that uses the $ symbol to reference the captured subpatterns in the order they were defined. In this case, we swap the first and second groups of letters, leaving the third and fourth groups in place.
   </p>
   
   <p>Here's the code:</p>

 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"this is my text"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/^([a-z]+) ([a-z]+) ([a-z]+) ([a-z]+)$/</span> ;</p>

<p><span className='blueviole'>var</span> <span className='blue'>res</span> = str.replace(pattern, <span className='red'>"$2 $1 $3 $4"</span>);</p>

<p>{'console.log(res);'} <span className='darkgreen'>// "is this my text"</span> </p>
</code>
 
   
   </div>
      )}
       {language === 'ru' && (
        <div>
          <RuEs5_6 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_6 />
        </div>
      )}
    
    </div>


  )
}



export default JsEs5_6;



//106