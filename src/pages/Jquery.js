import React, {useState, useEffect } from 'react';
import AmJquery from '../lang/AmJquery';
import RuJquery from '../lang/RuJquery';

function Jquery() {
  
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
          document.title = 'JavaScript(JQuery) | Manipulating DOM elements| Working with AJAX ';
          break;
        case 'ru':
          document.title = ' JavaScript(JQuery)| Работа с элементами DOM | Работа с AJAX';
          break;
        case 'am':
          document.title = ' JavaScript(JQuery)| Աշխատանք DOM տարրերի հետ | AJAX-ի հետ աշխատել ';
          break;
        default:
          document.title = 'JavaScript(JQuery)';
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
        
        
        
        <h1>JavaScript(JQuery)</h1>

<p>jQuery is a JavaScript library that simplifies the process of writing JavaScript code and working with HTML documents. It was created in 2006 by John Resig and is currently one of the most popular JavaScript libraries.</p>

<p>jQuery provides a variety of functions for working with the Document Object Model (DOM), as well as for working with AJAX (Asynchronous JavaScript and XML) and creating animations. It also simplifies writing cross-browser code because the jQuery library automatically handles browser compatibility issues.</p>

<p>Here are some examples of how jQuery can be used:</p>

<p>Manipulating DOM elements:</p>

<code>
  <p><span className='green'>// Changing the text of an element with ID "myElement"</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(<span className='blue1'>'New Text'</span>); </p>

  <p><span className='green'>// Adding a new element to the page</span> </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'body'</span>).<span className='blue'>append</span>(<span className='blue1'>'{'<'}div{'>'}New Element{'</'}div{'>'}'</span>); </p>
</code>

<p>2. Handling events:</p>

<code>
  <p><span className='green'>// Handling the click event of a button with ID "myButton"</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Button clicked!'</span>);</p>

  <p>{"});"}</p>
</code>

<p>3. Working with AJAX:</p>

<code>
  <p><span className='green'>// Making an AJAX request to a server and updating a page element with the response </span></p>

  <p> <span className='blueviole'>$</span>.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/api/data'</span>, <span className='red'>function</span>(response) {"{"}</p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(response); </p>

  <p>{" }); "}</p>
</code>

<p>Overall, jQuery is a powerful and versatile tool for simplifying JavaScript development and making it easier to create dynamic and interactive web pages.</p>

<b>To include jQuery in an HTML document, you can use the following steps:</b>

<p>1. Download the jQuery library from the official website <a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a> or use a CDN (Content Delivery Network) link. </p>

<p>2. Create a new HTML file and add the following code inside the "head" section of your HTML document to include the jQuery library:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"path/to/jquery.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>Replace "path/to/jquery.js" with the actual path where the jQuery library is stored on your server, or use the CDN link:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>3. Once you have included the jQuery library in your HTML document, you can start using it by writing JavaScript code that references the jQuery library.</p>

<p>For example, to change the text of an HTML element with an ID of "myElement", you can use the following code:</p>

<code>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>id</span>=<span className='blue1'>"myElement"</span>{'>'}Hello World!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'$(document).ready(function() {'}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myElement"</span>).<span className='blue'>text</span>(<span className='blue1'>"New text!"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>&nbsp;{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>
</code>

<p>In this example, we are using jQuery to select the element with the ID "myElement" and change its text to "New text!". The code is wrapped in a document ready function, which ensures that the code is executed only after the document has finished loading.</p>

<p>Overall, including jQuery in an HTML document is a simple process that involves referencing the jQuery library and writing JavaScript code that uses the library to manipulate HTML elements.</p>

<p>jQuery syntax is a combination of CSS-style selectors and JavaScript code, which makes it easy to select and manipulate HTML elements. Here are some examples of jQuery syntax:</p>

<p><b>1. Selecting elements</b></p>

<p>To select an HTML element, you can use the jQuery function, which takes a CSS-style selector as its argument. For example, to select all "p" elements on the page, you can use the following code:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>) </p> </code>

<p>You can also chain selectors to select elements based on their relationship to other elements. For example, to select all "p" elements that are children of a "div" element, you can use the following code:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'div {'>'} p'</span>)</p></code>

<p><b>2. Modifying elements</b></p>

<p>Once you have selected an element, you can modify its content, attributes, and CSS properties using jQuery. For example, to change the text of all "p" elements on the page, you can use the following code:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>text</span>(<span className='blue1'>'New text'</span>)</p>

  <p>To add a <span className='green'>class</span> to an element, you can use the <span className='blue1'>"addClass"</span> method: </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>addClass</span>(<span className='blue1'>'highlight'</span>)</p>
</code>

<p><b>3.Handling events</b></p>

<p>You can use jQuery to handle events such as clicks, mouseovers, and keypresses. For example, to handle the click event of a button with an ID of "myButton", you can use the following code:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>    
    
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Button clicked!'</span>) </p> 
    
  <p>{"})"}</p>
</code>

<p><b>4. Working with AJAX</b></p>

<p>jQuery makes it easy to work with AJAX requests. For example, to make a GET request to a URL and handle the response, you can use the following code:</p>

<code>
  <p>$.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/data'</span>, <span className='red'>function</span>(response) {"{"}</p>

  <p>&nbsp;{"console"}.<span className='blue'>log</span>(response)</p>

  <p>{"}) "}</p>
</code>

<p>Overall, jQuery syntax is easy to learn and use, and it provides a powerful way to manipulate HTML elements and handle events in your web applications.</p>

<p><b>jQuery Traversing methods are used to navigate and find elements in a DOM tree. The following are some examples of traversing methods that deal with sibling elements.</b></p>    

<p><b>1. next() method:</b> </p>

<p>The next() method returns the next sibling element of the selected element. For example:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>next</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>This code selects all "h2" elements and applies a CSS style to their next sibling element by changing its background color to yellow</p>

<p><b>2. prev() method:</b></p>

<p>The prev() method returns the previous sibling element of the selected element. For example:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prev</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'});'}</p>
</code>

<p>This code selects all "h2" elements and applies a CSS style to their previous sibling element by changing its background color to yellow.</p>
 
<b>3. nextAll() method:</b>

<p>The nextAll() method returns all the next sibling elements of the selected element. For example</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>nextAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>This code selects all "h2" elements and applies a CSS style to all their next sibling elements by changing their background color to yellow.</p>

<b>4. prevAll() method:</b> 

<p>The prevAll() method returns all the previous sibling elements of the selected element. For example:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prevAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>This code selects all "h2" elements and applies a CSS style to all their previous sibling elements by changing their background color to yellow</p>

<b>5. siblings() method:</b>

<p>The siblings() method returns all the sibling elements of the selected element. For example:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>siblings</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>This code selects all "h2" elements and applies a CSS style to all their sibling elements by changing their background color to yellow.</p>

<p>Overall, these traversing methods allow you to easily navigate and select sibling elements of an HTML element, which can be useful for various purposes such as styling or modifying conten</p>

<p><b>JQuery (CSS)</b></p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='red'>this</span>).<span className='blue'>css</span>(<span className='blue1'>"background-color", "red"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>{'});'}</p>
</code>

<p>This code selects the element with class "box" using the jQuery selector ".box". Then, it attaches a click event handler to that element using the click() method. Inside the event handler function, we use the css() method to change the background color of the element to red.</p>

<p>So when the box element is clicked, its background color changes from blue to red. We can also use the css() method to change other CSS properties like font-size, border-width, etc.</p>

<p>Here's another example that demonstrates how to change multiple CSS properties using the css() method:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>css</span>{'({'}</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"background-color"</span>: <span className='blue1'>"green"</span>,</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"width"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"height"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"border"</span>: <span className='blue1'>"2px solid black"</span> </p>

  <p>&nbsp;{' });'}</p>

  <p>{'});'}</p>
</code>

<p>This code selects all elements with class "box" and changes their background color to green, width and height to 150px, and adds a 2px solid black border.</p>

<p>Overall, using jQuery to manipulate CSS provides a powerful way to dynamically style HTML elements based on user interactions or other events.</p>

<b>JQuery ($.each)</b>

<p>The $.each() method in jQuery is used to iterate over arrays and objects. Here's an example that demonstrates how to use it:</p>

<p>Suppose we have an array of numbers and we want to iterate over each element of the array and print its value to the console:</p>
    
<code>
  <p><span className='red'>var</span> numbers = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

  <p>$.<span className='blue'>each</span>{'('}numbers, <span className='red'>function</span>(index, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Element at index "</span> + index + <span className='blue1'>" is "</span> + value);</p>

  <p>{'});'}</p>
</code>

<p>In this code, we pass the numbers array to the $.each() method along with a callback function that takes two arguments: the index of the current element and the value of the current element. Inside the callback function, we use console.log() to print the index and value of the current element to the console.</p>
    
<p>The output of this code would be:</p>

<code>
  <p>Element at index <span className='blue1'>0</span> is <span className='blue1'>1</span></p>

  <p>Element at index <span className='blue1'>1</span> is <span className='blue1'>2</span></p>

  <p>Element at index <span className='blue1'>2</span> is <span className='blue1'>3</span></p>

  <p>Element at index <span className='blue1'>3</span> is <span className='blue1'>4</span></p>

  <p>Element at index <span className='blue1'>4</span> is <span className='blue1'>5</span></p>
</code>

<p>Here's another example that demonstrates how to use $.each() with an object:</p>

<p>Suppose we have an object representing a person's details and we want to iterate over its properties and print their values to the console:</p>

<code>
  <p><span className='red'>var</span> person = {'{'}</p>

  <p>&nbsp;<span className='blue'>name</span>: <span className='blue1'>"John"</span>,</p>

  <p>&nbsp;<span className='blue'>age</span>: <span className='blue1'>30</span>, </p>

  <p>&nbsp;<span className='blue'>occupation</span>: <span className='blue1'>"Developer"</span> </p>

  <p>{'};'}</p>

  <p>$.<span className='blue'>each</span>{'('}person, <span className='red'>function</span>(key, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(key + ": " + value);</p>

  <p>{'});'}</p>
</code>

<p>In this code, we pass the person object to the $.each() method along with a callback function that takes two arguments: the key of the current property and the value of the current property. Inside the callback function, we use console.log() to print the key and value of the current property to the console.</p>

<p>The output of this code would be:</p>

<code>
  <p><span className='blue'>name</span>: John </p>

  <p><span className='blue'>age</span>: <span className='blue1'>30</span> </p>

  <p><span className='blue'>occupation</span>: Developer</p>
</code>

<p>Overall, the $.each() method in jQuery provides a convenient way to iterate over arrays and objects and perform operations on their elements.</p>

<b>JQuery Events</b>

<p>JQuery provides a rich set of event-handling methods that allow developers to attach event handlers to HTML elements and respond to user interactions, such as mouse clicks, keyboard input, and form submissions.</p>
    
<p>Here's an example that demonstrates how to use the click() method in jQuery to attach a click event handler to a button element and respond to the user clicking on the button:</p>    
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>  

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery Event Example{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>id</span>=<span className='blue1'>"myButton"</span>{'>'}Click me!{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myButton"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>(){'{'}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Button clicked!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'});'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>    

<p>In this code, we include the jQuery library in the head section of the HTML document and attach a <b>click()</b> event handler to the button element using the ID selector <b>#myButton</b>. Inside the event handler function, we use the <b>alert()</b> method to display a message box with the text "Button clicked!".</p>

<p>When the user clicks on the button, the <b>click()</b> event is triggered, and the event handler function is executed, displaying the message box.</p>

<p>Here's another example that demonstrates how to use the <b>submit()</b> method in jQuery to attach a submit event handler to a form element and prevent the default form submission behavior:</p>
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery Event Example{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>{'<'}<span className='green'>form</span> <span className='blue'>id</span>=<span className='blue1'>"myForm"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Name:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"email"</span>{'>'}Email:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"email"</span> <span className='blue'>id</span>=<span className='blue1'>"email"</span> <span className='blue'>name</span>=<span className='blue1'>"email"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Submit"</span>{'>'}</p>

  <p>{'</'}<span className='green'>form</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myForm"</span>).<span className='blue'>submit</span>{'('}<span className='red'>function</span>(event){'{'}</p>

  <p>&nbsp;event.<span className='blue'>preventDefault</span>();</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Form submitted!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{' });'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>In this code, we attach a <b>submit()</b> event handler to the form element using the ID selector <b>#myForm</b>. Inside the event handler function, we use the <b>preventDefault()</b> method to prevent the default form submission behavior, which would reload the page. Instead, we display a message box with the text "Form submitted!". </p>
    
<p>When the user submits the form, the <b>submit()</b> event is triggered, and the event handler function is executed, preventing the default form submission behavior and displaying the message box.</p>    

<p>Overall, the event-handling methods in jQuery provide a powerful way to handle user interactions and respond to events in a consistent and cross-browser compatible way</p>    
    
</div>
      )}
      {language === 'ru' && (
        <div>
          <RuJquery/>
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmJquery />
        </div>
      )}   
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Jquery;