import React from 'react'

 function RuEs5_1() {
  return (
    <div className=''>
   
    <h1>JavaScript</h1>
<p>JavaScript был создан в 1995 году Бренданом Айком во время его работы в компании Netscape Communications Corporation. Язык изначально назывался Mocha, но позже был переименован в LiveScript, а затем окончательно в JavaScript. Переименование было связано главным образом с маркетинговыми причинами и для того, чтобы воспользоваться популярностью Java в то время. Брендан Айк - американский технолог и программист, который работал в компаниях Mozilla, Netscape и Brave Software. Он считается создателем JavaScript и внес значительный вклад в развитие других языков программирования.</p>

<h3>ECMAScript определяет 7 типов данных:</h3>

<code>
  <ul>
    <li><span className='blue'>Number</span>: представляет числовые значения, включая целые и числа с плавающей запятой. Пример: <span className='blue'>1, 3.14, -42</span>.</li>
  
    <li><span className='blue'>String</span>: представляет текстовые данные, заключенные в одинарные или двойные кавычки. Пример: <span className='red'>"hello", 'world', "123"</span>.</li>
  
    <li><span className='blue'>Boolean</span>: представляет логическую сущность и может иметь только два значения: true или false. Пример: <span className='blue'> true, false</span>.</li>
  
    <li><span className='blue'>Undefined</span>: представляет переменную, которая была объявлена, но не была присвоена значением. Пример: <span className='blueviole'>var</span> <span className='blue'>x</span>; console.log(x); <span className='darkgreen'>// Вывод: undefined</span></li>
  
    <li><span className='blue'>Null</span>: представляет намеренное отсутствие любого объектного значения. Примеры: <span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blueviole'>null</span>; console.log(x); <span className='darkgreen'>//  Вывод: null</span></li>
  
    <li><span className='blue'>Symbol</span>: представляет уникальный идентификатор, который не доступен для вызывающего кода. Пример: <span className='blueviole'>const</span> <span className='blue'>sym1</span> = Symbol(<span className='red'>'foo'</span>);</li>
  
    <li><span className='blue'>Object</span>: представляет собой совокупность связанных данных и/или функциональности. Пример: <span className='blueviole'>var</span> <span className='blue'>obj</span> = {'{'} name: <span className='red'>"John"</span>, age: <span className='blue'>30</span> {'}'}; <span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3</span>];</li>
  </ul>
</code>

<h2>Тип данных Boolean</h2>

<p>Тип данных Boolean имеет только два значения: true и false. Он часто используется в операциях сравнения с использованием следующих операторов:</p>

<code>
<ul>
      <li>=== и ==</li>
      <li>{'>'} и {'<='}</li>
      <li>{'>='} и {'<='}</li>
</ul>
</code>
      
      <p>Примеры:</p>
      
      <code>
      <ul>
        <li><span className='blue'>10</span> {'<'} <span className='blue'>16</span> == <span className='blue'>true</span></li>
        
        <li><span className='blue'>10</span> {'>'} <span className='blue'>16</span> == <span className='blue'>false</span></li>
      </ul>
   </code>
     
      <h2>Логические операторы</h2>
     
    <code>
    <ul>
        <li>NOT (!)</li>
        <li>AND (&&)</li>
        <li>OR (||)</li>
      </ul>
    </code>
      
      <p>При вычислении условий используется логический тип данных. Следующие значения преобразуются в false: 0 и пустая строка. Следующие значения преобразуются в true: все остальные числа и непустые строки.</p>
      
      <h3>Примеры:</h3>
      
      <code>
 <p><span className='blue'>5</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>6</span> && <span className='blue'>0 </span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='blue'>true</span> && <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>5</span> || <span className='blue'>6</span> <span className='darkgreen'>// 5</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>6</span> || <span className='blue'>7</span> <span className='darkgreen'> // 6</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'> // false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>50</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>10</span> && <span className='blue'>0</span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='red'>'Hello'</span> && <span className='red'>'World'</span> <span className='darkgreen'>// "World"</span></p>
  
  <p><span className='red'>'Hello'</span> && <span className='red'>''</span> <span className='darkgreen'>// ''</span></p>
  
  <p>!<span className='blue'>true</span> <span className='darkgreen'>// false</span></p>
 
 </code>
  
  <h3>Выражения и операторы</h3>
  
  <p>Это примеры выражений и операторов в JavaScript. Выражение - это комбинация значений, переменных, операторов, которые могут быть вычислены в некоторое значение. Выражения могут использоваться в других выражениях или в операторах.</p>

  <p>Операторы, такие как *, + и т.д., используются для создания выражений. Первые три строки показывают примеры выражений с разными типами данных: числами, строками и логическими значениями.</p>

  <p>Операторы могут использоваться в виде операторных выражений, которые являются частью операторов. Следующие три строки показывают примеры операторных выражений, которые являются операторами.</p>
  
  <p>Каждое операторное выражение заканчивается оператором (;), что делает его оператором.</p>
<ul>
    
    <li><strong className='blue'>Выражение:</strong> <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span></li>
    
    <li><strong className='blue'>Выражение:</strong> <span className='red'>"Привет, всем!"</span></li>
    
    <li><strong className='blue'>Выражение:</strong> <span className='blue'>false</span></li>
    
    <li><strong className='blue'>Операторная инструкция:</strong> <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span>;</li>
    
    <li><strong className='blue'>Операторная инструкция:</strong> <span className='red'>"Привет, всем!"</span>;</li>
    
    <li><strong className='blue'>Операторная инструкция:</strong> <span className='blue'>false</span>;</li>
  
  </ul>
  
  <h2>Особые значения и функции JavaScript</h2>
  
  <h5>NaN</h5>
  
  <p>NaN означает "Не число" и является специальным значением в JavaScript, которое представляет неопределенное или непредставимое значение, полученное в результате арифметической операции. Например, деление нуля на ноль приведет к NaN.</p>
  
  <h5>typeof</h5>
  
  <p>typeof - это унарный оператор в JavaScript, который возвращает строку, указывающую тип данных операнда. Например, typeof "привет" вернет "строка", а typeof 42 вернет "число".</p>
  
  <h5>isNaN()</h5>
  
  <p>isNaN() - это глобальная функция в JavaScript, которая возвращает true, если аргумент является NaN (Не число), и false в противном случае. Например, isNaN("привет") вернет true, а isNaN(42) вернет false.</p>
  
  <h5>isFinite()</h5>
  
  <p>isFinite() - это глобальная функция в JavaScript, которая возвращает true, если аргумент является конечным числом, и false в противном случае. Например, isFinite(42) вернет true, а isFinite(Infinity) вернет false.</p>
  
  <h2>Переменные</h2>
  
<ul>
  
  <li>Объявление переменных (a-A, $, _)</li>
  
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>имяСтудента</span>;</code></li>
    
    <li><code><span className='blueviole'>var</span> <span className='blue'>имя, фамилия, возраст</span>;</code></li>
  </ul>
  
  <li>Объявление и присваивание переменных</li>
  
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>модельАвтомобиля</span> = <span className='red'>"Tesla"</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>модельАвтомобиля</span> = <span className='red'>"Tesla"</span>, <span className='blue'>год</span> = <span className='blue'>2022</span>, <span className='blue'>электрический</span> = <span className='blue'>true</span>;</code></li>
  </ul>
  
  <li>Использование переменных</li>
  
  <ul>
    
    <li><code><span className='blueviole'>var</span> <span className='blue'>количество</span> = <span className='blue'>5</span>;</code></li>
    
    <li><code>количество = количество + <span className='blue'>3</span>;</code></li>
    
    <li><code>количество += <span className='blue'>2</span>;</code></li>
  </ul>
  
  </ul>
  
  <h2>Null и Undefined</h2>
  
  <ul>
    <li>Null - это специальное значение в JavaScript, которое представляет отсутствие объектного значения. Это примитивное значение и означает намеренный невыполненный или пустой результат. Он часто используется для указания на то, что переменная не имеет значения или что функция не возвращает значение.</li>
    <li>Undefined - это значение, которое может иметь переменная, если ей не было присвоено значение или если ей было явно присвоено значение undefined. Он также является примитивным значением в JavaScript.</li>
    <li>Оператор typeof используется для определения типа значения. Если значение равно undefined, typeof возвращает строку "undefined". Если значение равно null, typeof возвращает строку "object". Это известная ошибка в JavaScript, которая существует с момента создания языка.</li>
    <li>Null и undefined часто путаются между собой, потому что они оба представляют отсутствие значения. Однако они не являются одним и тем же. Null представляет намеренное отсутствие значения, тогда как undefined представляет случайное отсутствие значения.</li>
    <li>Оператор == в JavaScript выполняет приведение типов, что означает, что он попытается преобразовать значения разных типов к общему типу перед сравнением. При сравнении null и undefined с == результат будет true, потому что они оба считаются ложными значениями.</li>
    <li>Оператор === в JavaScript выполняет строгое сравнение без приведения типов. При сравнении null и undefined с === результат будет false, потому что они не являются одним и тем же типом значения.</li>
    <li>Функции parseInt, parseFloat и Number используются для преобразования строки в число. При передаче значения null, все три функции возвращают NaN, что означает "не число". Это происходит потому, что null не является допустимым числом и не может быть преобразован в число.</li>
  </ul>
    </div>
  )
}



export default RuEs5_1;



