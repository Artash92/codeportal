import React, { useState } from 'react';
import RuReact_9 from '../lang/RuReact_9';
import AmReact_9 from '../lang/AmReact_9';

function React_9() {
  
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

        <h1>Redux-Saga</h1>

        <p>Redux-saga is a library for handling side effects, such as asynchronous requests and data fetching, in Redux applications. It uses generator functions to manage the flow of asynchronous operations and provides a centralized place for handling all side effects, making it easier to reason about and test application behavio</p>
      
      <p>Here is an example of how you can use redux-saga to handle an asynchronous API call:</p>

    <code>
      <p><span className='red'>import</span> {'{ call, put, takeLatest }'} <span className='red'>from</span> <span className='blue1'>'redux-saga/effects'</span>; </p>

      <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

      <p><span className='green'>{"// Action Types "}</span></p>

      <p>&nbsp;<span className='red'>const</span> FETCH_USERS_REQUEST = <span className='blue1'>'FETCH_USERS_REQUEST'</span>;</p>

      <p>&nbsp;<span className='red'>const</span> FETCH_USERS_SUCCESS = <span className='blue1'>'FETCH_USERS_SUCCESS'</span>;</p>

      <p>&nbsp;<span className='red'>const</span> FETCH_USERS_FAILURE = <span className='blue1'>'FETCH_USERS_FAILURE'</span>;</p>

      <p><span className='green'>{"// Action Creators"}</span></p>

      <p>&nbsp;<span className='red'>const</span> fetchUsersRequest {'= () => ({'} <span className='blue'>type</span>: FETCH_USERS_REQUEST {'});'} </p>

      <p>&nbsp;<span className='red'>const</span> fetchUsersSuccess {'= (users) => ({'} <span className='blue'>type</span>: FETCH_USERS_SUCCESS, <span className='blue'>users</span> {'});'} </p>

      <p>&nbsp;<span className='red'>const</span> fetchUsersFailure {'= (error) => ({'} <span className='blue'>type</span>: FETCH_USERS_FAILURE, <span className='blue'>error</span> {'});'} </p>

      <p><span className='green'>{"// Reducer"}</span></p>

      <p>&nbsp;<span className='red'>const</span> initialState = {'{'} <span className='blue'>users</span>: {'[]'}, <span className='blue'>loading</span>: <span className='blue1'>false</span>, <span className='blue'>error</span>: <span className='red'>null</span> {'};'} </p>

      <p>&nbsp;<span className='red'>const</span> {"usersReducer = (state = initialState, action) => {"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>switch</span> {'('}action.<span className='blue'>type</span>{") {"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_REQUEST:"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>loading</span>: <span className='blue1'>true</span> {'};'} </p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_SUCCESS:"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>users</span>: action.<span className='blue'>users</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_FAILURE:"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>error</span>: action.<span className='blue'>error</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>default</span>:</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state;</p>

      <p>&nbsp;{" }"}</p>

      <p>{"};"}</p>

      <p><span className='green'>{"// Sagas"}</span></p>

      <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>fetchUsers</span>{"() {"}</p>

      <p>&nbsp;&nbsp;<span className='red'>try</span> {"{"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>const</span> response = <span className='red'>yield</span> <span className='blueviole'>call</span>(axios.<span className='blue'>get</span>, <span className='blue1'>'{'https://jsonplaceholder.typicode.com/users'}</span>'); </p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersSuccess</span>(response.<span className='blue'>data</span>)); </p>

      <p>&nbsp;&nbsp;{"}"} <span className='red'>catch</span> {"(error) {"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersFailure</span>(error));</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>

      <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>usersSaga</span>{"() {"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>takeLatest</span>{'(FETCH_USERS_REQUEST, fetchUsers)'};</p>

      <p>{"}"}</p>

      <p><span className='red'>export</span> {"{ usersReducer, usersSaga };"}</p>
  </code>

<p>In this example, we define three action types (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, and FETCH_USERS_FAILURE), three action creators (fetchUsersRequest, fetchUsersSuccess, and fetchUsersFailure), and a reducer function (usersReducer) to handle state updates.</p>

<p>We also define two sagas: fetchUsers and usersSaga. The fetchUsers saga uses the call effect to make an API call using axios and dispatches either fetchUsersSuccess or fetchUsersFailure depending on whether the call succeeds or fails. The usersSaga saga listens to FETCH_USERS_REQUEST actions and runs the fetchUsers saga in response.</p>

<p>Finally, we export both the reducer and saga so they can be used in our Redux store setup:</p>

<code>
  <p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

  <p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

  <p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

  <p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

  <p><span className='red'>export default</span> store;</p>
</code>

<p>In this setup, we create a Redux store with our usersReducer and apply the sagaMiddleware. We then run the usersSaga using sagaMiddleware.run. This will ensure that our saga is active and listening for actions in our application.</p>

</div>
    )}
      {language === 'ru' && (
        <div>
          <RuReact_9 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_9 />
        </div>
      )} 


    </div>
  )
}

export default React_9;