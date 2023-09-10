import React from 'react'

function RuHtml_1() {
  return (
    <div>
     
      <h1>HTML</h1>

<p>HTML (HyperText Markup Language) - язык разметки, используемый для создания и структурирования контента в интернете. Он является основой каждого веб-сайта и служит строительным блоком веб-страниц. HTML - декларативный язык, что означает, что он используется для описания содержания и структуры веб-страницы, но не обязательно для ее внешнего вида.</p>   

<p>HTML был создан Тимом Бернерсом-Ли в начале 1990-х годов, когда он работал в CERN, Европейской организации по ядерным исследованиям. Бернерс-Ли искал способ обмена и организации информации среди исследователей, и HTML был решением, которое он предложил. HTML был создан для того, чтобы быть простым языком, который мог бы быть легко понят и использован кем угодно, независимо от их технического фона.</p>

<p>HTML состоит из серии элементов, которые представлены тегами. Теги заключены в угловые скобки и используются для определения структуры и содержания веб-страницы. Например, тег {'<head>'} используется для определения заголовочной части веб-страницы, которая обычно содержит информацию, такую как название страницы и ссылки на внешние таблицы стилей и скрипты. Тег {'<body>'} используется для определения тела веб-страницы, которое содержит основное содержимое страницы.</p>

<p>HTML - язык, постоянно развивающийся, с периодическим выпуском новых версий. На данный момент актуальной версией HTML является HTML5, которая была выпущена в 2014 году. HTML5 ввела множество новых функций и возможностей, таких как теги видео и аудио, элементы canvas для рисования графики и семантические теги для лучшей доступности и SEO.</p>

<p>Вкратце, HTML - это язык разметки, используемый для создания и структурирования контента в Интернете. Он был создан Тимом Бернерс-Ли в начале 1990-х годов и является основой каждого сайта. HTML состоит из серии элементов, представленных тегами, и является постоянно развивающимся языком с периодическим выпуском новых версий.</p>

<p>1. Простая веб-страница с заголовком и абзацем:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Моя веб-страница{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Добро пожаловать на мою веб-страницу{'</'}<span className='green'>h1</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Это моя первая веб-страница.{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
  
   
<p>Это пример простой веб-страницы, состоящей из заголовка и абзаца. Заголовок представлен тегом "title", а абзац - тегом "p". Заголовок страницы отображается в строке заголовка браузера и в результатах поиска.</p>

<p>2. Изображение с альтернативным текстом и ссылка на другую страницу:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
       
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
       
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Моя веб-страница{'</'}<span className='green'>title</span>{'>'}</p> 
       
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
       
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Добро пожаловать на мою веб-страницу{'</'}<span className='green'>h1</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Это изображение кота:{'</'}<span className='green'>p</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Симпатичный котик"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Нажмите {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}here{'</'}<span className='green'>a</span>{'>'} чтобы перейти на Google.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>



<p>В этом примере приведено изображение кота, представленное тегом "img" с альтернативным текстом, отображаемым в случае невозможности загрузки изображения. Ссылка на Google представлена тегом "a" с атрибутом "href", указывающим на URL-адрес целевой страницы.</p>

<p>3. Форма для ввода имени и отправки данных на сервер:</p>
  
<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Моя веб-страница{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Добро пожаловать на мою веб-страницу{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Введите ваше имя:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Отправить"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
  </code>

<p>Этот пример показывает форму с текстовым полем для ввода имени пользователем. Когда форма отправляется, данные отправляются на сервер для обработки. Тег "label" предоставляет текстовую метку для поля ввода, а тег "input" используется для создания поля ввода и кнопки отправки данных.</p>

<p>4.Упорядоченный список элементов:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Моя веб-страница{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Добро пожаловать на мою веб-страницу{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Мои любимые блюда:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Пицца{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Бургеры{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Мороженое{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
  

<p>Этот пример показывает упорядоченный список элементов, представленный тегом "ol", где каждый элемент представлен тегом "li". Номера для списка автоматически генерируются браузером.</p>

<p>5. Неупорядоченный список элементов:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Моя веб-страница{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Добро пожаловать на мою веб-страницу{'</'}<span className='green'>h1</span>{'>'}</p> 

  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Мои любимые фильмы:{'</'}<span className='green'>h2</span>{'>'}</p> 

  <p>{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Побег из Шоушенка{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Крестный отец{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Темный рыцарь{'</'}<span className='green'>li</span>{'>'}</p>

  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Этот пример демонстрирует ненумерованный список элементов, представленных тегом "ul", с каждым элементом, представленным тегом "li". Элементы списка отображаются по умолчанию с маркерами.</p>

<p>Чтобы углубить свое понимание HTML, студентов можно направить на дополнительные ресурсы, такие как документация на <b>MDN Web Docs</b> или <b>W3Schools</b>.</p>

<p>Чтобы добавить ссылку на MDN Web Docs на свой сайт, используйте следующий HTML-код:</p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'> <b>&#x1F44D; MDN Web Docs</b></a></p>

<p>Чтобы добавить ссылку на W3Schools на свой сайт, используйте следующий HTML-код:</p>

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Как MDN Web Docs, так и W3Schools предоставляют подробную документацию по HTML и связанным технологиям, а также интерактивные учебники и примеры. Студенты могут использовать эти ресурсы, чтобы углубить свои знания по HTML и улучшить свои навыки веб-разработки.</p>


















    </div>
  )
}

export default RuHtml_1;