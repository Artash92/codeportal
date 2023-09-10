import React from 'react'

 function RuEs5_6() {

  return (

<div>

    <h3>Глобальный объект в JavaScript</h3>

<p>
Глобальный объект в JavaScript - это встроенный объект, который доступен везде в коде. Он предоставляет свойства и методы, используемые различными частями языка, и может также быть расширен с помощью пользовательских функций.
</p>

<div>

    <p>Некоторые из свойств и методов глобального объекта в JavaScript:</p>

    <p><span className='blue'>1.</span>Infinity - представляет математическое значение бесконечности</p>

    <p><span className='chocolate'>Пример:</span> console.log(Infinity);</p>

    <p><span className='blue'>2.</span> NaN - представляет значение "не число".</p>

    <p><span className='chocolate'>Пример:</span> console.log(NaN);</p>

    <p><span className='blue'>3.</span> console - предоставляет методы для записи информации в консоль.</p>

    <p><span className='chocolate'>Пример:</span> console.log('Привет, мир!');</p>

    <p><span className='blue'>4.</span> parseInt() - преобразует строку в целое число.</p>

    <p><span className='chocolate'>Пример:</span> console.log(parseInt('10'));</p>

    <p><span className='blue'>5.</span> parseFloat() - преобразует строку в число с плавающей точкой.</p>

    <p><span className='chocolate'>Пример:</span> console.log(parseFloat('3.14'));</p>

    <p><span className='blue'>6.</span> encodeURIComponent() - кодирует компонент URI.</p>

    <p><span className='blue'>7.</span>Date - предоставляет методы для работы с датами и временем.</p>

    <p><span className='chocolate'>Пример:</span> console.log(new Date());</p>

    <p><span className='blue'>8.</span> Math - предоставляет математические функции и константы.</p>

    <p><span className='chocolate'>Пример:</span> console.log(Math.PI);</p>

</div>

<p>
Методы глобального объекта могут быть вызваны откуда угодно в коде, без необходимости создавать экземпляр объекта. Однако необходимо быть осторожным при расширении глобального объекта с помощью пользовательских методов, так как они могут потенциально конфликтовать с встроенными методами или другими пользовательскими методами. 
</p>

<p>
Важно отметить, что в современных средах JavaScript глобальный объект не всегда доступен во всех контекстах, таких как код на основе модулей или в строгом режиме.
</p>

<h3>Работа со строками в JavaScript ES5</h3>

<p>
В JavaScript ES5 строка представляет собой последовательность символов и может быть обработана с помощью различных методов. Два метода для извлечения подстрок из строки - это slice() и substring().
</p>

<p>
Метод slice() извлекает секцию строки и возвращает ее в виде новой строки, не изменяя исходную строку. Он принимает два параметра: начальный индекс и конечный индекс (необязательный). Если конечный индекс не предоставлен, метод извлечет до конца строки. Если начальный индекс отрицательный, он считает с конца строки.
</p>

<p>
Метод substring() похож на slice(), но не принимает отрицательные индексы. Если начальный индекс больше конечного индекса, два индекса меняются местами, чтобы избежать ошибки.
</p>

<p>Вот несколько примеров</p>

<p><span className='darkgreen'>// Получение подстроки "is"</span></p>

<code>
    <p>str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>

    <p>str.substring(<span className='blue'>5</span>,<span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
</code>
 
<p><span className='darkgreen'>// Получение подстроки "is"</span></p>
<code>
    <p>{'console.log'}(str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

    <p><span className='darkgreen'>// Получение подстроки  "is my text"</span></p>

    <p>{'console.log'}(str.slice(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>
    </code>
 


<p><span className='darkgreen'>// Получение подстроки " "</span></p>
 <code>
    <p>{'console.log'}(str.slice(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//"is"</span> </p>
</code>

 
 
 <p> <span className='darkgreen'>// Получение подстроки  "my"</span></p>
<code>
    <p>{'console.log'}(str.slice(-<span className='blue'>7</span>, -<span className='blue'>5</span>)); <span className='darkgreen'> //"my"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>7</span>,<span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
   </code>


<p>В приведенных выше примерах функции slice() и substring() используются для извлечения подстрок из переменной str. В первом примере извлекается подстрока "is", а во втором примере - "is my text". Третий и четвертый примеры показывают, как функции slice() и substring() обрабатывают случаи, когда индексы выходят за границы строки. Наконец, пятый пример показывает, как функция slice() может использоваться с отрицательными индексами для извлечения подстроки с конца строки.</p>

<h3>Тема: "Поиск подстроки" в JavaScript ES5.</h3>

<p>В JavaScript можно искать определенную подстроку в строке с помощью различных методов. Вот некоторые из наиболее распространенных:</p>

<p>1. Тема: "Поиск подстроки" в JavaScript ES5.
В JavaScript можно искать определенную подстроку в строке с помощью различных методов. Вот некоторые из наиболее распространенных:</p>

<p>indexOf(substring, start): Этот метод ищет подстроку в строке и возвращает индекс первого вхождения подстроки. Вы также можете указать начальную позицию поиска, передав необязательный параметр start. Если подстрока не найдена, возвращается -1.</p>

<p><b>Пример</b></p>

<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Привет, мир"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.indexOf(<span className='red'>"мир"</span>);</p>

  <p>{'console.log(index);'} <span className='darkgreen'>// 8</span></p>

 </code>

<p>2. lastIndexOf(substring, end): Этот метод работает так же, как и indexOf, но ищет последнее вхождение подстроки в строку, ища задом наперед от конца строки. Вы также можете указать конечную позицию поиска, передав необязательный параметр end.</p>

<p><b>Пример</b></p>

<code>
<p><span className='blueviole'>var</span><span className='blue'> message</span> = <span className='red'>"Привет, мир, привет!"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.lastIndexOf(<span className='red'>"привет"</span>);</p>

<p>{'console.log(index);'}<span className='darkgreen'> // 13</span></p>
</code>

<p>Обратите внимание, что регистр подстроки имеет значение при использовании этих методов. Например, поиск "мир" в строке "Привет, мир" не найдет подстроку, так как она написана с заглавной буквы.</p>

<p>3.includes(substring): Этот метод проверяет, присутствует ли заданная подстрока в строке, и возвращает логическое значение, указывающее на результат.</p>

  <p><b>Пример</b></p>

    <code>
    <p><span className='blueviole'>var</span> <span className='blue'>found</span> = message.includes(<span className='red'>"мир"</span>);</p>

    <p>{'console.log(found);'} <span className='darkgreen'>// true</span></p>
  </code>
 
<p>4. search(regex): Этот метод ищет регулярное выражение в строке и возвращает индекс первого совпадения. Если совпадение не найдено, он возвращает -1.</p>
   
<p><b>Пример</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Привет мир, привет!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.search(<span className='red'>/привет/i</span>);<span className='darkgreen'> //флаг "i" делает поиск без учета регистра</span></p>

  <p>{'console.log(index);'}<span className='darkgreen'> // 0</span></p>
</code>

<p>В вашем примере переменная str содержит строку "This is my text". Следующие строки кода демонстрируют использование методов поиска строк, описанных выше:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"This is my text"</span>;</p>

  <p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//2</span></p>

  <p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>, <span className='blue'>3</span>));<span className='darkgreen'> //5</span></p>

  <p>{'console.log'}(str.lastIndexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//5</span></p>

  <p>{'console.log'} (str.lastIndexOf(<span className='red'>"is"</span>, <span className='blue'>4</span>)); <span className='darkgreen'>//2</span></p>

  <p>{'console.log'}(str.indexOf(<span className='red'>"some"</span>)); <span className='darkgreen'>//-1</span></p>
</code>
 

<p>Эти строки кода ищут подстроки "is" и "some" в строке str и возвращают их индексы, используя методы indexOf и lastIndexOf. Второй параметр indexOf указывает начальную позицию поиска, а второй параметр lastIndexOf указывает конечную позицию поиска.</p>

<h3>RegEx</h3>  

<p>RegExp - это встроенный объект, который предоставляет способ создания регулярных выражений. Регулярные выражения - это шаблоны, используемые для сопоставления комбинаций символов в строках.</p>

<p><b>Вот пример создания объекта регулярного выражения с использованием конструктора:</b></p>

<code>
    <p> <span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>"some", "long"</span>);</p>
</code>
 
 
<p>Здесь some является флагом регулярного выражения, а long - необязательным флагом, который изменяет поведение регулярного выражения.</p>

<p>Вот пример использования метода test() объекта RegExp для проверки, соответствует ли строка регулярному выражению:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" The quick brown fox jumps over the lazy dog "</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = regex.test(str);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// true </span></p>
</code>

<p>В этом примере /fox/i - это шаблон регулярного выражения, который соответствует слову "fox" без учета регистра. Метод test() возвращает логическое значение, указывающее, соответствует ли шаблон регулярного выражения строке str.</p>

<p>Вот еще один пример использования метода match() объекта String с регулярным выражением для извлечения соответствующих значений:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" The quick brown fox jumps over the lazy dog "</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>

  <p><span className='blueviole'>var</span><span className='blue'> result</span>  = str.match(regex);</p>

  <p>{'console.log(result);'} <span className='darkgreen'> // <span>[</span>"fox"<span>]</span></span></p>
 </code> 

<p>В этом примере метод match() возвращает массив, содержащий найденную подстроку(и), если шаблон регулярного выражения найден в строке.</p>

<b>А вот некоторые часто используемые специальные символы в регулярных выражениях:</b>

<p>.- Соответствует любому символу, кроме перевода строки \n</p>

<p>\w - Соответствует любому ASCII-символу слова [a-zA-Z0-9_]</p>

<p>\W - Соответствует любому не-ASCII-символу слова [^a-zA-Z0-9_]</p>

<p>\d - Соответствует любой ASCII-цифре [0-9]</p>

<p>\D - Соответствует любому не-цифровому символу [^0-9]</p>

<p>\s - Соответствует любому символу Unicode пробела</p>

<p>\S - Соответствует любому не-пробельному символу</p>

   <code>
      <p><span className='blueviole'>var</span> <span className='blue'>myStr</span> = <span className='red'>"awesome Text"</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>myRegExp</span> = <span className='red'>/[a-zA-Z0-9]/</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span> = myRegExp.test(myStr);</p>

      <p>{'console.log(result);'}<span className='darkgreen'> //true</span></p>
    </code>

<p><b>^ - Соответствует началу строки</b></p>

<p><b>$ - Соответствует концу строки</b></p>

<p>Флаги:</p>

<p><b>i - ignoreCase</b></p>
 
<code>
  <p><span className='blueviole'>var</span><span className='blue'> exp</span> = <span className='red'>/a/i</span> <span className='darkgreen'>// ищет буквы в верхнем и нижнем регистре</span></p> 
</code> 

<p><b>g - global</b></p>

<p><b>Ищет все вхождения шаблона в строке</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Borobudur"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/[ou]/g</span>;</p>

  <p>{'console.log'}(str.replace(pattern, <span className='red'>"a"</span>)); <span className='darkgreen'>//"Barabadar"";</span></p>
</code>

<p><b>m - multiline</b></p>

<p><b>Ищет все вхождения шаблона во всех строках строки</b></p>
   
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Some text And some more And yet This is the end"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'> pattern</span> = <span className='red'>/\w+\s/g</span>;</p>

  <p>{'console.log(str.match(pattern));'} <span className='darkgreen'>//  [ "Some ", "text ", "And ", "some ", "more ", "And ", "yet ", "This ", "is ", "the ", "end"]</span></p>
</code>

   <p>
   Здесь мы определяем строку str со значением "это мой текст". Затем мы определяем шаблон регулярного выражения, 
   который соответствует началу строки (^), за которым следует одна или несколько строчных букв ([a-z]+), 
   разделенных пробелами, и конец строки ($). Мы используем скобки для захвата каждой группы букв в качестве отдельного подшаблона.
   </p>

   <p>Наконец, мы используем метод replace() на строке, передавая шаблон и строку замены, которая использует символ $ для ссылки на захваченные подшаблоны в порядке их определения. В этом случае мы меняем местами первую и вторую группы букв, оставляя третью и четвертую группы на месте.</p>

   <p>Вот код:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"this is my text"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/^([a-z]+) ([a-z]+) ([a-z]+) ([a-z]+)$/</span> ;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>res</span> = str.replace(pattern, <span className='red'>"$2 $1 $3 $4"</span>);</p>

  <p>{'console.log(res);'} <span className='darkgreen'>// "is this my text"</span> </p>
</code>

    </div>
  )
}



export default RuEs5_6;



