import React, {useState} from 'react';
import RuReact_2 from '../lang/RuReact_2';
import AmReact_2 from '../lang/AmReact_2';

function React_2() {
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

   return (
    <div className='java-script'>
      
      <div>
        <button onClick={handleEnglishClick}>English</button>
        <button onClick={handleRussianClick}>Русский</button>
        <button onClick={handleArmenianClick}>Հայերեն</button>
      </div>
 {language === 'en' && (
        <div>  
      
      <h1>JSX</h1>

  <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used extensively in React to define the structure and layout of UI components.</p>    

    <p>Here is an example of how JSX works:</p>

 <code>
   <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hello, world!{'</'}<span className='green'>h1</span>{'>'} </p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a simple JSX example.{'</'}<span className='green'>p</span>{'>'} </p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'); '}</p>

   <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

    <p>In this example, we are defining a simple React component using JSX. The component renders a <b>div</b> element that contains an <b>h1 and a p</b> element. Notice that the HTML-like code is enclosed in parentheses and is defined using JSX syntax.</p>

    <p>JSX allows you to easily combine HTML-like code with JavaScript logic. For example, you can use JavaScript variables and expressions inside your JSX code:</p>
    
<code>
   <p><p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p></p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} Hello,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a simple JSX example.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>
   
    <p>In this example, we are using a JavaScript variable <b>(name)</b> inside our JSX code to dynamically render a personalized greeting.</p>

    <p>JSX is not required for React development, but it is highly recommended as it makes it much easier to write and manage complex UI components. When you write JSX code, it is transpiled into regular JavaScript code that can be executed by the browser.</p>
    
    <p>There are two main types of React components: functional components and class components.</p>
    
    <p>Functional components are defined as JavaScript functions that return a JSX element. They are typically used for simple, presentational UI components that don't have any state or lifecycle methods.</p>
    
    <p>Here's an example of a simple functional component:</p>

  <code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p> {'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hello,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a functional component.{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>
   
    <p>In this example, we are defining a functional component called <b>MyComponent</b> that takes in a <b>props</b> object as an argument. The component returns a JSX element that includes a h1 element with a personalized greeting and a <b>p</b> element with a message.</p>
    
    <p>Class components, on the other hand, are defined as JavaScript classes that extend the <b>React.Component</b> class. They are used for more complex UI components that need to manage state and have lifecycle methods.</p>
    
    <p>Here's an example of a simple class component:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

    <p><span className='blue'>constructor</span>(props) {'{'}</p>

    <p>super(props);</p>

    <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

    <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>

    <p>&nbsp;{'};'}</p>

    <p>{'}'}</p>

    <p><span className='blue'>render</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>{'<'}<span className='green'>h1</span>{'>'}Count: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Increment{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
    <p>In this example, we are defining a class component called MyComponent that has a state property called <b>count and a render</b> method that returns a JSX element with a h1 element that displays the current count and a <b>button</b> element that increments the count when clicked.</p>

    <p>Components can be composed and nested to create complex UI elements. They can also accept props as inputs, which allow them to be customized and reused throughout the application.</p>

    <p><b>{'<Component />'}</b> is a syntax used in React to render a component. It's called a self-closing tag or an empty tag, and it's equivalent to calling the component as a function with no arguments.</p>

    <p>For example, let's say we have a simple component called <b>MyComponent</b>:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hello, world!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
   
    <p>To render this component, we would use the <b>{'<MyComponent /> '}</b> syntax:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p> 
 </code>

    <p>The <b>{'<MyComponent /> '}</b> syntax creates an instance of the MyComponent component and renders it to the DOM.</p>


    </div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_2 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_2 />
        </div>
      )} 

    </div>
  )
}

export default React_2;