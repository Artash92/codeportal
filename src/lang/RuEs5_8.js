import React from 'react'

 function RuEs5_8() {
  return (
    <div>
    <h4>Объект Date</h4>

<p>В JavaScript объект Date используется для работы с датами и временем. Он позволяет создавать, изменять и форматировать даты и время в различных форматах. Объект Date представляет собой один момент времени и по умолчанию инициализируется текущей датой и временем.</p>

<p>Вот несколько примеров использования объекта Date в JavaScript:</p>

<p>1. Создание объекта Date с определенной датой и временем:</p>

    <code>
       <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(<span className='blue'>2022, 0, 1, 12, 0, 0</span>);</p>

      <p>{'console.log(date);'} <span className='green'>// Sat Jan 01 2022 12:00:00 GMT+0200 (Eastern European Standard Time</span>)</p>
    </code>

<p>В этом примере создается новый объект Date с заданным годом (2022), месяцем (0 для января), днем (1), часом (12), минутой (0) и секундой (0). Результат показывает полученную дату и время в удобочитаемом формате.</p>

<p>2. Создание объекта Date с текущей датой и временем:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(); </p>

  <p>{'console.log(date);'}<span className='green'>// Sat Mar 27 2023 13:28:17 GMT+0200 (Eastern European Standard Time)</span></p>
</code>


<p>В этом примере создается новый объект Date с текущей датой и временем. Вывод показывает полученную дату и время в удобочитаемом формате.</p>

<p>3. Получение текущего года, месяца и дня:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>year</span> = date.getFullYear();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>month</span> = date.getMonth();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>day</span> = date.getDate();</p>

  <p>{'console.log'}(year + <span className='red'>"-"</span> + month + <span className='red'>"-"</span> + day); <span className='green'></span></p>
</code>

<p>В этом примере создается новый объект Date с текущей датой и временем. Затем используются методы getFullYear(), getMonth() и getDate() для извлечения года, месяца (где 0 представляет январь) и дня из объекта Date. Вывод показывает полученную дату в отформатированной строке.</p>

<p>4. Преобразование даты в строку:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>dateString</span> = date.toDateString(); </p>

  <p>{'console.log'}(dateString); <span className='green'>// Sat May 30 2023</span></p>
</code>

<p>В этом примере создается новый объект Date с текущей датой и временем. Затем используется метод toDateString() для преобразования даты в строку в удобочитаемом формате. Вывод показывает полученное строковое представление даты.</p>

<p>Это всего лишь несколько примеров того, как можно использовать объект Date в JavaScript для работы с датами и временем.</p>

<p><b>Ошибка - объект</b></p>

<p>В JavaScript объект Error используется для представления ошибок времени выполнения. Когда происходит ошибка в программе, JavaScript генерирует объект Error и выбрасывает его. Объект Error содержит информацию об ошибке, такую как сообщение об ошибке и имя ошибки.</p>

<p>Вот пример использования блока try-catch для перехвата ошибки ReferenceError:</p>

<code>
  <p><span className='blueviole'>try </span>{'{'}</p>

  <p>{'console.log(variable);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span>(<span className='blue'>err</span>) {'{'}</p>

  <p>{'console.log(err);'} <span className='green'>//ReferenceError: variable is not defined</span></p>

  <p>{'console.log(err.name);'} <span className='green'>//ReferenceError</span></p>

  <p>{' console.log(err.message);'} <span className='green'>//variable is not defined</span></p>

  <p>{'}'}</p>
</code>

<p>В этом примере блок try пытается записать в лог переменную, которая не была определена, что приводит к возникновению ошибки ReferenceError. Блок catch перехватывает ошибку и записывает объект ошибки в лог, а также выводит его свойства name и message.</p>

<p>Вот еще один пример использования блока try-catch для выбрасывания собственного объекта ошибки Error:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue'>0</span>; </p>

  <p><span className='blueviole'>try</span> {'{'}</p>

  <p><span className='blueviole'>if</span> (num2 == <span className='blue'>0</span>) {'{'}</p>

  <p><span className='blueviole'>throw new</span> Error(<span className='red'>"Нельзя делить на ноль."</span>);</p>

  <p>{'}'}</p>

  <p>{'console.log(num1 / num2);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span> (<span className='blue'>err</span>) {'{'}</p>

  <p>{' console.log'}(err.name, <span className='red'>" : "</span>, err.message) ; </p>

  <p>{'}'}</p>
</code>

<p>В этом примере блок try пытается разделить num1 на num2. Если num2 равен нулю, выбрасывается новый объект Error с пользовательским сообщением об ошибке. Блок catch перехватывает ошибку и записывает объект ошибки в лог, а также выводит его свойства name и message.</p>

<p>Использование объектов Error и блоков try-catch является важной частью обработки ошибок времени выполнения в программах JavaScript. Это позволяет разработчикам элегантно обрабатывать ошибки и предоставлять полезную обратную связь пользователям.</p>


    </div>
  )
}



export default RuEs5_8;



