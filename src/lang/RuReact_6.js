import React from 'react'

function RuReact_6() {
  return (
    <div>
      <h1>Реакт ссылки (Refs)</h1>

<p>В React, <b>ссылка (ref)</b> - это способ доступа к базовому узлу DOM или экземпляру компонента React отображаемого элемента. Вы можете использовать ссылки, чтобы получить доступ к определенным свойствам или методам компонента, или изменить его поведение.</p>

<p>Вот пример того, как создать ссылку в React:</p>

  <code>
     <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

     <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

     <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

     <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

     <p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

     <p>{' };'}</p>

     <p>&nbsp;<span className='red'>return</span> {'('}</p>

     <p>{'<'}<span className='green'>div</span>{'>'}</p>

     <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

     <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

     <p>{'</'}<span className='green'>div</span>{'>'}</p>

     <p>&nbsp;{');'}</p>

     <p>{'}'}</p>
 </code>

  <p>В React <b>ref</b> - это способ получения доступа к базовому узлу DOM или экземпляру компонента React отрендеренного элемента. Вы можете использовать refs, чтобы получить доступ к определенным свойствам или методам компонента или изменить его поведение.</p>
  
  <p>Вот пример того, как создать ref в React:</p>
  
  <p>В этом примере мы создаем <b>ref</b> с помощью хука <b>useRef</b>. Затем мы передаем <b>ref</b> элементу <b>input</b> с помощью свойства <b>ref</b>.</p>
  
  <p>Мы также создаем функцию <b>handleClick</b>, которая использует свойство <b>current</b> у <b>ref</b>, чтобы вызвать метод <b>focus</b> на элементе <b>input</b>. Это позволяет установить фокус на вводе, когда пользователь нажимает кнопку "Focus Input".</p>
  
  <p>В целом, использование <b>ref</b> может быть мощным инструментом для доступа и управления компонентами в React. Однако важно использовать их с осторожностью и избегать чрезмерной зависимости от императивного кода, так как это может усложнить понимание и поддержку кода.</p>
  
  <b>Event Emitter</b>

<p>Event Emitter - это шаблон проектирования, который позволяет объектам в программе взаимодействовать друг с другом, запуская и обрабатывая события. Простыми словами, Event Emitter - это механизм для передачи и получения сообщений в программе.</p>

<p>В JavaScript класс EventEmitter является встроенным модулем, который обеспечивает способ реализации этого шаблона. Вот пример того, как использовать EventEmitter в Node.js:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>В этом примере мы создаем пользовательский класс <b>MyEmitter</b>, который расширяет класс <b>EventEmitter</b>. Затем мы создаем экземпляр этого класса и определяем слушатель для события <b>event</b>, используя метод <b>on</b>. Наконец, мы генерируем событие <b>event</b> и передаем строковый аргумент, который вызывает слушатель и записывает аргумент в консоль.</p>

<p>В целом использование эмиттера событий может быть полезным способом реализации шаблона издатель-подписчик в вашем коде, где различные части вашей программы могут общаться друг с другом, не будучи тесно связанными друг с другом. Однако важно использовать этот шаблон с умом и не полагаться слишком сильно на события, так как это может сделать ваш код более сложным для понимания и отладки.</p>

<p><b>В React</b> вы можете использовать шаблон эмиттера событий для связи между различными компонентами в вашем приложении. Это может быть полезно для передачи данных или запуска действий между компонентами, которые не связаны напрямую друг с другом.</p>

<p>Один из способов реализации шаблона эмиттера событий в React - использовать стороннюю библиотеку, такую как <b>eventemitter3 или mitt</b>. Эти библиотеки предоставляют простой API для создания и подписки на события, и могут использоваться как с классовыми, так и с функциональными компонентами с хуками.</p>

<p>Вот пример того, как использовать <b>eventemitter3</b> в компоненте React:</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hello from ComponentA'</span> {'})'}; </p>

  <p>{"}, []);"}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"} "}</p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

  <p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

  <p>{" }, []);"}</p>

  <p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

  <p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

  <p>{" }; "}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"}"}</p>
</code>

<p>В этом примере мы создаем экземпляр <b>EventEmitter, называемый emitter</b>. В <b>ComponentA</b> мы используем хук <b>useEffect</b>, чтобы вызвать событие <b>eventA</b> с некоторыми данными. В <b>ComponentB</b> мы используем хук <b>useEffect</b>, чтобы подписаться на событие <b>eventA</b> и определяем функцию обратного вызова <b>handleEventA</b>, которая записывает данные в консоль.</p>

<p>Когда монтируется ComponentA, оно вызывает событие eventA с некоторыми данными. Когда монтируется ComponentB, он подписывается на событие eventA и начинает прослушивать любые события с этим именем. Когда происходит событие eventA, вызывается handleEventA с данными, и она записывает сообщение в консоль.</p>

<p>В целом, использование шаблона эмиттера событий в React может быть полезным способом реализации коммуникации между компонентами, которые не прямо связаны между собой. Однако важно использовать этот шаблон с умом и не полагаться на него слишком сильно, так как это может сделать ваш код более сложным для понимания и отладки.</p>

<h4>Анимация в React</h4>

<p>В React вы можете добавлять анимации в ваши компоненты, используя различные техники. Анимации могут сделать ваш пользовательский интерфейс более увлекательным и обеспечить визуальную обратную связь пользователю, когда что-то меняется.</p>

<p>Один из популярных способов реализации анимаций в React - это использование CSS-переходов или анимаций. Вы можете добавлять CSS-классы к вашим компонентам, чтобы запускать эти анимации, и использовать проп <b>className</b> в React, чтобы переключать классы на основе состояния компонента.</p>

<p>Вот пример того, как использовать CSS-переходы для анимации кнопки при щелчке:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

  <p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

  <p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

  <p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

  <p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

  <p>{"};"}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

  <p>&nbsp;{"Click me! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>В этом примере мы определяем компонент с названием <b>Button</b>, который использует хук <b>useState</b>, чтобы отслеживать, была ли нажата кнопка или нет. Когда кнопка нажимается, мы устанавливаем состояние <b>isClicked</b> в значение <b>true</b>, что добавляет класс <b>clicked</b> к кнопке. Затем мы используем <b>setTimeout</b>, чтобы через 1 секунду удалить класс <b>clicked</b>, что запускает переход обратно в исходное состояние.</p>

<p>Мы также определяем файл CSS с названием <b>Button.css</b>, который определяет стили для кнопки и класса <b>clicked</b>:</p>

<code>
  <p>{'.button {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>

  <p>{'}'}</p>

  <p>{'.clicked {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>

  <p>{'}'}</p>
</code>

<p>В этом CSS-файле мы определяем стили для кнопки и указываем свойство <b>transition</b> на классе <b>button</b> для анимации изменений свойства <b>background-color</b>. Мы также определяем класс <b>clicked</b>, который изменяет цвет фона на красный, когда он применяется.</p>

<p>Еще один способ реализации анимаций в React - использовать стороннюю библиотеку, такую ​​как <b>react-spring или framer-motion</b>. Эти библиотеки обеспечивают более гибкий API для создания сложных анимаций и могут быть полезны для более продвинутых случаев использования.</p>

<p><b>react-transition-group</b> - это сторонняя библиотека для React, которая предоставляет способ легко добавлять CSS-переходы и анимации к вашим компонентам. Он предоставляет набор компонентов и API для управления жизненным циклом переходов, включая монтирование и демонтаж элементов, добавление и удаление классов и задержку анимаций.</p>

<b>{'npm install react-transition-group'}</b>

<p>Основные компоненты в <b>react-transition-group</b> - это Transition, CSSTransition и TransitionGroup. Вот краткий обзор каждого компонента:</p>

<p>• <b>Transition</b>: Этот компонент определяет основной жизненный цикл перехода, включая состояния входа, введенного, выхода и выведенного. Вы можете использовать этот компонент, чтобы запускать </p>

<p>• <b>CSSTransition</b>: Этот компонент расширяет компонент <b>Transition</b> и добавляет поддержку CSS-переходов и анимаций. Вы можете указать CSS-классы, которые применяются к вашему компоненту в различных стадиях перехода, таких как <b>enter, enter-active, exit и exit-active</b>.</p>

<p>• <b>TransitionGroup</b>: Этот компонент используется для управления набором компонентов <b>Transition or CSSTransition</b>. Он отслеживает монтирование и демонтаж компонентов и может применять различные эффекты перехода к каждому компоненту. </p>

<p>Вот пример использования <b>react-transition-group</b> для добавления анимации появления при монтировании компонента:</p>

<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>

  <p>&nbsp;<span className='red'>return</span> {"( "}</p>

  <p>{"<> "}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Hello, world!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>В этом примере мы определяем компонент с именем <b>FadeIn</b>, который использует хук <b>useState</b> для отслеживания того, был ли компонент смонтирован или нет. Когда кнопка нажимается, мы устанавливаем состояние <b>isMounted</b> в <b>true</b>, что запускает компонент <b>CSSTransition</b> для рендеринга элемента <b>content</b> с эффектом появления. Мы также определяем файл CSS с именем <b>FadeIn.css</b>, который определяет стили и анимацию для эффекта появления:</p>

<code>
  <p>{" .fade-enter { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>

  <p>{"} "}</p>

  <p>{".fade-enter-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>
  
  <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>

  <p>{"}"}</p>
</code>

<p>В этом файле CSS мы определяем классы для разных стадий перехода. Когда компонент входит, у него непрозрачность равна 0 (<b>fade-enter</b>), и он переходит к непрозрачности 1 за 300 мс (<b>fade-enter-active</b>). Когда компонент выходит, у него непрозрачность равна 1 (<b>fade-exit</b>), и он переходит к непрозрачности 0 за 300 мс (<b>fade-exit-active</b>).</p>

<p>В целом, добавление анимаций к вашим компонентам React может сделать ваш интерфейс более привлекательным и обеспечить визуальную обратную связь пользователю. Используя CSS-переходы или анимации, или стороннюю библиотеку, вы можете легко добавлять анимации к своим компонентам и делать их более динамичными.</p>

    </div>
  )
}

export default RuReact_6;