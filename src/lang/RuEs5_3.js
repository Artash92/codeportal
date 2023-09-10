import React from 'react'

 function RuEs5_3() {
  return (
    <div>
    
    <h3>Концепция функции</h3>
      
      <p>Функция - это блок кода, который может быть определен и выполнен позднее. Она используется для выполнения определенной задачи и может быть вызвана из любой части программы, где она доступна. Функции делают код более организованным, переиспользуемым и понятным.</p>
      
      <h3>Создание функции</h3>
      
      <p>В JavaScript ES5 функцию можно создать с помощью ключевого слова "function", за которым следует имя функции и набор скобок. Внутри скобок мы можем определить один или несколько параметров, а внутри фигурных скобок мы определяем код, который будет выполнен при вызове функции.</p>
      
     <p> <b>Пример:</b></p>


<code>
    <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  

    <p><span className='blueviole'>return</span> a + b;</p>  

    <p>{'}'}</p>  
</code>

<p><b>Аргументы функции:</b></p>

<p>Аргументы функции - это значения, которые передаются в функцию при ее вызове. Мы можем определить один или несколько параметров внутри скобок при создании функции. При вызове функции мы передаем фактические значения в качестве аргументов.</p>

<p><b>Пример:</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  

  <p><span className='blueviole'>return</span> a + b;</p>  

  <p>{'}'}</p>  

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sum(<span className='blue'>5</span>, <span className='blue'>10</span>);</p>

  <p> <span className='darkgreen'>// Вывод: 15</span></p>
</code>

<p><b>Области видимости переменных:</b></p>

<p>Переменные могут иметь различные области видимости в зависимости от того, где они объявлены. Вот пример переменной, объявленной внутри функции, которая недоступна вне этой функции:</p>

<p><b>Пример:</b></p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>showMessage</span>() {'{'} </p>

  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>'Hello, World!'</span>;</p>

  <p>{"console.log(message);"}</p>

  <p>{"} "}</p>

  <p>showMessage(); <span className='darkgreen'>// Вывод: Hello, World!</span> </p>

  <p>{" console.log(message); "} <span className='darkgreen'>// Вывод: Uncaught ReferenceError: message is not defined</span></p>
</code> 
 
<p><b>Выражения функций:</b></p>

<p>Выражение функции - это функция, которая присваивается переменной. Вот пример:</p>
 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>multiply</span> = <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'}</p>

  <p><span className='blueviole'>return</span> a * b ;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blueviole'>result</span> = multiply(<span className='blue'>3</span>, <span className='blue'>4</span>);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// Вывод: 12</span></p>
</code>
 
<p><b>Анонимные функции:</b></p>

<p>Анонимная функция - это функция без имени. Вот пример анонимной функции, которая сразу же вызывается:</p>
 
<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, World!"</span>);</p>

  <p>{'})();'}</p>
 </code>
 
<p><b>Замыкания</b></p>

<p>Замыкания - это возможность JavaScript, позволяющая функции получать доступ и изменять переменные, находящиеся за пределами ее собственной области видимости. Другими словами, замыкание формируется, когда функция определена внутри другой функции и имеет доступ к переменным родительской функции.
Вот пример замыкания в JavaScript ES5:</p>
 

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>outerFunction</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>outerVariable</span> = <span className='red'>"I am outside!"</span>;</p>

  <p><span className='blueviole'>function</span> <span className='blue'>innerFunction</span>() {'{'}</p> 

  <p>{'console.log(outerVariable);'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return </span>innerFunction;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>closureExample</span> = outerFunction();</p>

  <p>closureExample(); <span className='darkgreen'>// Вывод: "I am outside!"</span></p>
</code>
 
<p>В этом примере функция outerFunction определяет переменную outerVariable и функцию innerFunction, которая выводит значение переменной outerVariable в консоль. Функция innerFunction возвращается из функции outerFunction и присваивается переменной closureExample.
Когда вызывается closureExample(), выводится значение переменной outerVariable, которое равно "I am outside!". Это возможно благодаря замыканию, которое позволяет функции innerFunction получить доступ к переменной outerVariable через замыкание, несмотря на то, что outerVariable не определена внутри функции innerFunction.

Это всего лишь простой пример замыканий в JavaScript ES5, но он демонстрирует, насколько они мощны и полезны. Замыкания часто используются для создания закрытых переменных и методов в JavaScript, а также для других целей. </p>

    </div>
  )
}



export default RuEs5_3;



