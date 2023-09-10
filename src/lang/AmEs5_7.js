import React from 'react'

function AmEs5_3() {
  return (
    <div>
      <h1>Օբյեկտ-կողմնորոշված  ծրագրավորում կամ OOP</h1>

<p>Օբյեկտ-կողմնորոշված ​​ծրագրավորումը կամ OOP-ը ծրագրավորման պարադիգմ է, որն ընդգծում է օբյեկտները, դասերը և ինկապսուլյացիան: JavaScript ES5-ն իրականացնում է OOP ֆունկցիաների կոնստրուկտորներով և նախատիպերով:</p>
    
<p>Ֆունկցիայի կոնստրուկտորը հատուկ ֆունկցիա է, որն օգտագործվում է օբյեկտներ ստեղծելու և սկզբնավորելու համար: Ֆունկցիոնալ կոնստրուկտորները սահմանվում են function հիմնաբառով, և նրանց անունները սովորաբար սկսվում են մեծատառով՝ դրանք սովորական ֆունկցիաներից տարբերելու համար։ this բանալի բառն օգտագործվում է ֆունկցիայի կոնստրուկտորի ներսում՝ ստեղծվող օբյեկտին անդրադառնալու համար: օրինակ՝</p>    
    
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Մանե"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Նարեկ"</span>, <span className='blue'>30</span>);</p>

  <p>{'console.log'}(person1.name); <span className='darkgreen'>// "Մանե"</span></p>

  <p>{'console.log'}(person2.age); <span className='darkgreen'>// 30</span></p>
</code>    
    
<p>Այս օրինակը օգտագործում է Person ֆունկցիան որպես կոնստրուկտոր՝ ստեղծելու երկու Person օբյեկտ՝ person1 և person2: Անունը և տարիքը սահմանվում են՝ օգտագործելով this հիմնաբառը ֆունկցիայի կոնստրուկտորի ներսում:</p>   
    
<p>Ի լրումն ֆունկցիաների կոնստրուկտորների, նախատիպերն օգտագործվում են օբյեկտների միջև ժառանգության և փոխանակման մեթոդներն ու հատկությունները իրականացնելու համար: JavaScript-ի յուրաքանչյուր օբյեկտ ունի նախատիպ, որը մեկ այլ օբյեկտ է, որից ժառանգվում է օբյեկտը: Հատկություններ և մեթոդներ կարող են ավելացվել օբյեկտի նախատիպին՝ օգտագործելով նախատիպի հատկությունը: Օրինակ՝</p>    
    
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Բարեւ, իմ անունն է "</span> + <span className='blueviole'>this</span>.name + <span className='red'>" ես  "</span> + <span className='blueviole'>this</span>.age + <span className='red'>" տարեկան եմ."</span>);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Մանե"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Նարեկ"</span>, <span className='blue'>30</span>);</p>

  <p>person1.greet(); <span className='darkgreen'>// "Բարեւ, իմ անունն է Մանե ես 25 տարեկան եմ։"</span></p>

  <p>person2.greet(); <span className='darkgreen'>// "Բարեւ, իմ անունն է Նարեկ ես 30 տարեկան եմ։"</span></p>
</code>    
    
<p>Այս օրինակում greet մեթոդը ավելացվում է Person նախատիպի վրա՝ օգտագործելով prototype հատկությունը: Այս մեթոդը կարող է կանչվել ցանկացած Person օբյեկտի վրա, ինչպես ցույց է տրված person1.greet() և person2.greet-ում:</p>    
    
<p>JavaScript ES5-ի մեկ այլ OOP հայեցակարգ է encapsulation-ը, որը վերաբերում է իրականացման մանրամասները թաքցնելու և արտաքին աշխարհին միայն անհրաժեշտ ինտերֆեյսները բացահայտելու պրակտիկային: Դրան կարելի է հասնել փակումների միջոցով, որոնք գործառույթներին թույլ են տալիս մուտք գործել փոփոխականներ իրենց արտաքին համատեքստում նույնիսկ արտաքին ֆունկցիայի վերադարձից հետո: Օրինակ՝</p>    
    
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

<p>Այս օրինակում Counter ֆունկցիայի կոնստրուկտորը ստեղծում է օբյեկտներ increment և decrement մեթոդներով, որոնք մուտք են գործում count մասնավոր փոփոխականը փակման միջոցով: Սա ապահովում է, որ փոփոխականների քանակը թաքցված է արտաքին աշխարհից և կարող է միայն հասանելի լինել Counter օբյեկտի կողմից տրամադրված մեթոդների միջոցով:</p>    
    
<p><b>Օբյեկտ-կողմնորոշված ծրագրավորում (OOP) պարզունակ արժեքներով JavaScript ES5-ում</b></p>    
    
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age, gender</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p><span className='blueviole'>this</span>.gender = gender;</p>

  <p><span className='blueviole'>this</span>.printDetails = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Անուն: "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'console.log'}(<span className='red'>"Տարիք: "</span> + <span className='blueviole'>this</span>.age);</p>

  <p>{'console.log'}(<span className='red'>"Սեռ: "</span> + <span className='blueviole'>this</span>.gender);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Արմեն"</span>, <span className='blue'>25</span>, <span className='red'>"արական"</span>); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Սեդա"</span>, <span className='blue'>30</span>, <span className='red'>"իգական"</span>); </p>

  <p>{'person1.printDetails();'}</p>

  <p>{'person2.printDetails();'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>bool</span> = <span className='blueviole'>new</span> Boolean(<span className='blue'>true</span>);</p>

  <p>{'console.log'}(bool.valueOf()); <span className='darkgreen'> // true</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='blueviole'>new</span> String(<span className='red'>"Բարեւ"</span>); </p>

  <p>{'console.log'}(str.concat(<span className='red'>" Աշխարհ"</span>)); <span className='darkgreen'>// "Բարեւ Աշխարհ"</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>num</span> = <span className='blueviole'>new</span> Number(<span className='blue'>10</span>);</p>

  <p>{'console.log'}(num.valueOf() + <span className='blue'>5</span>); <span className='darkgreen'>// 15</span></p>
</code>    
    
<p>Այս օրինակում մենք սահմանում ենք Person կոնստրուկտոր ֆունկցիա՝ անձի օբյեկտներ ստեղծելու համար Անուն, Տարիքը և Սեռը հատկություններով: Մենք նաև սահմանում ենք printDetails մեթոդը Person օբյեկտի վրա՝ անձի մասին մանրամասներ տպելու համար:</p>    
    
<p>Այնուհետև մենք ստեղծում ենք երկու Person օբյեկտ՝ օգտագործելով կոնստրուկտոր ֆունկցիան և յուրաքանչյուր օբյեկտի վրա կանչում ենք printDetails մեթոդը:</p>

<p>Այնուհետև մենք ստեղծում ենք Boolean, String և Number օբյեկտներ՝ օգտագործելով իրենց համապատասխան կոնստրուկտոր ֆունկցիաները և ցուցադրում դրանց որոշ մեթոդներ, ինչպիսիք են valueOf, concat և հիմնական թվաբանական գործողություններ:</p>

<p><b>JavaScript ES5-ում մենք կարող ենք օբյեկտներ ստեղծել՝ օգտագործելով Object և Array կոնստրուկտոր ֆունկցիաները: Սա OOP-ի ձև է, որը կոչվում է կոնստրուկտորների վրա հիմնված օբյեկտների ստեղծում:</b></p>

<p> ֆունկցիայի օգտագործմամբ օբյեկտ ստեղծելու համար մենք օգտագործում ենք new հիմնաբառը, որին հաջորդում է ֆունկցիայի անունը: Օրինակ, օբյեկտ ստեղծելու համար, օգտագործելով Object constructor ֆունկցիան, կարող ենք անել հետևյալը.</p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>person</span> = <span className='blueviole'>new</span> Object(); </p>

  <p> person.name = <span className='red'>"Արմեն"</span>; </p>

  <p>person.age = <span className='blue'>30</span>;</p>

  <p>person.job = <span className='red'>"Ծրագրավորող"</span>;</p>
</code>

<p>Վերոհիշյալ օրինակում մենք ստեղծում ենք նոր օբյեկտ Person՝ օգտագործելով Object constructor ֆունկցիան: Այնուհետև մենք ավելացնում ենք հատկություններ այդ օբյեկտին՝ օգտագործելով կետային նշում:</p>

<p>Նմանապես, մենք կարող ենք զանգված ստեղծել՝ օգտագործելով Array կոնստրուկտոր ֆունկցիան՝</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [];</p>

  <p>arr.push(<span className='blue'>1</span>);</p>

  <p>arr.push(<span className='blue'>2</span>);</p>

  <p>arr.push(<span className='blue'>3</span>);</p>

  <p>console.log(arr); <span className='darkgreen'>// [1, 2, 3]</span></p>
</code>
    
<p>Վերոնշյալ օրինակում մենք ստեղծում ենք նոր զանգված՝ օգտագործելով Array կոնստրուկտորը: Այնուհետև մենք տարրեր ենք ավելացնում այս զանգվածին՝ օգտագործելով push մեթոդը:</p>    
    
<p>Կոնստրուկտորների վրա հիմնված օբյեկտների ստեղծումը օգտակար է, երբ մենք պետք է ստեղծենք նույն տիպի բազմաթիվ օբյեկտներ: Մենք կարող ենք սահմանել կոնստրուկտոր, որը սահմանում է օբյեկտի հատկությունների սկզբնական արժեքները, այնուհետև ստեղծել նոր օբյեկտներ՝ օգտագործելով այդ կոնստրուկտորը:</p>    

<p>Օրինակ, ենթադրենք, որ ուզում ենք ստեղծել մեքենաներ, որոնք ներկայացնում են մեքենաներ: Մենք կարող ենք սահմանել հետևյալ կոնստրուկտորը՝</p>    
    
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model, year</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make;</p>

  <p><span className='blueviole'>this</span>.model = model;</p>

  <p><span className='blueviole'>this</span>.year = year;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda"</span>, <span className='red'>"Civic"</span>, <span className='blue'>2020</span>);</p>


  <p><span className='blueviole'>var</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota"</span>, <span className='red'>"Corolla"</span>, <span className='blue'>2021</span>);</p>
</code>    

<p>Վերոհիշյալ օրինակում մենք սահմանում ենք Car կոնստրուկտորը, որն ընդունում է երեք պարամետր (ապրանքանիշը, մոդելը և տարին) և սահմանում է օբյեկտի համապատասխան հատկությունները՝ օգտագործելով this. Այնուհետև մենք ստեղծում ենք մեքենայի երկու օբյեկտ (car1 և car2), օգտագործելով այս կոնստրուկտորը:</p>

<p><b>OOP I new RegExp()</b></p>    
    
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>'\\w', 'g'</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>matches</span> = str.match(regex);</p>

  <p>{'console.log(matches);'} <span className='darkgreen'>// ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d"]</span></p>
</code>    

<p>Վերոհիշյալ օրինակում մենք ստեղծում ենք կանոնավոր արտահայտություն, որը համապատասխանում է ցանկացած բառի նիշին (\w) և օգտագործում է g ֆլագը գլոբալ որոնում կատարելու համար: Այնուհետև մենք օգտագործում ենք match() մեթոդը՝ str-ում բոլոր համընկնումները գտնելու համար: Ի վերջո, մենք տպում ենք համընկնումների զանգվածը վահանակի վրա:</p>    
    
<p>Նկատի ունեցեք, որ մենք պետք է էկրանավորենք հակադարձ սիմվոլ, երբ ռեգեքսի օրինակը որպես տող փոխանցենք RegExp կոնստրուկտորին։ Դա պայմանավորված է նրանով, որ հակադարձ սիմվոլը օգտագործվում է կանոնավոր արտահայտություններում հատուկ նիշերից խուսափելու համար, և մեզ անհրաժեշտ է նաև այն էկրանավորել տողում:</p>

<p><b>Prototype __proto__</b></p>

<p>Prototype-based-ը JavaScript-ի հիմնարար հասկացություն է, որը թույլ է տալիս օբյեկտներին ժառանգել հատկություններ և մեթոդներ այլ օբյեկտներից: JavaScript-ի յուրաքանչյուր օբյեկտ ունի նախատիպ, որը ևս մեկ օբյեկտ է, որից այն ժառանգում է հատկություններ և մեթոդներ:</p>

<p>ES5-ում դուք կարող եք ստեղծել նախատիպ՝ օգտագործելով Object.create() մեթոդը, որն ընդունում է օբյեկտը որպես պարամետր և ստեղծում է նոր օբյեկտ՝ նախատիպով սահմանված այդ օբյեկտի վրա: Այնուհետև կարող եք նախատիպի օբյեկտին ավելացնել հատկություններ և մեթոդներ, որոնք կժառանգվեն նրա նախատիպով ստեղծված բոլոր օբյեկտների կողմից:</p>

<p>Person օբյեկտի համար նախատիպի ստեղծման օրինակ.</p>

<code>
  <p><span className='blueviole'>var</span> personPrototype = {'{'}</p>

  <p>greeting: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Բարեւ, իմ անունն է "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'} ,'}</p>

  <p>farewell: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"Ցտեսություն!"</span>);</p>

  <p>{'}'}</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>john</span> = Object.create(personPrototype); </p>

  <p>john.name = <span className='red'>"Ջոն"</span>;</p>

  <p>john.greeting(); <span className='darkgreen'>// Արդյունք՝ "Բարև, իմ անունն է Ջոն "</span></p>
</code> 
    
<p>Այս օրինակում մենք նախ սահմանում ենք personPrototype օբյեկտը greeting() մեթոդով և farwell() մեթոդով: Այնուհետև մենք ստեղծում ենք նոր Person - john օբյեկտ՝ կանչելով Object.create(personPrototype) և նրա անվան հատկությունը դնելով "Ջոն": Քանի որ john-ը ստեղծվել է personPrototype-ով որպես նախատիպ, այն ժառանգում է greeting() մեթոդը նախատիպի օբյեկտից: և կարող է այն կանչվել john.greeting():</p>    

<p><b>instanceof</b></p>

<p>ES5 JavaScript-ում instanceof-ը օպերատոր է, որն օգտագործվում է ստուգելու համար՝ արդյոք օբյեկտը պատկանում է որոշակի դասի, թե ոչ։ Այն վերադարձնում է բուլյան՝ ցույց տալով, թե արդյոք օբյեկտը նշված դասի կամ դրա ենթադասերի օրինակ է:</p>

<p>object instanceof constructor</p>

<p>Այստեղ object-ը օբյեկտի անունն է, որը պետք է ստուգվի, իսկ constructor-ը կոնստրուկտորի կամ դասի անունն է։ Instanceof օպերատորը ստուգում է օբյեկտի նախատիպային շղթան և վերադարձնում true, եթե օբյեկտը կոնստրուկտորի կամ դասի օրինակ է, հակառակ դեպքում այն ​​վերադարձնում է false</p>

<p>օրինակ՝</p>

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

<p>Այս օրինակում մենք սահմանում ենք երկու դաս՝ Animal և Dog: Dog-ը ժառանգում է Animal-ից: Մենք ստեղծում ենք նոր Dog օբյեկտ և ստուգում, թե արդյոք դա ինչպես Dog-ի, այնպես էլ Animal-ի օրինակ է՝ օգտագործելով instanceof օպերատորը: Երկու ստուգումները վերադարձնում են true, քանի որ myDog-ը երկու դասերի օրինակն է:</p>

<p>Վերջապես, instanceof-ն օգտագործվում է որոշելու համար, թե արդյոք օբյեկտը որոշակի դասի կամ դրա ենթադասերի օրինակ է՝ ստուգելով դրա նախատիպային շղթան:</p>



    </div>
  )
}




export default  AmEs5_3;