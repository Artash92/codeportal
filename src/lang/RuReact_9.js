import React from 'react'

function RuReact_9() {
  return (
    <div>
      <h1>Redux-Saga</h1>

<p>Redux-saga это библиотека для управления побочными эффектами, такими как асинхронные запросы и получение данных, в приложениях Redux. Она использует генераторные функции для управления потоком асинхронных операций и предоставляет централизованное место для обработки всех побочных эффектов, что упрощает понимание и тестирование поведения приложения.</p>

<p>Вот пример того, как вы можете использовать redux-saga для обработки асинхронного вызова API:</p>
    
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
    
    <p>В этом примере мы определяем три типа действий (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS и FETCH_USERS_FAILURE), три функции-создателя действий (fetchUsersRequest, fetchUsersSuccess и fetchUsersFailure) и функцию-редьюсер (usersReducer) для обновления состояния.</p>
    
    <p>Мы также определяем две саги: fetchUsers и usersSaga. Сага fetchUsers использует эффект call для выполнения API-запроса с использованием axios и диспетчеризует действия fetchUsersSuccess или fetchUsersFailure в зависимости от того, успешно ли выполнен запрос. Сага usersSaga слушает действия FETCH_USERS_REQUEST и запускает сагу fetchUsers в ответ.</p>
    
    <p>Наконец, мы экспортируем как редьюсер, так и сагу, чтобы их можно было использовать в настройке нашего хранилища Redux:</p>
    
<code>
  <p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

  <p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

  <p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

  <p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

  <p><span className='red'>export default</span> store;</p>
</code>
    
 <p>В этой настройке мы создаем хранилище Redux с нашим usersReducer и применяем sagaMiddleware. Затем мы запускаем usersSaga с помощью sagaMiddleware.run. Это гарантирует, что наша сага активна и прослушивает действия в нашем приложении.</p>   
    
    
    </div>
  )
}

export default RuReact_9;