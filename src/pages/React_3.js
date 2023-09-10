import React,{useState} from 'react';
import RuReact_3 from '../lang/RuReact_3';
import AmReact_3 from '../lang/AmReact_3';

function React_3() {
 
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
      
        
        <h1 >React Events</h1>

    <p>React provides a way to handle events in components, similar to handling events in vanilla JavaScript. In React, you can add event handlers to any JSX element using the on<b>[EventName] </b>syntax</p>

    <p>For example, let's say we have a button in a React component that we want to handle a click event for:</p>

    <code>
      <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

      <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

      <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Button clicked'</span>); </p>

      <p>{' }'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Click me{'</'}<span className='green'>button</span>{'>'}  </p>

      <p>&nbsp;{');'}</p>

      <p>{'} '}</p>
    </code>

    <p>In this example, we define a <b>MyButton</b> component that contains a button element with a <b>onClick</b> prop set to a function called <b>handleClick</b>. When the button is clicked, the <b>handleClick</b> function will be called, and the message "Button clicked" will be logged to the console.</p>

    <p>You can also pass arguments to the event handler function using arrow functions. For example, let's say we have a list of items that we want to render as buttons:</p>

  <code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> clicked`</span>); </p>

    <p>&nbsp;{'}'}</p>

    <p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

    <p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

    <p>{'{item'}.<span className='blue'>{'name}'}</span></p>

    <p>{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{' ); '}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>{'{buttonList} '}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'} '}</p>
 </code>
    
    <p>In this example, we define an <b>ItemList</b> component that takes in a <b>items</b> prop. We define a <b>handleClick</b> function that takes in an <b>item</b> argument, which will be used to log a message to the console when the corresponding button is clicked.</p>

    <p>We use the <b>map</b> method to create a new array of <b>{'<button>'}</b> elements, where each element corresponds to an item in the <b>items</b> prop. We set the <b>key</b> prop of each <b>{'<button> '}</b> element to the <b>id</b> of the corresponding item, which is a requirement in React to help it optimize updates. We also use an arrow function to pass the <b>item</b> object to the <b>handleClick</b> function when the button is clicked.</p>

    <p>Then we return a <b>{'<div>'}</b> element that contains the <b>buttonList</b> array.</p>

    <h5>React Events</h5>

    <p className='blue1'>onKeyDown</p>

    <p className='blue1'>onKeyPress </p>

    <p className='blue1'>onKeyUp</p>

    <p className='blue1'>onFocus</p>

    <p className='blue1'>onBlur</p>

    <p className='blue1'>onChange</p>

    <p className='blue1'>onInput</p>

    <p className='blue1'>onInvalid </p>

    <p className='blue1'>onSubmit</p>

    <p className='blue1'>onClick</p>

    <p className='blue1'>onContextMenu</p>

    <p className='blue1'>onDoubleClick</p>

    <p className='blue1'>onDrag</p>

    <p className='blue1'>onDragEnd</p>

    <p className='blue1'>onDragEnter</p>

    <p className='blue1'>onDragExit</p>

    <p className='blue1'>onDragLeave</p>

    <p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>


    <b>React state in class components</b>

    <p>In React, state can also be managed using class components. Class components are JavaScript classes that extend the <b>React.Component</b> class and implement a <b>render</b> method that returns the component's UI.</p>

    <p>Here's an example of a class component that manages state:</p>

    <code>
       <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

       <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {''}</p>
    
       <p><span className='blue'>constructor</span>(props) {'{'}</p>

       <p>super (props);</p>

       <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

       <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

       <p>&nbsp;{'}'}</p>

       <p><span className='blue'>handleClick</span>() {'{'}</p>

       <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

       <p>{'}'}</p>

       <p><span className='blue'>render</span>() {'{'}</p>

       <p><span className='red'>return</span> {'('}</p>

       <p>{'<'}<span className='green'>div</span>{'>'}</p>

       <p>{'<'}<span className='green'>p</span>{'>'}You clicked {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} times{'</'}<span className='green'>p</span>{'>'}</p>

       <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Click me{'</'}<span className='green'>button</span>{'>'}</p>

       <p>{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;{');'}</p>

       <p>&nbsp;{'}'}</p>

       <p>{'}'}</p>
  </code>

<p>In this example, we define a <b>Counter</b> class that extends <b>React.Component</b>. Inside the class, we define a constructor that sets the initial state of the component to an object with a <b>count</b> property of 0. We also bind the <b>handleClick</b> method to the component instance using <b>bind</b>.</p>

<p>The <b>handleClick</b> method updates the component's state by calling this.setState with a new object that has a <b>count</b> property incremented by 1.</p>

<p>The <b>render</b> method returns the component's UI, which includes a <b>{'<p>'}</b> element that displays the current value of <b>count</b>, and a button that calls <b>handleClick</b> when clicked.</p>

<p>Like with functional components, it's important to never modify the state directly. Instead, always use <b>this.setState</b> to update the state.</p>

<p>While class components are still supported in React, functional components are generally preferred, especially with the introduction of hooks. However, understanding class components is still important for maintaining and updating older codebases.</p>

<b>React lifecycle</b>

<p>In React, components have a lifecycle that describes the different stages they go through during their existence. Understanding the React lifecycle is essential for building and maintaining robust React applications.</p>

<p>Here's a brief overview of the React component lifecycle methods, grouped by phase:</p>

<h4>Mounting phase:</h4>

<p><b>{'constructor()'}</b>: Called when the component is initialized.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component is initialized, and again when it receives new props. Rarely used.</p>

<p><b>{'render()'}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'componentDidMount()'}</b>: Called after the component has been rendered for the first time.</p>

<h4>Updating phase:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component receives new props.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Called before the component re-renders. Allows you to cancel the update.</p>

<p><b>{'render()'}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Called before the component updates. Rarely used.</p>

<p><b>{'componentDidUpdate()'}</b>: Called after the component has been updated.</p>

<h4>Unmounting phase:</h4>

<p><b>{'componentWillUnmount()'}</b>: Called when the component is about to be removed from the DOM.</p>

<p>Here's an example that demonstrates the lifecycle methods:</p>

<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}You clicked {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} times{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Click me{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>In this example, we define a <b>LifecycleDemo</b> class that logs messages to the console during each phase of the component's lifecycle. We also define a <b>handleClick</b> method that updates the component's state.</p>

<p>When the component is mounted for the first time, the following methods are called, in order: <b>constructor, getDerivedStateFromProps, render, and componentDidMount</b> . Whenever the component's state changes, the <b>shouldComponentUpdate, render, and componentDidUpdate </b> methods are called, in that order.</p>

<p>When the component is unmounted, the <b>componentWillUnmount</b> method is called.</p>

<p>It's important to understand the React component lifecycle so you can optimize your components and avoid common pitfalls like memory leaks and infinite loops. But don't worry if it seems overwhelming at first – with practice, you'll become more comfortable with it.</p>

</div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_3 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_3 />
        </div>
      )} 


    </div>
  )
}

export default React_3;