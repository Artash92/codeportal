import React from 'react'

function RuEs6() {
  return (
    <div>
  <h1 className='hy'>JavaScript ES6 (ECMAScript 2015) - это шестая версия JavaScript, которая внесла новые возможности и улучшения синтаксиса в язык. Вот некоторые ключевые особенности ES6:</h1>

<p>1. <b className='blueviole'>let</b> и <b className='blueviole'>const</b>: это новые объявления переменных, которые заменяют старое ключевое слово <b className='blueviole'>var</b>. Они обеспечивают лучшие правила области видимости и помогают избежать распространенных ошибок, которые могут возникнуть с <b>var</b>.</p>

<p>2. Стрелочные функции: стрелочные функции обеспечивают более короткий синтаксис для записи выражений функций. Они также лексически привязывают значение <b>this</b>, что упрощает рассуждение о области действия функции.</p>

<p>3. Шаблонные литералы: этот функционал обеспечивает способ вставки выражений внутрь строк, используя обратные кавычки вместо кавычек. Это упрощает создание строк с динамическим содержимым.</p>

<p>4. Оператор расширения: оператор расширения представлен тремя точками (...). Он позволяет расширять итерируемые объекты, такие как выражения массивов или строк, в местах, где ожидаются ноль или более аргументов (для вызовов функций) или элементов (для литералов массивов).</p>

<p>5. Деструктурирование: деструктурирование обеспечивает способ извлечения данных из массивов и объектов в отдельные переменные с использованием краткой записи синтаксиса.</p>

<p>6. Классы: ES6 представил новый синтаксис классов, который обеспечивает более простой и интуитивно понятный способ создания объектов и определения их поведения.</p>      

<p>7. Модули: Модули - это способ организации кода в отдельные, самодостаточные файлы, которые могут легко импортироваться и экспортироваться по мере необходимости. Это позволяет более эффективно разрабатывать и поддерживать большие приложения. ES6 ввел стандартизированный синтаксис модуля с использованием ключевых слов import и export, что упрощает совместное использование кода в нескольких файлах и проектах.</p>

<p>8. Классы: ES6 ввел новый синтаксис для создания классов, который позволяет использовать объектно-ориентированное программирование в JavaScript. Классы могут использоваться для создания объектов с свойствами и методами, а также могут наследовать другие классы. Этот синтаксис упрощает написание и поддержку сложного кода, а также может улучшить читаемость и повторное использование вашего кода.</p>

<p>9. Промисы: Промисы - это способ обработки асинхронных операций в JavaScript. Они предоставляют стандартизированный способ обработки результата асинхронной операции, либо ее разрешения, либо отклонения значения. Промисы могут объединяться и комбинироваться с другими функциями, такими как async/await, чтобы создавать более сложные и мощные асинхронные потоки.</p>

<p>Это лишь некоторые из многих функций, введенных в ES6. Изучение и использование этих функций могут значительно улучшить ваш код JavaScript и сделать ваш процесс разработки более эффективным и эффективным.</p>

<p><b>Переменные ES6</b></p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>num</span> = <span className='blue1'>10</span>; </p>

    <p>{'console'}.<span className='blue'>log</span>(num);<span className='green'> // 10</span></p>

    <p>{'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>num2</span> = <span className='blue1'>20</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(num2); <span className='green'>// 20</span> </p>

    <p>{'}'}</p>

    <p><span className='green'>// num2 не определено</span></p>

    <p>{'console'}.<span className='blue'>log</span>(num); <span className='green'>// 10</span></p>
 </code>


<p>Этот код использует переменные ES6. Первая строка создает константную переменную с именем "num" и присваивает ей значение 10. Вторая строка начинает блок кода, используя фигурные скобки, которые являются новой функцией в ES6.</p>

<p>Внутри этого блока объявляется новая переменная с именем "num2" с использованием ключевого слова "const" и присваивается значение 20. Эта переменная доступна только внутри блока, потому что она была объявлена с использованием ключевого слова "const", которое создает переменную с областью видимости блока. Третья строка выводит значение "num2" в консоль, которое будет равно 20.</p>

<p>После блока вызывается еще один оператор console.log, но на этот раз выводится значение переменной "num", которая находится за пределами блока и, следовательно, доступна. Наконец, код пытается вывести значение "num2", но так как оно было объявлено внутри блока и не доступно за его пределами, возникнет ошибка, сообщающая, что "num2 не определен".</p>

<p><b>Переменные ES6</b></p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>//Идентификатор (name) уже был объявлен</span></p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>

    <p>{'}'}</p>

   <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
 </code>

 <p>Этот код объявляет константную переменную "name", а затем пытается ее переопределить с другим значением, что приводит к ошибке "Идентификатор 'name' уже был объявлен".</p>

<p>Затем код переопределяет "name" как "Leo" и создает область видимости блока с помощью оператора if. Внутри блока объявляется новая переменная "name" со значением "Mike", которое затем выводится в консоль. За пределами блока в области видимости остается исходная переменная "name" со значением "Leo", которая также выводится в консоль.</p>

<p>Таким образом, вывод этого кода состоит из сообщения об ошибке "Идентификатор 'name' уже был объявлен", за которым следуют "Mike" и "Leo".</p>

<p><b>Переменные ES6</b></p>

<code>
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='green'>// Темпоральная зона до объявления</span></p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>// value не определена</span></p>

    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'} '}</p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//undefined</span></p>
  </code>

<p>Ключевое слово <b>let</b> используется для объявления переменной <b>value</b> внутри блока. Однако, когда вызывается <b>typeof value</b> внутри блока до объявления <b>value</b>, движок JavaScript выбрасывает ошибку ReferenceError, потому что переменная еще не определена. Это называется Темпоральной зоной до объявления, которая относится к периоду времени между созданием переменной и ее объявлением, когда к ней нельзя получить доступ. Оператор <b>console.log(typeof value)</b> за пределами блока возвращает <b>undefined</b>, потому что <b>value</b> не определена в текущей области видимости.</p>

<p>Во втором блоке кода:</p>

    <code>
      <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>

      <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

      <p>{'}'}</p>
    </code>

<p>Переменная <b>value</b> объявляется и присваивается значение <b>10</b> внутри блока. Однако, поскольку блок не находится в глобальной области видимости, и <b>value</b> не возвращается или не присваивается переменной во внешней области видимости, значение <b>value</b> фактически теряется после завершения выполнения блока.</p>

<p><b>Переменные ES6</b> </p>  

<p>Этот код демонстрирует разницу в области видимости переменных при использовании var и let в цикле for.</p>

   <code>
      <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>
    
      <p><span className='green'>// Код здесь</span></p>

      <p>{'}'}</p>

      <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>
 
      <hr/>
      
      <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

      <p><span className='green'>// Код здесь</span></p>

      <p>{' }'}</p>

      <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// i не определен</span> </p>
    </code>

<p>В первом примере переменная i объявляется с использованием var, которая имеет область видимости на уровне функции. Это означает, что переменная существует за пределами цикла for, и поэтому значение i равно 5 при выводе в консоль.</p>

<p>Во втором примере i объявляется с использованием let, которая имеет область видимости на уровне блока. Это означает, что переменная существует только внутри блока цикла for и не доступна за его пределами. Поэтому при выводе i в консоль за пределами цикла возникает ошибка ссылки, говорящая о том, что i не определена.</p>

<p><b>Оператор расширения ES6 (Spread Operator)</b></p>

<p>Оператор расширения - это новая функция, введенная в ES6, которая позволяет расширять или разворачивать итерируемые объекты в отдельные элементы. Этим итерируемым объектом может быть массив, строка или любой другой итерируемый объект.</p>    

<b>Оператор расширения (spread operator) представлен тремя точками (...) и может использоваться в различных контекстах. Вот несколько примеров:</b>

<p>1. Использование оператора расширения для объединения массивов:</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>

    <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
</code>

<p>2. Использование оператора расширения для создания копии массива:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>

    <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
  </code>

<p>3. Использование оператора расширения для передачи аргументов в функцию:</p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> a + b + c; </p>

    <p>{'}'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>

    <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
</code>

<p>4. Использование оператора расширения для объединения объектов: </p>

   <code>
      <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>

      <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>

      <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>

      <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
   </code>

<p>Во всех этих примерах оператор распространения используется для раскрытия итерируемого объекта в отдельные элементы. Это полезная функция, которая может упростить ваш код и сделать его более читабельным.</p>

<p><b>Деструктуризация в ES6</b></p>

<p>Деструктуризация в ES6 является способом извлечения значений из объектов или массивов и присваивания их переменным более кратким и читаемым способом.</p>

<p>Например, рассмотрим следующий объект:</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>person</span> = {'{'}</p>

    <p>name: <span className='red'>'John Doe'</span>, </p>

    <p>age: <span className='blue1'>30</span>,</p>

    <p> email: <span className='red'>'john.doe@example.com'</span></p>

    <p>{'};'}</p>
</code>

<p>Вместо доступа к каждому свойству по отдельности, как здесь:</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = person.name;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>age</span> = person.age; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>email</span> = person.email; </p>
</code>

<p>Вы можете использовать деструктуризацию, чтобы присвоить каждому свойству переменную более кратким способом:</p>

<code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>name, age, email</span> {'}'} = person; </p></code>

<p>Это создает три переменные <b>(name, age и email)</b> и присваивает им значения соответствующих свойств объекта person.</p>

<p>Также можно использовать деструктуризацию с массивами. Например:</p>

  <code>
      <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

      <p><span className='blueviole'>const</span> [<span className='blue'>first</span>, <span className='blue'>second</span>, ...<span className='blue'>rest</span>] = numbers; </p>

      <p>{'console'}.<span className='blue'>log</span>(first); <span className='green'>// 1</span></p>

      <p>{'console'}.<span className='blue'>log</span>(second); <span className='green'>// 2</span></p>

      <p>{'console'}.<span className='blue'>log</span>(rest); <span className='green'>// [3, 4, 5]</span></p>
  </code>

<p>Этот код создает три переменные <b>(first, second и rest)</b> и присваивает им значения первых двух элементов в массиве <b>numbers</b>, а также оставшихся элементов соответственно.</p>

<p>Деструктуризация также может использоваться с вложенными объектами и массивами, и даже может иметь значения по умолчанию, присваиваемые переменным в случае, если значение, которое деструктурируется, не определено.</p>

<p>В целом, деструктуризация - это мощная функция в ES6, которая может помочь сделать ваш код более читаемым и кратким.</p>

<p><b>Цикл ES6 (for - of)</b></p>

<p>ES6 представил новый тип цикла в JavaScript, называемый циклом <b>for...of</b>. Этот цикл используется для перебора элементов итерируемого объекта, таких как массивы, строки, карты, множества и т.д.</p>

<p>Вот пример использования цикла <b>for...of</b> для перебора массива:</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(num);</p>

    <p>{'} '}</p>
</code>

<p>В этом примере цикл <b>for...of</b> перебирает каждый элемент в массиве <b>arr</b> и выводит его в консоль.</p>

<p>Мы также можем использовать цикл <b>for...of</b> для перебора символов в строке:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"Привет, мир!"</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(char);</p>

    <p>{'}'}</p>
  </code>

<p>В этом примере цикл <b>for...of</b> перебирает каждый символ в строке <b>str</b> и выводит его в консоль.</p>

 <p>Также мы можем использовать цикл <b>for...of</b> для перебора ключей или значений объекта Map:</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>map</span> = <span className='blueviole'>new</span> Map {'(['} </p>

    <p>[<span className='red'>'a'</span>, <span className='blue1'>1</span>],</p>

    <p> [<span className='red'>'b'</span>, <span className='blue1'>2</span>], </p>

    <p> [<span className='red'>'c'</span>, <span className='blue1'>3</span>] </p>

    <p>{']);'}</p>


    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> [<span className='blue'>key, value</span>] <span className='blueviole'>of</span> map) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(key, value);</p>

    <p>{'}'}</p>
  </code>

<p>В этом примере цикл <b>for...of</b> перебирает каждую пару ключ-значение в объекте <b>map</b> и выводит их в консоль.</p>

<p>В целом, цикл <b>for...of</b> - это полезное дополнение к языку JavaScript, которое упрощает перебор итерируемых объектов.</p>

<p><b>Параметр остаточных значений функции ES6</b></p>

<p>Параметр остаточных значений функции ES6 - это функциональность, которая позволяет функции принимать неопределенное количество аргументов в виде массива. Его обозначают тремя точками (...) и именем параметра.</p>

<p>Вот пример использования параметра остаточных значений:</p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(...<span className='blue'>numbers</span>) {'{'}</p>

    <p><span className='blueviole'>let</span> <span className='blueviole'>result</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>number</span> <span className='blueviole'>of</span> numbers) {'{'}</p>

    <p>{'result += number;'}</p>

    <p>&nbsp;{'}'}</p>

    <p><span className='blueviole'>return</span> result; </p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// Вывод: 6</span></p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'> // Вывод: 22</span></p>
 </code>

<p>В приведенном выше примере функция sum принимает неопределенное количество аргументов, используя параметр остаточных аргументов ...numbers. Затем она проходит по массиву чисел, используя цикл for...of, чтобы сложить значения и вернуть результат.</p>

<p>Параметр остаточных аргументов полезен, когда вы хотите написать функцию, которая может обрабатывать переменное количество аргументов, не задавая каждый аргумент явно. Он часто используется в функциях, которые манипулируют массивами или выполняют математические операции над набором значений.</p>

<p>В целом, параметр остаточных аргументов - это удобная функция, которая облегчает написание более гибких и универсальных функций.</p>

<p><b>Стрелочные функции(Arrow functions)</b></p>

<p>Стрелочные функции - это краткий способ написания функций в JavaScript, введенный в ES6 (ECMAScript 2015). Они обеспечивают более компактный синтаксис по сравнению с традиционными выражениями функций, что упрощает чтение и написание кода.</p>

<p>Вот пример традиционного выражения функции, которая принимает два параметра и возвращает их сумму:</p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b</span>) {'{'}</p>
    
    <p><span className='blueviole'>return</span> a + b; </p>

    <p>{'}'}</p>
 </code>

<p>Ту же функцию можно написать, используя стрелочную функцию, следующим образом:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>sum</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>

<p>В этом примере функция определена с помощью синтаксиса стрелки <b>{'=>.'}</b>. Параметры <b>(a, b)</b> заключены в скобки, за которыми следует стрелка <b>{'=>'}</b> и тело функции <b>a + b.</b> Поскольку тело функции состоит из одного оператора, фигурные скобки и ключевое слово <b>return</b> могут быть опущены.</p>

<p>Стрелочные функции также могут использоваться как анонимные функции, назначаться переменным и передаваться в качестве аргументов другим функциям. Вот пример стрелочной функции, которая принимает массив и возвращает новый массив, в котором каждый элемент удвоен:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'}arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

<p>В этом примере стрелочная функция{' (item => item * 2)'} передается в качестве аргумента методу <b>map()</b>, который применяет функцию к каждому элементу массива и возвращает новый массив с измененными значениями.</p>

<p>У стрелочных функций также есть лексическое привязывание <b>this</b>, что означает, что <b>this</b> относится к значению <b>this</b> в замыкающей области видимости, а не собственному <b>this</b> функции. Это делает стрелочные функции особенно полезными для работы с методами объектов и обработчиками событий.</p> 

<p>В целом, стрелочные функции предоставляют более краткий и читаемый способ написания функций на JavaScript, упрощая понимание и поддержку кода.</p>

 <p><b>Прототип(Prototype)</b></p>

<p>В JavaScript каждый объект имеет внутреннее свойство, называемое [[Prototype]] (иногда называемое "dunder proto"), которое ссылается на другой объект или null. Это свойство используется для реализации наследования и позволяет объектам наследовать свойства и методы от своих прототипов.</p>

<p>В ES5 вы можете создавать прототип с помощью конструкторов функций и свойства prototype. Вот пример:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue1'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age; </p>

  <p>&nbsp;{'}'}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Привет, меня зовут</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>и мне </span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>лет.`</span>);</p>

  <p>{'} '}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Привет, меня зовут John и мне 30 лет."</span></p>
</code>

<p>В этом примере мы создаем конструктор функции с именем <b>Person</b>, который принимает <b>name</b> и <b>age</b> в качестве аргументов и устанавливает их как свойства объекта. Затем мы добавляем метод <b>greet</b> в прототип <b>Person</b> с помощью объекта <b>Person.prototype</b>. Этот метод записывает приветственное сообщение в консоль, которое включает имя и возраст человека.</p>

<p>При создании нового объекта с помощью ключевого слова <b>new</b> и конструктора <b>Person</b>, свойство [[Prototype]] нового объекта будет указывать на объект <b>Person.prototype</b>. Это позволяет новому объекту наследовать метод <b>greet</b> от его прототипа.</p>

<p>В ES6 вы можете использовать синтаксис <b>class</b>, чтобы определить класс и его прототип. Вот тот же пример, используя классы ES6:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Person</span> {'{'}</p>

  <p>constructor(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>{'greet() { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Привет, меня зовут</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>и мне</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>лет.`</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Привет, меня зовут John и мне 30 лет."</span></p>
</code>

<p>В этом примере мы определяем класс <b>Person</b> с конструктором, который принимает <b>name</b> и <b>age</b> и устанавливает их в качестве свойств объекта. Затем мы определяем метод <b>greet</b> непосредственно в классе. Под капотом синтаксис <b>class</b> создает конструктор функции и устанавливает его прототип на прототип класса.</p>
 
<p>Концепция прототипов используется как в ES5, так и в ES6 для реализации наследования в JavaScript, но синтаксис определения прототипов различен. Классы ES6 предоставляют более краткий и интуитивно понятный синтаксис для создания классов и определения их прототипов, в то время как прототипы ES5 предоставляют большую гибкость и контроль над тем, как определяются прототипы.</p>

<p><b>Класс (статические методы)</b></p>

<p>В ES6 были введены классы как способ создания шаблонов объектов. Классы являются шаблоном для создания объектов, которые инкапсулируют данные и функциональность. Одной из особенностей классов является возможность определения статических методов, которые вызываются на самом классе, а не на экземпляре класса.</p>

<p>Статический метод - это метод, принадлежащий самому классу, а не какому-либо экземпляру класса. Его можно вызвать на классе, не создавая сначала экземпляр класса.</p>

<p>Вот пример класса с статическим методом:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Car</span> {'{'}</p>

  <p>constructor(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'}'}</p>

  <p><span className='blueviole'>static</span> compare(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Same make"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span> {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Different make"</span>; </p>

  <p>&nbsp;&nbsp;{' }'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{' }'}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Different make"</span> </p>
</code>

<p>В приведенном выше примере класс Car имеет статический метод compare. Этот метод принимает два объекта Car в качестве параметров и возвращает строку, указывающую, имеют ли они одинаковый make (производитель автомобиля) или нет. Метод compare может быть вызван на самом классе Car, а не на экземпляре класса.</p>

<p>Обратите внимание, что в методе compare ключевое слово this не используется, поскольку метод не вызывается на экземпляре класса. Вместо этого метод принимает два объекта Car в качестве параметров и сравнивает их свойства make.</p>

<p>В ES5 статические методы могут быть определены на функции-конструкторе с использованием свойства prototype функции-конструктора. Вот пример того, как вышеуказанный класс ES6 может выглядеть в ES5:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'} '}</p>

  <p>Car.compare = <span className='blueviole'>function</span>(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Same make"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span>  {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Different make"</span>; </p>

  <p>&nbsp;{'}'}</p>

  <p>{'}; '}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Different make"</span> </p>
</code>

<p>В примере ES5 метод compare определяется непосредственно на функции-конструкторе Car, а не на ее свойстве прототипа. Это позволяет вызывать метод на самой функции-конструкторе Car.</p>

<p><b>Символ (Symbol)</b></p>

<p>В ES6 символ (Symbol) - это новый примитивный тип данных, который представляет уникальный идентификатор. В отличие от строк или чисел, символы гарантированно уникальны и неизменяемы, что делает их полезными для создания ключей или свойств объектов, которые должны быть абсолютно уникальными.</p>

  <p>Для создания символа можно использовать функцию <b>Symbol()</b>, например:</p>

  <code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>

  <p>Также можно добавить описание символа, чтобы легче идентифицировать его позже, например:</p>

  <code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Мой символ'</span>); </p></code>

  <p>Символы можно использовать в качестве ключей или свойств объектов, например:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Мой символ'</span>); </p>

  <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>

  <p>{'obj[mySymbol]'} = <span className='red'>'Привет, Мир!'</span>; </p>

  <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// Вывод: Привет, Мир!</span> </p>
</code>

  <p>Одно из главных преимуществ использования символов заключается в том, что они не могут быть случайно доступны или изменены, потому что они уникальны и не могут быть скопированы. Это делает их идеальными для создания частных или внутренних свойств объектов.</p>
  
  <p>Еще одно преимущество символов заключается в том, что они могут использоваться для определения известных символов (well-known symbols), которые являются встроенными символами, имеющими определенный смысл или поведение в языке. Например, символ Symbol.iterator используется для определения итератора по умолчанию для объекта.</p>
  
  <p>В целом, символы предоставляют мощный и гибкий способ создания уникальных идентификаторов и определения пользовательского поведения для объектов в JavaScript.</p>
  
  <p><b>Promise (Обещание)</b></p>

<p>Объект Promise - это функциональность, введенная в ES6, которая позволяет обрабатывать асинхронные операции более легко и организованно. </p>

<p>В простых терминах, Promise - это объект, который представляет значение, которое может быть недоступно в настоящее время, но будет доступно в будущем. Он предоставляет способ обработки результатов асинхронных операций (таких как запросы API или запросы к базе данных) без блокирования основного потока выполнения.</p>

<p>Promise имеет три состояния: ожидание (pending), выполнено (fulfilled) или отклонено (rejected). Когда Promise находится в состоянии ожидания, это означает, что операция, которую он представляет, еще не завершена. Когда Promise выполняется, это означает, что операция была успешной и результат доступен. Когда Promise отклонен, это означает, что операция завершилась неудачно, и доступна ошибка.</p>

<p>Вот пример использования Promise для получения данных из API:</p>

<code>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
</code>

<p>В этом примере, <b>fetch</b> - это функция, которая возвращает Promise, который разрешается ответом от API. На Promise вызывается метод <b>then</b>, который принимает обратный вызов, который выполняется, когда Promise выполняется. Первый обратный вызов <b>then</b> разбирает ответ как JSON и возвращает его. Второй обратный вызов <b>then</b> выводит разобранные данные в консоль. Вызывается метод <b>catch</b> для обработки любых ошибок, которые могут возникнуть во время операции.</p>

<p>Промисы могут также создаваться вручную, используя конструктор <b>Promise</b>:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>

  <p>{"setTimeout(() => { "}</p>

  <p> resolve(<span className='red'>'Success!'</span>) </p>

  <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>

  <p>{"}) "}</p>

  <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'> // Вывод: Success!</span> </p>
</code>

<p>В этом примере промис создается с помощью функции, принимающей два параметра: <b>resolve и reject.</b> Функция <b>resolve</b> вызывается через одну секунду с аргументом <b>'Success!'</b>. Метод <b>then</b> вызывается на промисе, принимая функцию обратного вызова, которая будет выполнена, когда промис будет выполнен. Функция обратного вызова записывает результат в консоль.</p>

    
    </div>

  )
}

export default RuEs6;