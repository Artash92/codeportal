import React,{ useState, useEffect } from 'react';
import RuEs5_7 from '../lang/RuEs5_7';
import AmEs5_7 from '../lang/AmEs5_7';

 function JsEs5_7() {
  
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
        document.title = 'JavaScript ES5-7 | Object-Oriented Programming, or OOP | Prototype __proto__';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-7 | Объектно-ориентированное программирование, или ООП | Прототип proto';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-7 | Օբյեկտ-կողմնորոշված ծրագրավորում կամ OOP | OOP I new RegExp() ';
        break;
      default:
        document.title = 'JavaScript ES5-7 | java script lesson 7';
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
      
      
      <h1>Object-Oriented Programming, or OOP</h1>
     
      <p>Object-Oriented Programming, or OOP, is a programming paradigm that emphasizes objects, classes, and encapsulation. In JavaScript ES5, 
        OOP is implemented through the use of constructor functions and prototypes.</p>
     
      <p>
      A constructor function is a special function that is used to create and initialize objects. Constructor functions are defined using the function keyword, and their names usually start with a capital letter to distinguish them from regular functions. The this keyword is used inside the constructor 
      function to refer to the object being created. Here's an example:
      </p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>{'console.log'}(person1.name); <span className='darkgreen'>// "Alice"</span></p>

  <p>{'console.log'}(person2.age); <span className='darkgreen'>// 30</span></p>
</code>

<p>In this example, the Person function is used as a constructor function to create two 
  Person objects, person1 and person2. The name and age properties are set using the this keyword inside the constructor function.
</p>
<p>
In addition to constructor functions, prototypes are used to implement inheritance and share methods and properties between objects. Every object in JavaScript has a prototype, which is another object that the object inherits from. Properties and methods can be added to an object's prototype using the prototype property. Here's an example:
</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name + <span className='red'>" and I am "</span> + <span className='blueviole'>this</span>.age + <span className='red'>" years old."</span>);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>person1.greet(); <span className='darkgreen'>// "Hello, my name is Alice and I am 25 years old."</span></p>

  <p>person2.greet(); <span className='darkgreen'>// "Hello, my name is Bob and I am 30 years old."</span></p>
</code>

<p>In this example, a greet method is added to the Person prototype using the prototype property. This method can then be called on any Person object, as demonstrated by the person1.greet() and person2.greet() calls. </p>

<p>Another OOP concept in JavaScript ES5 is encapsulation, which refers to the practice of hiding implementation details and exposing only the necessary interfaces to the outside world. This can be achieved using closures, which allow functions to access variables in their outer scope even after the outer function has returned. Here's an example: </p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Counter</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>count</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>this</span>.increment = <span className='blueviole'>function</span>() {'{'}</p>

  <p>count++;</p>

  <p> console.log(count);</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>this</span>.decrement = <span className='blueviole'>function</span>() {'{'}</p>

  <p>count--;</p>

  <p>console.log(count);</p>

  <p>{'};'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>counter1</span> = <span className='blueviole'>new</span> Counter();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>counter2</span> = <span className='blueviole'>new</span> Counter();</p>

  <p>counter1.increment(); <span className='darkgreen'>// 1</span></p>

  <p>counter1.increment(); <span className='darkgreen'>// 2</span></p>

  <p>counter1.decrement(); <span className='darkgreen'>// 1</span></p>

  <p>counter2.increment(); <span className='darkgreen'>// 1</span></p>
</code>


 
 
<p>In this example, the Counter constructor function creates objects with increment and decrement methods, which access a private count variable using closures. This ensures that the count variable is hidden from the outside world and can only be accessed through the methods provided by the Counter object. </p>

<p><b>Object-Oriented Programming (OOP) with primitive values in JavaScript ES5</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age, gender</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p><span className='blueviole'>this</span>.gender = gender;</p>

  <p> <span className='blueviole'>this</span>.printDetails = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Name: "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'console.log'}(<span className='red'>"Age: "</span> + <span className='blueviole'>this</span>.age);</p>

  <p>{'console.log'}(<span className='red'>"Gender: "</span> + <span className='blueviole'>this</span>.gender);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue'>25</span>, <span className='red'>"male"</span>); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Jane"</span>, <span className='blue'>30</span>, <span className='red'>"female"</span>); </p>

  <p>{'person1.printDetails();'}</p>

  <p>{'person2.printDetails();'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>bool</span> = <span className='blueviole'>new</span> Boolean(<span className='blue'>true</span>);</p>

  <p>{'console.log'}(bool.valueOf()); <span className='darkgreen'> // true</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='blueviole'>new</span> String(<span className='red'>"Hello"</span>); </p>

  <p>{'console.log'}(str.concat(<span className='red'>" World"</span>)); <span className='darkgreen'>// "Hello World"</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>num</span> = <span className='blueviole'>new</span> Number(<span className='blue'>10</span>);</p>

  <p>{'console.log'}(num.valueOf() + <span className='blue'>5</span>); <span className='darkgreen'>// 15</span></p>
</code>

<p>In this example, we define a Person constructor function to create person objects with name, age, and gender properties. We also define a printDetails method on the Person object to print out the person's details.</p>

<p>We then create two Person objects using the constructor function and call the printDetails method for each object.</p>

<p>Next, we create Boolean, String, and Number objects using their respective constructor functions and demonstrate some of their methods, such as valueOf, concat, and basic arithmetic operation </p>

<p><b>In JavaScript ES5, we can create objects using the constructor functions Object and Array. This is a form of OOP called constructor-based object creation.</b></p>

<p>To create an object using a constructor function, we use the new keyword followed by the function name. For example, to create an object using the Object constructor function, we can do:</p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>person</span> = <span className='blueviole'>new</span> Object(); </p>

  <p> person.name = <span className='red'>"John"</span>; </p>

  <p>person.age = <span className='blue'>30</span>;</p>

  <p>person.job = <span className='red'>"Developer"</span>;</p>
</code>

<p>In the above example, we create a new object person using the Object constructor function. We then add properties to this object using dot notation. </p>

<p>Similarly, we can create an array using the Array constructor function:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [];</p>

  <p>arr.push(<span className='blue'>1</span>);</p>

  <p>arr.push(<span className='blue'>2</span>);</p>

  <p>arr.push(<span className='blue'>3</span>);</p>

  <p>console.log(arr); <span className='darkgreen'>// [1, 2, 3]</span></p>
</code>


<p>In the above example, we create a new array arr using the Array constructor function. We then add elements to this array using the push method.</p>

<p>Constructor-based object creation is useful when we need to create multiple objects of the same type. We can define a constructor function that sets the initial values of the object properties, and then create new objects using this constructor.</p>

<p>For example, suppose we want to create objects representing cars. We can define a constructor function like this:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model, year</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make;</p>

  <p><span className='blueviole'>this</span>.model = model;</p>

  <p><span className='blueviole'>this</span>.year = year;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda"</span>, <span className='red'>"Civic"</span>, <span className='blue'>2020</span>);</p>


  <p><span className='blueviole'>var</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota"</span>, <span className='red'>"Corolla"</span>, <span className='blue'>2021</span>);</p>
</code>

<p>In the above example, we define a constructor function Car that takes three parameters (make, model, and year) and sets the corresponding properties of the object using the this keyword. We then create two car objects (car1 and car2) using this constructor.</p>

<p><b>OOP I new RegExp()</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>'\\w', 'g'</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>matches</span> = str.match(regex);</p>

  <p>{'console.log(matches);'} <span className='darkgreen'>// ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d"]</span></p>
</code>

<p>In the example above, we create a regular expression that matches any word character (\w) and use the g flag to perform a global search. We then use the match() method to find all the matches in the string str. Finally, we log the array of matches to the console.</p>

<p>Note that we need to escape the backslash character when passing the regular expression pattern as a string to the RegExp constructor. This is because the backslash character is used to escape special characters in regular expressions, and we need to escape it in the string as well.</p>

<p><b>Prototype __proto__</b></p>


<p>Prototype-based programming is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.</p>

<p>In ES5, you can create a prototype by using the Object.create() method, which takes an object as its parameter and creates a new object with its prototype set to that object. You can then add properties and methods to the prototype object, which will be inherited by any objects that are created with it as their prototype.</p>

<p>Here's an example of creating a prototype for a Person object</p>

<code>
  <p><span className='blueviole'>var</span> personPrototype = {'{'}</p>

  <p>greeting: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'} ,'}</p>

  <p>farewell: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"Goodbye!"</span>);</p>

  <p>{'}'}</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>john</span> = Object.create(personPrototype); </p>

  <p>john.name = <span className='red'>"John"</span>;</p>

  <p>john.greeting(); <span className='darkgreen'>// outputs: "Hello, my name is John"</span></p>
</code>

<p>In this example, we first define a personPrototype object with a greeting() method and a farewell() method. Then, we create a new Person object john by calling Object.create(personPrototype) and setting its name property to "John". Since john is created with personPrototype as its prototype, it inherits the greeting() method from the prototype object and can call it using john.greeting().</p>

<p><b>instanceof</b></p>

<p>In JavaScript ES5, instanceof is an operator that is used to check whether an object belongs to a particular class or not. It returns a boolean value indicating whether an object is an instance of a specified class or its subclasses.</p>

<p>The syntax for instanceof is as follows:</p>

<p>object instanceof constructor</p>

<p>Here, object is the name of the object to be checked and constructor is the name of the constructor function or class. The instanceof operator checks the prototype chain of the object and returns true if the object is an instance of the constructor function or class, otherwise it returns false.</p>

<p>Here is an example:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Animal</span>(<span className='blue'>name</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>function</span> <span className='blue'>Dog</span>(<span className='blue'>name</span>) {'{'}</p>

  <p>Animal.call(<span className='blueviole'>this</span>, name); </p>

  <p>{' }'}</p>

  <p>Dog.prototype = Object.create(Animal.prototype); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>myDog</span> = <span className='blueviole'>new</span> Dog(<span className='red'>"Buddy"</span>);</p>

  <p>{'console.log'}(myDog instanceof Dog);  <span className='darkgreen'>// true</span></p>

  <p>{'console.log'}(myDog instanceof Animal); <span className='darkgreen'>// true</span></p>
</code>

<p>In this example, we define two classes Animal and Dog. Dog inherits from Animal. We create a new Dog object and check if it is an instance of both Dog and Animal using the instanceof operator. Both checks return true, because myDog is an instance of both classes.</p>

<p>In summary, instanceof is used to determine whether an object is an instance of a particular class or its subclasses by checking its prototype chain.</p>
</div>
      )}
  
  {language === 'ru' && (
        <div>
          <RuEs5_7 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_7 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_7;