import React from 'react'

 function RuEs5_9() {
  return (
    <div>
 
 <h1>Псевдопротокол JavaScript </h1> 
    
    <p>Пример использования "псевдопротокола" JavaScript: в атрибуте href тега якоря {'(<a>)'}. При клике пользователя на ссылку будет выполнен JavaScript-код, указанный в атрибуте href.</p>
    
    <p>Вот альтернативный способ написания того же кода без использования протокола javascript:</p>

<code>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#"</span> <span className='blue'>onclick</span>=<span className='blue1'>"myFunction(); return false;"</span>{'>'}Нажмите{'</'}<span className='green'>a</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;<span className='red'>function</span> myFunction() {'{'}</p>

  <p>&nbsp;&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Hello"</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>
 </code>

<p>В этом примере мы используем пустой атрибут href якоря и обработчик событий onclick для вызова функции myFunction() при щелчке на ссылке. Инструкция return false предотвращает переход по ссылке на новую страницу.</p>

<p>Оба примера достигают одинакового результата, вывода сообщения "Hello" в консоль при клике на ссылку. Однако второй пример считается более правильным, потому что отделяет JavaScript-код от разметки HTML, что облегчает обслуживание и отладку кода.</p>

<h2>Объектная модель браузера (Browser Object Model, BOM)</h2>

<p>В JavaScript ES5, модель объекта документа (DOM) представляет HTML элементы веб-страницы в виде структурированного дерева, позволяя JavaScript коду взаимодействовать и динамически изменять содержимое веб-страницы. Ниже приведены некоторые часто используемые объекты в объекте окна браузера:</p>

<p>1 . <b>window:</b> Верхний объект в иерархии JavaScript браузера, представляющий окно браузера. Все глобальные объекты, функции и переменные JavaScript автоматически становятся членами объекта window.</p>

<p>2. <b>history:</b> Объект history позволяет JavaScript взаимодействовать с историей браузера, позволяя перемещаться назад и вперед между страницами.</p>

<p>Пример:</p>

<code><p>window.history.back(); <span className='green'>// Переместиться на одну страницу назад</span> </p></code>

<p>3. <b>navigator:</b> Объект navigator предоставляет информацию о веб-браузере и операционной системе, запущенной на компьютере пользователя.</p>

<p>Пример:</p>

<code><p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Выводит строку юзер-агента для браузера</span></p></code>

<p>4.<b>screen:</b> Объект screen предоставляет информацию о разрешении экрана пользователя и глубине цвета.</p>

<p>Пример:</p>

<code><p>{'console'}.<span className='blue'>log</span>(screen.width);<span className='green'> // Выводит ширину экрана пользователя</span></p></code>

<p>5.<b>location:</b> Объект location предоставляет информацию о текущем URL веб-страницы и позволяет переходить на новые URL.</p>

<p>Пример:</p>

<code><p>{'console'}.<span className='blue'>log</span>(location.href);<span className='green'> // Выводит текущий URL location.href = "https://www.example.com"; // Переходит на новый URL</span></p></code>

<p>6.<b>document:</b> Объект document представляет HTML-контент текущей веб-страницы и позволяет JavaScript-коду взаимодействовать и манипулировать содержимым страницы.</p>

<p>Пример:</p>

<code><p>{'document'}.<span className='blue'>getElementById</span>(<span className='blue1'>"myDiv"</span>).<span className='blue'>innerHTML </span>= <span className='blue1'>"Новый контент"</span>; <span className='green'>// Изменяет HTML-содержимое элемента с идентификатором "myDiv"</span></p></code>

<p>7. <b>methods:</b> Существует множество других методов, доступных в объекте окна браузера, таких как alert(), prompt(), confirm(), setInterval() и setTimeout(), которые позволяют отображать диалоговые окна, устанавливать таймеры и многое другое.</p>

<p>Пример:</p>

<code><p><span className='blueviole'>alert</span>(<span className='blue1'>"Привет, мир!"</span>); <span className='green'>// Отображает диалоговое окно оповещения с сообщением "Привет, мир!"</span></p></code>

<h5>Модель объекта браузера (BOM) - это JavaScript API, предоставляющий доступ к объекту окна веб-браузера и его свойствам. Одно из свойств объекта window - это объект history, который содержит историю посещения пользователем страниц.</h5>

<p>Объект history предоставляет несколько методов для навигации по истории просмотра.</p>

<p>Метод <b>history.go()</b> можно использовать для навигации к определенной странице в истории просмотра. Этот метод принимает целое положительное или отрицательное число в качестве аргумента. Если аргумент является положительным целым числом, то он перемещает вперед по истории, а если отрицательным, то перемещается назад по истории. Например, history.go(-1) переместит назад на одну страницу в истории просмотра, а history.go(2) переместит вперед на две страницы.</p>

<p>Метод <b>history.back()</b> используется для перемещения на одну страницу назад в истории просмотра, эквивалентно <b>history.go(-1)</b>.</p>

<p>Метод <b>history.forward()</b> используется для перемещения на одну страницу вперед в истории просмотра, эквивалентно <b>history.go(1)</b>.</p>

<p><b>Свойство history.length </b>возвращает количество страниц в истории просмотра.</p>

<p>Вот пример использования объекта history:</p>

<code>
  <p><span className='green'>{ '// Перейти назад на одну страницу в истории просмотров'} </span> history.<span className='blue'>back</span>();</p>

  <p><span className='green'>{'// Перейти вперед на одну страницу в истории посещенных страниц'} </span>history.<span className='blue'>forward</span>();</p>

  <p><span className='green'>{'// Перейти на третью страницу в истории посещенных страниц'} </span> history.<span className='blue'>go</span>(<span className='blue1'>2</span>);</p>

  <p><span className='green'>{ '// Получить количество страниц в истории просмотров'}</span>  {'console'}.<span className='blue'>log</span>(history.<span className='blue'>length</span>);</p>
</code>


<h4>Объект Browser Object Model (BOM) является частью API JavaScript, который предоставляет доступ к окну браузера и его свойствам. Объект Navigator является частью BOM и представляет сам браузер. Он предоставляет информацию о браузере, который в настоящее время используется.</h4>

<p>Вот некоторые свойства объекта Navigator и их объяснения:</p>

<code>
  <p>navigator.<span className='blue'>appCodeName</span>: Возвращает кодовое имя браузера.</p>

  <p>navigator.<span className='blue'>appName</span>: Возвращает имя браузера.</p>

  <p>navigator.<span className='blue'>appVersion</span>: Возвращает информацию о версии браузера.</p>

  <p>navigator.<span className='blue'>language</span>: Возвращает язык, на котором настроен браузер.</p>

  <p>navigator.<span className='blue'>platform</span>: Возвращает платформу операционной системы, на которой работает браузер.</p>

  <p>navigator.<span className='blue'>userAgent</span>: Возвращает строку пользовательского агента для браузера</p>
</code>

<p>Вот пример того, как использовать объект Navigator:</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(navigator.appName); <span className='green'>// Выводит название браузера</span></p>

  <p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Выводит строку пользовательского агента для браузера</span></p>
</code>

<p>Используя свойства объекта Navigator, вы можете написать код на JavaScript, который ведет себя по-разному в зависимости от браузера, который использует пользователь.</p>

<h3>Модель объекта браузера (BOM) в JavaScript предоставляет способ взаимодействия с окном браузера и его свойствами. Объект window.screen является частью BOM и предоставляет информацию о экране пользователя.</h3>

<p>Вот список свойств объекта <b> window.screen:</b></p>

<p><b>screen.height:</b> возвращает общую высоту экрана пользователя в пикселях.</p>

<p><b>screen.width:</b> возвращает общую ширину экрана пользователя в пикселях.</p>

<p><b>screen.availHeight:</b> возвращает доступную высоту экрана пользователя в пикселях, за вычетом панели задач Windows и других элементов системы.</p>

<p><b>screen.availWidth:</b> возвращает доступную ширину экрана пользователя в пикселях, за вычетом панели задач Windows и других элементов системы.</p>

<p>Вот пример кода на JavaScript, который позволяет получить информацию о размерах экрана и объекте location, а также использует методы setTimeout() и clearTimeout(): </p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Total screen height: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>height</span> + <span className='blue1'>" pixels"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Total screen width: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>width</span> + <span className='blue1'>" pixels"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Available screen height: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availHeight</span> + <span className='blue1'>" pixels"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Available screen width: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availWidth</span> + <span className='blue1'>" pixels"</span>);</p>
</code>

<p>Этот код выведет в консоль высоту и ширину экрана, а также доступную высоту и ширину экрана.</p>

<p>Обратите внимание, что объект screen является доступным только для чтения и не может быть изменен.</p>

<h3>Модель объекта браузера (BOM) - это набор объектов JavaScript, предоставляемых веб-браузерами для взаимодействия с окном браузера. Один из объектов в BOM - это объект location, который представляет текущий URL окна браузера. Объект location имеет несколько свойств, к которым можно получить доступ и которые можно изменять для взаимодействия с URL-адресом.</h3>

<p>Вот объяснения свойств объекта <b>location</b>:</p>

<p><b>location.protocol</b>: Это свойство указывает протокол, используемый в URL, такой как <span className='blue1'>"http:"</span>  или <span className='blue1'>"https:"</span>.</p>

<p><b>location.host:</b> Это свойство указывает имя домена и номер порта в URL, например <span className='blue1'>"www.site.com:8080"</span>.</p>

<p><b>location.hostname: </b>Это свойство указывает имя домена в URL, например <span className='blue1'>"www.site.com"</span>.</p>

<p><b>location.href:</b> Это свойство указывает весь URL, например <span className='blue1'>"http://www.site.com/about/?name=javascript#content"</span>.</p>

<p><b>location.port:</b> Это свойство указывает номер порта в URL, например <span className='blue1'>"8080"</span>.</p>

<p><b>location.pathname:</b> Это свойство указывает путь URL, например <span className='blue1'>"/about/"</span>.</p>

<p><b>location.search:</b> Это свойство указывает строку запроса в URL, например <span className='blue1'>"?name=javascript"</span>.</p>

<p><b>location.hash:</b> Это свойство указывает фрагмент идентификатора в URL, например  <span className='blue1'>"#content"</span>.</p>

<p>Обращаясь к этим свойствам объекта <b>location</b> и изменяя их, можно взаимодействовать с текущим URL окна браузера, например, перенаправлять пользователя на другую страницу или изменять строку запроса.</p>

<p>Метод <b>setTimeout()</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sayHello</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>"Привет, Мир!"</span>);</p>

  <p>{'}'}</p>

  <p className='green'>// Вызов функции через 2 секунды</p>

  <p><span className='blueviole'>var</span> <span className='blue'>timer</span> = setTimeout(sayHello, <span className='blue'>2000</span>);</p>

  <p className='green'>// Отмена таймера до его выполнения</p>

  <p>clearTimeout(timer);</p>
 </code>

<p>В этом примере функция <b>setTimeout</b> используется для задержки выполнения функции <b>sayHello</b> на 2 секунды. Функция передается в качестве параметра в setTimeout вместе со временем задержки в миллисекундах. Функция <b>setTimeout</b> возвращает идентификатор таймера, который используется для отмены таймера перед его выполнением с помощью функции <b>clearTimeout</b>.</p>

<h3>События</h3>

<p>Модель объекта документа (DOM) - это программный интерфейс для веб-документов. Он представляет страницу таким образом, чтобы программы могли изменять структуру, стиль и содержание документа. События - это действия или события, которые происходят в браузере, такие как щелчок кнопки, прокрутка страницы или нажатие клавиши на клавиатуре.</p>

<p>onclick</p>

<p>onmousedown</p>

<p>onmouseup</p>

<p>onmousemove</p>

<p>onmouseover</p>

<p>onmouseout</p>

<p>onkeydown</p>

<p>onkeyup</p>

<p>onkeypress</p>

<p>onfocus</p>

<p>onblur</p>

<p>onsubmit</p>

<p>onreset</p>

<p>onselect</p>

<p>onchange</p>

<p>onscroll</p>

<p>onload</p>

<p>onunload</p>

<p>Перечисленные события являются обработчиками событий, которые представляют собой функции, выполняемые при определенном событии на веб-странице. Например, обработчик событий "onclick" выполняется при щелчке пользователем на элементе на веб-странице. Аналогично, обработчик событий "onload" выполняется, когда страница загружается в браузере.</p>

<p>Эти обработчики событий могут быть добавлены к элементам HTML с помощью префикса "on", за которым следует имя события, такое как "onclick" или "onload". При возникновении указанного события выполняется функция, назначенная обработчику событий. Это позволяет разработчикам создавать интерактивные веб-страницы, реагирующие на действия пользователя</p>
    
    
    </div>
  )
}



export default RuEs5_9;



