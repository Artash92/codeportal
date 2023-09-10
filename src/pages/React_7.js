import React,{ useState } from 'react';
import RuReact_7 from '../lang/RuReact_7';
import AmReact_7 from '../lang/AmReact_7';

function React_7() {
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

      <h1>Redux</h1>
   
   <p>Redux is a state management library for JavaScript applications. It helps manage the state of your application in a predictable way, making it easier to reason about the flow of data in your application. With Redux, you store your application state in a single object called the store, and you use actions and reducers to modify that state</p>
   
   <p>Here's how it works: When you want to change the state of your application, you dispatch an action. The action is a plain JavaScript object that describes what happened in your application. For example, you might dispatch an action to add a new item to a list, or to update a user's profile information.</p>
   
   <p>Reducers are functions that take the current state of your application and an action, and return a new state. Reducers are pure functions, which means they don't have any side effects and they always return the same output for a given input.</p>
   
   <p>React-Redux is a library that integrates Redux with React. It provides a way to connect your React components to the Redux store, so that you can access and modify the state of your application from your components. React-Redux provides two key components: Provider and connect.</p>
   
   <p>The Provider component is used to wrap your entire React application. It takes a store object as a prop, and makes that store available to all components in your application.</p>
   
   <p>1. Install the required packages:</p>

   <b>npm install redux react-redux</b>

   <p>2. Create a Redux store:</p>

    <code>
      <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
      
      <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

      <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
    </code>

    <p>3. Create Redux actions:</p>

    <code>
      <p><span className='red'>export const</span> {"increment = () => {"}</p>
     
      <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

      <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

      <p>&nbsp;{" } "}</p>

      <p>{" } "}</p>

      <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

      <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

      <p>&nbsp;{" } "}</p>

      <p>{" } "}</p>
   </code>

   <p>4. Create Redux reducers:</p>

   <code>
    <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

    <p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

    <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

    <p>&nbsp;{" }"}</p>

    <p>{"} "}</p>

    <p><span className='red'>export default</span> counterReducer;</p>
  </code>

   <p>5. Connect Redux to a React component using React-Redux's <b>connect</b> function:</p>

  <code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>

    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
  </code>

   <p>6. Wrap your app with the <b>Provider</b> component to make the Redux store available to all components:</p>

    <code> 
      <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

      <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

      <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

      <p>{"</"}<span className='blueviole'>Provider</span>{"}>"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"}"}</p>

      <p><span className='red'>export default</span> App;</p>
    </code>

    <p>This is a basic example of how to use Redux and React-Redux in a React application. Keep in mind that this is just the tip of the iceberg, and there's much more to learn about Redux and its ecosystem.</p>

    <p>there are a few more things to keep in mind when using Redux in a React application:</p>

    <p>1. Redux middleware: Middleware is a way to modify or intercept Redux actions before they reach the reducers. Middleware can be used for tasks such as logging, asynchronous requests, and more. Some popular middleware options for Redux include <b>redux-thunk, redux-saga, and redux-observable</b>.</p>

    <p>2. Redux devtools: Redux devtools is a browser extension that provides a useful UI for debugging and inspecting the Redux store. It allows you to inspect actions and state changes, and also provides time-travel debugging functionality.</p>

    <p>3. Redux selectors: Selectors are functions that extract specific pieces of data from the Redux store. They can be used to compute derived data, filter and transform data, and more. Selectors can help simplify your components by providing them with the exact data they need, without having to worry about the shape of the store.</p>

    <p>4. Redux ducks: Ducks is a proposal for organizing Redux code into modules that contain all the related action types, action creators, and reducers for a specific feature or domain. This approach can help simplify your codebase and make it easier to maintain.</p>

    <p>These are just a few of the additional topics you may want to explore when working with Redux. There are many other libraries and tools available in the Redux ecosystem, so it's important to take the time to learn about them and decide which ones are the best fit for your project.</p>
    
    </div>
    )}
      {language === 'ru' && (
        <div>
          <RuReact_7 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_7 />
        </div>
      )} 


    </div>
  )
}

export default React_7;