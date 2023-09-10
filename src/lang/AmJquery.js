import React from 'react'

function AmJquery() {
  return (
    <div>
  <h1>JavaScript(JQuery)</h1>

<p>jQuery-ն JavaScript գրադարան է, որը հեշտացնում է JavaScript կոդ գրելու և HTML փաստաթղթերի հետ աշխատելու գործընթացը: Այն ստեղծվել է 2006 թվականին Ջոն Ռեսիգի կողմից և ներկայումս հանդիսանում է JavaScript-ի ամենահայտնի գրադարաններից մեկը:</p>   

<p>jQuery-ն ապահովում է մի շարք գործառույթներ Document Object Model-ի (DOM) հետ աշխատելու, ինչպես նաև AJAX-ի (asynchronous JavaScript և XML) հետ աշխատելու և անիմացիաներ ստեղծելու համար: Այն նաև հեշտացնում է բրաուզերի հետ համատեղելի կոդ գրելը, քանի որ jQuery գրադարանն ավտոմատ կերպով լուծում է բրաուզերի համատեղելիության խնդիրները:</p>    

<p>Մի քանի jQuery օրինակներ.</p>

<p>1. Աշխատանք DOM տարրերի հետ՝</p>

<code>
  <p><span className='green'>// Փոխել տարրի տեքստը ID-ով "myElement"</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(<span className='blue1'>'Նոր տեքստ'</span>); </p>

  <p><span className='green'>// Էջում նոր տարրի ավելացում</span> </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'body'</span>).<span className='blue'>append</span>(<span className='blue1'>'{'<'}div{'>'}Նոր տարր{'</'}div{'>'}'</span>); </p>
</code>
    
<p>2. Իրադարձությունների կառավարում.</p>  

<code>
  <p><span className='green'>// «myButton» id-ով կոճակի վրա սեղմելու իրադարձության կառավարում</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Կոճակը սեղմված է!'</span>);</p>

  <p>{"});"}</p>
</code>

<p>3. AJAX-ի հետ աշխատել՝</p>    
    
<code>
  <p><span className='green'>// AJAX հարցում ուղարկելը սերվերին և էջի տարրը թարմացնել պատասխանով</span></p>

  <p> <span className='blueviole'>$</span>.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/api/data'</span>, <span className='red'>function</span>(response) {"{"}</p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(response); </p>

  <p>{" }); "}</p>
</code>    

<p>Ընդհանուր առմամբ, jQuery-ն հզոր և բազմակողմանի գործիք է JavaScript-ի մշակումը պարզեցնելու և դինամիկ, և ինտերակտիվ վեբ էջերի ստեղծումը հեշտացնելու համար:</p>    
    
<b>jQuery HTML փաստաթղթում ավելացնելու համար կարող եք օգտագործել հետևյալ քայլերը՝</b>    

<p>1. Ներբեռնեք jQuery գրադարանը պաշտոնական կայքից <a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a> կամ օգտագործեք հղում CDN-ին (Content Delivery Network):</p>

<p>2. Ստեղծեք նոր HTML ֆայլ և ավելացրեք հետևյալ կոդը ձեր HTML փաստաթղթի "head" բաժնում՝ jQuery գրադարանը ներառելու համար.</p>    

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"path/to/jquery.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>Փոխարինեք «path/to/jquery.js»-ը իրական ճանապարհով, որտեղ jQuery գրադարանը պահվում է ձեր սերվերում, կամ օգտագործեք CDN հղում.</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>3. Երբ դուք ավելացնեք jQuery գրադարանը ձեր HTML փաստաթղթում, կարող եք սկսել այն օգտագործել՝ գրելով JavaScript կոդ, որը հղում է կատարում jQuery գրադարանին:</p>

<p>Օրինակ, "myElement" id-ով HTML տարրի տեքստը փոխելու համար կարող եք օգտագործել հետևյալ կոդը՝</p>

<code>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>id</span>=<span className='blue1'>"myElement"</span>{'>'}Բարեւ աշխարհ!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'$(document).ready(function() {'}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myElement"</span>).<span className='blue'>text</span>(<span className='blue1'>"Նոր տեքստ!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>
</code> 

<p>Այս օրինակում մենք օգտագործում ենք jQuery՝ ընտրելու "myElement" id-ով տարրը և դրա տեքստը փոխելու "Նոր տեքստ": Կոդը փաթաթված է document ready ֆունկցիայով, որն ապահովում է, որ կոդը գործարկվի միայն փաստաթղթի բեռնումից հետո:</p>

<p>Ընդհանուր առմամբ, jQuery-ն HTML փաստաթղթում ավելացնելը պարզ գործընթաց է, որը ներառում է jQuery գրադարանին կապակցում և JavaScript կոդ գրելը, որն օգտագործում է գրադարանը HTML տարրերը կառավարելու համար:</p>

<p>JQuery-ի շարահյուսությունը CSS ոճի սելեկտորի և JavaScript կոդի համակցություն է, ինչը հեշտացնում է HTML տարրերի ընտրությունը և կառավարումը: Ահա jQuery-ի շարահյուսության օրինակներ.</p>

<p><b>1. Տարրերի ընտրություն</b></p> 

<p>HTML տարր ընտրելու համար կարող եք օգտագործել jQuery ֆունկցիան, որն ընդունում է CSS ոճի սելեկտորը որպես արգումենտ: Օրինակ՝ էջի բոլոր "p" տարրերն ընտրելու համար կարող եք օգտագործել հետևյալ կոդը՝</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>) </p> </code>    

<p>Դուք կարող եք նաև միավորել սելեկտորները՝ տարրեր ընտրելու համար՝ հիմնվելով այլ տարրերի հետ նրանց փոխհարաբերությունների վրա: Օրինակ՝ բոլոր "p" տարրերն ընտրելու համար, որոնք "div" տարրի զավակներ են, կարող եք օգտագործել հետևյալ կոդը՝</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'div {'>'} p'</span>)</p></code>

<p><b>2. Տարրերի փոփոխություն</b></p>

<p>Հենց որ դուք ընտրեք տարրը, կարող եք փոխել դրա բովանդակությունը, ատրիբուտները և CSS հատկությունները՝ օգտագործելով jQuery: Օրինակ՝ էջի բոլոր "p" տարրերի տեքստը փոխելու համար կարող եք օգտագործել հետևյալ կոդը՝</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>text</span>(<span className='blue1'>'Новый текст'</span>)</p>

  <p>Տարրին <span className='green'> կլաս</span> ավելացնելու համար կարող եք օգտագործել <span className='blue1'>"addClass"</span> մեթոդը</p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>addClass</span>(<span className='blue1'>'highlight'</span>)</p>
</code>

<p><b>3. Իրադարձությունների մշակում</b></p>

<p>Դուք կարող եք օգտագործել jQuery իրադարձությունները, ինչպիսիք են սեղմումները, մկնիկի սեղմումները և ստեղները սեղմելը: Օրինակ՝ "myButton" ID-ով կոճակի սեղմման իրադարձությունը կարգավորելու համար կարող եք օգտագործել հետևյալ կոդը՝</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>    
    
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Կոճակը սեղմված է!'</span>) </p> 
    
  <p>{"})"}</p>
</code>

<p><b>4. Աշխատանք AJAX -ի հետ</b></p>

<p>jQuery-ն հեշտացնում է AJAX հարցումների հետ աշխատելը: Օրինակ՝ URL-ին GET հարցում կատարելու և պատասխանը մշակելու համար կարող եք օգտագործել հետևյալ կոդը՝</p>

<code>
  <p>$.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/data'</span>, <span className='red'>function</span>(response) {"{"}</p>

  <p>&nbsp;{"console"}.<span className='blue'>log</span>(response)</p>

  <p>{"}) "}</p>
</code>

<p>Ընդհանուր առմամբ, jQuery-ի շարահյուսությունը հեշտ է սովորել և օգտագործել, և այն ապահովում է HTML տարրերը կառավարելու և ձեր վեբ հավելվածներում իրադարձությունները վարելու միջոց:</p>

<p><b>jQuery Traversing մեթոդներն օգտագործվում են DOM ծառի տարրերը նավարկելու և գտնելու համար: Ահա մի քանի օրինակներ անցման մեթոդների, որոնք աշխատում են հարևան տարրերի հետ:</b></p>

<p><b>1. Մեթոդ next():</b></p>

<p>Օրինակ՝</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>next</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>   

<p>Այս կոդը ընտրում է բոլոր "h2" տարրերը և կիրառում CSS ոճավորումը հաջորդ հարևան տարրի վրա՝ փոխելով դրա ֆոնի գույնը դեղինի:</p>

<p><b>2. Մեթոդ prev()</b></p>

<p>Օրինակ՝</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prev</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'});'}</p>
</code>

<p>Այս կոդը ընտրում է բոլոր "h2" տարրերը և կիրառում է CSS ոճը նրանց նախորդ հարակից տարրերի վրա՝ փոխելով դրանց ֆոնի գույնը դեղին:</p>

<p><b>3. Մեթոդ nextAll():</b></p>

<p>Օրինակ՝</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>nextAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>
    
<p>Այս կոդը ընտրում է բոլոր "h2" տարրերը և կիրառում է CSS ոճ նրանց հաջորդ հարակից տարրերի վրա՝ փոխելով դրանց ֆոնի գույնը դեղին:</p>    
    

<b>4. Մեթոդ prevAll():</b> 

<p>Օրինակ՝</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prevAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Այս կոդը ընտրում է բոլոր "h2" տարրերը և կիրառում է CSS ոճը նրանց նախորդ հարակից տարրերի վրա՝ փոխելով դրանց ֆոնի գույնը դեղին:</p>    
    
<p><b>5. Մեթոդ siblings():</b></p>

<p>Օրինակ՝</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>siblings</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Այս կոդը ընտրում է բոլոր "h2" տարրերը և կիրառում է CSS ոճ նրանց բոլոր հարակից տարրերի վրա՝ փոխելով դրանց ֆոնի գույնը դեղինի</p>

<p>Ընդհանուր առմամբ, այս մեթոդները հեշտացնում են նավարկելը և ընտրել HTML հարակից տարրեր, որոնք կարող են օգտակար լինել տարբեր նպատակներով, օրինակ՝ ոճավորելու կամ բովանդակության փոփոխման համար:</p>

<p><b>JQuery (CSS)</b></p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() &nbsp;{'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='red'>this</span>).<span className='blue'>css</span>(<span className='blue1'>"background-color", "red"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'});'}</p>
</code>

<p>Այս կոդը ընտրում է "box" դասի տարր՝ օգտագործելով jQuery ".box" սելեկտորը: Այնուհետև այն կցում է սեղմման իրադարձությունների մշակիչը այդ տարրին՝ օգտագործելով click() մեթոդը: Միջոցառումների մշակման ֆունկցիայի ներսում մենք օգտագործում ենք css() մեթոդը տարրի ֆոնի գույնը կարմիրի փոխելու համար:</p>
    
<p>Այսպիսով, երբ սեղմում եք "box" տարրի վրա, նրա ֆոնի գույնը փոխվում է կապույտից կարմիր: Մենք կարող ենք նաև օգտագործել css() մեթոդը՝ փոխելու այլ CSS հատկություններ, ինչպիսիք են տառատեսակի չափը, եզրագծի լայնությունը և այլն:</p>    
    
<p> Մեկ այլ օրինակ, որը ցույց է տալիս, թե ինչպես փոխել CSS-ի մի քանի հատկություններ՝ օգտագործելով css() մեթոդը.</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>css</span>{'({'}</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"background-color"</span>: <span className='blue1'>"green"</span>,</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"width"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"height"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"border"</span>: <span className='blue1'>"2px solid black"</span> </p>

  <p>&nbsp;{' });'}</p>

  <p>{'});'}</p>
</code>

<p>Այս կոդը ընտրում է "box" դասի բոլոր տարրերը և փոխում է դրանց ֆոնի գույնը կանաչի, լայնությունը և բարձրությունը 150 պիքսել, և ավելացնում է 2px թունդ սև եզրագիծ:</p>

<p>Այս կոդը օգտագործում է jQuery-ի $.each() մեթոդը զանգվածների և օբյեկտների վրա կրկնելու համար: Ահա մի օրինակ, որը ցույց է տալիս դրա օգտագործումը.</p>

<p>Ենթադրենք, մենք ունենք թվերի զանգված և ցանկանում ենք կրկնել զանգվածի յուրաքանչյուր տարրի վրա և տպել դրա արժեքը կոնսոլում.</p>

<code>
  <p><span className='red'>var</span> numbers = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

  <p>$.<span className='blue'>each</span>{'('}numbers, <span className='red'>function</span>(index, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Տարրը ինդեքով "</span> + index + <span className='blue1'>" հավասար է "</span> + value);</p>

  <p>{'});'}</p>
</code>

<p>Այս կոդում մենք թվերի զանգվածը փոխանցում ենք $.each() մեթոդին՝ հետ կանչելու ֆունկցիայի հետ միասին, որն ընդունում է երկու արգումենտ՝ ընթացիկ տարրի ինդեքսը և ընթացիկ տարրի արժեքը: Հետ կանչելու ֆունկցիայի ներսում մենք օգտագործում ենք console.log()՝ ընթացիկ տարրի ինդեքսն ու արժեքը վահանակում տպելու համար:</p>

<p>Այս կոդի արդյունքը կլինի՝</p>

<code>
  <p>Տարրը ինդեքով <span className='blue1'>0</span> հավասար է <span className='blue1'>1</span></p>

  <p>Տարրը ինդեքով <span className='blue1'>1</span> հավասար է <span className='blue1'>2</span></p>

  <p>Տարրը ինդեքով <span className='blue1'>2</span> հավասար է <span className='blue1'>3</span></p>

  <p>Տարրը ինդեքով <span className='blue1'>3</span> հավասար է <span className='blue1'>4</span></p>

  <p>Տարրը ինդեքով <span className='blue1'>4</span> հավասար է <span className='blue1'>5</span></p>
</code>

<p>Ընդհանուր առմամբ, jQuery-ի օգտագործումը CSS-ի մանիպուլյացիայի համար ապահովում է HTML տարրերը դինամիկ կերպով ոճավորելու միջոց՝ հիմնված օգտատերերի փոխազդեցությունների կամ այլ իրադարձությունների վրա: </p>

<p> Մեկ այլ օրինակ, որը ցույց է տալիս, թե ինչպես օգտագործել $.each() օբյեկտի հետ.</p>

<p>Ենթադրենք, որ մենք ունենք օբյեկտ, որը ներկայացնում է անձի մասին տվյալներ, և մենք ցանկանում ենք կրկնել դրա հատկությունները և տպել դրանց արժեքները կոնսոլում.</p>

<code>
  <p><span className='red'>var</span> person = {'{'}</p>

  <p>&nbsp;<span className='blue'>name</span>: <span className='blue1'>"John"</span>,</p>

  <p>&nbsp;<span className='blue'>age</span>: <span className='blue1'>30</span>, </p>

  <p>&nbsp;<span className='blue'>occupation</span>: <span className='blue1'>"Developer"</span> </p>

  <p>{'};'}</p>

  <p>$.<span className='blue'>each</span>{'('}person, <span className='red'>function</span>(key, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(key + ": " + value);</p>

  <p>{'});'}</p>
</code>

<p>Այս կոդում մենք person  օբյեկտը փոխանցում ենք $.each() մեթոդին՝ հետ կանչելու ֆունկցիայի հետ միասին, որն ընդունում է երկու արգումենտ՝ ընթացիկ հատկության բանալի և ընթացիկ հատկության արժեքը: Հետ կանչելու ֆունկցիայի ներսում մենք օգտագործում ենք console.log()՝ ընթացիկ հատկության բանալին և արժեքը վահանակում գրանցելու համար:</p>

<p>Այս կոդի արդյունքը կլինի՝</p>

<code>
  <p><span className='blue'>name</span>: John </p>

  <p><span className='blue'>age</span>: <span className='blue1'>30</span> </p>

  <p><span className='blue'>occupation</span>: Developer</p>
</code>

<p>Ընդհանուր առմամբ, jQuery-ի $.each() մեթոդն ապահովում է զանգվածների և օբյեկտների վրա կրկնելու և դրանց տարրերի վրա գործողություններ կատարելու հարմար միջոց:</p>

<p><b>JQuery Events</b></p>

<p>JQuery-ն ապահովում է իրադարձությունների մշակման մեթոդների հարուստ շարք, որը թույլ է տալիս ծրագրավորողներին կցել իրադարձությունների մշակիչներ HTML տարրերին և արձագանքել օգտատերերի փոխազդեցություններին, ինչպիսիք են մկնիկի սեղմումները, ստեղնաշարի մուտքագրումը և ձևաթղթերի ներկայացումները:</p>

<p>Օրինակ, որը ցույց է տալիս, թե ինչպես օգտագործել jQuery-ի click() մեթոդը՝ սեղմումների իրադարձությունների մշակիչը կոճակի տարրին կցելու և կոճակի վրա սեղմող օգտատիրոջը պատասխանելու համար.</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>  

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery իրադարձության օրինակ{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>id</span>=<span className='blue1'>"myButton"</span>{'>'}Սեղմե՛ք ինձ վրա!{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myButton"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>(){'{'}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Կոճակը սեղմված է!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'});'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code> 

<p>Այս կոդում մենք օգտագործում ենք jQuery սելեկտոր՝ կոճակի տարրն ընտրելու համար՝ օգտագործելով դրա ID-ն, այնուհետև օգտագործում ենք click() մեթոդը՝ կոճակի տարրին սեղմելու իրադարձությունների մշակիչը կցելու համար: Իրադարձությունների մշակիչի ներսում մենք օգտագործում ենք alert() մեթոդը՝ երկխոսության վանդակում հաղորդագրություն ցուցադրելու համար, երբ օգտատերը սեղմում է կոճակը:</p>

<p>Այս կոդի մեջ մենք ներառում ենք jQuery գրադարանը HTML փաստաթղթի head բաժնում և <b>click()</b> իրադարձությունների սելեկտորը կցում ենք կոճակի տարրին՝ օգտագործելով <b>#myButton</b>: ID-ի ընտրիչ: Միջոցառումների մշակման գործառույթի ներսում մենք օգտագործում ենք <b>alert()</b> մեթոդը երկխոսության տուփը ցուցադրելու համար "Կոճակը սեղմված է!" տեքստով:</p>

<p>Երբ օգտատերը սեղմում է կոճակը, գործարկվում է <b>click()</b> իրադարձությունը և կատարվում է իրադարձությունների մշակման ֆունկցիան` ցուցադրելով երկխոսության պատուհանը:</p>

<p>Այստեղ կարող եք գտնել մեկ այլ օրինակ, որը ցույց է տալիս, թե ինչպես օգտագործել submit() մեթոդը jQuery-ում</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery իրադարձության օրինակ{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>{'<'}<span className='green'>form</span> <span className='blue'>id</span>=<span className='blue1'>"myForm"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Name:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"email"</span>{'>'}Email:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"email"</span> <span className='blue'>id</span>=<span className='blue1'>"email"</span> <span className='blue'>name</span>=<span className='blue1'>"email"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Submit"</span>{'>'}</p>

  <p>{'</'}<span className='green'>form</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myForm"</span>).<span className='blue'>submit</span>{'('}<span className='red'>function</span>(event){'{'}</p>

  <p>&nbsp;event.<span className='blue'>preventDefault</span>();</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Ձևն ուղարկված է!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{' });'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Այս կոդում մենք կցում ենք <b>submit()</b> իրադարձությունների մշակիչը ձևի տարրին՝ օգտագործելով <b>#myForm</b> id սելեկտորը: Միջոցառումների մշակման ֆունկցիայի ներսում մենք օգտագործում ենք <b>preventDefault()</b> մեթոդը՝ կանխելու լռելյայն ձևի ներկայացումը, որը հանգեցնում է էջի վերաբեռնմանը: Փոխարենը, մենք ցուցադրում ենք "Ձևն ուղարկված է!" տեքստով հաղորդագրության պատուհան: </p>

<p>Ընդհանուր առմամբ, jQuery-ի իրադարձությունների մշակման մեթոդները հզոր միջոց են ապահովում օգտատերերի փոխազդեցությունը և իրադարձություններին արձագանքելու հետևողական և բրաուզերի հետ համատեղելի եղանակով:</p>


    </div>
  )
}

export default AmJquery;