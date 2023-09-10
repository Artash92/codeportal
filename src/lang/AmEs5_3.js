import React from 'react'

function AmEs5_3() {
  return (
    <div> 
      
      <h3>Ֆունկցիա</h3>
       
       <p>
       Ֆունկցիան կոդի բլոկ է, որը կարող է սահմանվել և գործարկվել ավելի ուշ: Այն օգտագործվում է կոնկրետ առաջադրանք կատարելու համար և կարող է կանչվել ծրագրի ցանկացած մասից, որտեղ այն հասանելի է: Ֆունկցիաները կոդն ավելի կազմակերպված, բազմակի օգտագործման և հեշտ ընկալելի են դարձնում:
       </p>
      
       <h3>Ֆունկցիայի ստեղծում</h3>
      
       <p>
       ES5 JavaScript-ում ֆունկցիա կարող է ստեղծվել՝ օգտագործելով «function» հիմնաբառը, որին հաջորդում է ֆունկցիայի անվանումը և փակագծերի մի շարք: Փակագծերի ներսում մենք կարող ենք սահմանել մեկ կամ մի քանի պարամետր, իսկ գանգուր փակագծերի ներսում մենք սահմանում ենք այն կոդը, որը կկատարվի ֆունկցիան կանչելիս:
       </p>
      
       <p><b>Օրինակ՝</b></p>

<code>
    <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  

    <p><span className='blueviole'>return</span> a + b;</p>  

    <p>{'}'}</p>  
</code>

<p><b>Ֆունկցիայի արգումենտներ՝</b></p>

<p>Ֆունկցիայի արգումենտներն այն արժեքներն են, որոնք փոխանցվում են ֆունկցիային, երբ այն կանչվում է: Մենք կարող ենք մեկ կամ մի քանի պարամետր սահմանել փակագծերի ներսում՝ ֆունկցիա ստեղծելիս։ Ֆունկցիան կանչելիս մենք փաստացի արժեքներ ենք փոխանցում որպես փաստարկներ:</p>

<p><b>Օրինակ՝</b> </p>   
     

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  

  <p><span className='blueviole'>return</span> a + b;</p>  

  <p>{'}'}</p>  

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sum(<span className='blue'>5</span>, <span className='blue'>10</span>);</p>

  <p> <span className='darkgreen'>// Արդյունք՝ 15</span></p>
</code>

<p><b>Փոփոխական շրջանակներ՝</b></p>

<p>Փոփոխականները կարող են ունենալ տարբեր շրջանակներ՝ կախված նրանից, թե որտեղ են հայտարարագրված: Ահա մի փոփոխականի օրինակ, որը հայտարարված է ֆունկցիայի ներսում, որը հասանելի չէ այդ ֆունկցիայից դուրս.</p>

<p><b>Օրինակ՝</b> </p>   
  
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>showMessage</span>() {'{'} </p>

  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Բարեւ, աշխարհ!"</span>;</p>

  <p>{"console.log(message);"}</p>

  <p>{"} "}</p>

  <p>showMessage(); <span className='darkgreen'>// Արդյունք՝ "Բարեւ, աշխարհ!"</span> </p>

  <p>{" console.log(message); "} <span className='darkgreen'>// Արդյունք՝ Uncaught ReferenceError: message is not defined</span></p>
</code> 


 <p><b>Ֆունկցիայի արտահայտություններ.</b></p>

<p>Ֆունկցիայի արտահայտությունը ֆունկցիա է, որը վերագրված է փոփոխականին: Ահա մի օրինակ՝</p> 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>multiply</span> = <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'}</p>

  <p><span className='blueviole'>return</span> a * b ;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blueviole'>result</span> = multiply(<span className='blue'>3</span>, <span className='blue'>4</span>);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// Արդյունք՝ 12</span></p>
</code>

  <p><b>Անանուն ֆունկցիաներ.</b></p>

<p>Անանուն ֆունկցիան առանց անունի ֆունկցիա է: Ահա անանուն ֆունկցիայի օրինակ, որը անմիջապես կանչվում է.</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Բարեւ, աշխարհ!"</span>);</p>

  <p>{'})();'}</p>
 </code>
  
  <p><b>Փակումներ (Closures) </b></p>

<p>Closures-ը JavaScript-ի հատկություն է, որը գործառույթին թույլ է տալիս մուտք գործել և փոփոխել փոփոխականները, որոնք դուրս են իր շրջանակից: Այլ կերպ ասած, փակումը ձևավորվում է, երբ ֆունկցիան սահմանվում է մեկ այլ ֆունկցիայի ներսում և մուտք ունի դեպի մայր ֆունկցիայի փոփոխականները:
 Ահա JavaScript ES5-ում փակման օրինակ.</p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>outerFunction</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>outerVariable</span> = <span className='red'>"Ես դրսում եմ!"</span>;</p>

  <p><span className='blueviole'>function</span> <span className='blue'>innerFunction</span>() {'{'}</p> 

  <p>{'console.log(outerVariable);'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return </span>innerFunction;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>closureExample</span> = outerFunction();</p>

  <p>closureExample(); <span className='darkgreen'>// Արդյունք՝ "Ես դրսում եմ!"</span></p>
</code>


  <p>Այս օրինակում outerFunction ֆունկցիան սահմանում է outerVariable փոփոխական և innerFunction ֆունկցիա, որը տպում է outerVariable փոփոխականի արժեքը կոնսոլում: InnerFunction ֆունկցիան վերադարձվում է outerFunction ֆունկցիայից և վերագրվում է closureExample փոփոխականին։
Երբ closureExample()-ը կանչվում է, տպագրվում է outerVariable-ի արժեքը, որը «Ես դրսում եմ»: Սա հնարավոր է փակման շնորհիվ, որը թույլ է տալիս innerFunction ֆունկցիային մուտք գործել outerVariable փոփոխական փակման միջոցով, չնայած այն հանգամանքին, որ outerVariable-ը սահմանված չէ innerFunction ֆունկցիայի ներսում։

Սա JavaScript ES5-ի փակման պարզ օրինակ է, բայց ցույց է տալիս, թե որքան հզոր և օգտակար են դրանք: Փակումները հաճախ օգտագործվում են JavaScript-ում փակ փոփոխականներ և մեթոդներ ստեղծելու և այլ նպատակների համար: </p>



    </div>
  )
}




export default  AmEs5_3;