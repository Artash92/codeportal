import React, { useState, useEffect } from 'react';
import RuEs5_8 from '../lang/RuEs5_8';
import AmEs5_8 from '../lang/AmEs5_8';


 function JsEs5_8() {

  
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
        document.title = 'JavaScript ES5-8 | Date Object | Error - object ';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-8 | Объект Дата | Ошибка - объект ';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-8 | Date օբյեկտ | Error - object';
        break;
      default:
        document.title = 'JavaScript ES5-8 | Date Object';
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
     
      <h4>Date - object</h4>
      
      <p>In JavaScript, the Date object is used to work with dates and times. It allows you to create, manipulate, and format dates and times in various ways. The Date object represents a single moment in time, and is initialized with the current date and time by default.</p>

      <p>Here are a few examples of how to use the Date object in JavaScript:</p>
      
      <p>1. Creating a Date object with a specific date and time:</p>

  <code>
       <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(<span className='blue'>2022, 0, 1, 12, 0, 0</span>);</p>

      <p>{'console.log(date);'} <span className='green'>// Sat Jan 01 2022 12:00:00 GMT+0200 (Eastern European Standard Time</span>)</p>
  </code>
    

<p>In this example, a new Date object is created with the specified year (2022), month (0 for January), day (1), hour (12), minute (0), and second (0). The output shows the resulting date and time in a human-readable format.</p>

<p>2. Creating a Date object with the current date and time:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(); </p>

  <p>{'console.log(date);'}<span className='green'>// Sat Mar 27 2023 13:28:17 GMT+0200 (Eastern European Standard Time)</span></p>
</code>
 
<p>In this example, a new Date object is created with the current date and time. The output shows the resulting date and time in a human-readable format.</p>

<p>3. Getting the current year, month, and day:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>year</span> = date.getFullYear();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>month</span> = date.getMonth();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>day</span> = date.getDate();</p>

  <p>{'console.log'}(year + <span className='red'>"-"</span> + month + <span className='red'>"-"</span> + day); <span className='green'></span></p>
</code>
 
<p>In this example, a new Date object is created with the current date and time. The getFullYear(), getMonth(), and getDate() methods are then used to extract the year, month (where 0 represents January), and day from the Date object. The output shows the resulting date in a formatted string.</p>
   
<p> 4.  Converting a date to a string: </p>
   

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>dateString</span> = date.toDateString(); </p>

  <p>{'console.log'}(dateString); <span className='green'>// Sat May 30 2023</span></p>
</code>

<p>In this example, a new Date object is created with the current date and time. The toDateString() method is then used to convert the date to a human-readable string format. The output shows the resulting string representation of the date</p>

<p>These are just a few examples of the many ways you can use the Date object in JavaScript to work with dates and times.</p>

<p><b>Error - object</b></p>

<p>In JavaScript, an Error object is used to represent runtime errors. When an error occurs in a program, JavaScript generates an Error object and throws it. The Error object contains information about the error such as the error message and the name of the error.</p>

<p>Here's an example of using a try-catch block to catch a ReferenceError:</p>

<code>
  <p><span className='blueviole'>try </span>{'{'}</p>

  <p>{'console.log(variable);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span>(<span className='blue'>err</span>) {'{'}</p>

  <p>{'console.log(err);'} <span className='green'>//ReferenceError: variable is not defined</span></p>

  <p>{'console.log(err.name);'} <span className='green'>//ReferenceError</span></p>

  <p>{' console.log(err.message);'} <span className='green'>//variable is not defined</span></p>

  <p>{'}'}</p>
 
</code>

<p>In this example, the try block attempts to log a variable that has not been defined, resulting in a ReferenceError. The catch block catches the error and logs the error object along with its name and message properties.</p>

<p>Here's another example of using a try-catch block to throw a custom Error object:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue'>0</span>; </p>

  <p><span className='blueviole'>try</span> {'{'}</p>

  <p><span className='blueviole'>if</span> (num2 == <span className='blue'>0</span>) {'{'}</p>

  <p><span className='blueviole'>throw new</span> Error(<span className='red'>"Cannot divide by zero."</span>);</p>

  <p>{'}'}</p>

  <p>{'console.log(num1 / num2);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span> (<span className='blue'>err</span>) {'{'}</p>

  <p>{' console.log'}(err.name, <span className='red'>" : "</span>, err.message) ; </p>

  <p>{'}'}</p>
</code>

<p>
In this example, the try block attempts to divide num1 by num2. If num2 is zero, a new Error object is thrown with a custom error message. The catch block catches the error and logs the error object along with its name and message properties. 
</p>
<p>
Using Error objects and try-catch blocks is an important part of handling runtime errors in JavaScript programs. It allows developers to gracefully handle errors and provide useful feedback to users.  
</p>
</div>
      )}
  
  {language === 'ru' && (
        <div>
          <RuEs5_8 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_8 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_8;