import React from 'react'

function RuReact_3() {
  return (
    <div>
      
      <h1>События React</h1>

<p>React предоставляет способ обработки событий в компонентах, аналогичный обработке событий в чистом JavaScript. В React вы можете добавлять обработчики событий для любого элемента JSX с помощью синтаксиса on<b>[ИмяСобытия]</b>.</p>

<p>Например, допустим, у нас есть кнопка в компоненте React, для которой мы хотим обработать событие нажатия:</p>

  <code>
      <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

      <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

      <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Кнопка нажата'</span>); </p>

      <p>{' }'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Нажми меня{'</'}<span className='green'>button</span>{'>'}  </p>

      <p>&nbsp;{');'}</p>

      <p>{'} '}</p>
    </code>

 <p>В этом примере мы определяем компонент <b>MyButton</b>, который содержит элемент кнопки с пропом <b>onClick</b>, установленным на функцию с именем <b>handleClick</b>. При нажатии на кнопку будет вызвана функция <b>handleClick</b>, и сообщение "Button clicked" будет записано в консоль.</p>
  
<p>Вы также можете передавать аргументы в функцию обработчика событий с помощью стрелочных функций. Допустим, у нас есть список элементов, которые мы хотим отобразить в виде кнопок:</p>
  
<code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Нажат элемент $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'>`</span>); </p>

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

    <p>&nbsp;{'); '}</p>

    <p>{'} '}</p>
 </code>
 
<p>В этом примере мы определяем компонент <b>ItemList</b>, который принимает входной параметр <b>items</b>. Мы определяем функцию <b>handleClick</b>, которая принимает аргумент <b>item</b>, который будет использоваться для вывода сообщения в консоль при нажатии на соответствующую кнопку.</p>

<p>Мы используем метод <b>map</b>, чтобы создать новый массив элементов <b>{'<button>'}</b>, где каждый элемент соответствует элементу из входного параметра <b>items</b>. Мы устанавливаем свойство <b>key</b> для каждого элемента <b>{'<button>'}</b> в значение <b>id</b> соответствующего элемента, что является требованием в React для оптимизации обновлений. Мы также используем стрелочную функцию, чтобы передать объект <b>item</b> функции <b>handleClick</b> при нажатии на кнопку.</p>

<p>Затем мы возвращаем элемент <b>{'<div>'}</b>, который содержит массив <b>buttonList</b>.</p>   
    
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
    
<b>Состояние React в классовых компонентах</b>

<p>В React состояние также может быть управляемо с помощью классовых компонентов. Классовые компоненты - это классы JavaScript, которые расширяют класс <b>React.Component</b> и реализуют метод <b>render</b>, который возвращает пользовательский интерфейс компонента.</p>

<p>Вот пример классового компонента, который управляет состоянием:</p>
  
    <code>
       <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

       <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {''}</p>
    
       <p><span className='blue'>constructor</span>(props) {'{'}</p>

       <p>super (props);</p>

       <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

       <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

       <p>{'}'}</p>

       <p><span className='blue'>handleClick</span>() {'{'}</p>

       <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

       <p>{'}'}</p>

       <p><span className='blue'>render</span>() {'{'}</p>

       <p><span className='red'>return</span> {'('}</p>

       <p>{'<'}<span className='green'>div</span>{'>'}</p>

       <p>{'<'}<span className='green'>p</span>{'>'}вы кликнули {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} раз(а){'</'}<span className='green'>p</span>{'>'}</p>

       <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Нажми меня{'</'}<span className='green'>button</span>{'>'}</p>

       <p>{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;{');'}</p>

       <p>&nbsp;{'}'}</p>

       <p>{'}'}</p>
    </code>

<p>В этом примере мы определяем класс <b>Counter</b>, который расширяет класс <b>React.Component</b>. Внутри класса мы определяем конструктор, который устанавливает начальное состояние компонента в объект со свойством <b>count</b> равным 0. Мы также связываем метод <b>handleClick</b> с экземпляром компонента, используя метод <b>bind</b>.</p>

<p>Метод <b>handleClick</b> обновляет состояние компонента, вызывая метод this.setState с новым объектом, у которого свойство <b>count</b> увеличено на 1.</p>

<p>Метод <b>render</b> возвращает пользовательский интерфейс компонента, который включает элемент <b>{'<p>'}</b>, отображающий текущее значение <b>count</b>, и кнопку, которая вызывает метод <b>handleClick</b> при нажатии.</p>

<p>Как и в функциональных компонентах, важно никогда не изменять состояние напрямую. Вместо этого всегда используйте метод <b>this.setState</b> для обновления состояния.</p>

<p>Хотя классовые компоненты все еще поддерживаются в React, функциональные компоненты обычно предпочтительнее, особенно с введением хуков. Однако понимание классовых компонентов все еще важно для поддержки и обновления старых кодовых баз.</p>

<b>Жизненный цикл React</b>

<p>В React компоненты имеют жизненный цикл, который описывает различные стадии, через которые они проходят в течение своего существования. Понимание жизненного цикла React важно для создания и поддержки надежных приложений на React.</p>

<p>Вот краткий обзор методов жизненного цикла компонента React, сгруппированных по фазам:</p>

<h4>Фаза монтирования:</h4>    

<p><b>{'constructor()'}</b>: Вызывается при инициализации компонента.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Вызывается при инициализации компонента, а затем снова, когда ему передаются новые свойства (props). Редко используется.</p>

<p><b>{'render()'}</b>: Вызывается каждый раз, когда компонент должен быть перерисован.</p>

<p><b>{'componentDidMount()'}</b>: Вызывается после того, как компонент был отрисован в первый раз.</p>

<h4>Фаза обновления:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Вызывается при передаче компоненту новых свойств (props).</p>

<p><b>{'shouldComponentUpdate()'}</b>: Вызывается перед повторной отрисовкой компонента. Позволяет отменить обновление.</p>

<p><b>{'render()'}</b>: Вызывается каждый раз, когда компонент должен быть перерисован.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Вызывается перед обновлением компонента. Редко используется.</p>

<p><b>{'componentDidUpdate()'}</b>: Вызывается после того, как компонент был обновлен.</p>

<h4>Фаза удаления (Unmounting phase):</h4>

<p><b>{'componentWillUnmount()'}</b>: Вызывается, когда компонент готовится быть удален из DOM-дерева.</p>

<p>Вот пример, который демонстрирует методы жизненного цикла:</p>

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

  <p>{'<'}<span className='green'>p</span>{'>'}вы кликнули{'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} раз(а){'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Нажми меня{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>В этом примере мы определяем класс <b>LifecycleDemo</b>, который записывает сообщения в консоль во время каждой фазы жизненного цикла компонента. Мы также определяем метод <b>handleClick</b>, который обновляет состояние компонента.</p>

<p>При первом монтировании компонента вызываются следующие методы в порядке: <b>constructor, getDerivedStateFromProps, render и componentDidMount</b>. Когда состояние компонента изменяется, вызываются методы <b>shouldComponentUpdate, render и componentDidUpdate</b>, в указанном порядке.</p>
   
<p>При удалении компонента вызывается метод <b>componentWillUnmount</b>.</p>  
    
<p>Важно понимать жизненный цикл компонента React, чтобы оптимизировать свои компоненты и избегать распространенных проблем, таких как утечки памяти и бесконечные циклы. Но не беспокойтесь, если вначале кажется, что это сложно – с практикой вы станете более уверенными в этом.</p>  
    
    
    </div>
  )
}

export default RuReact_3;