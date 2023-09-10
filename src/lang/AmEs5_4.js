import React from 'react'

function AmEs5_4() {
  return (
    <div>
    
    <h3>Ռեկուրսիա (Recursion)</h3>

    <p>Ռեկուրսիան ծրագրավորման տեխնիկա է, որի դեպքում ֆունկցիան իրեն կանչում է մինչև այն հասնում է բազային գործի: Այն հաճախ օգտագործվում է խնդիրների լուծման համար, որոնք կարելի է բաժանել ավելի փոքր, նմանատիպ ենթաառաջադրանքների:</p>
    
    <p>ES5 JavaScript-ում ռեկուրսիան կարող է օգտագործվել ծառի կամ ներկառուցված կառուցվածքի վրայով անցնելու, որոշակի հաշվարկներ կատարելու կամ մի շարք տարրերի բոլոր հնարավոր համակցությունները ստեղծելու համար:</p>
    
    <p>Ահա մի ֆունկցիայի օրինակ, որն օգտագործում է ռեկուրսիա՝ տրված թվի գործակիցը հաշվարկելու համար.</p>
    
    <code>
      <p> <span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

      <p><span className='blueviole'>if</span> (num {'<='}<span className='blue'> 1</span>) {'{'}</p>

      <p><span className='blueviole'>return</span> <span className='blue'>1</span>;</p>

      <p>{'}'}<span className='blueviole'> else</span> {'{'}</p>

      <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

      <p>{' }'}</p>

      <p>{'}'}</p>

      <p>{'console.log'}(factorial(<span className='blue'>5</span>)); <span className='darkgreen'>// Արդյունք՝ 120</span></p>
 </code>
  <p>Այս օրինակում factorial() ֆունկցիան իրեն կանչում է ավելի փոքր թվով, մինչև հասնի բազային գործի համարը {'<='} 1, որից հետո վերադարձնում է 1: Վերջնական արդյունքը հաշվարկվում է բոլոր վերադարձված արժեքները բազմապատկելով ​միմյանց։</p>

<p>Կարևոր է նշել, որ ռեկուրսիան կարող է ունենալ ինտենսիվ հիշողություն, հատկապես մեծ մուտքերի համար, ուստի կարևոր է ուշադիր ձևավորել ձեր ռեկուրսիվ գործառույթները և ապահովել, որ կա բազային պատյան՝ անսահման ցիկլերից խուսափելու համար:</p>

<p><b>Օրինակ</b> </p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

  <p><span className='blueviole'>if</span> (num === <span className='blue'>0</span> || num === <span className='blue'>1</span>) {'{'} </p>

  <p><span className='blueviole'>return</span> <span className='blue'>1</span>; </p>

  <p>{'}'} <span className='blueviole'>else</span> {'{'} </p>

  <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

  <p> {'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = factorial(<span className='blue'>5</span>);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// Արդյունք՝ 120</span></p>
</code> 

<p>
Թարմացված օրինակում մենք սահմանել ենք factorial ֆունկցիա, որն ընդունում է մեկ պարամետր՝ num . Ֆունկցիան նախ ստուգում է, արդյոք տրված թիվը հավասար է 0-ի կամ 1-ի, այդ դեպքում այն ​​անմիջապես վերադարձնում է 1: Հակառակ դեպքում, այն ռեկուրսիվորեն հաշվարկում է թվի գործակիցը` կանչելով նույն factorial ֆունկցիան num-ի նվազած արժեքով և բազմապատկելով այն ընթացիկ արժեքի համար.
Երբ մենք կանչում ենք factorial ֆունկցիան արգումենտ 5-ով, այն հաշվում է ռեկուրսիվորեն՝ իրեն կանչելով նվազող արժեքներով, մինչև հասնի num === 1 բազային գործին, այդ պահին վերադարձնում է 1, և ռեկուրսիան շրջվում է՝ վերադարձնելով վերջնական արդյունքը: 5 * 4 * 3 * 2 * 1 = 120:
</p>

<h3>Օբյեկտ</h3>

<p>
Օբյեկտը JavaScript-ում տվյալների կառուցվածք է, որը թույլ է տալիս պահպանել հարակից տվյալներ և գործառույթներ: Սա JavaScript-ի հիմնական հասկացությունն է և լայնորեն օգտագործվում է ողջ լեզվով: Օբյեկտները սահմանվում են {'{}'} գանգուր փակագծերով և բաղկացած են բանալի-արժեք զույգերից, որտեղ բանալին տող է, և արժեքը կարող է լինել ցանկացած տվյալների տեսակ, ներառյալ այլ օբյեկտներ կամ գործառույթներ:
Օբյեկտները JavaScript-ում օգտագործվում են նպատակների լայն շրջանակի համար, այդ թվում՝ տվյալների բարդ կառուցվածքների ստեղծման, կոդերի կազմակերպման և հարակից տվյալների և ինկապսուլյացիայի ամփոփման միջոցի տրամադրման համար: Դրանք JavaScript-ում օբյեկտ-կողմնորոշված ​​ծրագրավորման կարևոր մասն են և հանդիսանում են լեզվի առաջադեմ գործառույթներից ու գրադարաններից շատերի համար, որպես ֆունդամենտալ հիմնաքար:

</p>

<p><b>Օրինակ</b></p>

<p className='darkgreen'>// Ստեղծել օբյեկտ</p>

<code>

  <p><span className='blueviole'>var</span> car = {'{'} </p>

  <p>make: <span className='red'>"Toyota"</span>,</p>

  <p> model: <span className='red'>"Camry"</span>,</p>

  <p>year: <span className='blue'>2021</span>,</p>

  <p> start: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"Մեքենայի գործարկում..."</span>);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='darkgreen'>// Օբյեկտի հատկությունների հասանելիություն</span></p>

  <p>{'console.log(car.make);'} <span className='darkgreen'>// Toyota</span></p>

  <p>{'console.log(car.year);'}<span className='darkgreen'> // 2021</span> </p>

  <p><span className='darkgreen'>// Կանչվող օբյեկտի մեթոդներ</span></p>

  <p>{'car.start(); '}<span className='darkgreen'>"Մեքենայի գործարկում..."</span></p>

 </code>
 
<p> <b>Օբյեկտի հատկություններ</b></p>

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

<p><b>Օբյեկտի մեթոդներ</b></p>

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

<p><b>Օբյեկտ-կողմնորոշված ​​տեսակ՝ զանգված (array)</b></p>

<p className='darkgreen'>// Ստեղծել զանգված </p> 

<code>

  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"կարմիր", "կանաչ", "կապույտ"</span>]; <span className='darkgreen'>// Զանգվածի տարրերի մուտք</span></p>

  <p>{'console.log'}(colors[<span className='blue'>0</span>]); <span className='darkgreen'>// կարմիր</span></p>

  <p>{'console.log'}(colors[<span className='blue'>2</span>]); <span className='darkgreen'>// կապույտ</span></p>

  <p><span className='darkgreen'>// Զանգվածին նոր տարրի ավելացում </span></p>

  <p>{'colors.push'}(<span className='red'>"դեղին"</span>); </p>

  <p><span className='darkgreen'>// Կրկնվող զանգվածի միջով</span></p>

  <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} colors.length; i++) {'{'}</p>

  <p>{' console.log(colors[i]);'}</p>

  <p>{'}'}</p>

</code>
   
   <p><b>Ֆունկցիայի հատկություններ և մեթոդներ</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>greeting</span>(<span className='blue'>անուն</span>) {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Բարև "</span> + անուն);</p>

  <p>{'}'}</p>

  <p>{'console.log(greeting.length);'} <span className='darkgreen'>// 1 (ակնկալվող արգումենտների թիվը)</span></p>

  <p><span className='darkgreen'>// Նոր հատկություն ավելացնելով գործառույթին</span></p>

  <p>greeting.language = <span className='red'>"Հայերեն"</span>;</p>

  <p><span className='darkgreen'>// Ֆունկցիայի հատկությունների հասանելիություն</span></p>

  <p>{'console.log(greeting.language);'} <span className='darkgreen'>// Հայերեն</span></p>

  <p><span className='darkgreen'>// Function call greeting ("Ջոն"); // Բարև Ջոն</span></p>
</code>

<h3>this</h3>

<p>
JavaScript ES5-ում this-ը հիմնաբառ է, որը վերաբերում է ընթացիկ օբյեկտին կամ
համատեքստը, որում գործարկվում է կոդը: Այն կարող է վերաբերել տարբեր օբյեկտների՝ կախված նրանից, թե 
ինչպես և որտեղ է այն օգտագործվում:
</p>

<p>Երբ this-ը օգտագործվում է ֆունկցիայի ներսում, որը կանչվում է որպես օբյեկտի մեթոդ, այն վերաբերում է հենց օբյեկտին: Օրինակ՝</p>

  <code>
  <p><span className='blueviole'>var</span> <span className='blue'>myObject</span> = {'{'}</p>

  <p>name: <span className='red'>"Ջոն"</span>,</p>

  <p>sayHello: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Բարև, իմ անունն է "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{' }'}</p>

  <p>{'};'}</p>

  <p>{'myObject.sayHello();'} <span className='darkgreen'>// Արդյունք: "Բարև, իմ անունը Ջոն է"</span></p>
</code>

<p>Այս օրինակում this-ը վերաբերում է myObject-ին, քանի որ sayHello()-ը կոչվում է որպես myObject-ի մեթոդ:</p>
    
<p>Սակայն, երբ this-ը օգտագործվում է սովորական ֆունկցիայի ներսում (այսինքն՝ չի կոչվում որպես օբյեկտի մեթոդ), այն լռակյաց է գլոբալ օբյեկտի համար (window (պատուհան)  browser-ում (զննարկիչում) կամ գլոբալ Node.js-ում): Օրինակ՝</p>


<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sayHello</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Բարև, իմ անունն է "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>name</span> = <span className='red'>"Ջոն"</span>;</p>

  <p>{'sayHello();'} <span className='darkgreen'>// Արդյունք: "Բարև, իմ անունն է undefined"</span></p>
</code>

<p>
Այս դեպքում this հիմնաբառը վերաբերում է գլոբալ օբյեկտին, քանի որ sayHello()-ը չի կոչվում որպես մեթոդ օբյեկտի վրա: Քանի որ գլոբալ օբյեկտը չունի name հատկություն, this.name-ն անորոշ է:
Կարևոր է նշել, որ this-ի արժեքը կարող է բացահայտորեն սահմանվել՝ օգտագործելով մեթոդներ, ինչպիսիք են call()-ը, apply()-ը և bind()-ը: Այս մեթոդները թույլ են տալիս ֆունկցիան կանչել որոշակի this արժեքով, անկախ նրանից, թե ինչպես է այն կոչվում:
</p>

<h3>Ֆունկցիան որպես օբյեկտ</h3>
    
 <code>
  <p><span className='blueviole'>var</span> <span className='blue'>user</span> = {'{'}</p>

  <p>name: <span className='red'>"Ջոն"</span>,</p>

  <p>age:<span className='blue'>20</span></p>

  <p>{'};'}</p>

  <p><span className='blueviole'>function </span><span className='blue'> foo</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'}</p>

  <p>{'console.log'}(<span className='blueviole'>this</span>.name);</p>

  <p>{'console.log(a + b);'}</p>

  <p>{'}'}</p>

  <p><span className='darkgreen'>//call մեթոդի կիրառում`'this' օբյեկտի վրա user foo.call(user, 3, 5);</span></p>

  <p><span className='darkgreen'>//Մուտք ունենալ length ֆունկցիային console.log(foo.length);</span></p>
</code>    


<h3>Օբյեկտի Արգումենտներ(Պարամետրեր)</h3>    
    
<p>arguments օբյեկտը լոկալ փոփոխական է, որը հասանելի է բոլոր գործառույթներում: Այն պարունակում է ֆունկցիային փոխանցված արգումենտների ցանկ, որը նման է զանգվածին:

Ահա մի օրինակ՝ օգտագործելով արգումենտների օբյեկտը՝</p>   
    
<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>sum</span>() {'{'} </p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span><span className='blue'> i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'} </p>

  <p>{'result += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> result;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>total</span> = sum(<span className='blue'>1, 2, 3, 4</span>);</p>

  <p>{'console.log(total);'} <span className='darkgreen'>// Արդյունք՝ 10</span></p>
</code>


<p>
Վերոնշյալ օրինակում sum ֆունկցիան վերցնում է ցանկացած թվով արգումենտ, և արգումենտների օբյեկտն օգտագործվում է յուրաքանչյուր արգումենտի վրա կրկնելու և դրանք ամփոփելու համար: Այնուհետև ֆունկցիան վերադարձնում է ընդհանուր գումարը:
</p>

<p> Եվս մեկ օրինակ arguments-ի  օբյեկտի մեկ այլ ստեղծման, որը միավորում է բոլոր արգումենտները:</p>
    
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>concatenate</span>() {'{'}</p>

  <p> <span className='blueviole'>var </span><span className='blue'>result</span> = <span className='red'>" "</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'}</p>

  <p>{'result += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> result;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = concatenate(<span className='red'>"Բարև", " ", "Աշխարհ", "!"</span>); </p>

  <p>{'console.log(str);'}<span className='darkgreen'>// Արդյունք՝ "Բարև Աշխարհ!"</span></p>
</code>

<p>
Այս օրինակում concatenate ֆունկցիան վերցնում է ցանկացած թվով արգումենտ և միացնում դրանք մեկ տողի մեջ, որը վերադարձվում է:
</p>    
    
    
    
    </div>
  )
}




export default  AmEs5_4;