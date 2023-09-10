import React from 'react'

function RuReact_7() {
  return (
    <div>
      <h1>Redux</h1>
   
   <p>Redux - это библиотека управления состоянием для приложений на JavaScript. Она помогает управлять состоянием вашего приложения предсказуемым образом, упрощая анализ потока данных в вашем приложении. С помощью Redux вы храните состояние вашего приложения в единственном объекте, называемом хранилищем, и используете действия и редьюсеры для изменения этого состояния.</p>
   
   <p>Вот как это работает: когда вы хотите изменить состояние вашего приложения, вы отправляете действие (action). Действие - это простой объект JavaScript, который описывает то, что произошло в вашем приложении. Например, вы можете отправить действие, чтобы добавить новый элемент в список или обновить информацию профиля пользователя.</p>
   
   <p>Редьюсеры (reducers) - это функции, которые принимают текущее состояние вашего приложения и действие, и возвращают новое состояние. Редьюсеры - это чистые функции, что означает, что они не имеют побочных эффектов и всегда возвращают одинаковый вывод для заданного ввода.</p>
   
   <p>React-Redux - это библиотека, которая интегрирует Redux с React. Она предоставляет способ связать ваши компоненты React с хранилищем Redux, чтобы вы могли получать доступ к состоянию вашего приложения из ваших компонентов и изменять его. React-Redux предоставляет два ключевых компонента: Provider и connect.</p>
   
   <p>Компонент Provider используется для обертывания всего вашего приложения на React. Он принимает объект хранилища в качестве свойства и делает это хранилище доступным для всех компонентов вашего приложения.</p>
   
   <p>1. Установите необходимые пакеты:</p>

  <b>npm install redux react-redux</b>

   <p>2. Создайте хранилище Redux:</p>
    
   <code>
      <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
      
      <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

      <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
    </code>

   <p>3. Создайте действия (actions) Redux:</p>

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

   <p>4. Создайте редьюсеры (reducers) Redux:</p>

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

   <p>5. Подключите Redux к компоненту React, используя функцию <b>connect</b> библиотеки React-Redux:</p>    

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

   <p>6. Оберните свое приложение компонентом <b>Provider</b>, чтобы сделать хранилище Redux доступным для всех компонентов:</p> 
    
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
    
    <p>Это базовый пример того, как использовать Redux и React-Redux в приложении React. Имейте в виду, что это только вершина айсберга, и есть намного больше, что нужно узнать о Redux и его экосистеме.</p>
    
    <p>Есть несколько дополнительных вещей, на которые нужно обратить внимание при использовании Redux в приложении React:</p>
    
    <p>1. Промежуточное ПО Redux: Промежуточное ПО - это способ изменять или перехватывать действия Redux до их обработки редьюсерами. Промежуточное ПО может использоваться для задач, таких как журналирование, асинхронные запросы и многое другое. Некоторые популярные варианты промежуточного ПО для Redux включают <b>redux-thunk, redux-saga и redux-observable</b>.</p>
    
    <p>2. Инструменты разработчика Redux: Инструменты разработчика Redux - это расширение браузера, которое предоставляет полезный пользовательский интерфейс для отладки и проверки хранилища Redux. Он позволяет просматривать действия и изменения состояния, а также обеспечивает возможность отладки с перемоткой во времени.</p>
    
    <p>3. Селекторы Redux: Селекторы - это функции, которые извлекают определенные части данных из хранилища Redux. Они могут использоваться для вычисления производных данных, фильтрации и преобразования данных и многое другое. Селекторы могут помочь упростить ваши компоненты, предоставляя им только необходимые данные, не беспокоясь о структуре хранилища.</p>
    
    <p>4. Redux ducks: Ducks - это предложение по организации кода Redux в модули, которые содержат все связанные типы действий, создатели действий и редьюсеры для определенной функции или области. Этот подход может помочь упростить ваш код и облегчить его поддержку.</p>
    
    <p>Это только несколько из дополнительных тем, которые вы можете изучить при работе с Redux. В экосистеме Redux доступно множество других библиотек и инструментов, поэтому важно потратить время на их изучение и решить, какие из них наилучшим образом подходят для вашего проекта.</p> 
    
    
    </div>
  )
}

export default RuReact_7;