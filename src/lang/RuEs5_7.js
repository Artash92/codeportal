import React from 'react'

 function RuEs5_7() {
  return (
    <div>
   
    <h1>Объектно-ориентированное программирование, или ООП</h1>

<p>Объектно-ориентированное программирование, или ООП, является парадигмой программирования, которая акцентирует внимание на объектах, классах и инкапсуляции. В JavaScript ES5 ООП реализуется с помощью конструкторов функций и прототипов.</p>

<p>Конструктор функций - это специальная функция, которая используется для создания и инициализации объектов. Конструкторы функций определяются с помощью ключевого слова function, а их названия обычно начинаются с заглавной буквы, чтобы отличать их от обычных функций. Ключевое слово this используется внутри конструктора функции для ссылки на создаваемый объект. Вот пример:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Алиса"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Иван"</span>, <span className='blue'>30</span>);</p>

  <p>{'console.log'}(person1.name); <span className='darkgreen'>// "Алиса"</span></p>

  <p>{'console.log'}(person2.age); <span className='darkgreen'>// 30</span></p>
</code>

<p>В этом примере функция Person используется в качестве конструктора для создания двух объектов Person, person1 и person2. Свойства name и age устанавливаются с помощью ключевого слова this внутри конструктора функции.</p>

<p>В дополнение к конструкторам функций, прототипы используются для реализации наследования и обмена методами и свойствами между объектами. Каждый объект в JavaScript имеет прототип, который является другим объектом, от которого объект наследует. Свойства и методы могут быть добавлены к прототипу объекта с помощью свойства prototype. Вот пример:</p>
   
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Привет, меня зовут "</span> + <span className='blueviole'>this</span>.name + <span className='red'>" мне  "</span> + <span className='blueviole'>this</span>.age + <span className='red'>" лет."</span>);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Алиса"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Иван"</span>, <span className='blue'>30</span>);</p>

  <p>person1.greet(); <span className='darkgreen'>// "Привет, меня зовут Алиса мне 25 лет."</span></p>

  <p>person2.greet(); <span className='darkgreen'>// "Привет, меня зовут Иван мне 30 лет."</span></p>
</code>

<p>В этом примере метод greet добавляется в прототип Person, используя свойство prototype. Этот метод может быть вызван на любом объекте Person, как это показано в вызовах person1.greet() и person2.greet().</p>
   
<p>Еще одним концептом ООП в JavaScript ES5 является инкапсуляция, которая относится к практике скрытия деталей реализации и выставления только необходимых интерфейсов для внешнего мира. Это можно достичь с помощью замыканий, которые позволяют функциям получать доступ к переменным в их внешнем контексте даже после возврата внешней функции. Вот пример:</p>
   
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Counter</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>count</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>this</span>.increment = <span className='blueviole'>function</span>() {'{'}</p>

  <p>count++;</p>

  <p> console.log(count);</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>this</span>.decrement = <span className='blueviole'>function</span>() {'{'}</p>

  <p>count--;</p>

  <p>console.log(count);</p>

  <p>{'};'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>counter1</span> = <span className='blueviole'>new</span> Counter();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>counter2</span> = <span className='blueviole'>new</span> Counter();</p>

  <p>counter1.increment(); <span className='darkgreen'>// 1</span></p>

  <p>counter1.increment(); <span className='darkgreen'>// 2</span></p>

  <p>counter1.decrement(); <span className='darkgreen'>// 1</span></p>

  <p>counter2.increment(); <span className='darkgreen'>// 1</span></p>
</code>
 
 <p>В этом примере конструктор функции Counter создает объекты с методами increment и decrement, которые получают доступ к приватной переменной count, используя замыкания. Это гарантирует, что переменная count скрыта от внешнего мира и может быть доступна только через методы, предоставляемые объектом Counter.</p>  
   
 <p><b>Объектно-ориентированное программирование (ООП) с примитивными значениями в JavaScript ES5</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age, gender</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p><span className='blueviole'>this</span>.gender = gender;</p>

  <p><span className='blueviole'>this</span>.printDetails = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Имя: "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'console.log'}(<span className='red'>"Возраст: "</span> + <span className='blueviole'>this</span>.age);</p>

  <p>{'console.log'}(<span className='red'>"Пол: "</span> + <span className='blueviole'>this</span>.gender);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Андрей"</span>, <span className='blue'>25</span>, <span className='red'>"мужской"</span>); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Инна"</span>, <span className='blue'>30</span>, <span className='red'>"женский"</span>); </p>

  <p>{'person1.printDetails();'}</p>

  <p>{'person2.printDetails();'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>bool</span> = <span className='blueviole'>new</span> Boolean(<span className='blue'>true</span>);</p>

  <p>{'console.log'}(bool.valueOf()); <span className='darkgreen'> // true</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='blueviole'>new</span> String(<span className='red'>"Привет"</span>); </p>

  <p>{'console.log'}(str.concat(<span className='red'>" Мир"</span>)); <span className='darkgreen'>// "Привет Мир"</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>num</span> = <span className='blueviole'>new</span> Number(<span className='blue'>10</span>);</p>

  <p>{'console.log'}(num.valueOf() + <span className='blue'>5</span>); <span className='darkgreen'>// 15</span></p>
</code>

<p>В этом примере мы определяем функцию-конструктор Person для создания объектов-людей с свойствами Имя, Возраст и Пол. Мы также определяем метод printDetails для объекта Person, чтобы вывести подробности о человеке.</p>  

<p>Затем мы создаем два объекта Person, используя функцию-конструктор, и вызываем метод printDetails для каждого объекта.</p>

<p>Затем мы создаем объекты Boolean, String и Number, используя соответствующие функции-конструкторы и демонстрируем некоторые из их методов, такие как valueOf, concat и базовые арифметические операции.</p>

<p><b>В JavaScript ES5 мы можем создавать объекты, используя функции-конструкторы Object и Array. Это форма ООП, называемая созданием объектов на основе конструктора.</b></p>

<p>Чтобы создать объект с помощью функции-конструктора, мы используем ключевое слово new, за которым следует имя функции. Например, чтобы создать объект с использованием функции-конструктора Object, мы можем сделать следующее:</p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>person</span> = <span className='blueviole'>new</span> Object(); </p>

  <p> person.name = <span className='red'>"Андрей"</span>; </p>

  <p>person.age = <span className='blue'>30</span>;</p>

  <p>person.job = <span className='red'>"Разработчик"</span>;</p>
</code>

<p>В приведенном выше примере мы создаем новый объект person, используя функцию-конструктор Object. Затем мы добавляем свойства в этот объект, используя точечную нотацию.</p>

<p>Аналогично, мы можем создать массив, используя функцию-конструктор Array:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [];</p>

  <p>arr.push(<span className='blue'>1</span>);</p>

  <p>arr.push(<span className='blue'>2</span>);</p>

  <p>arr.push(<span className='blue'>3</span>);</p>

  <p>console.log(arr); <span className='darkgreen'>// [1, 2, 3]</span></p>
</code>

<p>В приведенном выше примере мы создаем новый массив arr, используя конструктор Array. Затем мы добавляем элементы в этот массив, используя метод push.</p>

<p>Создание объектов на основе конструкторов полезно, когда нам нужно создать несколько объектов одного типа. Мы можем определить конструктор, который задает начальные значения свойств объекта, а затем создавать новые объекты, используя этот конструктор.</p>

<p>Например, предположим, что мы хотим создать объекты, представляющие автомобили. Мы можем определить конструктор, как показано ниже:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model, year</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make;</p>

  <p><span className='blueviole'>this</span>.model = model;</p>

  <p><span className='blueviole'>this</span>.year = year;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda"</span>, <span className='red'>"Civic"</span>, <span className='blue'>2020</span>);</p>


  <p><span className='blueviole'>var</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota"</span>, <span className='red'>"Corolla"</span>, <span className='blue'>2021</span>);</p>
</code>

<p>В приведенном выше примере мы определяем конструктор Car, который принимает три параметра (make, model и year) и задает соответствующие свойства объекта с использованием ключевого слова this. Затем мы создаем два объекта автомобиля (car1 и car2), используя этот конструктор.</p>

<p><b>OOP I new RegExp()</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>'\\w', 'g'</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>matches</span> = str.match(regex);</p>

  <p>{'console.log(matches);'} <span className='darkgreen'>// ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d"]</span></p>
</code>


<p>В приведенном выше примере мы создаем регулярное выражение, которое соответствует любому символу слова (\w), и используем флаг g для выполнения глобального поиска. Затем мы используем метод match(), чтобы найти все совпадения в строке str. Наконец, мы выводим массив совпадений в консоль.</p>

<p>Обратите внимание, что мы должны экранировать символ обратной косой черты, когда передаем шаблон регулярного выражения в качестве строки конструктору RegExp. Это связано с тем, что символ обратной косой черты используется для экранирования специальных символов в регулярных выражениях, и мы также должны его экранировать в строке.</p>

<p><b>Прототип proto</b></p>

<p>Прототипное программирование - это фундаментальная концепция в JavaScript, которая позволяет объектам наследовать свойства и методы от других объектов. Каждый объект в JavaScript имеет прототип, который является другим объектом, от которого он наследует свойства и методы.</p>

<p>В ES5 вы можете создать прототип, используя метод Object.create(), который принимает объект в качестве параметра и создает новый объект с прототипом, установленным на этот объект. Затем вы можете добавлять свойства и методы в объект-прототип, которые будут унаследованы всеми объектами, созданными с его прототипом.</p>

<p>Вот пример создания прототипа для объекта Person:</p>

<code>
  <p><span className='blueviole'>var</span> personPrototype = {'{'}</p>

  <p>greeting: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Привет, меня зовут "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'} ,'}</p>

  <p>farewell: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"До свидания!"</span>);</p>

  <p>{'}'}</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>john</span> = Object.create(personPrototype); </p>

  <p>john.name = <span className='red'>"Джон"</span>;</p>

  <p>john.greeting(); <span className='darkgreen'>// выводит: "Привет, меня зовут Джон"</span></p>
</code>

<p>В этом примере мы сначала определяем объект personPrototype с методом greeting() и методом farewell(). Затем мы создаем новый объект Person - john, вызывая Object.create(personPrototype) и устанавливая его свойство name равным "Джон". Так как john создан с personPrototype в качестве своего прототипа, он наследует метод greeting() от объекта-прототипа и может вызывать его с помощью john.greeting().</p>

<p><b>instanceof</b></p>

<p>В JavaScript ES5 instanceof - это оператор, который используется для проверки принадлежности объекта к определенному классу или нет. Он возвращает логическое значение, указывающее, является ли объект экземпляром указанного класса или его подклассов.</p>

<p>Синтаксис для instanceof выглядит следующим образом:</p>

<p>object instanceof constructor</p>

<p>Здесь object - это имя объекта, который нужно проверить, а constructor - это имя конструктора или класса. Оператор instanceof проверяет цепочку прототипов объекта и возвращает true, если объект является экземпляром конструктора или класса, иначе возвращает false.</p>

<p>Вот пример:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Animal</span>(<span className='blue'>name</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>function</span> <span className='blue'>Dog</span>(<span className='blue'>name</span>) {'{'}</p>

  <p>Animal.call(<span className='blueviole'>this</span>, name); </p>

  <p>{' }'}</p>

  <p>Dog.prototype = Object.create(Animal.prototype); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>myDog</span> = <span className='blueviole'>new</span> Dog(<span className='red'>"Buddy"</span>);</p>

  <p>{'console.log'}(myDog instanceof Dog);  <span className='darkgreen'>// true</span></p>

  <p>{'console.log'}(myDog instanceof Animal); <span className='darkgreen'>// true</span></p>
</code>

<p>В этом примере мы определяем два класса Animal и Dog. Dog наследует от Animal. Мы создаем новый объект Dog и проверяем, является ли он экземпляром как Dog, так и Animal, используя оператор instanceof. Обе проверки возвращают true, потому что myDog является экземпляром обоих классов.</p>

<p>В заключение, instanceof используется для определения того, является ли объект экземпляром определенного класса или его подклассов, путем проверки его цепочки прототипов.</p>
    
    
    </div>
  )
}



export default RuEs5_7;



