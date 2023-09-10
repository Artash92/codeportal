import React from 'react'

function RuReact_2() {
  return (
    <div>
      
      <h1>JSX</h1>
  
  <p>JSX - это расширение синтаксиса для JavaScript, которое позволяет писать код, похожий на HTML, в файлах JavaScript. Оно широко используется в React для определения структуры и макета компонентов пользовательского интерфейса (UI).</p>    
   
  <p>Вот пример того, как работает JSX:</p>
  
  <code>
   <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Привет, мир!{'</'}<span className='green'>h1</span>{'>'} </p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Это простой пример JSX.{'</'}<span className='green'>p</span>{'>'} </p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{');'}</p>

   <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

  <p>В этом примере мы определяем простой компонент React, используя JSX. Компонент отображает элемент <b>div</b>, содержащий элементы <b>h1 и p</b>. Обратите внимание, что HTML-подобный код заключен в скобки и определяется с использованием синтаксиса JSX.</p>

  <p>JSX позволяет легко объединять HTML-подобный код с логикой JavaScript. Например, вы можете использовать переменные и выражения JavaScript внутри своего JSX-кода:</p>
  
<code>
   <p><p><span className='red'>import</span> React<span className='red'> from</span> <span className='blue1'>'react'</span>;</p></p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'Джон'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Привет,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Это простой пример JSX.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>
    
   <p>В этом примере мы используем переменную JavaScript <b>(name)</b> внутри нашего JSX-кода, чтобы динамически отображать персонализированное приветствие.</p>

   <p>JSX не является обязательным для разработки в React, но рекомендуется, так как он значительно упрощает написание и управление сложными компонентами пользовательского интерфейса. Когда вы пишете код на JSX, он транспилируется в обычный код JavaScript, который может быть выполнен браузером.</p>

<p>Существуют два основных типа компонентов в React: функциональные компоненты и компоненты классов.</p>

<p>Функциональные компоненты определяются как функции JavaScript, которые возвращают JSX-элемент. Они обычно используются для простых, представительных компонентов пользовательского интерфейса, которые не имеют состояния или методов жизненного цикла.</p>

<p>Вот пример простой функциональной компоненты:</p>

<code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Привет,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Это функциональный компонент.{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>
 
<p>В этом примере мы определяем функциональный компонент с именем <b>MyComponent</b>, который принимает объект <b>props</b> в качестве аргумента. Компонент возвращает элемент JSX, который включает элемент h1 с персонализированным приветствием и элемент <b>p</b> с сообщением.</p>    

<p>Классовые компоненты, с другой стороны, определяются как классы JavaScript, которые расширяют класс <b>React.Component</b>. Они используются для более сложных компонентов пользовательского интерфейса, которые должны управлять состоянием и иметь методы жизненного цикла.</p>

<p>Вот пример простого классового компонента:</p>

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

    <p>{'<'}<span className='green'>h1</span>{'>'}Count: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='green'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Increment{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{' );'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>В этом примере мы определяем классовый компонент с именем MyComponent, который имеет свойство состояния с именем <b>count и метод render</b>, который возвращает элемент JSX с элементом h1, который отображает текущее значение счетчика, и элементом <b>button</b>, который увеличивает значение счетчика при нажатии.</p>

<p>Компоненты могут быть скомпонованы и вложены друг в друга, чтобы создавать сложные элементы пользовательского интерфейса. Они также могут принимать свойства как входные данные, что позволяет им настраиваться и переиспользоваться во всем приложении.</p>

<p><b>{'<Component />'}</b> - это синтаксис, используемый в React для рендеринга компонента. Это называется самозакрывающимся тегом или пустым тегом, и он эквивалентен вызову компонента в виде функции без аргументов.</p>

<p>Например, предположим, у нас есть простой компонент с именем MyComponent:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Привет, мир!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p>    
</code>

<p>Для рендеринга этого компонента мы бы использовали синтаксис <b>{'<MyComponent /> '}</b>:</p>

<code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p> document.<span className='blue'>getElementById</span>('root')</p> 
</code>

<p>Синтаксис <b>{'<MyComponent /> '}</b> создает экземпляр компонента MyComponent и рендерит его в DOM.</p>

    </div>
  )
}

export default RuReact_2;