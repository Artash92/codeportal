import React from 'react'

 function RuEs5_5() {
  return (
    <div>
  
  <h1>Массив (Array)</h1>
      
      <p>В JavaScript массив (array) - это структура данных, которая позволяет хранить несколько значений в одной переменной. Массив объявляется с помощью квадратных скобок, и его элементы разделяются запятыми.</p>
      
     <p><b>Пример</b></p>

     <p className='darkgreen'>// Массив чисел</p>
 
 <code>
  <p><span className='blue'>var </span><span className='blue'> numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p className='darkgreen'>// Массив строк</p>

  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
 </code>

<p><b>Длина массива (Array Length)</b></p>

<p>Свойство length массива возвращает количество элементов в массиве.</p>

<p><b>Пример</b></p>
 

 <code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>{'console.log(numbers.length);'} <span className='darkgreen'>// Вывод: 5</span></p>  
</code>

<p><b>Методы массива (Array Methods)</b></p>

<p>В JavaScript массивы имеют встроенные методы, которые могут использоваться для манипулирования данными в массиве. Некоторые часто используемые методы массивов:</p>

<div>

<p><b>push()</b>: добавляет один или несколько элементов в конец массива</p>

<p><b>pop()</b>: удаляет последний элемент из массива</p>

<p><b>shift()</b>: удаляет первый элемент из массива</p>

<p><b>unshift()</b>: добавляет один или несколько элементов в начало массива</p>

<p><b>splice()</b>: добавляет или удаляет элементы из массива по указанному индексу</p>

<p><b>slice()</b>: возвращает новый массив, который содержит часть существующего массива</p>

<p><b>join()</b>: объединяет все элементы массива в строку</p>

<p><b>concat()</b>: объединяет два или более массивов</p>

</div>

<p><b>Пример:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>numbers.push(<span className='blue'>6</span>); <span className='darkgreen'>// добавляет 6 в конец массива</span></p>

  <p>{'console.log(numbers);'} <span className='darkgreen'> // Вывод: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>

  <p>fruits.pop(); <span className='darkgreen'>// удаляет последний элемент массива</span></p>

  <p>{'console.log(fruits);'} <span className='darkgreen'>// Вывод: ["apple", "banana"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>];</p>

  <p>colors.shift(); <span className='darkgreen'> // удаляет первый элемент массива</span></p>

  <p>{'console.log(colors);'} <span className='darkgreen'>// Вывод: ["green", "blue"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>cars</span> = [<span className='red'>"BMW","Audi","Mercedes"</span>];</p>

  <p>cars.unshift(<span className='red'>"Toyota","Honda"</span>); <span className='darkgreen'>// добавляет два элемента в начало массива</span></p>

  <p>{'console.log(cars);'} <span className='darkgreen'>// Вывод: ["Toyota", "Honda", "BMW", "Audi", "Mercedes"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>animals</span> = [<span className='red'>"dog","cat","elephant","lion"</span>];</p>

  <p>animals.splice(<span className='blue'>2</span>,<span className='blue'>0</span>,<span className='red'>"bear"</span>,<span className='red'>"zebra"</span>); <span className='darkgreen'>// добавляет "bear" и "zebra" в индекс 2</span></p>

  <p>{'console.log(animals);'} <span className='darkgreen'>// Вывод: ["dog", "cat", "bear", "zebra", "elephant", "lion"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>letters</span> = [<span className='red'>"a", "b", "c", "d", "e"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>slice1</span> = letters.slice(<span className='blue'>0, 2</span>); <span className='darkgreen'>// возвращает ["a", "b"]</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>slice2</span> = letters.slice(<span className='blue'>2</span>); <span className='darkgreen'>// возвращает ["c", "d", "e"]</span></p>

  <p>{'console.log(slice1);'}</p>

  <p>{'console.log(slice2);'}</p>
</code>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>fruitString</span> = fruits.join(<span className='red'>", "</span>); <span className='darkgreen'>// объединяет элементы массива с запятой</span></p>

  <p>{'console.log(fruitString);'} <span className='darkgreen'>// Вывод: "apple,banana,orange"</span></p>
</code> 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>nums1</span> = [<span className='blue'>1, 2, 3</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums2</span> = [<span className='blue'>4, 5, 6</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums3</span> = nums1.concat(nums2); <span className='darkgreen'>// объединяет nums1 и nums2</span></p>

  <p>{'console.log(nums3);'} <span className='darkgreen'>// Вывод: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<p><b>Методы массивов | Объединение массивов</b></p>

<p>
Вы можете объединять два или более массивов в JavaScript, используя метод concat(). Этот метод возвращает новый массив, содержащий все элементы из исходных массивов.

</p>

<h3>forEach и map </h3>

<p><b>forEach</b> используется для итерации каждого элемента массива и выполнения функции для каждого элемента. Он принимает функцию в качестве аргумента и передает каждый элемент массива как аргумент этой функции.</p>

<p>Вот пример использования forEach для печати каждого элемента массива:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>arr.forEach{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

  <p>{'console.log(element);'}</p>

  <p>{' });'}</p>
</code>

<p>Это выведет:</p>

<code>
  <p className='blue'>1</p> 

  <p className='blue'>2</p>

  <p className='blue'>3</p>

  <p className='blue'>4</p>

  <p className ='blue'>5</p>
</code>

<p>map, с другой стороны, используется для создания нового массива с результатами вызова функции для каждого элемента в исходном массиве. Он также принимает функцию в качестве аргумента и передает каждый элемент массива в эту функцию в качестве аргумента. Функция должна возвращать новое значение для добавления в новый массив.</p>

<p>Вот пример использования map для создания нового массива с удвоенным каждым элементом исходного массива:</p>


<code>
    <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

    <p><span className='blueviole'>var</span> <span className='blue'>doubledArr</span> = arr.map{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> element * <span className='blue'>2</span>;</p>

    <p>{'});'}</p>

    <p>{'console.log(doubledArr);'}</p>
</code>

<p>Это выведет:</p>

<code><p className='blue'>[2, 4, 6, 8, 10 ]</p></code>

<p>
В итоге, forEach используется для выполнения операции над каждым элементом массива, тогда как map используется для создания нового массива с результатами вызова функции для каждого элемента исходного массива. 
</p>

<h3>Метод apply</h3>

<p>
В JavaScript метод apply() используется для вызова функции с заданным значением this и аргументами, предоставленными в виде массива (или похожего на массив объекта).
</p>

<p>Синтаксис использования метода apply() выглядит следующим образом:</p>
  
  <p>{'functionName.apply(thisValue, [argumentsArray]) '}</p>

<p><b>Где</b></p>

<p>functionName - это имя функции, которую вы хотите вызвать.</p>

<p>thisValue - это значение, которое вы хотите использовать в качестве значения this внутри функции. Этот параметр является необязательным. Если вы его опустите, будет использован глобальный объект.</p>

<p>argumentsArray - это массив или похожий на массив объект, который содержит аргументы, которые вы хотите передать в функцию. Этот параметр также является необязательным. Если вам не нужно передавать аргументы, вы можете его опустить.</p>

<p>Вот пример использования метода apply() с массивом:</p>
    
 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

    <p><span className='blueviole'>function</span> <span className='blue'>sumArray</span>() {'{'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>sum</span> = <span className='blue'>0</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} <span className='blueviole'>this</span>.length; i++) {'{'}</p>

    <p>sum += <span className='blueviole'>this</span>[i];</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>return</span> sum;</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sumArray.apply(numbers);</p>

    <p>{'console.log(result);'} <span className='darkgreen'>// Вывод: 15</span></p>

    <p>{''}</p>
  </code>

<p>В этом примере у нас есть массив чисел и функция sumArray(), которая вычисляет сумму всех элементов в массиве. Мы вызываем метод apply() на функции sumArray() с массивом numbers в качестве значения this. Метод apply() передает массив как значение this, и функция sumArray() вычисляет сумму всех элементов массива и возвращает ее.</p>
  
  <p>
  Обратите внимание, что метод apply() похож на метод call(). Единственное отличие заключается в том, что метод call() принимает аргументы в виде списка, разделенного запятыми, в то время как метод apply() принимает аргументы в виде массива.
  </p>
  
  <h3>Самовызывающаяся функция</h3>
  
  <p>
  Самовызывающаяся функция - это функция JavaScript, которая автоматически запускается при ее определении. Она также известна как немедленно вызываемое функциональное выражение (IIFE). Эта функция обернута в скобки, а затем немедленно вызывается, используя открывающие и закрывающие скобки.
  </p>
  
  <p>Вот пример самовызывающейся функции:</p>

  <code>
    <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

    <p>{'console.log'}(<span className='red'>"Привет, мир!"</span>);</p>

    <p>{' })();'}</p>
  </code>

<p>В этом примере функция определена и немедленно вызвана с помощью открывающих и закрывающих скобок. Это выведет "Привет, мир!" в консоль.</p>

<p>Самовызывающиеся функции обычно используются для создания частного области видимости, в которой можно определять переменные и функции, не засоряя глобальное пространство имен. Вот пример:</p>
 
<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>function</span> <span className='blue'>foo</span>() {'{'}</p>

  <p>{'console.log(x);'}</p>

  <p>{'}'}</p>

  <p>foo(); <span className='darkgreen'>// Выводит 10</span></p>

  <p>{'})();'}</p>
</code>
 
<p>В этом примере переменная x и функция foo определены внутри самовызывающейся функции. Они не доступны извне функции, что помогает предотвратить конфликты именования с другим кодом.</p>

<p>Самовызывающиеся функции также могут принимать аргументы, как обычные функции. Вот пример:</p>
 
<code>
  <p>{'('}<span className='blueviole'>function</span>(<span className='blue'>x, y</span>) {'{'}</p>

  <p>{'console.log'}(x + y);</p>

  <p>{'})'}(10, 20); <span className='darkgreen'>// Вывод: 30</span></p>
</code>

<p>В этом примере самовызывающаяся функция принимает два аргумента (x и y) и выводит их сумму в консоль.</p>

<p>Самовызывающиеся функции - это мощный инструмент в JavaScript для создания частных областей видимости, предотвращения конфликтов имен и управления глобальными переменными.</p>

    </div>
  )
}



export default RuEs5_5;



