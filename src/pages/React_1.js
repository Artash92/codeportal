import React,{useState, useEffect} from 'react';
import RuReact_1 from '../lang/RuReact_1';
import AmReact_1 from '../lang/AmReact_1';

function React_1() {
  
  const [language, setLanguage] = useState('en');  
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
        document.title = ' ReactJS | is a popular JavaScript library that was created by Facebook | Installing Node.js on Windows | Installing Node.js on Ubuntu ';
        break;
      case 'ru':
        document.title = ' Реакт | ReactJS - это популярная библиотека JavaScript, созданная Facebook | Установка Node.js в Windows | Установка Node.js на Ubuntu ';
        break;
      case 'am':
        document.title = ' ReactJS | ReactJS-ը հայտնի JavaScript գրադարան է, որը ստեղծվել է Facebook-ի կողմից | Node.js-ի տեղադրում Windows-ում | Node.js-ի տեղադրում Ubuntu-ում ';
        break;
      default:
        document.title = 'JavaScript ES5-1 | java script lesson 1';
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
 

        <h1>React JS</h1>

<p><b>ReactJS</b> is a popular <b>JavaScript </b>library that was created by <b>Facebook</b>. It was first released in 2013 and has since gained a huge following among web developers.</p>

<p>ReactJS was created to solve a specific problem - the need for a fast and efficient way to build complex user interfaces with large amounts of data that change over time. Prior to ReactJS, building these types of interfaces required a lot of code and was often slow and difficult to manage.</p>

<p>The core idea behind ReactJS is to break down user interfaces into individual components that can be reused across different parts of an application. Each component is responsible for rendering a small piece of the UI and can be easily composed together to create complex interfaces.</p>

<p>One of the key benefits of ReactJS is that it makes use of a virtual DOM, which is a lightweight representation of the actual DOM. This allows ReactJS to make updates to the UI in a very efficient way, without having to make expensive updates to the actual DOM.</p>

<p><b>Here is an example of a simple ReactJS component:</b></p>

<code>
  <p><span className='red'>import </span>React  <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}{'{'}props.<span className='blue'>title{'}'}</span>{'</'}<span className='green'>h1</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'} {'{'}props.<span className='blue'>description</span>{'}'}{'<'}<span className='green'>/p</span>{'>'}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>This component takes in two props - <b>title and description </b>- and renders them in a simple HTML structure. This component can then be used throughout an application to display information to the user.</p>

<p>If you're interested in learning more about ReactJS, I would recommend starting with the official documentation on the ReactJS website: <a href="https://reactjs.org/" target='_blank' > 👉🏼 <b>https://reactjs.org/.</b> </a>There you will find a wealth of information on how to get started with ReactJS, including tutorials, guides, and reference materials.</p>

<p>To install Node.js for working with React, follow the steps below:</p>

<h1>Installing Node.js on Windows</h1>

<p>1. Go to the official Node.js website:<a href="https://nodejs.org/" target='_blank' > 👉🏼 https://nodejs.org/ </a></p>

<p>2. Click the "Download" button for the "Windows Installer" version</p> 

<p>3. Run the downloaded installer and follow the prompts to install Node.js</p>

<p>4. Once the installation is complete, open a command prompt and type node -v to verify that Node.js is installed correctly</p>
    

<h1>Installing Node.js on Ubuntu</h1>

<p>1. Open a terminal window</p>

<p>2. Run the command <b>sudo apt update to update</b> the package manager</p>

<p>3. Run the command <b>sudo apt install nodejs</b> to install Node.js</p>

<p>4. Run the command <b>node -v</b> to verify that Node.js is installed correctly</p>

<b>Here is an example of how to use Node.js and React together:</b>

<p>1. Create a new React app using the command <b>npx create-react-app my-app</b></p>

<p>2. Change into the <b>my-app</b> directory using the command <b>cd my-app</b></p>

<p>3. Start the development server using the command <b>npm start</b></p>

<p>4. Open a web browser and navigate to <b>http://localhost:3000</b> to see the React app running</p>
    
 <p>If you're interested in learning more about Node.js and React, I would recommend checking out the official documentation for both technologies. Here are the links to their respective websites:</p>   
    
 <p><b><a href="https://nodejs.org/" target='_blank' > 👉🏼 Node.js</a></b></p>

 <p><b> <a href="https://reactjs.org/" target='_blank' > 👉🏼 React</a></b> </p>

 <p><b>To work with React, you will need to have a good understanding of the following:</b></p> 

 <p>1. <span className='chocolate'>HTML</span>/<span className='blue'>CSS</span>: You should have a good understanding of HTML and CSS, as React is primarily used for building user interfaces (UIs) and web applications.</p>

 <p>2. <span className='yellow'>JavaScript</span>: React is a JavaScript library, so you will need to have a solid understanding of JavaScript, including concepts such as functions, arrays, objects, and scope.</p>

 <p>3. <span className='red'>ES6</span>: React relies heavily on ES6 features such as arrow functions, destructuring, and classes, so you will need to have a good understanding of these features.</p> 

 <p>4. <span className='blueviole'>JSX</span>: As mentioned earlier, JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. You will need to understand how JSX works and how to use it to define UI components.</p>

 <p>5. <span className='green'>Node.js</span> and <span className='red'>npm</span>: React applications are typically built using Node.js and the npm package manager. You will need to understand how to install and use these tools.</p>

 <p>6. <span className='blue'>React</span> ecosystem: There is a wide range of tools and libraries that are commonly used in the React ecosystem, such as React Router, Redux, and Axios. You will need to understand how these tools work and how to use them to build React applications.</p>

 <p>7. <span className='dev-tools'>Development tools</span>: You will also need to be familiar with development tools such as Visual Studio Code, Chrome DevTools, and Git.</p>
 
 </div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_1 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_1 />
        </div>
      )} 

  </div>
  )
}

export default React_1;