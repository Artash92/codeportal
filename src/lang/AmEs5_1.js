import React from 'react'

 function AmEs5_1() {
  return (
    <div>
      <h1>JavaScript</h1>
<p>
JavaScript-ը ստեղծվել է 1995 թվականին  Բրենդան Այքի կողմից, երբ աշխատում էր Netscape Communications Corporation-ում:
Լեզուն սկզբում կոչվել է Mocha, սակայն հետագայում վերանվանվել է LiveScript, իսկ հետո վերջապես JavaScript։
Վերանվանումը տեղի է ունեցել հիմնականում մարքեթինգային նկատառումներով և այն ժամանակվա Java-ի ճանաչվածությունից օգտվելու համար:
Բրենդան Այքը ամերիկացի տեխնոլոգ և ծրագրավորող է, ով աշխատել է Mozilla-ում, Netscape-ում և Brave Software-ում:
Նա համարվում է JavaScript-ի ստեղծողը և նշանակալի ներդրում է ունեցել ծրագրավորման այլ լեզուների զարգացման գործում։
</p>

<h3>ECMAScript-ը սահմանում է տվյալների 7 տեսակ:</h3>

<code>
<ul>
   <li><span className='blue'>Number.</span> ներկայացնում է թվային արժեքներ, ներառյալ ամբողջ թվերը և լողացող կետային համարները: Օրինակ՝ <span className='blue'>1, 3.14, -42</span>.</li>
   
   <li><span className='blue'>String.</span> ներկայացնում է տեքստային տվյալները, որոնք փակցված են մեկ կամ կրկնակի չակերտներով: Օրինակ՝ <span className='red'>'բարև', 'աշխարհ', '123'</span>:</li>
   
   <li><span className='blue'>Boolean.</span> ներկայացնում է բուլյան էություն և կարող է ունենալ միայն երկու արժեք՝ true կամ false: Օրինակ՝ <span className='blue'>ճշմարիտ, կեղծ</span>:</li>
   
   <li><span className='blue'>Undefined.</span> ներկայացնում է փոփոխական, որը հայտարարվել է, բայց արժեք չի նշանակվել: Օրինակ՝ <span className='blueviole'>var</span> <span className='blue'>x</span>; console.log (x); <span className='darkgreen'>// Արդյունք՝ undefined</span> </li>
   
   <li><span className='blue'>Null.</span> Ներկայացնում է որևէ օբյեկտի արժեքի միտումնավոր բացակայությունը: Օրինակներ՝ <span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blueviole'>null</span>; console.log (x); <span className='darkgreen'>// Արդյունք՝ null</span></li>
   
   <li><span className='blue'>Symbol.</span> ներկայացնում է եզակի նույնացուցիչ, որը հասանելի չէ կանչող  կոդի համար: Օրինակ՝ <span className='blueviole'>const</span> <span className='blue'>sym1</span> = Symbol(<span className='red'>'foo'</span>);</li>
   
   <li><span className='blue'>Object.</span> հարակից տվյալների և/կամ գործառույթների հավաքածու է: Օրինակ՝ <span className='blueviole'>var</span> <span className='blue'>obj</span> = {'{'} անուն:<span className='red'> "Ջոն"</span>, տարիք: <span className='blue'>30</span> {'}'}; <span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3</span>];</li>

</ul>
</code>

<h2>Բուլյան տվյալների տեսակը</h2>

<p>Բուլյան տվյալների տեսակն ունի միայն երկու արժեք՝ true և false: Այն հաճախ օգտագործվում է համեմատական ​​գործողություններում՝ օգտագործելով հետևյալ օպերատորները.</p>

<code>
<ul> 
   <li>=== և ==</li>
        
   <li>{'>'} և {'<='}</li>
        
    <li>{'>='} և {'<='}</li>  
</ul>
</code>
      
<p>Օրինակներ.</p>
      
 <code>
 <ul>
     <li><span className='blue'>10</span> {'<'} <span className='blue'>16</span> == <span className='blue'>true</span> (ճշմարիտ)</li>
        
      <li><span className='blue'>10</span> {'>'} <span className='blue'>16</span> == <span className='blue'>false</span> (կեղծ)</li>
  </ul>

 </code>
     
      <h2>Տրամաբանական օպերատորներ</h2>

 <code>
     <ul>
        
        <li>NOT (!) ՈՉ</li>
        
        <li>AND (&&) ԵՎ</li>
        
        <li>OR (||) ԿԱՄ</li>
      
      </ul>
  </code> 
    
      
      <p>Պայմանները գնահատելիս օգտագործվում է բուլյան տվյալների տեսակը: Հետևյալ արժեքները վերածվում են false-ի՝ 0-ի և դատարկ տողի: Հետևյալ արժեքները վերածվում են true. մնացած բոլոր թվերը և ոչ դատարկ տողերը:</p>
      
      <h3>Օրինակներ.</h3>

      <code>
 <p><span className='blue'>5</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>6</span> && <span className='blue'>0 </span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='blue'>true</span> && <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>5</span> || <span className='blue'>6</span> <span className='darkgreen'>// 5</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>6</span> || <span className='blue'>7</span> <span className='darkgreen'> // 6</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'> // false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>50</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>10</span> && <span className='blue'>0</span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='red'>'Բարև' </span> && <span className='red'>'Աշխարհ'</span> <span className='darkgreen'>// 'Աշխարհ'</span></p>
  
  <p><span className='red'>'Բարև' </span> && <span className='red'>''</span> <span className='darkgreen'>// ''</span></p>
  
  <p>!<span className='blue'>true</span> <span className='darkgreen'>// false</span></p>
 
 </code>
  
  <h3>Արտահայտություններ և օպերատորներ</h3>

<p>Սրանք JavaScript-ում արտահայտությունների և օպերատորների օրինակներ են: Արտահայտությունը արժեքների, փոփոխականների, օպերատորների համակցություն է, որը կարող է գնահատվել որոշակի արժեքով: Արտահայտությունները կարող են օգտագործվել այլ արտահայտություններում կամ օպերատորներ:</p>

<p>Արտահայտություններ ստեղծելու համար օգտագործվում են օպերատորներ, ինչպիսիք են *, + և այլն: Առաջին երեք տողերը ցույց են տալիս տվյալների տարբեր տիպերով արտահայտությունների օրինակներ՝ թվեր, տողեր և բուլյաններ:</p>

<p>Օպերատորները կարող են օգտագործվել որպես օպերատորների արտահայտություններ, որոնք օպերատորների մաս են կազմում: Հաջորդ երեք տողերը ցույց են տալիս հայտարարությունների արտահայտությունների օրինակներ, որոնք հայտարարություններ են:</p>


<p>Յուրաքանչյուր օպերատորի արտահայտություն ավարտվում է օպերատորով (;), որն այն դարձնում է օպերատոր:</p>
    
<ul>
     <li><strong className='blue'>Արտահայտություն</strong>. <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span></li>
     
     <li><strong className='blue'>Արտահայտություն</strong>. <span className='red'>«Բարև Ձեզ»</span></li>
     
     <li><strong className='blue'>Արտահայտություն</strong>. <span className='blue'>(false)</span>կեղծ</li>
     
     <li><strong className='blue'>Օպերատորի հրահանգ</strong>. <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span>;</li>
     
     <li><strong className='blue'>Օպերատորի հրահանգ</strong>. <span className='red'>«Բարև Ձեզ»</span>;</li>
     
     <li><strong className='blue'>Օպերատորի հրահանգ</strong>. <span className='blue'>(false)</span>կեղծ;</li>
   </ul>  

 <h2>JavaScript-ի հատուկ արժեքներ և ֆունկցիաներ</h2>   

 <h5>NaN</h5>
  
  <p>NaN-ը նշանակում է «Not a Number» և JavaScript-ում հատուկ արժեք է, որը ներկայացնում է թվաբանական գործողության արդյունքում առաջացող չսահմանված կամ չներկայացվող արժեք: Օրինակ, զրոն զրոյի բաժանելը կստացվի NaN:</p>   

  <h5>typeof</h5> 
  
  <p>typeof-ը JavaScript-ի միատարր օպերատոր է, որը վերադարձնում է տող, որը ցույց է տալիս օպերանդի տվյալների տեսակը: Օրինակ՝ «բարև» տիպը կվերադարձնի «string», իսկ 42 տեսակը՝ «համար»:</p> 

  <h5>isNaN()</h5>
  
  <p>isNaN()-ը JavaScript-ում գլոբալ ֆունկցիա է, որը վերադարձնում է true, եթե արգումենտը NaN է (Թիվ չէ), իսկ հակառակ դեպքում՝ false: Օրինակ՝ isNaN(«բարև») կվերադարձնի true, իսկ isNaN(42)՝ false:</p>  

  <h5>isFinite()</h5>
  
  <p>isFinite()-ը գլոբալ JavaScript ֆունկցիա է, որը վերադարձնում է true, եթե արգումենտը վերջավոր թիվ է, իսկ հակառակ դեպքում՝ false: Օրինակ, isFinite(42)-ը կվերադարձնի true, իսկ isFinite(Infinity) կվերադարձնի false:</p>  

  <h2>Փոփոխականներ</h2>
  
  <ul>
  <li>Փոփոխական հայտարարագրեր (a-A, $, _) </li>
   
   <ul>
     <li><code><span className='blueviole'>var</span> <span className='blue'>ուսանողի անունը</span>;</code></li>
     
     <li><code><span className='blueviole'>var</span> <span className='blue'>անուն, ազգանուն, տարիք</span>;</code></li>
   </ul>
   
   <li> Փոփոխականների հայտարարում և նշանակում</li>
   
   <ul>
     <li><code> <span className='blueviole'>var</span> <span className='blue'>Car model</span> = <span className='red'>"Tesla"</span>;</code></li>
     
     <li><code> <span className='blueviole'>var</span> <span className='blue'>Car model</span> = <span className='red'>"Tesla"</span>, <span className='blue'>տարի</span> = <span className='blue'>2022</span>, <span className='blue'>էլեկտրական</span> = <span className='blue'>true</span>;</code></li>
   </ul>  
    
    <li>Փոփոխականների օգտագործում</li>
   
   <ul>
     <li><code><span className='blueviole'>var</span> <span className='blue'>թիվ</span> = <span className='blue'>5</span>;</code></li>
     
     <li><code>թիվ = քանակ + <span className='blue'>3</span>;</code></li>
     
     <li><code>թիվ += <span className='blue'>2</span>;</code></li>
   </ul>
   
   </ul>
   
   <h2>Null և Undefined</h2>

    <ul>
    
    <li>Null-ը JavaScript-ում հատուկ արժեք է, որը ներկայացնում է օբյեկտի արժեքի բացակայությունը: Սա պարզունակ արժեք է և նշանակում է միտումնավոր ձախողված կամ դատարկ արդյունք: Այն հաճախ օգտագործվում է նշելու, որ փոփոխականը արժեք չունի կամ ֆունկցիան արժեք չի վերադարձնում:</li>
    
    <li>Udefined-ը այն արժեքն է, որը կարող է ունենալ փոփոխականը, եթե նրան տրված չէ արժեք կամ եթե նրան բացահայտորեն վերագրվել է չսահմանված արժեքը: Այն նաև պարզունակ արժեք է JavaScript-ում:</li>
    
    <li>Typeof. Տիպի օպերատորն օգտագործվում է արժեքի տեսակը որոշելու համար: Եթե ​​արժեքը սահմանված չէ, typeof-ը վերադարձնում է «undefined» տողը: Եթե ​​արժեքը զրոյական է, typeof-ը վերադարձնում է «օբյեկտ» տողը: Սա JavaScript-ում հայտնի վրիպակ է, որն առկա է լեզվի ստեղծման պահից:</li>
    
    <li>Հաճախ շփոթում են Null-ը և Udefined-ը, քանի որ երկուսն էլ ներկայացնում են արժեքի բացակայություն: Այնուամենայնիվ, նրանք նույնը չեն: Null-ը ներկայացնում է արժեքի միտումնավոր բացակայությունը, իսկ չսահմանվածը ներկայացնում է արժեքի պատահական բացակայությունը:</li>
    
    <li> JavaScript-ում == օպերատորը կատարում է cast, ինչը նշանակում է, որ նախքան համեմատելը, այն կփորձի փոխակերպել տարբեր տեսակի արժեքները ընդհանուր տեսակի: ==-ի հետ null-ը և undefined-ը համեմատելիս արդյունքը կլինի true, քանի որ դրանք երկուսն էլ համարվում են կեղծ արժեքներ:</li>
    
    <li> JavaScript-ում === օպերատորը խիստ համեմատություն է կատարում առանց cast-ի: ===-ի հետ null-ը և undefined-ը համեմատելիս արդյունքը կեղծ կլինի, քանի որ դրանք նույն արժեքի տեսակը չեն:</li>
    
    <li>ParseInt, parseFloat և Number ֆունկցիաները օգտագործվում են տողը թվի փոխարկելու համար: Երբ զրոյականացվում է, բոլոր երեք ֆունկցիաները վերադարձնում են NaN, ինչը նշանակում է «ոչ թիվ»: Դա պայմանավորված է նրանով, որ null-ը վավեր թիվ չէ և չի կարող փոխարկվել թվի:</li>

    </ul>
    
    </div>
  )
}


export default AmEs5_1;