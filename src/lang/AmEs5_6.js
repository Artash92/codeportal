import React from 'react'

function AmEs5_6() {
  return (
    <div>
      <h3>Գլոբալ օբյեկտ JavaScript-ում</h3>

<p>JavaScript-ում գլոբալ օբյեկտը ներկառուցված օբյեկտ է, որը հասանելի է կոդի մեջ ամենուր: Այն տրամադրում է հատկություններ և մեթոդներ, որոնք օգտագործվում են լեզվի տարբեր մասերի կողմից և կարող են ընդլայնվել նաև օգտագործողի կողմից սահմանված ֆունկցիաներով:</p>
    
<div>

     <p>Գլոբալ օբյեկտի որոշ հատկություններ և մեթոդներ JavaScript-ում.</p>

     <p><span className='blue'>1.</span>  Infinity - ներկայացնում է անվերջության մաթեմատիկական արժեքը</p>

     <p><span className='chocolate'>Օրինակ</span>՝ console.log(Infinity);</p>

     <p><span className='blue'>2.</span> NaN - ներկայացնում է "ոչ թիվ" արժեքը:</p>

     <p><span className='chocolate'>Օրինակ</span>՝ console.log(NaN);</p>

     <p><span className='blue'>3.</span>console.log (կոնսոլ) - տրամադրում է տվյալների վահանակում տեղեկատվություն գրելու մեթոդներ:</p>

     <p><span className='chocolate'>Օրինակ</span>՝ console.log('Բարև աշխարհ!');</p>

     <p><span className='blue'>4.</span> parseInt() - տողը վերածում է ամբողջ թվի:</p>

     <p><span className='chocolate'>Օրինակ</span>՝ console.log(parseInt('10'));</p>

     <p><span className='blue'>5.</span> parseFloat() - տողը փոխակերպում է float-ի:</p>

     <p><span className='chocolate'>Օրինակ</span>՝ console.log(parseFloat('3.14'));</p>

     <p><span className='blue'>6.</span> encodeURIcomponent() - կոդավորում է URI բաղադրիչ:</p>

     <p><span className='blue'>7.</span> Date (Ամսաթիվ) - տրամադրում է ամսաթվերի և ժամերի հետ աշխատելու մեթոդներ:</p>

     <p><span className='chocolate'>Օրինակ</span>՝ console.log(new Date());</p>

     <p><span className='blue'>8.</span> Math - տրամադրում է մաթեմատիկական ֆունկցիաներ և հաստատուններ:</p>

     <p><span className='chocolate'>Օրինակ</span>՝ console.log (Math.PI);</p>

</div>    

<p>Գլոբալ օբյեկտի մեթոդները կարելի է կանչել կոդի  ցանկացած կետից՝ առանց օբյեկտի օրինակի ստեղծման անհրաժեշության: Այնուամենայնիվ, դուք պետք է զգույշ լինեք, երբ ընդլայնում եք գլոբալ օբյեկտը օգտագործվող մեթոդներով, քանի որ դրանք կարող են հակասել պոտենցիալ ներկառուցված մեթոդներին կամ այլ հատուկ օգտագործվող մեթոդներին:</p>    
    
<p>Կարևոր է նշել, որ JavaScript -ում գլոբալ օբյեկտը միշտ չէ, որ հասանելի է բոլոր համատեքստերում, օրինակ՝ մոդուլի վրա հիմնված կոդում կամ խիստ ռեժիմում:</p>    
    
<h3>Աշխատել տողերի հետ JavaScript ES5-ում</h3>    
    
<p>JavaScript ES5-ում տողը նիշերի հաջորդականություն է և կարող է մշակվել՝ օգտագործելով տարբեր մեթոդներ: Տողից ենթատողեր հանելու երկու եղանակներ են՝ slice() և substring():</p>    
    
<p>Slice() մեթոդը հանում է տողի հատվածը և վերադարձնում այն որպես նոր տող՝ առանց սկզբնական տողը փոխելու։ Այն պահանջում է երկու պարամետր՝ սկզբնական ինդեքս և վերջնական ինդեքս (ոչ պարտադիր): Եթե ​​վերջնական ինդեքս չտրամադրվի, մեթոդը կբերվի մինչև տողի վերջը: Եթե ​​սկզբնական ինդեքսը բացասական է, ապա այն հաշվում է տողի վերջից:</p>   
    
<p>Substring() մեթոդը նման է slice()-ին, բայց չի ընդունում բացասական ինդեքսներ։ Եթե ​​սկզբնական ինդեքսը մեծ է վերջնական ինդեքսից, ապա երկու ինդեքսները փոխանակվում են՝ սխալից խուսափելու համար:</p>    

<p>Մի քանի օրինակներ</p>


<p className='darkgreen'>// Ենթատողի ստացում "is"</p>

<code>
    <p>str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>

    <p>str.substring(<span className='blue'>5</span>,<span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
</code>  

<p className='darkgreen'>// Ենթատողի ստացում "is"</p>  

<code>

  <p>{'console.log'}(str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

  <p>{'console.log'}(str.substring(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

  <p><span className='darkgreen'>// Ենթատողի ստացում "is my text"</span></p>

  <p>{'console.log'}(str.slice(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>

  <p>{'console.log'}(str.substring(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>

</code>

<p className='darkgreen'>// Ենթատողի ստացում " "</p>

<code>
    <p>{'console.log'}(str.slice(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//"is"</span> </p>
</code>

<p className='darkgreen'> // Ենթատողի ստացում "my"</p>

<code>
    <p>{'console.log'}(str.slice(-<span className='blue'>7</span>, -<span className='blue'>5</span>)); <span className='darkgreen'> //"my"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>7</span>,<span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
</code>

<p>Վերոհիշյալ օրինակները օգտագործում են slice() և substring() ֆունկցիաները` str փոփոխականից ենթատողեր հանելու համար: Առաջին օրինակը հանում է "is" ենթատողը, իսկ երկրորդ օրինակը՝ "is my text": Երրորդ և չորրորդ օրինակները ցույց են տալիս, թե ինչպես են slice() և substring() ֆունկցիաները կարգավորում այն ​​դեպքերը, երբ ինդեքսները դուրս են տողի սահմաններից: Վերջապես, հինգերորդ օրինակը ցույց է տալիս, թե ինչպես կարելի է slice() ֆունկցիան օգտագործել բացասական ինդեքսների հետ՝ տողի վերջից ենթատող հանելու համար:</p>

<h3>"Ենթատողերի որոնում" JavaScript ES5-ում:</h3>

<p> JavaScript-ում դուք կարող եք որոնել որոշակի ենթատող տողի մեջ՝ օգտագործելով տարբեր մեթոդներ: Ավելի տարածվածներից մի քանիսը.</p>

<p>1. «Ենթատողի որոնում» JavaScript ES5-ում:
JavaScript-ում դուք կարող եք որոնել որոշակի ենթատող տողի մեջ՝ օգտագործելով տարբեր մեթոդներ: Ավելի տարածվածներից մի քանիսը.</p>

<p>indexOf(substring, start). Այս մեթոդը որոնում է ենթատողը տողի մեջ և վերադարձնում է ենթատողի առաջին հայտնվելու ինդեքսը: Կարող եք նաև նշել որոնման մեկնարկային դիրքը՝ անցնելով ընտրովի մեկնարկի պարամետրը: Եթե ​​ենթատողը չի գտնվել, -1 վերադարձվում է:</p>

<p><b>Օրինակ</b></p>    
    
<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Բարեւ, աշխարհ"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.indexOf(<span className='red'>"աշխարհ"</span>);</p>

  <p>{'console.log(index);'} <span className='darkgreen'>// 7</span></p>

 </code>

 <p>2. lastIndexOf(substring, end): Այս մեթոդն աշխատում է նույնը, ինչ "indexOf"-ը, սակայն փնտրում է ենթատողի վերջին հայտնվելը տողի մեջ՝ փնտրելով տողի վերջից հետընթաց: Կարող եք նաև նշել որոնման վերջի դիրքը՝ տալով ոչ պարտադիր end պարամետրը։</p>

<p><b>Օրինակ</b></p>

<code>
<p><span className='blueviole'>var</span><span className='blue'> message</span> = <span className='red'>"Բարև աշխարհ, բարև!"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.lastIndexOf(<span className='red'>"բարև"</span>);</p>

<p>{'console.log(index);'}<span className='darkgreen'> // 13</span></p>
</code>

<p>Ի նկատի ունեցեք, որ այս մեթոդներն օգտագործելիս ենթատողի գործը կարևոր է: Օրինակ, «աշխարհ» բառը «Բարև աշխարհ» տողում որոնելը չի ​​գտնի ենթատողը, քանի որ այն գրված է մեծատառով:</p>

<p>3.includes(substring). Այս մեթոդը ստուգում է, թե արդյոք տվյալ ենթատողը առկա է տողի մեջ և վերադարձնում է բուլյան, որը ցույց է տալիս արդյունքը:</p>

   <p><b>Օրինակ</b></p>
    
   <code>
    <p><span className='blueviole'>var</span> <span className='blue'>found</span> = message.includes(<span className='red'>"աշխարհ"</span>);</p>

    <p>{'console.log(found);'} <span className='darkgreen'>// true</span></p>
  </code>    
    
  <p>4. search(regex). Այս մեթոդը փնտրում է կանոնավոր արտահայտություն տողի մեջ և վերադարձնում է առաջին համընկնման ինդեքսը: Եթե ​​համընկնում չգտնվի, այն վերադարձնում է -1:</p>
   
   <p><b>Օրինակ</b></p>   

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Բարև աշխարհ, բարև!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.search(<span className='red'>/բարև/i</span>);<span className='darkgreen'> // ֆլագ "i" -ն դարձնում է որոնումը առանց գրանցման</span></p>

  <p>{'console.log(index);'}<span className='darkgreen'> // 0</span></p>
</code>

<p>Օրինակում str փոփոխականը պարունակում է "This is my text" տողը: Կոդի հետևյալ տողերը ցույց են տալիս վերը նկարագրված տողերի որոնման մեթոդների օգտագործումը.</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"This is my text"</span>;</p>

  <p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//2</span></p>

  <p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>, <span className='blue'>3</span>));<span className='darkgreen'> //5</span></p>

  <p>{'console.log'}(str.lastIndexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//5</span></p>

  <p>{'console.log'} (str.lastIndexOf(<span className='red'>"is"</span>, <span className='blue'>4</span>)); <span className='darkgreen'>//2</span></p>

  <p>{'console.log'}(str.indexOf(<span className='red'>"some"</span>)); <span className='darkgreen'>//-1</span></p>
</code>
    
<p>Կոդերի այս տողերը փնտրում են «is» և «some» ենթատողերը string str-ում և վերադարձնում են իրենց ինդեքսները՝ օգտագործելով indexOf և lastIndexOf մեթոդները: Երկրորդ պարամետրը indexOf սահմանում է որոնման սկզբնական դիրքը, իսկ երկրորդ պարամետրը lastIndexOf սահմանում է որոնման վերջի դիրքը:</p>

<h3>RegEx</h3>

<p>RegExp-ը ներկառուցված օբյեկտ է, որն ապահովում է կանոնավոր արտահայտություններ ստեղծելու միջոց: Կանոնավոր արտահայտությունները նախշեր են, որոնք օգտագործվում են տողերի նիշերի համակցություններին համապատասխանեցնելու համար:</p>

<p><b>Կանոնավոր արտահայտման օբյեկտ ստեղծելու օրինակ՝ օգտագործելով կոնստրուկտորը՝</b></p>

<code>
    <p> <span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>"some", "long"</span>);</p>
</code>

<p>Այստեղ some-ը RegExp-ի ֆլագ է, իսկ long-ը ոչ պարտադիր ֆլագ է, որը փոխում է կանոնավոր արտահայտության վարքը:</p>

<p> RegExp օբյեկտի test() մեթոդի օգտագործման օրինակ՝ ստուգելու համար, թե արդյոք տողը համապատասխանում է կանոնավոր արտահայտությանը.</p>
    
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" The quick brown fox jumps over the lazy dog "</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = regex.test(str);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// true </span></p>
</code>

<p>Այս օրինակում /fox/i-ը կանոնավոր արտահայտություն է, որը համընկնում է "fox" բառին մեծատառերի նկատմամբ անզգայուն կերպով: Test() մեթոդը վերադարձնում է բուլյան՝ ցույց տալով, թե արդյոք կանոնավոր արտահայտության օրինակը համապատասխանում է str տողին:</p>

<p> String օբյեկտի match() մեթոդի օգտագործման ևս մեկ օրինակ՝ կանոնավոր արտահայտությամբ՝ համապատասխան արժեքներ հանելու համար.</p>    
    
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" The quick brown fox jumps over the lazy dog "</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>

  <p><span className='blueviole'>var</span><span className='blue'> result</span>  = str.match(regex);</p>

  <p>{'console.log(result);'} <span className='darkgreen'> // <span>[</span>"fox"<span>]</span></span></p>
</code>   

<p>Այս օրինակում match() մեթոդը վերադարձնում է համընկնող ենթատող(ներ) պարունակող զանգված, եթե տողի մեջ գտնվի սովորական արտահայտության օրինակը:</p>    
    
<b>Կանոնավոր արտահայտություններում սովորաբար օգտագործվող որոշ հատուկ նիշեր.</b>    
    
<p>.- Համընկնում է ցանկացած նիշի, բացի նոր տողից \n</p>

<p>\w - Համապատասխանում է ASCII բառի ցանկացած նիշ [a-zA-Z0-9_]</p>

<p>\W - Համընկնում է ASCII բառի ցանկացած նիշ [^a-zA-Z0-9_]</p>

<p>\d - Համապատասխանեցրեք ցանկացած ASCII թվանշան [0-9]</p>

<p>\D - Համընկնում է ցանկացած ոչ թվային նիշ [^0-9]</p>

<p>\s - Համընկնում է Յունիկոդի բացատների(пробел) ցանկացած նիշի</p>

<p>\S - Համապատասխանում է ցանկացած նիշի, որը բացատ(пробел) չէ</p>    
  
   <code>
      <p><span className='blueviole'>var</span> <span className='blue'>myStr</span> = <span className='red'>"awesome Text"</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>myRegExp</span> = <span className='red'>/[a-zA-Z0-9]/</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span> = myRegExp.test(myStr);</p>

      <p>{'console.log(result);'}<span className='darkgreen'> //true</span></p>
   </code>    
    
<p><b>^ - Համապատասխանում է տողի սկզբին</b></p>

<p><b>$ - Համընկնում է տողի վերջում</b></p>

<p>Flags.</p>

<p><b>i - ignoreCase</b></p>  
    
<code>
  <p><span className='blueviole'>var</span><span className='blue'> exp</span> = <span className='red'>/a/i</span> <span className='darkgreen'>// որոնում է ինչպես մեծատառ, այնպես էլ փոքրատառ</span></p> 
</code>    

<p><b>g-global</b></p>

<p><b>Որոնում է տողում օրինաչափության բոլոր դեպքերը</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Borobudur"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/[ou]/g</span>;</p>

  <p>{'console.log'}(str.replace(pattern, <span className='red'>"a"</span>)); <span className='darkgreen'>//"Barabadar"";</span></p>
</code>

<p><b>m - multiline</b></p>

<p><b>Որոնում է օրինաչափության բոլոր դեպքերը տողի բոլոր տողերում</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Some text And some more And yet This is the end"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'> pattern</span> = <span className='red'>/\w+\s/g</span>;</p>

  <p>{'console.log(str.match(pattern));'} <span className='darkgreen'>//  [ "Some ", "text ", "And ", "some ", "more ", "And ", "yet ", "This ", "is ", "the ", "end"]</span></p>
</code>

<p>Այստեղ մենք սահմանում ենք «str» տողը «սա իմ տեքստն է» արժեքով։ Այնուհետև մենք սահմանում ենք ռեգեքսի օրինակ որը համապատասխանում է տողի սկզբին (^), որին հաջորդում է մեկ կամ մի քանի փոքրատառ ([a-z]+), բաժանված բացատներով և տողի վերջը ($): Մենք օգտագործում ենք փակագծեր՝ տառերի յուրաքանչյուր խումբ որպես առանձին ենթապատկեր ֆիքսելու համար:</p>

<p>Վերջապես, մենք օգտագործում ենք replace() մեթոդը տողի վրա՝ անցնելով օրինաչափությանը և փոխարինող տողը, որն օգտագործում է $ նիշը՝ վերագրված ենթապատկերներին իրենց սահմանած հերթականությամբ: Այս դեպքում մենք փոխանակում ենք տառերի առաջին և երկրորդ խմբերը՝ տեղում թողնելով երրորդ և չորրորդ խմբերը:</p>

<p>Կոդ՝</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"this is my text"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/^([a-z]+) ([a-z]+) ([a-z]+) ([a-z]+)$/</span> ;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>res</span> = str.replace(pattern, <span className='red'>"$2 $1 $3 $4"</span>);</p>

  <p>{'console.log(res);'} <span className='darkgreen'>// "is this my text"</span> </p>
</code>


    
    </div>
  )
}




export default  AmEs5_6;