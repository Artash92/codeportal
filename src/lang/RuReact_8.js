import React from 'react'

function RuReact_8() {
  return (
    <div>
      <h1>Redux Thunk</h1>

<p>Redux Thunk - это библиотека промежуточного программного обеспечения для Redux, которая позволяет вам писать асинхронную логику, взаимодействующую с хранилищем Redux. Он позволяет вам диспетчеризовать действия, которые содержат асинхронный код, такой как запросы API или другие побочные эффекты, обернув ваши создатели действий в функцию, которая возвращает другую функцию.</p>

<p>Вот пример того, как Redux Thunk может быть использован в приложении React:</p>
    
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

      <p>В приведенном выше примере мы определяем три создателя действий: <b>fetchUserRequest, fetchUserSuccess и fetchUserError</b>. Мы также определяем создателя действий <b>fetchUser</b>, который возвращает функцию вместо объекта действия. Эта функция принимает аргументом <b>dispatch</b>, который является функцией <b>dispatch</b> хранилища Redux.</p>
     
      <p>Внутри функции <b>fetchUser</b> мы диспетчеризуем действие <b>fetchUserRequest</b>, которое устанавливает состояние <b>isLoading</b> в значение <b>true</b>. Затем мы делаем вызов API, используя Axios, и диспетчеризуем действие <b>fetchUserSuccess</b> или <b>fetchUserError</b> в зависимости от ответа API. Эти действия обновляют хранилище Redux полученными данными или сообщением об ошибке соответственно.</p>
    
      <p>Чтобы использовать этот создатель действий в компоненте, мы можем импортировать его и передать в <b>dispatch</b> следующим образом:</p>    
    
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

     <p>В приведенном выше примере мы используем хуки <b>useDispatch</b> и <b>useSelector</b> из библиотеки react-redux для взаимодействия с хранилищем Redux. Мы диспетчеризуем создатель действий <b>fetchUser</b> в хуке <b>useEffect</b>, который будет вызван при монтировании компонента. Мы также используем <b>useSelector</b>, чтобы извлечь соответствующие данные из хранилища Redux, такие как данные пользователя, флаги <b>isLoading</b> и <b>error</b>.</p>
     
     <p>В целом, Redux Thunk - это полезная библиотека промежуточного программного обеспечения для Redux, которая позволяет писать асинхронную логику, взаимодействующую с хранилищем Redux. Он может помочь упростить ваш код и сделать его более понятным в отношении асинхронного поведения в вашем приложении React.</p>
     
     <h3>Redux-Observable</h3>
    
    <p>Redux-Observable - это промежуточное программное обеспечение для Redux, которое позволяет использовать реактивное программирование в приложениях Redux. Он позволяет разработчикам обрабатывать сложные асинхронные действия и события в декларативном, компонуемом и легко тестируемом способе с использованием RxJS, библиотеки для реактивного программирования.</p>
    
    <p>С помощью Redux-Observable разработчики могут определять "эпики", которые являются функциями, прослушивающими определенные действия и затем реагирующими на них с потоком новых действий. Эти эпики являются наблюдаемыми объектами, которые получают поток событий и могут декларативно преобразовывать, фильтровать или объединять их.</p>
    
    <p>Вот пример того, как использовать Redux-Observable:</p>

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

<p>В этом примере мы определяем эпик с названием <b>pingEpic</b>, который ожидает действие типа "PING", а затем отправляет AJAX-запрос на сервер для его пинга. Если запрос выполнен успешно, он диспетчит действие типа "PONG" с ответом в качестве полезной нагрузки. Если запрос не удался, он диспетчит действие типа "PING_ERROR" с сообщением об ошибке в качестве полезной нагрузки.</p>

<p>Затем мы объединяем все наши эпики в один <b>rootEpic</b> и создаем экземпляр <b>createEpicMiddleware()</b>, чтобы использовать его в качестве промежуточного программного обеспечения в нашем хранилище Redux. Наконец, мы применяем промежуточное программное обеспечение к хранилищу и запускаем корневой эпик с помощью <b>epicMiddleware.run(rootEpic)</b>.</p>

<p>В целом, Redux-Observable - это мощный инструмент для управления сложными асинхронными действиями и событиями в приложениях Redux. Он обеспечивает гибкий и декларативный подход к управлению асинхронным поведением, используя концепции реактивного программирования.</p>
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default RuReact_8;