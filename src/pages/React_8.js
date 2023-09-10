import React, { useState } from 'react';
import RuReact_8 from '../lang/RuReact_8';
import AmReact_8 from '../lang/AmReact_8';

function React_8() {
  
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

      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk is a middleware library for Redux that allows you to write async logic that interacts with the Redux store. It enables you to dispatch actions that contain async code, such as API requests or other side effects, by wrapping your action creators in a function that returns another function.</p>

      <p>Here's an example of how Redux Thunk can be used in a React application:</p>

      <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

      <p>In the example above, we define three action creators: <b>fetchUserRequest, fetchUserSuccess, and fetchUserError</b>. We also define a <b>fetchUser</b> action creator that returns a function instead of an action object. This function takes <b>dispatch</b> as an argument, which is the Redux store's <b>dispatch</b> function.</p>

      <p>Inside the <b>fetchUser</b> function, we dispatch the <b>fetchUserRequest</b> action, which sets the <b>isLoading</b> state to <b>true</b>. We then make an API call using Axios and dispatch either the <b>fetchUserSuccess or fetchUserError</b> action based on the API response. These actions update the Redux store with the retrieved data or the error message, respectively.</p>

      <p>To use this action creator in a component, we can import it and pass it to <b>dispatch</b> like this:</p>

    <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>

<p>In the example above, we use the useDispatch and useSelector hooks from the react-redux library to interact with the Redux store. We dispatch the fetchUser action creator in the useEffect hook, which will be called when the component mounts. We also use useSelector to extract the relevant pieces of data from the Redux store, such as the user data and the isLoading and error flags.</p>

<p>Overall, Redux Thunk is a useful middleware library for Redux that allows you to write async logic that interacts with the Redux store. It can help simplify your code and make it easier to reason about async behavior in your React application.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable is a middleware for Redux that enables the use of reactive programming in Redux applications. It allows developers to handle complex asynchronous actions and events in a declarative, composable, and easy-to-test way using RxJS, a library for reactive programming.</p>

<p>With Redux-Observable, developers can define "epics" which are functions that listen for certain actions, and then react to them with a stream of new actions. These epics are observables, which are functions that receive a stream of events and can transform, filter, or merge them in a declarative way.</p>

<p>Here is an example of how to use Redux-Observable:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>In this example, we define an epic called <b>pingEpic</b> which listens for an action of type 'PING', and then makes an AJAX request to a server to ping it. If the request is successful, it dispatches an action of type 'PONG' with the response payload. If the request fails, it dispatches an action of type 'PING_ERROR' with the error message as the payload.</p>

<p>We then combine all our epics into a single <b>rootEpic</b>, and create an instance of <b>createEpicMiddleware()</b> to use as a middleware in our Redux store. Finally, we apply the middleware to the store and run the root epic with <b>epicMiddleware.run(rootEpic)</b>.</p>
   
<p>Overall, Redux-Observable is a powerful tool for handling complex asynchronous actions and events in Redux applications. It provides a flexible and declarative way to manage async behavior using reactive programming concepts.</p>   

</div>
    )}
      {language === 'ru' && (
        <div>
          <RuReact_8 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_8 />
        </div>
      )} 
   
    </div>
  )
}

export default React_8;