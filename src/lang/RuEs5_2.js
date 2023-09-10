import React from 'react'

 function RuEs5_2() {
  return (
    <div>
    
    <h3>Циклы и условные конструкции в JavaScript</h3>
  
  <p><b>1. Цикл while</b></p>
  
  <p>Цикл while используется для многократного выполнения блока кода, пока указанное условие истинно.</p>

<p>Вот пример:</p>
  
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// инициализация переменной-счетчика</span></p> 

  <p><span className='blueviole'>while</span> (i {'<'}<span className='blue'> 5</span>) {'{'}<span className='darkgreen'> // задание условия</span></p>

  <p>{'console.log'}(<span className='blue'>i</span>); <span className='darkgreen'>// выполнение блока кода</span></p>

  <p>i++; <span className='darkgreen'>// обновление переменной-счетчика</span></p>

  <p>{'}'}</p>
</code>
 
  <p>
  В этом примере цикл будет работать, пока значение i будет меньше 5. Блок кода будет выполняться каждый раз, когда цикл запускается, и значение i будет увеличиваться на 1 до тех пор, пока не достигнет 5.
Результат выполнения этого кода будет:
  </p>
  <code>
    <p className='blue'>0</p>

    <p className='blue'>1</p>

    <p className='blue'>2</p>

    <p className='blue'>3</p>

    <p className='blue'>4</p>
</code>
  
  <p><b>2. Цикл for</b></p>
  
  <p>Цикл for используется для многократного выполнения блока кода определенное число раз.
Вот пример:</p>

<code>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> i = <span className='blue'>0</span>; i {'<'} <span className='blue'>5</span>; i++) {'{'} </p>

  <p>{'console.log(i);'}</p>

  <p>{'}'}</p>
 
</code>
 
  <p>
  В этом примере цикл будет выполняться 5 раз, так как условие определяет, что i должно быть меньше 5. Блок кода будет выполняться каждый раз, когда цикл запускается, и значение i будет увеличиваться на 1 каждый раз.
Результат выполнения этого кода будет таким же, как в предыдущем примере:
  </p>
  
  <code>
    <p className='blue'>0</p>

    <p className='blue'>1</p>

    <p className='blue'>2</p>

    <p className='blue'>3</p>

    <p className='blue'>4</p>
</code>
  
  <p><b>3. Цикл do-while</b></p>
  
  <p>
  Цикл do-while похож на цикл while, но выполняет блок кода по крайней мере один раз, даже если условие изначально ложно.
Вот пример:
  </p>
  
<code>
    <p><span className='blueviole'>var</span> i = <span className='blue'>0</span>; <span className='darkgreen'>// инициализируем переменную-счетчик</span></p>

    <p><span className='blueviole'>do</span> {'{'}</p>

    <p>{'console.log(i);'} <span className='darkgreen'>// выполняем блок кода</span></p>

    <p>i++; <span className='darkgreen'>// обновляем переменную-счетчик</span></p>

    <p>{'}'}</p>

    <p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>); <span className='darkgreen'>// устанавливаем условие</span></p>
</code>

  <p>
  В этом примере цикл выполнится хотя бы один раз, так как условие проверяется после выполнения блока кода. Блок кода будет выполняться каждый раз, когда цикл выполняется, а значение i будет увеличиваться на 1 каждый раз, пока не достигнет 5.
  Результат выполнения этого кода будет таким же, как и в предыдущих примерах:
  </p>
  
  <code>
    <p className='blue'>0</p>

    <p className='blue'>1</p>

    <p className='blue'>2</p>

    <p className='blue'>3</p>

    <p className='blue'>4</p>
</code>
  
  <p><b>4. Операторы ++ и --</b></p>
  
  <p>
  Операторы ++ и -- используются для увеличения или уменьшения переменной на 1.
  Вот несколько примеров:
  </p>

<code>

<p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// инициализируем переменную</span></p>

<p>i++; <span className='darkgreen'>// увеличиваем переменную на 1</span></p>

<p>{'console.log(i);'} <span className='darkgreen'>// вывод: 1</span></p>

<p><span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue'>2</span>; <span className='darkgreen'>// инициализируем другую переменную</span></p>

<p>j--; <span className='darkgreen'>// уменьшаем переменную на 1</span> </p>

<p>{'console.log(j);'} <span className='darkgreen'>// вывод: 1</span></p>

</code>
 
 <p>Эти операторы часто используются в циклах для отслеживания текущей итерации.</p>
  
  <p><b>5. Операторы if, else и else if</b></p>
  
  <p>
  Оператор if используется для выполнения блока кода, если заданное условие истинно. Оператор else используется для выполнения блока кода, если условие ложно. Оператор else if используется для проверки нескольких условий.
  Вот пример:
  </p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>15</span>; <span className='darkgreen'>// инициализируем переменную</span></p>

  <p><span className='blueviole'>if</span> (x {'>'} <span className='blue'>10</span>) {'{'} <span className='darkgreen'>// проверяем условие</span></p>

  <p>{'console.log'}(<span className='red'>"x больше 10"</span>)</p>

  <p>{'}'}</p>
</code>
  
  
  <h3>Оператор условного (тернарный) оператор</h3>

  <p>
Условный (тернарный) оператор - это сокращенный способ написания оператора if-else в JavaScript. Он принимает три операнда: условие, значение, которое будет возвращено, если условие истинно, и значение, которое будет возвращено, если условие ложно.
Синтаксис условного оператора: (условие) ? значение-истина : значение-ложь

Вот несколько примеров использования условного оператора в JavaScript:

</p>

<p><b>Пример 1:</b></p>

<code>  
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>5</span>;</p>

  <p><span className='blueviole'>var</span><span className='blue'> result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>

  <p>document.getElementById(<span className='red'>"example1"</span>).innerHTML = result;</p>
</code>

<p>
Вывод: true
Пояснение: В этом примере мы задаем значение переменной a равным 5, а затем используем условный оператор для проверки, равняется ли a 5. Поскольку это верно, возвращается значение "true", которое присваивается переменной result, которая затем выводится в элементе div HTML.
</p>

<p><b>Пример 2:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>

  <p>document.getElementById(<span className='red'>"example2"</span>).innerHTML = result;</p>
</code>

<p>
Вывод: false
Пояснение: В этом примере мы задаем значение переменной a равным 10, а затем используем условный оператор для проверки, равняется ли a 5. Поскольку это ложно, возвращается значение "false", которое присваивается переменной result, которая затем выводится в элементе div HTML.

</p>

<p><b>Пример 3:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>7</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = ( a {'>'} <span className='blue'>10</span>) ? <span className='red'>"greater than10"</span>: (a {'<'} <span className='blue'>5</span>) ? <span className='red'>"less than 5"</span> : <span className='red'>"between 5 and 10"</span> ;</p>

  <p>document.getElementById(<span className='red'>"example3"</span>).innerHTML = result;</p>
</code>

<p>
Вывод: between 5 and 10
Пояснение: В этом примере мы задаем значение переменной a равным 7, а затем используем условный оператор для проверки, больше ли a 10. Поскольку это ложно, мы переходим ко второму условию, которое проверяет, меньше ли a 5. Поскольку это также ложно, мы переходим к третьему условию, которое возвращает значение "between 5 and 10", поскольку оно является единственным возможным вариантом. Результат затем выводится в элементе div HTML.

</p>

    </div>
  )
}



export default RuEs5_2;



