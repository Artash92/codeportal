import React from 'react'

function RuEs5_10() {
  return (
    <div>
 
 <h1>Примеры JavaScript ES5</h1>

 <p><b>Функция для вычисления степени числа</b></p>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>     

<p><b>pow(num, exp)</b>: Эта функция вычисляет степень числа. Она принимает два параметра, num и exp, и возвращает значение num, возведенное в степень exp. Функция использует цикл while и счетчик, чтобы многократно умножать num на само себя exp раз, пока счетчик не достигнет значения exp.</p>

<p><b>Функция для вычисления степени числа (альтернативная версия)</b></p>


<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>

  <p>{'num3 *= num1;'}</p>

  <p>&nbsp;{'}'}</p>

  <p><span className='blueviole'>return</span> num3;</p>

  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: Эта функция вычисляет степень числа. Она принимает два параметра, num1 и num2, и возвращает значение num1, возведенное в степень num2. Функция использует цикл for для многократного умножения num1 на само себя num2 раз до завершения цикла.</p>

<p><b>Функция для проверки, является ли число простым</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 

  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 

  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 

  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 

  <p><span className='blueviole'>return</span> undefined;</p> 

  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>

   <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 

   <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>

   <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code> 

<p><b>isPrime(number)</b>: Эта функция проверяет, является ли число простым. Она принимает параметр number и возвращает true, если число простое, в противном случае она возвращает false. Функция сначала проверяет, меньше ли число 2, в таком случае она сразу же возвращает false. Если число не определено (undefined), она возвращает undefined. В противном случае функция использует цикл for для проверки, делится ли число на любое число между 2 и number (исключая number) без остатка. Если такое число найдено, функция возвращает false. Если такое число не найдено, функция возвращает true.</p>

<h4>Создание пирамиды с помощью звездочек в JavaScript</h4>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>

<p>Этот код создает пирамиду с использованием символов звездочки ('*') и пробелов.</p>

<p>Код начинается с определения переменной 'x' со значением 6 и пустой строки 'string'. Затем он использует цикл for для итерации по каждой строке пирамиды, начиная с 1 и до 'x'.</p>

<p>Внутри первого цикла for используется еще один цикл for для добавления пробелов перед звездочками. Он добавляет (x-i) количество пробелов перед каждой строкой звездочек.</p>

<p>Затем используется второй цикл for для добавления звездочек в строку. Количество звездочек, добавленных в каждой строке, задается формулой 2*i-1, где 'i' - текущий номер строки.</p>   

<p>Наконец, к каждой строке добавляется символ перевода строки, и готовая строка выводится в консоль с помощью метода console.log().</p>

<p><b>Создание узора пирамиды со звездами и цифрами</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
</code>

<p>Данный код создает узор из звездочек и чисел в форме пирамиды. Сначала определяется количество строк для пирамиды и символ, используемый в узоре (в данном случае - '*'). Затем используются вложенные циклы для создания каждой строки пирамиды, начиная с основания и добавляя по одному символу каждый раз, пока не достигнет вершины. Числа в узоре представлены цифрой '1'. Каждая строка пирамиды создается путем добавления соответствующего количества '1', за которыми следует символ и знак переноса строки. Символ, используемый для каждой строки, обновляется с помощью оператора конкатенации строк, добавляя дополнительную звездочку для каждой новой строки. Наконец, полученный узор выводится в консоль с помощью функции 'console.log'.</p>

<h3>JavaScript функции для генерации чисел Фибоначчи</h3>

<p><b>Пример</b></p>

  <code>
      <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>

      <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

      <p><span className='blueviole'>return</span> <span className='red'>'ERROR'</span>; </p>

      <p>{" } "}</p>

      <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

      <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

      <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

      <p>{" secondN = firstN + secondN; "}</p>

      <p>{"firstN = secondN - firstN; "}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>

      <p>fibo(<span className='blue'>55</span>);</p>
    </code>

<p><b>Пример</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"пиши только цифры"</span>);</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(num1);</p>

  <p>{" i = num1 + num2;"}</p>

  <p>{"num1 = num2;"}</p>

  <p>{"num2 = i;"}</p>

  <p>&nbsp;&nbsp;{" }"}</p>

  <p>&nbsp;{" }"}</p>

  <p>{"}"}</p>

  <p>fibonachi(<span className='blue'>100</span>);</p>
</code>
    
   <p><b>Пример</b></p>

   <code> 
      <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

      <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

      <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>for</span> (; a {'<'} n;) {"{"}</p>

      <p>{"console"}.<span className='blue'>log</span>(a)</p>

      <p>{"result = a + b;"}</p>

      <p>{"  a = b;"}</p>

      <p>{" b = result; "}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

      <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"пожалуйста напишите только цифры"</span>)</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>
   </code>

    <p>Это три различных реализации генератора последовательности Фибоначчи на JavaScript.</p>

    <p>Первая реализация (fibo) использует цикл while для генерации чисел Фибоначчи до заданного предела (num) и выводит их на экран с помощью console.log(). Сначала проверяется, является ли входное значение допустимым числом, и если нет, возвращается сообщение об ошибке.</p>

    <p>Вторая реализация (fibonachi) использует цикл for для генерации чисел Фибоначчи до заданного предела (num) и выводит их на экран с помощью console.log(). Сначала проверяется, является ли входное значение допустимым числом, и если нет, выводится сообщение об ошибке в консоль.</p>

    <p>Третья реализация (fibonachi) также использует цикл for для генерации чисел Фибоначчи до заданного предела (n) и выводит их на экран с помощью console.log(). Сначала проверяется, является ли входное значение допустимым числом, и если нет, выводится сообщение об ошибке в консоль. В этой реализации для генерации следующего числа Фибоначчи используются три переменные: a, b и result. Она начинается с a = 0 и b = 1, а на каждой итерации вычисляет сумму a и b, сохраняет результат в переменной result, устанавливает a равным b, а b равным result.</p>

    <h3>Шахматная доска на JavaScript</h3>

    <code>
    <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>

    <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"Invalid params"</span>);</p>

    <p> <span className='blueviole'>return</span>; </p>

    <p>{"}"}</p>

    <p>rows = rows || <span className='blue1'>8</span>;</p>

    <p> symbolOne = symbolOne ||<span className='red'> " ⬛"</span>;</p>
  
    <p>symbolTwo = symbolTwo || <span className='red'>" ⬜"</span>;</p>

    <p>currentRow = currentRow || <span className='blue1'>1</span>;</p>

    <p><span className='blueviole'>if</span> (currentRow {'>'} rows) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} rows / <span className='blue1'>2</span>; i++) {"{"}</p>

    <p>{"symbol += symbolOne + symbolTwo;"}</p>

    <p>{" }"}</p>

    <p>symbol += <span className='red'>"\n"</span>; </p>

    <p>symbol += chess(rows, symbolTwo, symbolOne, currentRow + <span className='blue1'>1</span>);</p>

    <p><span className='blueviole'>return</span> symbol;</p>
  
    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
  </code>  

  <p>Этот код определяет рекурсивную функцию "chess", которая принимает четыре параметра: "rows", "symbolOne", "symbolTwo" и "currentRow". Цель функции - создать строковое представление шахматной доски, чередуя два символа, "symbolOne" и "symbolTwo", для каждой клетки на доске.</p>

  <p>Функция сначала проверяет, являются ли входные параметры допустимыми, то есть является ли "rows" числом, а "symbolOne" и "symbolTwo" строками. Если какие-либо параметры недопустимы, функция возвращает сообщение об ошибке и выходит из функции.</p>
    
  <p>Затем устанавливаются значения по умолчанию для "rows", "symbolOne" и "symbolTwo", если они не были предоставлены. Значение по умолчанию для "rows" равно 8, а значение по умолчанию для "symbolOne" и "symbolTwo" - два символа Unicode, представляющих черный и белый квадраты соответственно.</p>

  <p>Затем функция проверяет, достиг ли она конца шахматной доски (то есть, "currentRow" больше "rows"). Если это так, она возвращает пустую строку и выходит из функции.</p> 

  <p>Если конец шахматной доски еще не достигнут, функция создает строку "symbol", добавляя поочередно "symbolOne" и "symbolTwo" "rows / 2" раз (поскольку каждая строка состоит из "rows / 2" пар символов).</p>

  <p>Затем она добавляет символ переноса строки к строке "symbol" и вызывает рекурсивно функцию "chess", меняя местами "symbolOne" и "symbolTwo" и увеличивая "currentRow" на 1.</p>  

  <p>Наконец, функция возвращает строку "symbol", которая содержит всю шахматную доску. Последняя строка кода вызывает функцию "chess" с "rows", установленным на 8, а "symbolOne" и "symbolTwo" установлены на символы Unicode, представляющие черный и белый квадраты соответственно, и выводит полученную шахматную доску в консоль.</p>



    </div>
  )
}

export default RuEs5_10;