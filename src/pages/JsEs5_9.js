import React,{useState, useEffect} from 'react';
import RuEs5_9 from '../lang/RuEs5_9';
import AmEs5_9 from '../lang/AmEs5_9';

 function JsEs5_9() {
  
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
        document.title = 'JavaScript DOM/BOM  | Pseudo protocol JavaScript | Browser Object Model (BOM) ';
        break;
      case 'ru':
        document.title = ' JavaScript DOM/BOM  | Псевдопротокол JavaScript | Объектная модель браузера (Browser Object Model, BOM)';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ DOM/BOM | Pseudo protocol JavaScript | Բրաուզերի օբյեկտի մոդել (Browser Object Model, BOM) ';
        break;
      default:
        document.title = 'JavaScript DOM/BOM ';
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
    
    
    <h1>Pseudo protocol JavaScript </h1> 
    
    <p>example of using the "pseudo protocol" javascript: in the href attribute of an anchor {'(<a>)'} tag. When the user clicks the link, it will execute the JavaScript code specified in the href attribute.</p>
    
    <p>Here's an alternative way to write the same code without using the javascript: protocol:</p>

 <code>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#"</span> <span className='blue'>onclick</span>=<span className='blue1'>"myFunction(); return false;"</span>{'>'}Click{'</'}<span className='green'>a</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;<span className='red'>function</span> myFunction() {'{'}</p>

  <p>&nbsp;&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Hello"</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>
 </code>

<p>In this example, we use an empty anchor href attribute and the onclick event handler to call the myFunction() function when the user clicks the link. The return false statement prevents the link from navigating to a new page.</p>

<p>Both examples achieve the same result of logging "Hello" to the console when the link is clicked. However, the second example is considered better practice because it separates the JavaScript code from the HTML markup, making it easier to maintain and debug the code.</p>

<h2>Browser Object Model (BOM)</h2>

<p>In JavaScript ES5, the Document Object Model (DOM) represents the HTML elements of a web page as a structured tree, allowing JavaScript code to interact with and manipulate the content of the web page dynamically. The following are some commonly used objects in the browser window object:</p>

<p>1. <b>window:</b> The top-level object in the browser's JavaScript hierarchy, representing the browser window. All global JavaScript objects, functions, and variables automatically become members of the window object.</p>

<p>2. <b>history:</b> The history object allows JavaScript to interact with the browser's history, allowing you to go back and forward between pages.</p>

<p>Example</p>

<code><p>window.history.back(); <span className='green'>// Go back one page</span> </p></code>

<p>3. <b>navigator:</b> The navigator object provides information about the web browser and operating system running on the user's computer.</p>

<p>Example</p>

<code><p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Outputs the user agent string for the browser</span></p></code>

<p>4. <b>screen:</b> The screen object provides information about the user's screen resolution and color depth.</p>

<p>Example:</p>

<code><p>{'console'}.<span className='blue'>log</span>(screen.width);<span className='green'> // Outputs the width of the user s screen</span></p></code>

<p><span>5. location:</span> The location object provides information about the current URL of the web page and allows you to navigate to new URLs.</p>

<p>Example:</p>

<code><p>{'console'}.<span className='blue'>log</span>(location.href);<span className='green'> // Outputs the current URL  location.href = "https://www.example.com"; // Navigates to a new URL</span></p></code>

<p>6. <b>document:</b> The document object represents the HTML content of the current web page and allows JavaScript code to interact with and manipulate the content of the page.</p>

<p>Example:</p>

<code><p>{'document'}.<span className='blue'>getElementById</span>(<span className='blue1'>"myDiv"</span>).<span className='blue'>innerHTML </span>= <span className='blue1'>"New content"</span>; <span className='green'>// Changes the HTML content of an element with the ID "myDiv"</span></p></code>

<p>7. <b>methods:</b> There are many other methods available in the browser window object, such as alert(), prompt(), confirm(), setInterval(), and setTimeout(), which allow you to display dialog boxes, set timers, and more.</p>

<p>Example:</p>

<code><p><span className='blueviole'>alert</span>(<span className='blue1'>"Hello, world!"</span>); <span className='green'>// Displays an alert dialog box with the message "Hello, world!"</span></p></code>

<h5>The Browser Object Model (BOM) is a JavaScript API that provides access to the web browser's window object and its properties. One of the properties of the window object is the history object, which contains the user's browsing histor </h5>

<p>The history object provides several methods to navigate through the browsing history. </p>

<p><b>history.go()</b> method can be used to navigate to a specific page in the browsing history. This method accepts a positive or negative integer as an argument. If the argument is a positive integer, it navigates forward in the history, and if it's negative, it navigates backward in the history. For example, history.go(-1) would navigate back one page in the browsing history, and history.go(2) would navigate forward two pages.</p>

<p><b>history.back()</b> method is used to navigate back one page in the browsing history, equivalent to <b>history.go(-1)</b>.</p>

<p><b>history.forward()</b> method is used to navigate forward one page in the browsing history, equivalent to <b>history.go(1)</b>.</p>

<p><b>history.length </b>property returns the number of pages in the browsing history.</p>

<p>Here is an example of how to use the history object: </p>

<code>
  <p><span className='green'>{ '// Navigate back one page in the browsing history'} </span> history.<span className='blue'>back</span>();</p>

  <p><span className='green'>{'// Navigate forward one page in the browsing history'} </span>history.<span className='blue'>forward</span>();</p>

  <p><span className='green'>{'// Navigate to the third page in the browsing history'} </span> history.<span className='blue'>go</span>(<span className='blue1'>2</span>);</p>

  <p><span className='green'>{ '// Get the number of pages in the browsing history'}</span>  {'console'}.<span className='blue'>log</span>(history.<span className='blue'>length</span>);</p>
</code>

<h4>The Browser Object Model (BOM) is a part of the JavaScript API that provides access to the browser's window and its properties. The Navigator object is a part of the BOM and represents the browser itself. It provides information about the browser that is currently being used.</h4>

<p>Here are some of the properties of the Navigator object and their explanations:</p>

<code>
  <p>navigator.<span className='blue'>appCodeName</span>: Returns the code name of the browser.</p>

  <p>navigator.<span className='blue'>appName</span>: Returns the name of the browser.</p>

  <p>navigator.<span className='blue'>appVersion</span>: Returns the version information of the browser.</p>

  <p>navigator.<span className='blue'>language</span>: Returns the language that the browser is set to.</p>

  <p>navigator.<span className='blue'>platform</span>: Returns the operating system platform that the browser is running on.</p>

  <p>navigator.<span className='blue'>userAgent</span>: Returns the user agent string for the browser</p>
</code>

<p>Here's an example of how to use the Navigator object:</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(navigator.appName); <span className='green'>// Outputs the name of the browser</span></p>

  <p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Outputs the user agent string for the browser</span></p>
</code>

<p>By using the properties of the Navigator object, you can write JavaScript code that behaves differently depending on the browser that the user is running.</p>

<h3>The Browser Object Model (BOM) in JavaScript provides a way to interact with the browser window and its properties. The window.screen object is part of the BOM and provides information about the user's screen.</h3>

<p>Here's a breakdown of the properties of <b> window.screen:</b></p>

<p><b>screen.height:</b> returns the total height of the user's screen in pixels.</p>

<p><b>screen.width:</b> returns the total width of the user's screen in pixels.</p>

<p><b>screen.availHeight:</b> returns the available height of the user's screen in pixels, excluding the Windows taskbar and other system elements.</p>

<p><b>screen.availWidth:</b> returns the available width of the user's screen in pixels, excluding the Windows taskbar and other system elements.</p>

<p>Here's an example of how to use these properties:</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Total screen height: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>height</span> + <span className='blue1'>" pixels"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Total screen width: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>width</span> + <span className='blue1'>" pixels"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Available screen height: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availHeight</span> + <span className='blue1'>" pixels"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Available screen width: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availWidth</span> + <span className='blue1'>" pixels"</span>);</p>
</code>

<p>This code will log the screen height and width, as well as the available screen height and width, to the console.</p>

<p>Note that the screen object is read-only and cannot be modified.</p>

<h3>The Browser Object Model (BOM) is a set of JavaScript objects provided by web browsers to interact with the browser window. One of the objects in the BOM is the location object, which represents the current URL of the browser window. The location object has several properties that can be accessed and modified to interact with the URL.</h3>

<p>Here are the explanations of the properties of the <b>location</b> object:</p>

<p><b>location.protocol</b>: This property specifies the protocol used in the URL, such as <span className='blue1'>"http:"</span> or <span className='blue1'>"https:"</span>.</p>

<p><b>location.host:</b> This property specifies the domain name and port number in the URL, such as <span className='blue1'>"www.site.com:8080"</span>.</p>

<p><b>location.hostname: </b>This property specifies the domain name in the URL, such as <span className='blue1'>"www.site.com"</span>.</p>

<p><b>location.href:</b> This property specifies the entire URL, such as <span className='blue1'>"http://www.site.com/about/?name=javascript#content"</span>.</p>

<p><b>location.port:</b> This property specifies the port number in the URL, such as <span className='blue1'>"8080"</span>.</p>

<p><b>location.pathname:</b> This property specifies the path of the URL, such as <span className='blue1'>"/about/"</span>.</p>

<p><b>location.search:</b> This property specifies the query string in the URL, such as <span className='blue1'>"?name=javascript"</span>.</p>

<p><b>location.hash:</b> This property specifies the fragment identifier in the URL, such as <span className='blue1'>"#content"</span>.</p>

<p>By accessing and modifying these properties of the <b>location</b> object, you can interact with the current URL of the browser window, such as redirecting the user to a different page or modifying the query string.</p>

<p>The <b>setTimeout()</b> method is a built-in JavaScript function that executes a specified function or piece of code after a specified amount of time has passed. It takes two arguments: a function to execute, and a time delay in milliseconds.</p>

<p>In the example code you provided, a variable called <b>timer</b> is declared and assigned the return value of the <b>setTimeout()</b>function. The function being executed here is a simple <b>console.log()</b> statement that prints out "Hello, World!" to the console after a delay of 2000 milliseconds (or 2 seconds).</p>
 
 <p>The <b>clearTimeout()</b> method is then called with the timer variable as its argument. This method cancels the timeout set by <b>setTimeout()</b>, which means that the <b>console.log()</b> statement will not be executed after the specified delay.</p>
    
 <p>So, in summary, the code sets a timer to execute a function after 2 seconds, but then immediately cancels that timer before it can complete. This is a simple example of how to use the <b>setTimeout()</b> and <b>clearTimeout()</b> methods in JavaScript.</p>   
   
  <p>example code using <b>setTimeout:</b></p> 
   
 <code>
  <p><span className='blueviole'>function </span><span className='blue'>sayHello</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>"Hello, World!"</span>);</p>

  <p>{'}'}</p>

  <p className='green'>// Call the function after 2 seconds</p>

  <p><span className='blueviole'>var</span> <span className='blue'>timer</span> = setTimeout(sayHello, <span className='blue'>2000</span>);</p>

  <p className='green'>// Cancel the timer before it executes</p>

  <p>clearTimeout(timer);</p>
 </code>


<p>In this example, the <b>setTimeout</b> function is used to delay the execution of the <b>sayHello</b> function for 2 seconds. The function is passed as a parameter to setTimeout along with the time delay in milliseconds. The <b>setTimeout </b>function returns a timer ID which is used to cancel the timer before it executes using the <b>clearTimeout</b> function.</p>

<h3>Events</h3>

<p>The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. Events are actions or occurrences that happen in the browser, such as clicking a button, scrolling the page, or pressing a key on the keyboard.</p>

<p>onclick</p>
   
<p>onmousedown</p>

<p>onmouseup</p>
   
<p>onmousemove</p>

<p>onmouseover</p>

<p>onmouseout</p>

<p>onkeydown</p>

<p>onkeyup</p>

<p>onkeypress</p>

<p>onfocus</p>

<p>onblur</p>

<p>onsubmit</p>

<p>onreset</p>

<p>onselect</p>

<p>onchange</p>

<p>onscroll</p>

<p>onload</p>

<p>onunload</p>

<p>The listed events are event handlers, which are functions that are executed when a specific event occurs on a web page. For example, the "onclick" event handler is executed when a user clicks on an element on a web page. Similarly, the "onload" event handler is executed when the page has finished loading in the browser.</p>
   

<p>These event handlers can be added to HTML elements using the "on" prefix followed by the event name, such as "onclick" or "onload". When the specified event occurs, the function assigned to the event handler is executed. This allows developers to create interactive web pages that respond to user actions.</p>   
</div>
      )}
    
    {language === 'ru' && (
        <div>
          <RuEs5_9 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_9 />
        </div>
      )}
   
    </div>



  )
}



export default JsEs5_9;