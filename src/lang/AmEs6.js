import React from 'react'

function AmEs6() {
  return (
    <div>
<h1 className='hy'>JavaScript ES6 (ECMAScript 2015) JavaScript-ի վեցերորդ տարբերակն է, որը նոր հնարավորություններ և բարելավումներ է բերում լեզվին: Ահա ES6-ի մի քանի հիմնական առանձնահատկություններ.</h1>

<p>1. <b className='blueviole'>let</b> և <b className='blueviole'>const</b>. սրանք փոփոխականների նոր հայտարարություններ են, որոնք փոխարինում են հին հիմնաբառին <b className='blueviole'>var</b>. Դրանք ապահովում են շրջանակի ավելի լայն տեսանելիություն և օգնում են խուսափել սովորական սխալներից, որոնք կարող են առաջանալ <b>var</b>-ի հետ:</p>    
    
<p>2. Arrow functions. Սլաքների ֆունկցիաները ապահովում են ավելի կարճ սինտաքս ֆունկցիայի արտահայտությունները գրելու համար: Նրանք նաև բառապաշարով կապում են <b>this</b> արժեքը՝ հեշտացնելով  ֆունկցիայի շրջանակը:</p>    
    
<p>3. Template literals․ Սա հեշտացնում է դինամիկ բովանդակությամբ տողեր ստեղծելը:</p>   

<p>4. Spread operator. Spread(Ընդլայնման) օպերատորը ներկայացված է երեք կետով (...): Այն թույլ է տալիս ընդլայնել կրկնվողները, ինչպիսիք են զանգվածի կամ տողերի արտահայտությունները, այն օբյեկտներում, որտեղ ակնկալվում են զրոյական կամ ավելի արգումենտներ (ֆունկցիայի կանչերի համար) կամ էլեմենտներ (array literals-ի համար):</p>    
    
<p>5. Destructuring. Destructuring-ը հնարավորություն է տալիս զանգվածներից և օբյեկտներից տվյալներ հանելու առանձին փոփոխականների մեջ՝ օգտագործելով սղագրության շարահյուսությունը:</p>

<p>6. Classes. ES6-ը ներկայացրեց կլասի նոր սինտաքս, որն ապահովում է օբյեկտներ ստեղծելու և դրանք սահմանելու ավելի հեշտ և ինտուիտիվ եղանակ:</p>

<p>7. Modules. մոդուլները կոդն առանձին, ինքնուրույն ֆայլերի մեջ կազմակերպելու միջոց են, որոնք կարելի է հեշտությամբ ներմուծել և արտահանել ըստ անհրաժեշտության: Սա թույլ է տալիս ավելի արդյունավետ զարգացնել և սպասարկել խոշոր հավելվածները: ES6-ը ներկայացրեց ստանդարտացված մոդուլի սինտաքս՝ օգտագործելով <b>import</b> և <b>export</b> հիմնաբառերը, ինչը հեշտացնում է կոդերի փոխանակումը բազմաթիվ ֆայլերի և նախագծերի միջև:</p>

<p>8. Classes. ES6-ը ներկայացրեց կլասների ստեղծման նոր սինտաքս, որը թույլ է տալիս օբյեկտի վրա հիմնված ծրագրավորում JavaScript-ում: Կլասները կարող են օգտագործվել հատկություններով և մեթոդներով օբյեկտներ ստեղծելու համար, ինչպես նաև կարող են ժառանգել այլ կլասներից: Այս սինտաքսը հեշտացնում է բարդ կոդ գրելու և պահպանելու համար, ինչպես նաև կարող է բարելավել ձեր կոդի ընթեռնելիությունն ու կրկնակի օգտագործման հնարավորությունը:</p>

<p>9. Promises. Խոստումները JavaScript-ի ասինխրոն գործողությունները վարելու միջոց են: Նրանք ապահովում են ասինխրոն գործողության արդյունքը մշակելու ստանդարտացված եղանակ՝ կա՛մ թույլ տալով այն, կա՛մ մերժելով արժեքը: Խոստումները կարող են համակցվել և զուգակցվել այլ գործառույթների հետ, ինչպիսիք են async/wait-ը՝ ավելի բարդ և հզոր ասինխրոն հոսքեր ստեղծելու համար:</p>

<p>Սրանք ES6-ում ներկայացված բազմաթիվ ֆունկցիաներից ընդամենը մի քանիսն են: Այս ֆունկցիաները սովորելը և օգտագործելը կարող է զգալիորեն բարելավել ձեր JavaScript կոդը և ձեր զարգացման գործընթացը դարձնել ավելի արդյունավետ:</p>

<p><b>ES6 փոփոխականներ</b></p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>num</span> = <span className='blue1'>10</span>; </p>

    <p>{'console'}.<span className='blue'>log</span>(num);<span className='green'> // 10</span></p>

    <p>{'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>num2</span> = <span className='blue1'>20</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(num2); <span className='green'>// 20</span> </p>

    <p>{'}'}</p>

    <p><span className='green'>// num2 սահմանված չէ</span></p>

    <p>{'console'}.<span className='blue'>log</span>(num); <span className='green'>// 10</span></p>
 </code>

 <p>Այս կոդը օգտագործում է ES6 փոփոխականներ: Առաջին տողը ստեղծում է "num" անվամբ հաստատուն փոփոխական և դրան վերագրում է 10 արժեքը: Երկրորդ տողը սկսում է կոդի բլոկ՝ օգտագործելով գանգուր փակագծեր, ինչը նոր հատկություն է ES6-ում:</p>

 <p>Այս բլոկի ներսում հայտարարվում է "num2" անունով նոր փոփոխական՝ օգտագործելով "const" հիմնաբառը և վերագրվում է 20 արժեքը: Այս փոփոխականը հասանելի է միայն բլոկի ներսում, քանի որ այն հայտարարվել է "const" հիմնաբառի միջոցով, որը ստեղծում է փոփոխական՝ բլոկի շրջանակով։ Երրորդ տողը վահանակում տպում է "num2 արժեքը, որը կլինի 20:</p>

 <p>Բլոկից հետո կանչվում է մեկ այլ console.log հայտարարություն, սակայն այս անգամ այն ​​տպում է "num" փոփոխականի արժեքը, որը գտնվում է բլոկից դուրս և, հետևաբար, հասանելի: Վերջապես, կոդը փորձում է դուրս բերել "num2" արժեքը, բայց քանի որ այն հայտարարվել է բլոկի ներսում և հասանելի չէ դրանից դուրս, այն սխալ կթողնի՝ ասելով "num2-ը սահմանված չէ":</p>

 <p><b>ES6 փոփոխականներ</b></p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>//Identifier (name) արդեն հայտարարված է</span></p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>

    <p>{'}'}</p>

   <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
 </code>

 <p>Այս կոդը հայտարարում է հաստատուն փոփոխական "name" և այնուհետև փորձում է այն վերասահմանել այլ արժեքով, ինչի արդյունքում սխալ է առաջանում "Identifier 'name' has already been declared":</p>

 <p>Այնուհետև կոդը վերասահմանում է "name" որպես "Leo" և ստեղծում է բլոկի շրջանակ՝ օգտագործելով if օպերատորը: Բլոկի ներսում հայտարարվում է նոր "name" փոփոխական՝ "Mike" արժեքով, որն այնուհետև տպվում է կոնսոլում: Բլոկից դուրս "Leo" արժեքով "name" փոփոխականը մնում է շրջանակի մեջ և տպագրվում է նաև կոնսոլում:</p>

 <p>Այսպիսով, այս կոդի արդյունքը բաղկացած է սխալ հաղորդագրությունից՝ "Identifier 'name' has already been declared" , որին հաջորդում են "Mike" և "Leo":</p>

 <p><b>ES6 փոփոխականներ</b></p>

 <code>
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='green'>// Ժամանակավոր գոտի մինչև հայտարարումը</span></p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>// value սահմանված չէ</span></p>

    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'} '}</p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//undefined</span></p>
  </code>

  <p><b>let</b> հիմնաբառը օգտագործվում է բլոկի մեջ <b>value</b> փոփոխական հայտարարելու համար: Այնուամենայնիվ, երբ <b>typeof value</b> կանչվում է բլոկի ներսում, նախքան <b>value</b> հայտարարելը, JavaScript-ը տալիս է ReferenceError, քանի որ փոփոխականը դեռ սահմանված չէ: Սա կոչվում է Pre-Declaration Temporal Zone, որը վերաբերում է փոփոխականի ստեղծման և դրա հայտարարման միջև ընկած ժամանակահատվածին, երբ այն հնարավոր չէ մուտք գործել: <b>console.log(typeof value)</b> հայտարարությունը բլոկից դուրս վերադարձնում է <b>undefined</b>, քանի որ <b>value</b> սահմանված չէ ընթացիկ շրջանակում:</p>

  <p>Երկրորդ կոդի բլոկում՝</p>

  <code>
      <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>

      <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

      <p>{'}'}</p>
  </code>

  <p><b>value</b> փոփոխականը հայտարարվում է և բլոկի ներսում նշանակվում է <b>10</b> արժեքը: Այնուամենայնիվ, քանի որ բլոկը գլոբալ տիրույթում չէ, և <b>value</b> չի վերադարձվում կամ վերագրվում է արտաքին շրջանակի փոփոխականին, <b>value</b> արժեքը փաստացիորեն կորչում է, երբ բլոկը ավարտվում է:</p >

  <p><b>ES6 փոփոխականներ</b></p>

  <p>Այս կոդը ցույց է տալիս փոփոխական շրջանակի տարբերությունը, երբ օգտագործվում է var և let for ցիկլում</p>

  <code>
      <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>
    
      <p><span className='green'>// Կոդն այստեղ</span></p>

      <p>{'}'}</p>

      <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>
 
      <hr/>
      
      <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

      <p><span className='green'>// Կոդն այստեղ</span></p>

      <p>{' }'}</p>

      <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// i սահմանված չէ</span> </p>
    </code>

    <p>Առաջին օրինակում i փոփոխականը հայտարարվում է var-ի միջոցով, որն ունի ֆունկցիայի շրջանակ: Սա նշանակում է, որ փոփոխականը գոյություն ունի for ցիկլից դուրս և, հետևաբար, i-ի արժեքը 5 է, երբ տպվում է կոնսոլում:</p>

    <p>Երկրորդ օրինակում i-ն հայտարարվում է let-ի միջոցով, որն ունի բլոկի մակարդակի շրջանակ: Սա նշանակում է, որ փոփոխականը գոյություն ունի միայն for loop բլոկի ներսում և հասանելի չէ դրանից դուրս: Այսպիսով, ցիկլից դուրս կոնսոլում i մուտքագրելը հանգեցնում է հղման սխալի՝ ասելով, որ i-ն սահմանված չէ:</p>

    <p><b>ES6 Spread օպերատոր</b></p>

    <p>Spread օպերատորը ES6-ում ներդրված նոր ֆունկցիա է, որը թույլ է տալիս տարածել կամ ընդլայնել կրկնվող թվերը առանձին տարրերի: Այս կրկնվողը կարող է լինել զանգված, տող կամ ցանկացած այլ օբյեկտ:</p>

    <b>Spread օպերատորը ներկայացված է երեք կետերով (...) և կարող է օգտագործվել տարբեր համատեքստերում: Մի քանի օրինակներ.</b>

    <p>1. Օգտագործելով Spread օպերատորը՝ զանգվածները միացնելու համար՝</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>

    <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
  </code>

  <p>2. Օգտագործելով Spread օպերատորը՝ զանգվածի պատճեն ստեղծելու համար՝</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>

    <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
  </code>

  <p>3.Օգտագործելով Spread օպերատորը՝ արգումենտներ փոխանցելու ֆունկցիային՝</p>

  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> a + b + c; </p>

    <p>{'}'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>

    <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
 </code>

 <p>4. Օգտագործելով Spread օպերատորը՝ օբյեկտները միացնելու համար՝ </p>

 <code>
      <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>

      <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>

      <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>

      <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
  </code>

  <p>Այս բոլոր օրինակներում spread օպերատորն օգտագործվում է կրկնվող օբյեկտը առանձին տարրերի ընդլայնելու համար: Սա օգտակար ֆունկցիա է, որը կարող է պարզեցնել ձեր կոդը և այն ավելի ընթեռնելի դարձնել:</p> 

  <p><b>Destructuring ES6-ում</b></p>

  <p>Destructuring-ը ES6-ում օբյեկտներից կամ զանգվածներից արժեքներ հանելու և փոփոխականներին դրանք ավելի հակիրճ և ընթեռնելի կերպով վերագրելու միջոց է:</p>

  <p>Օրինակ, դիտարկեք հետևյալ օբյեկտը.</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>person</span> = {'{'}</p>

    <p>name: <span className='red'>'John Doe'</span>, </p>

    <p>age: <span className='blue1'>30</span>,</p>

    <p> email: <span className='red'>'john.doe@example.com'</span></p>

    <p>{'};'}</p>
 </code>  

 <p>Հասանելիություն ստանալ յուրաքանչյուր փոփոխականին առանձին-առանձին</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = person.name;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>age</span> = person.age; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>email</span> = person.email; </p>
 </code> 

 <p>Դուք կարող եք օգտագործել դեստրուկտուրիզացիան յուրաքանչյուր փոփոխականի հատկություն  ավելի հակիրճ ձևով գրելու համար.</p>

 <code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>name, age, email</span> {'}'} = person; </p></code>

 <p>Սա ստեղծում է երեք փոփոխական <b>(name, age և email)</b> և սահմանում դրանք person օբյեկտի համապատասխան հատկություններով:</p>

 <p>Դուք կարող եք նաև օգտագործել դեստրուկտուրիզացիան զանգվածներով։ Օրինակ՝</p>

  <code>
      <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

      <p><span className='blueviole'>const</span> [<span className='blue'>first</span>, <span className='blue'>second</span>, ...<span className='blue'>rest</span>] = numbers; </p>

      <p>{'console'}.<span className='blue'>log</span>(first); <span className='green'>// 1</span></p>

      <p>{'console'}.<span className='blue'>log</span>(second); <span className='green'>// 2</span></p>

      <p>{'console'}.<span className='blue'>log</span>(rest); <span className='green'>// [3, 4, 5]</span></p>
  </code>

  <p>Այս կոդը ստեղծում է երեք փոփոխական <b>(first, second և rest)</b> և նրանց վերագրում է <b>numbers</b> զանգվածի առաջին երկու տարրերի և մնացած տարրերի արժեքները, համապատասխանաբար:</p>

  <p>Դեստրուկտուրիզացիան կարող է օգտագործվել նաև տեղադրված օբյեկտների և զանգվածների հետ, և նույնիսկ կարող է ունենալ լռելյայն արժեքներ վերագրված փոփոխականներին, եթե դեստրուկտուրիզացիայի արժեքը սահմանված չէ:</p>

  <p>Ընդհանուր առմամբ, դեստրուկտուրիզացիան ES6-ի հզոր հատկանիշ է, որը կարող է օգնել ձեր կոդը դարձնել ավելի ընթեռնելի և հակիրճ:</p>

  <p><b>Ցիկլ ES6 (for - of)</b></p>  

  <p>ES6-ը JavaScript-ում ներկայացրեց ցիկլի նոր տեսակ, որը կոչվում է <b>for...of</b>: Այս ցիկլն օգտագործվում է կրկնվող տարրերի միջով անցնելու համար, ինչպիսիք են զանգվածները, տողերը, քարտեզները և այլն:</p>

  <p>Ցիկլ <b>for...of</b>-ի օգտագործման օրինակ զանգվածի վրա կրկնելու համար.</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(num);</p>

    <p>{'} '}</p>
  </code>

  <p>Այս օրինակում ցիկլ <b>for...of</b> կրկնվում է <b>arr</b> զանգվածի յուրաքանչյուր տարրի վրա և տպում այն ​​կոնսոլում:</p> 

  <p>Կարող ենք նաև օգտագործել ցիկլ <b>for...of</b> տողի նիշերի վրա կրկնելու համար.</p>
 
  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"Բարեւ, աշխարհ!"</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(char);</p>

    <p>{'}'}</p>
 </code>

 <p>Այս օրինակում ցիկլ <b>for...of</b> կրկնում է <b>str</b> տողի յուրաքանչյուր նիշի վրա և այն դուրս է բերում կոնսոլում:</p>

 <p>Կարող ենք նաև օգտագործել ցիկլ <b>for...of</b>՝ Map օբյեկտի բանալիների կամ արժեքների վրա կրկնելու համար.</p>

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

  <p>Այս օրինակում ցիկլ <b>for...of</b> կրկնվում է <b>map</b> օբյեկտի յուրաքանչյուր բանալի-արժեքի զույգի վրա և տպում դրանք կոնսոլում:</p>

  <p>Ընդհանուր առմամբ, ցիկլ <b>for...of</b>-ը JavaScript լեզվի օգտակար հավելում է, որը հեշտացնում է կրկնվող օբյեկտների վրա  կրկնությունները:</p>

  <p><b>ES6 function rest parameter</b></p>

  <p>ES6 ֆունկցիայի մնացորդների պարամետրը ֆունկցիոնալություն է, որը թույլ է տալիս ֆունկցիային ընդունել անորոշ թվով արգումենտներ որպես զանգված: Այն նշվում է երեք կետով (...) և պարամետրի անունով:</p>

  <p>Մնացորդների պարամետրի օգտագործման օրինակ.</p>

  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(...<span className='blue'>numbers</span>) {'{'}</p>

    <p><span className='blueviole'>let</span> <span className='blueviole'>result</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>number</span> <span className='blueviole'>of</span> numbers) {'{'}</p>

    <p>{'result += number;'}</p>

    <p>&nbsp;{'}'}</p>

    <p><span className='blueviole'>return</span> result; </p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// Արդյունք՝ 6</span></p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'> // Արդյունք՝ 22</span></p>
 </code>

 <p>Վերոնշյալ օրինակում sum ֆունկցիան ընդունում է անորոշ թվով արգումենտներ՝ օգտագործելով ...numbers residual arguments պարամետրը: Այնուհետև այն կրկնվում է թվերի զանգվածի միջով՝ օգտագործելով for...of ցիկլ՝ արժեքները ավելացնելու և արդյունքը վերադարձնելու համար:</p>

 <p>Մնացորդային արգումենտների տարբերակը օգտակար է, երբ ցանկանում եք գրել ֆունկցիա, որը կարող է մշակել փոփոխական թվով արգումենտներ՝ առանց հստակորեն նշելու յուրաքանչյուր արգումենտ: Այն հաճախ օգտագործվում է այն ֆունկցիաներում, որոնք մանիպուլյացիա են անում զանգվածներով կամ մաթեմատիկական գործողություններ կատարում մի շարք արժեքների վրա:</p>

 <p>Ընդհանուր առմամբ, մնացորդային արգումենտների պարամետրը հարմար հատկություն է, որը հեշտացնում է ավելի ճկուն և բազմակողմանի ֆունկցիաներ գրելը:</p>

 <p><b>Սլաքով ֆունկցիաներ(Arrow functions)</b></p>

 <p><b>Սլաքով ֆունկցիաները(Arrow ֆունկցիաներ)</b></p><p>Arrow ֆունկցիաները JavaScript-ում ֆունկցիաները գրելու սղագրության եղանակ են, որը ներկայացված է ES6-ում (ECMAScript 2015): Դրանք ապահովում են ավելի կոմպակտ շարահյուսություն, քան ավանդական ֆունկցիաների արտահայտությունները, ինչը հեշտացնում է կոդերի ընթերցումն ու գրությունը:</p>

 <p>Ավանդական ֆունկցիայի արտահայտության օրինակ, որը վերցնում է երկու պարամետր և վերադարձնում դրանց գումարը.</p>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b</span>) {'{'}</p>
    
    <p><span className='blueviole'>return</span> a + b; </p>

    <p>{'}'}</p>
 </code>

 <p>Նույն ֆունկցիան կարելի է գրել սլաքների միջոցով հետևյալ կերպ.</p>

 <code><p><span className='blueviole'>const</span> <span className='blue'>sum</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>

 <p>Այս օրինակում ֆունկցիան սահմանվում է <b>{'=>.'}</b> սլաքի շարահյուսության միջոցով: <b>(a, b)</b> պարամետրերը փակված են փակագծերում, որին հաջորդում է <b>{'=>'}</b> սլաքը և <b>a + b ֆունկցիայի հիմնական մասը:</b> Քանի որ մարմնի ֆունկցիան բաղկացած է մեկ օպերատորից, գանգուր փակագծերը և <b>return</b> հիմնաբառը կարող են բաց թողնել:</p>

 <p>Սլաքով ֆունկցիաները կարող են օգտագործվել նաև որպես անանուն ֆունկցիաներ, վերագրվել փոփոխականներին և որպես արգումենտ փոխանցվել այլ ֆունկցիաներին: Ահա սլաքով ֆունկցիայի օրինակ, որը վերցնում է զանգված և վերադարձնում նոր զանգված՝ յուրաքանչյուր տարր կրկնապատկելով.</p>

 <code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'}arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

 <p>Այս օրինակում սլաքով ֆունկցիան {' (item => item * 2)'} փոխանցվում է որպես արգումենտ <b>map()</b> մեթոդին, որը կիրառում է ֆունկցիան յուրաքանչյուր տարրի վրա: զանգված և վերադարձնում է նոր զանգված՝ փոխված արժեքներով:</p>

 <p>Ընդհանուր առմամբ, սլաքով ֆունկցիաները ապահովում են JavaScript-ում գործառույթներ գրելու ավելի հակիրճ և ընթեռնելի եղանակ:</p>

 <p><b>Նախատիպ(Prototype)</b></p>

 <p> JavaScript-ում յուրաքանչյուր օբյեկտ ունի ներքին հատկություն, որը կոչվում է [[Prototype]] (երբեմն կոչվում է «dunder proto»), որը վերաբերում է մեկ այլ օբյեկտի կամ null: Այս հատկությունն օգտագործվում է ժառանգությունն իրականացնելու համար և թույլ է տալիս օբյեկտներին ժառանգել հատկություններ և մեթոդներ իրենց նախատիպերից:</p>

 <p>ES5-ում դուք կարող եք նախատիպ ստեղծել՝ օգտագործելով ֆունկցիաների կոնստրուկտորները և նախատիպի հատկությունը: Օրինակ՝</p>

 <code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue1'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age; </p>

  <p>&nbsp;{'}'}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Բարեւ, իմ անունն է</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>ես </span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>տարեկան եմ.`</span>);</p>

  <p>{'} '}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Ջոն"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Բարեւ, իմ անունն է Ջոն ես 30 տարեկան եմ."</span></p>
</code>

<p>Այս օրինակում մենք ստեղծում ենք <b>Person</b> անունով ֆունկցիայի կոնստրուկտոր, որն ընդունում է <b>name</b> և <b>age</b> որպես արգումենտ և սահմանում դրանք որպես օբյեկտի հատկություններ: . Այնուհետև մենք ավելացնում ենք <b>greet</b> մեթոդը <b>Person</b> նախատիպին` օգտագործելով <b>Person.prototype</b> օբյեկտը: Այս մեթոդը ողջույնի հաղորդագրություն է գրում կոնսոլում, որը ներառում է անձի անունը և տարիքը:</p>

<p>Երբ ստեղծում եք նոր օբյեկտ՝ օգտագործելով <b>new</b> հիմնաբառը և <b>Person</b> կոնստրուկտորը, նոր օբյեկտի [[Prototype]] հատկությունը ցույց կտա <b>Person.prototype</b>: Սա թույլ է տալիս նոր օբյեկտին ժառանգել <b>greet</b> մեթոդն իր նախատիպից:</p>

<p>ES6-ում դուք կարող եք օգտագործել <b>class</b> սինտաքսը` դասը և դրա նախատիպը սահմանելու համար: Ահա նույն օրինակը, օգտագործելով ES6 կլասը.</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Person</span> {'{'}</p>

  <p>constructor(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>{'greet() { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Բարեւ, իմ անունն է</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'> ես </span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>տարեկան եմ.`</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Ջոն"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Բարեւ, իմ անունն է Ջոն ես 30 տարեկան եմ."</span></p>
</code>

<p>Այս օրինակում մենք սահմանում ենք <b>Person</b> դասը կոնստրուկտորով, որը վերցնում է <b>name</b> և <b>age</b> և սահմանում դրանք որպես օբյեկտի հատկություններ: Այնուհետև մենք սահմանում ենք <b>greet</b> մեթոդը անմիջապես դասի վրա: Կափարիչի տակ <b>class</b> շարահյուսությունը ստեղծում է ֆունկցիայի կոնստրուկտոր և իր նախատիպը դնում դասի նախատիպի վրա:</p>

<p>Նախատիպերի հայեցակարգն օգտագործվում է ինչպես ES5-ում, այնպես էլ ES6-ում՝ JavaScript-ում ժառանգությունն իրականացնելու համար, սակայն նախատիպերի սահմանման շարահյուսությունը տարբեր է: ES6 class-ը ապահովում են ավելի հակիրճ և ինտուիտիվ սինտաքս՝ դասերի ստեղծման և դրանց նախատիպերը սահմանելու համար, մինչդեռ ES5 նախատիպերը ապահովում են ավելի ճկունություն և վերահսկողություն նախատիպերի սահմանման վերաբերյալ:</p>

<p><b>Class (ստատիկ մեթոդներ)</b></p>

<p>ES6-ը ներկայացրեց կլասենրը որպես օբյեկտների շաբլոններ ստեղծելու միջոց: Կլասները շաբլոն են տվյալների և ֆունկցիոնալության մեջ ներառող օբյեկտներ ստեղծելու համար: Կլասների առանձնահատկություններից մեկը ստատիկ մեթոդներ սահմանելու հնարավորությունն է, որոնք կանչվում են հենց կլասի վրա, այլ ոչ թե կլասի օրինակի վրա:</p>

<p>Ստատիկ մեթոդը մեթոդ է, որը պատկանում է հենց կլասին, ոչ թե կլասի որևէ օրինակին: Այն կարող է կանչվել կլասի վրա՝ նախապես չստեղծելով կլասի օրինակ:</p>

<p>Ստատիկ մեթոդով կլասի օրինակ.</p>

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

<p>Վերոնշյալ օրինակում Car կլասը ունի ստատիկ մեթոդ compare: Այս մեթոդը որպես պարամետր վերցնում է երկու Car օբյեկտ և վերադարձնում է տող, որը ցույց է տալիս, թե արդյոք նրանք ունեն նույն ապրանքանիշը (մեքենա արտադրողը), թե ոչ: Համեմատելու մեթոդը կարելի է կանչել հենց Car կլասում, այլ ոչ թե կլասի օրինակում:</p>

<p>Նշեք, որ compare մեթոդը չի օգտագործում this հիմնաբառը, քանի որ մեթոդը չի կանչվում կլասի օրինակում: Փոխարենը, մեթոդը որպես պարամետր վերցնում է երկու Car օբյեկտ և համեմատում դրանց make հատկությունները:</p>

<p>ES5-ում ստատիկ մեթոդները կարող են սահմանվել կոնստրուկտոր ֆունկցիայի վրա՝ օգտագործելով կոնստրուկտորի ֆունկցիայի նախատիպ հատկությունը: Ահա մի օրինակ, թե ինչ տեսք կարող է ունենալ վերը նշված ES6 կլասը ES5-ում.</p>

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

<p>ES5-ի օրինակում compare մեթոդը սահմանվում է ուղղակիորեն Car constructor ֆունկցիայի վրա, այլ ոչ թե դրա նախատիպի հատկության վրա: Սա թույլ է տալիս կանչել մեթոդը հենց Car կոնստրուկտոր ֆունկցիայի վրա:</p>

<p><b>Սիմվոլ (Symbol)</b></p>

<p>ES6-ում Symbol-ը տվյալների նոր պարզունակ տեսակ է, որը ներկայացնում է եզակի նույնացուցիչ: Ի տարբերություն տողերի կամ թվերի, նիշերը երաշխավորված են լինել եզակի և անփոփոխ, ինչը նրանց դարձնում է օգտակար բանալիներ կամ օբյեկտների հատկություններ ստեղծելու համար, որոնք պետք է բացարձակապես եզակի լինեն:</p>

<p>Սիմվոլ ստեղծելու համար կարող եք օգտագործել <b>Symbol()</b> ֆունկցիան, օրինակ՝</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>    
    
<p>Դուք կարող եք նաև ավելացնել սիմվոլի նկարագրությունը, որպեսզի ավելի հեշտ դարձնեք այն հետագայում նույնականացնելը, օրինակ՝</p>   
    
<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Իմ սիմվոլը'</span>); </p></code>

<p>Սիմվոլները կարող են օգտագործվել որպես օբյեկտների բանալիներ կամ հատկություններ, օրինակ՝</p>   

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Իմ սիմվոլը'</span>); </p>

  <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>

  <p>{'obj[mySymbol]'} = <span className='red'>'Բարեւ, Աշխարհ!'</span>; </p>

  <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// Արդյունք՝ Բարեւ, Աշխարհ!</span> </p>
</code>

<p>Սիմվոլների օգտագործման հիմնական առավելություններից մեկն այն է, որ դրանք չեն կարող պատահաբար մուտք գործել կամ փոփոխվել, քանի որ դրանք եզակի են և չեն կարող պատճենվել: Սա դրանք դարձնում է իդեալական օբյեկտների անձնական կամ ներքին հատկություններ ստեղծելու համար:</p>

<p>Սիմվոլների մեկ այլ առավելությունն այն է, որ դրանք կարող են օգտագործվել հայտնի խորհրդանիշները սահմանելու համար (well-known symbols), որոնք ներկառուցված խորհրդանիշներ են, որոնք ունեն որոշակի նշանակություն կամ վարքագիծ լեզվում: Օրինակ, Symbol.iterator նշանն օգտագործվում է օբյեկտի համար լռելյայն իտերատոր սահմանելու համար:</p>

<p>Ընդհանուր առմամբ, սիմվոլները հզոր և ճկուն միջոց են ստեղծում եզակի նույնացուցիչներ ստեղծելու և JavaScript-ում օբյեկտների համար հատուկ վարքագիծ սահմանելու համար:</p>

<p><b>Promise (Խոստում)</b></p>

<p>Promise օբյեկտը ES6-ում ներդրված հատկանիշ է, որը թույլ է տալիս ավելի հեշտ և կազմակերպված կառավարել ասինխրոն գործողությունները: </p>

<p>Պարզ բառերով ասած, Promise-ը օբյեկտ է, որը ներկայացնում է արժեք, որը կարող է հասանելի չլինել տվյալ պահին, բայց հասանելի կլինի ապագայում: Այն ապահովում է ասինխրոն գործողությունների արդյունքները (օրինակ՝ API հարցումները կամ տվյալների բազայի հարցումները) կարգավորելու միջոց՝ առանց կատարման հիմնական շարանը արգելափակելու:</p>

<p>Promise-ը ունի երեք վիճակ՝ սպասում (pending), կատարված (fulfilled) կամ մերժված (rejected): Երբ Promise-ը սպասման վիճակում է, դա նշանակում է, որ այն գործողությունը, որը ներկայացնում է, դեռ չի ավարտվել: Երբ խոստումը կատարվում է, նշանակում է, որ գործողությունը հաջող է անցել, և արդյունքը հասանելի է: Երբ խոստումը մերժվում է, դա նշանակում է, որ գործողությունը ձախողվել է և առկա է սխալ:</p>

<p>Ահա API-ից տվյալներ ստանալու համար Promise-ի օգտագործման օրինակ.</p>

<code>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
</code>

<p>Այս օրինակում <b>fetch</b>-ը ֆունկցիա է, որը վերադարձնում է Promise, որը լուծվում է API-ի պատասխանով: <b>then</b> մեթոդը կանչվում է Promise-ի վրա, որն ընդունում է հետ կանչը, որը կատարվում է, երբ Promise-ը կատարվեց: Առաջին <b>then</b> հետ կանչը վերլուծում է պատասխանը որպես JSON և վերադարձնում այն: Երկրորդ <b>then</b> հետ կանչը տպում է վերլուծված տվյալները console-ում: <b>catch</b> մեթոդը կոչված է կարգավորելու ցանկացած սխալ, որը կարող է առաջանալ գործողության ընթացքում:</p>

<p>Խոստումները կարող են ստեղծվել նաև ձեռքով` օգտագործելով <b>Promise</b> կոնստրուկտորը:</p> 

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>

  <p>{"setTimeout(() => { "}</p>

  <p> resolve(<span className='red'>'Հաջողություն !'</span>) </p>

  <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>

  <p>{"}) "}</p>

  <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'> // Արդյունք՝ Հաջողություն!</span> </p>
</code>

<p>Այս օրինակում խոստումը ստեղծվում է մի ֆունկցիայի միջոցով, որն ընդունում է երկու պարամետր՝ <b>resolve և reject:</b> <b>resolve</b> ֆունկցիան կանչվում է մեկ վայրկյանից հետո արգումենտով <b>Հաջողություն</b>: <b>then</b> մեթոդը կանչվում է խոստման վրա՝ ընդունելով հետադարձ կապի ֆունկցիա, որը կկատարվի, երբ խոստումը կատարվի: Հետ կանչի ֆունկցիան արդյունքը գրում է console-ում:</p>



    
    
    </div>
  )
}

export default AmEs6