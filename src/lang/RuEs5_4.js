import React from 'react'

 function RuEs5_4() {
  return (
    <div>
    <h3>Рекурсия</h3>

<p>Рекурсия — это техника программирования, при которой функция вызывает сама себя до тех пор, пока не достигнет базового случая. Она часто используется для решения задач, которые можно разбить на более мелкие, похожие подзадачи.</p>

<p>В JavaScript ES5 рекурсия может использоваться для обхода дерева или вложенной структуры, выполнения определенных вычислений или генерации всех возможных комбинаций набора элементов.</p>

<p>Вот пример функции, которая использует рекурсию для вычисления факториала заданного числа:</p>

 
    <code>
      <p> <span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

      <p><span className='blueviole'>if</span> (num {'<='}<span className='blue'> 1</span>) {'{'}</p>

      <p><span className='blueviole'>return</span> <span className='blue'>1</span>;</p>

      <p>{'}'}<span className='blueviole'> else</span> {'{'}</p>

      <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

      <p>{' }'}</p>

      <p>{'}'}</p>

      <p>{'console.log'}(factorial(<span className='blue'>5</span>)); <span className='darkgreen'>// Вывод: 120</span></p>
 </code>

<p>В этом примере функция factorial() вызывает сама себя с меньшим числом до тех пор, пока не достигнет базового случая num {'<='} 1, после чего возвращает 1. Конечный результат вычисляется путем умножения всех возвращенных значений друг на друга.</p>

<p>Важно отметить, что рекурсия может быть памятьоемкой, особенно для больших входных данных, поэтому важно тщательно проектировать ваши рекурсивные функции и обеспечивать наличие базового случая, чтобы избежать бесконечных циклов.</p>

<p><b>Пример</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

  <p><span className='blueviole'>if</span> (num === <span className='blue'>0</span> || num === <span className='blue'>1</span>) {'{'} </p>

  <p><span className='blueviole'>return</span> <span className='blue'>1</span>; </p>

  <p>{'}'} <span className='blueviole'>else</span> {'{'} </p>

  <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

  <p> {'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = factorial(<span className='blue'>5</span>);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// Вывод: 120</span></p>
</code>


<p>
В обновленном примере мы определили функцию факториала, которая принимает один параметр num. Функция сначала проверяет, равен ли заданный номер 0 или 1, в этом случае она немедленно возвращает 1. В противном случае она рекурсивно вычисляет факториал числа, вызывая ту же функцию factorial с уменьшенным значением num и умножая его на текущее значение num.
Когда мы вызываем функцию факториала с аргументом 5, она рекурсивно вычисляет факториал, вызывая себя с уменьшающимися значениями, пока не достигнет базового случая num === 1, после чего она возвращает 1, и рекурсия развертывается, возвращая конечный результат 5 * 4 * 3 * 2 * 1 = 120.

</p>

<h3>Объект</h3>

<p>
Объект - это структура данных в JavaScript, которая позволяет хранить связанные данные и функциональность. Это ключевое понятие в JavaScript и широко используется во всем языке. Объекты определяются с помощью фигурных скобок {} и состоят из пар ключ-значение, где ключ - это строка, а значение может быть любым типом данных, включая другие объекты или функции.
Объекты используются в JavaScript для широкого спектра целей, включая создание сложных структур данных, организацию кода и предоставление способа инкапсуляции связанных данных и поведения. Они являются важной частью объектно-ориентированного программирования в JavaScript и являются фундаментальным строительным блоком для многих продвинутых функций и библиотек языка.

</p>

<p><b>Пример</b></p>

<p className='darkgreen'>// Создание объекта</p>

<code>

  <p><span className='blueviole'>var</span> car = {'{'} </p>

  <p>make: <span className='red'>"Toyota"</span>,</p>

  <p> model: <span className='red'>"Camry"</span>,</p>

  <p>year: <span className='blue'>2021</span>,</p>

  <p> start: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"Запуск автомобиля..."</span>);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='darkgreen'>// Доступ к свойствам объекта</span></p>

  <p>{'console.log(car.make);'} <span className='darkgreen'>// Toyota</span></p>

  <p>{'console.log(car.year);'}<span className='darkgreen'> // 2021</span> </p>

  <p><span className='darkgreen'>// Вызов методов объекта</span></p>

  <p>{'car.start(); '}<span className='darkgreen'>// Запуск автомобиля...</span></p>

 </code>
 
<p><b>Свойства объекта</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>person</span> = {'{'} </p>

  <p> name: <span className='red'>"John"</span>,</p>

  <p>age: <span className='blue'>30</span>,</p>

  <p>gender: <span className='red'>"male"</span></p>

  <p>{'};'}</p>

  <p>person.email = <span className='red'>"john@example.com"</span>;</p>

  <p>{'console.log(person.name);'} <span className='darkgreen'>// John</span></p>

  <p>{'console.log(person.email);'} <span className='darkgreen'>// john@example.com</span></p>
</code>


<p><b>Методы объекта</b></p>

<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>calculator</span> = {'{'}</p>

<p>add: <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'} </p>

<p> <span className='blueviole'>return</span> a + b; {'}'},</p>

<p>subtract: <span className='blueviole'>function</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'} </p>

<p><span className='blueviole'>return</span> a - b;</p>

<p>{'}'}</p>

<p>{'};'}</p>

<p>{'console.log'}(calculator.add(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 8</span></p>

<p>{'console.log'}(calculator.subtract(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 2</span></p>

</code>
 
<p><b>Объектно-ориентированный тип - массив</b></p>


<p className='darkgreen'>// Создание массива</p>

<code>

<p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>]; <span className='darkgreen'>// Доступ к элементам массива</span></p>

<p>{'console.log'}(colors[<span className='blue'>0</span>]); <span className='darkgreen'>// red</span></p>

<p>{'console.log'}(colors[<span className='blue'>2</span>]); <span className='darkgreen'>// blue</span></p>

<p><span className='darkgreen'>// Добавление нового элемента в массив </span></p>

<p>{'colors.push'}(<span className='red'>"yellow"</span>); </p>

<p><span className='darkgreen'>// Перебор массива</span></p>

<p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} colors.length; i++) {'{'}</p>

<p>{' console.log(colors[i]);'}</p>

<p>{'}'}</p>

</code>

<p><b>Свойства и методы функции</b></p>


<code>
  <p><span className='blueviole'>function</span> <span className='blue'>greeting</span>(<span className='blue'>name</span>) {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello "</span> + name);</p>

  <p>{'}'}</p>

  <p>{'console.log(greeting.length);'} <span className='darkgreen'>// 1 (количество ожидаемых аргументов)</span></p>

  <p><span className='darkgreen'>// Добавление нового свойства в функцию</span></p>

  <p>greeting.language = <span className='red'>"English"</span>;</p>

  <p><span className='darkgreen'>// Доступ к свойствам функции</span></p>

  <p>{'console.log(greeting.language);'} <span className='darkgreen'>// English</span></p>

  <p><span className='darkgreen'>// Вызов функции greeting("John"); // Hello John</span></p>
</code>

<h3>this</h3>

<p>
В JavaScript ES5, this - это ключевое слово, которое относится к текущему объекту или 
контексту, в котором выполняется код. Оно может ссылаться на различные объекты в зависимости от того, 
как и где оно используется.  
</p>

<p>Когда this используется внутри функции, которая вызывается как метод объекта, оно относится к самому объекту. Например:</p>
    
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>myObject</span> = {'{'}</p>

  <p>name: <span className='red'>"John"</span>,</p>

  <p>sayHello: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{' }'}</p>

  <p>{'};'}</p>

  <p>{'myObject.sayHello();'} <span className='darkgreen'>// Вывод: "Hello, my name is John"</span></p>
</code>

<p>В этом примере this относится к объекту myObject, потому что sayHello() вызывается как метод myObject.</p>
    
 <p>Однако, когда this используется внутри обычной функции (то есть не вызывается как метод объекта), по умолчанию оно относится к глобальному объекту (window в браузере или global в Node.js). Например:</p>   
 

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sayHello</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>name</span> = <span className='red'>"John"</span>;</p>

  <p>{'sayHello();'} <span className='darkgreen'>// Вывод: "Hello, my name is undefined"</span></p>
</code>

<p>
В этом случае, ключевое слово this ссылается на глобальный объект, потому что sayHello() не вызывается как метод объекта. Поскольку у глобального объекта нет свойства name, this.name равно undefined.
Важно отметить, что значение this можно явно установить, используя методы, такие как call(), apply() и bind(). Эти методы позволяют вызывать функцию с определенным значением this, независимо от того, как она была вызвана.

</p>

<h3>Функция как объект</h3>

 <code>
  <p><span className='blueviole'>var</span> <span className='blue'>user</span> = {'{'}</p>

  <p>name: <span className='red'>"John"</span>,</p>

  <p>age:<span className='blue'>20</span></p>

  <p>{'};'}</p>

  <p><span className='blueviole'>function </span><span className='blue'> foo</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'}</p>

  <p>{'console.log'}(<span className='blueviole'>this</span>.name);</p>

  <p>{'console.log(a + b);'}</p>

  <p>{'}'}</p>

  <p><span className='darkgreen'>// Использование метода call для установки 'this' на объект user foo.call(user, 3, 5);</span></p>

  <p><span className='darkgreen'>//Доступ к свойству length функции console.log(foo.length);</span></p>
</code>


<h3>Аргументы объекта</h3>

<p>Объект arguments - это локальная переменная, которая доступна во всех функциях. Он содержит список аргументов, переданных в функцию, похожий на массив.

Вот пример использования объекта arguments:</p>

<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>sum</span>() {'{'} </p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span><span className='blue'> i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'} </p>

  <p>{'result += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> result;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>total</span> = sum(<span className='blue'>1, 2, 3, 4</span>);</p>

  <p>{'console.log(total);'} <span className='darkgreen'>// Вывод: 10</span></p>
</code>

<p>
В приведенном выше примере функция sum принимает любое количество аргументов, и объект arguments используется для перебора каждого аргумента и их суммирования. Функция затем возвращает общую сумму.
</p>

<p>Еще один пример использования объекта arguments - создание функции, которая объединяет все переданные аргументы вместе.</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>concatenate</span>() {'{'}</p>

  <p> <span className='blueviole'>var </span><span className='blue'>result</span> = <span className='red'>" "</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'}</p>

  <p>{'result += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> result;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = concatenate(<span className='red'>"Hello", " ", "world", "!"</span>); </p>

  <p>{'console.log(str);'}<span className='darkgreen'>// Вывод: "Hello world!"</span></p>
</code>

<p>
В этом примере функция concatenate принимает любое количество аргументов и объединяет их в одну строку, которая возвращается.
</p>

 </div>
  )
}



export default RuEs5_4;



