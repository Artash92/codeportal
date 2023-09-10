import React from 'react'

function AmEs5_8() {
  return (
    <div>
    
    <h4> Date - օբյեկտ</h4>

<p>JavaScript-ն օգտագործում է Date օբյեկտը ամսաթվերի և ժամերի հետ աշխատելու համար: Այն թույլ է տալիս ստեղծել, փոփոխել և ձևաչափել ամսաթվերն ու ժամերը տարբեր ձևաչափերով: Date օբյեկտը ներկայացնում է ժամանակի մեկ կետ և նախնական սկզբնավորվում է ընթացիկ ամսաթվով և ժամով:</p>

<p>JavaScript-ում Date օբյեկտի օգտագործման մի քանի օրինակ.</p>

<p>1. Date օբյեկտի ստեղծում որոշակի ամսաթվով և ժամով.</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(<span className='blue'>2022, 0, 1, 12, 0, 0</span>);</p>

  <p>{'console.log(date);'} <span className='green'>// Sat Jan 01 2022 12:00:00 GMT+0200 (Eastern European Standard Time</span>)</p>
</code>

<p>Այս օրինակը ստեղծում է նոր Date օբյեկտ տվյալ տարով (2022), ամիս (0 հունվարին), օր (1), ժամ (12), րոպե (0) և վայրկյան (0): Արդյունքը ցույց է տալիս ստացված ամսաթիվը և ժամը մարդու համար ընթեռնելի ձևաչափով:</p>

<p>2. Ստեղծելով Date օբյեկտ ընթացիկ ամսաթվով և ժամով՝</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(); </p>

  <p>{'console.log(date);'}<span className='green'>// Sat Mar 27 2023 13:28:17 GMT+0200 (Eastern European Standard Time)</span></p>
</code>

<p>Այս օրինակը ստեղծում է նոր Date օբյեկտ ընթացիկ ամսաթվով և ժամով: Արդյունքը ցույց է տալիս ստացված ամսաթիվը և ժամը ընթեռնելի ձևաչափով:</p>

<p>3. Ստանալով ընթացիկ տարին, ամիսը և օրը՝</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>year</span> = date.getFullYear();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>month</span> = date.getMonth();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>day</span> = date.getDate();</p>

  <p>{'console.log'}(year + <span className='red'>"-"</span> + month + <span className='red'>"-"</span> + day); <span className='green'></span></p>
</code>

<p>Այս օրինակը ստեղծում է նոր Date օբյեկտ ընթացիկ ամսաթվով և ժամով: GetFullYear(), getMonth(), և getDate() մեթոդներն այնուհետև օգտագործվում են տարեթիվը, ամիսը (որտեղ 0-ը ներկայացնում է հունվարը) և օրը Date օբյեկտից հանելու համար: Արդյունքը ցույց է տալիս ստացված ամսաթիվը ձևաչափված տողի մեջ:</p>

<p>4. Փոխարկել ամսաթիվը տողի՝</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>dateString</span> = date.toDateString(); </p>

  <p>{'console.log'}(dateString); <span className='green'>// Sat May 30 2023</span></p>
</code>

<p>Այս օրինակը ստեղծում է նոր Date օբյեկտ ընթացիկ ամսաթվով և ժամով: ToDateString() մեթոդն այնուհետև օգտագործվում է ամսաթիվը ընթեռնելի տողի փոխարկելու համար։ Արդյունքը ցույց է տալիս ամսաթվի ստացված տողերի ներկայացումը:</p>

<p>Սա ընդամենը մի քանի օրինակ է, թե ինչպես կարող եք օգտագործել Date օբյեկտը JavaScript-ում՝ ամսաթվերի և ժամերի հետ աշխատելու համար:</p>

<p><b>Error - object</b></p>

<p>JavaScript-ում Error օբյեկտն օգտագործվում է գործարկման ժամանակի սխալները ներկայացնելու համար: Երբ որևէ ծրագրում սխալ է տեղի ունենում, JavaScript-ը ստեղծում է Error օբյեկտ և նետում այն: Error օբյեկտը պարունակում է տեղեկություններ սխալի մասին, ինչպիսիք են սխալի հաղորդագրությունը և սխալի անվանումը:</p>

<p>Օրինակ՝ օգտագործելով try-catch բլոկը ReferenceError-ը հայտնաբերելու համար.</p>

<code>
  <p><span className='blueviole'>try </span>{'{'}</p>

  <p>{'console.log(variable);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span>(<span className='blue'>err</span>) {'{'}</p>

  <p>{'console.log(err);'} <span className='green'>//ReferenceError: variable is not defined</span></p>

  <p>{'console.log(err.name);'} <span className='green'>//ReferenceError</span></p>

  <p>{' console.log(err.message);'} <span className='green'>//variable is not defined</span></p>

  <p>{'}'}</p>
</code>

<p>Այս օրինակում try block-ը փորձում է գրանցել չսահմանված փոփոխական, ինչի արդյունքում հայտնվում է ReferenceError: Catch բլոկը բռնում է սխալը և գրում է սխալի օբյեկտը գրանցամատյանում և թողարկում դրա name և message հատկությունները:</p>

<p> try-catch բլոկ օգտագործելու ևս մեկ օրինակ ձեր սեփական սխալի օբյեկտը նետելու համար Error:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue'>0</span>; </p>

  <p><span className='blueviole'>try</span> {'{'}</p>

  <p><span className='blueviole'>if</span> (num2 == <span className='blue'>0</span>) {'{'}</p>

  <p><span className='blueviole'>throw new</span> Error(<span className='red'>"Չի կարելի զրոյի բաժանել։"</span>);</p>

  <p>{'}'}</p>

  <p>{'console.log(num1 / num2);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span> (<span className='blue'>err</span>) {'{'}</p>

  <p>{' console.log'}(err.name, <span className='red'>" : "</span>, err.message) ; </p>

  <p>{'}'}</p>
</code>

<p>Այս օրինակում try block-ը փորձում է num1-ը բաժանել num2-ի: Եթե ​​num2-ը զրոյական է, ապա նոր Error օբյեկտ է ուղարկվում հատուկ սխալի հաղորդագրությամբ: Catch բլոկը բռնում է սխալը և գրում սխալի օբյեկտը log-ում և թողարկում դրա name և message հատկությունները:</p >

<p>Error օբյեկտների և try-catch բլոկների օգտագործումը JavaScript ծրագրերում գործարկման ժամանակի սխալների մշակման կարևոր մասն է: Այն թույլ է տալիս ծրագրավորողներին  կարգավորել սխալները և օգտակար արձագանքներ տրամադրել օգտատերերին:</p>



    </div>
  )
}




export default  AmEs5_8;