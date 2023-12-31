import React,{ useState } from 'react';
import RuReact_5 from '../lang/RuReact_5';
import AmReact_5 from '../lang/AmReact_5';

function React_5() {
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
      
      <h1>Ract Router DOM</h1>

<p>React Router Dom is a popular library used in React applications for managing client-side routing. It allows developers to create different routes for different components and render them based on the current URL. This provides a more intuitive and seamless user experience, as users can navigate through different pages and components without having to reload the entire page.</p>

<p>React Router Dom is based on the React Router library and specifically designed for use in the browser. It uses the browser's History API to manipulate the URL and keep the user interface in sync with the current URL. It also provides a declarative approach to defining routes, making it easy to manage complex applications with multiple routes and nested components.</p>

<p>Some of the key features of React Router Dom include:</p>

<p> • Declarative routing: You can define your routes as JSX components, making it easy to understand and manage the routing logic.</p>

<p> • Nested routes: You can nest routes within other routes, allowing for more complex routing scenarios</p>

<p> • Route parameters: You can define dynamic parameters within your routes, allowing you to pass data between components based on the current URL.</p>

<p> • History management: React Router Dom provides tools for managing the browser's history, allowing you to programmatically navigate between pages and handle back/forward navigation. </p>
 
<p>Here's a simple example of how React Router Dom might be used in a React application: <b>(old version)v5</b></p>

<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>In this example, we're importing the necessary components from React Router Dom (specifically, <b>BrowserRouter, Route, and Link</b>). We then define two simple components for our home and about pages.</p>

<p>Inside the <b>App</b> component, we wrap everything in a <b>Router</b> component, which provides the routing context for the rest of the application. We then define a simple navigation bar using the <b>Link</b> component to navigate between our two pages.</p>

<p>Finally, we define two <b>Route</b> components that render the <b>Home and About</b> components based on the current URL.</p>

<p>React Router Dom 6.4 is the latest version of the library, released in February 2022. Some of the new features in this version include:</p>

<p>The latest version (v6) has changes to some APIs and collections, so I can pick a new example using React Router Dom version 6.4:</p>

<p>here's an example using React Router Dom version 6.4:</p>


<code>
  <p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

  <p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

  <p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>In this example, we use the same core components from React Router Dom (<b>such as BrowserRouter, Route, Link</b>), but some of them have a slightly different syntax.</p>

<p>For example, we now use the <b>Routes</b> component instead of <b>Switch</b> to group multiple routes. Each route is now represented by a <b>Route</b> element with <b>path and element</b> props. The <b>path</b> prop sets the URL pattern for the route, and the <b>element</b> prop is the component to be rendered when the route matches.</p>

<p>In this example, we also added a <b>NotFound</b> component that displays when the user lands on a non-existent page.</p>

<p>Overall, React Router Dom 6 provides a more flexible and convenient way to handle routing in React applications.</p>    
    
<p>1. If you're using <b>npm</b>, open your terminal and run the following command:</p>

<b>npm install react-router-dom</b>

<p>2. If you're using <b>yarn</b>, open your terminal and run the following command:</p>

<b>yarn add react-router-dom</b> 

<p>After installation, you can import the necessary components from the <b>react-router-dom</b> package, as I showed in the examples above</p>

<p> For more information on React Router, please visit their official website: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    
    
<p>On the website, you'll find a comprehensive guide to using React Router, including:</p>    
    
<p>•  An overview of React Router and its key concepts</p> 

<p>• Installation and setup instructions</p>

<p>• Examples of different use cases and scenarios</p>

<p>• API documentation for each of the core components and utilities</p>

<p>• Advanced topics such as server rendering, code splitting, and nested routes</p>

<p>In addition to the documentation, you can also find a number of helpful resources such as a community forum, a GitHub repository for bug reports and feature requests, and a collection of related projects and plugins.</p>

</div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_5 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_5 />
        </div>
      )} 



    </div>
  )
}

export default React_5;