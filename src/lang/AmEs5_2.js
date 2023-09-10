import React from 'react'

function AmEs5_2() {
  return (
    <div> 
      <h3>JavaScript Ցիկլեր և Պայմաններ</h3>
    
   <b>1. Ցիկլ while </b>
   
   <p> while ցիկլն օգտագործվում է կոդի բլոկը բազմակի օգտագործելու համար, մինչ նշված պայմանը ճշմարիտ է:</p>
   
   <p>Օրինակ.</p>
   
 <code>
  <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// հաշվիչի փոփոխականի սկզբնավորում</span></p> 

  <p><span className='blueviole'>while</span> (i {'<'}<span className='blue'> 5</span>) {'{'}<span className='darkgreen'> // կարգավորում է պայմանը</span></p>

  <p>{'console.log'}(<span className='blue'>i</span>); <span className='darkgreen'>// կոդի բլոկի կատարում</span></p>

  <p>i++; <span className='darkgreen'>// թարմացնել հաշվիչի փոփոխականը</span></p>

  <p>{'}'}</p>
</code>

    <p>
    Այս օրինակում ցիկլը կաշխատի այնքան ժամանակ, քանի դեռ i-ի արժեքը 5-ից փոքր է: Կոդի բլոկը կկատարվի ամեն անգամ, երբ ցիկլը աշխատի, և i-ի արժեքը կավելանա 1-ով, մինչև հասնի 5-ի:
    Այս կոդը գործարկելու արդյունքը կլինի.
   </p>

<code>
    <p className='blue'>0</p>

    <p className='blue'>1</p>

    <p className='blue'>2</p>

    <p className='blue'>3</p>

    <p className='blue'>4</p>
</code>


  <p><b>2.Ցիկլ for</b></p>
  
  <p>For ցիկլը օգտագործվում է կոդի բլոկը բազմակի գործարկելու՝ որոշակի քանակությամբ անգամների համար: Օրինակ.</p>

<code>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> i = <span className='blue'>0</span>; i {'<'} <span className='blue'>5</span>; i++) {'{'} </p>

  <p>{'console.log(i);'}</p>

  <p>{'}'}</p>
</code>

  <p>
  Այս օրինակում ցիկլը կաշխատի 5 անգամ, քանի որ պայմանը սահմանում է, որ i-ն պետք է լինի 5-ից փոքր: Կոդի բլոկը կկատարվի ամեն անգամ, երբ ցիկլն աշխատում է, և i-ի արժեքը ամեն անգամ կավելանա 1-ով:
Այս կոդը գործարկելու արդյունքը կլինի նույնը, ինչ նախորդ օրինակում.

  </p> 
  
  <code>
    <p className='blue'>0</p>

    <p className='blue'>1</p>

    <p className='blue'>2</p>

    <p className='blue'>3</p>

    <p className='blue'>4</p>
</code>

 <p><b>3. Ցիկլ do-while </b></p>
   
   <p>
   Do-while ցիկլը նման է while ցիկլին, բայց այն կատարում է կոդի բլոկ առնվազն մեկ անգամ, նույնիսկ եթե պայմանը սկզբում կեղծ է: Օրինակ.</p>
  

  <code>
    <p><span className='blueviole'>var</span> i = <span className='blue'>0</span>; <span className='darkgreen'>// սկզբնավորել հաշվիչի փոփոխականը</span></p>

    <p><span className='blueviole'>do</span> {'{'}</p>

    <p>{'console.log(i);'} <span className='darkgreen'>// կատարել կոդի բլոկ</span></p>

    <p>i++; <span className='darkgreen'>// թարմացնել հաշվիչի փոփոխականը</span></p>

    <p>{'}'}</p>

    <p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>); <span className='darkgreen'>// սահմանել պայման</span></p>
</code>

  <p>
   Այս օրինակում ցիկլը կաշխատի առնվազն մեկ անգամ, քանի որ պայմանը ստուգվում է կոդի բլոկի գործարկումից հետո: Կոդի բլոկը կկատարվի ամեն անգամ, երբ ցիկլը գործարկվի, և i-ի արժեքը ամեն անգամ կավելանա 1-ով, մինչև հասնի 5-ի:
   Այս ծածկագրի կատարման արդյունքը կլինի նույնը, ինչ նախորդ օրինակներում.
   </p>

<code>
  <p className='blue'>0</p>

  <p className='blue'>1</p>

  <p className='blue'>2</p>

  <p className='blue'>3</p>

  <p className='blue'>4</p>
</code>  
    
  <p><b>4. Օպերատորներ ++ և -- </b></p>
  
  <p>++ և -- օպերատորներն օգտագործվում են փոփոխականը 1-ով մեծացնելու կամ փոքրացնելու համար: Օրինակներ.</p>
  
 <code>

  <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// սկզբնավորել փոփոխականը</span></p>

  <p>i++; <span className='darkgreen'>// մեծացնել փոփոխականը 1-ով</span></p>

  <p>{'console.log(i);'} <span className='darkgreen'>// Արդյունք՝ 1</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue'>2</span>; <span className='darkgreen'>// սկզբնավորել մեկ այլ փոփոխական</span></p>

  <p>j--; <span className='darkgreen'>// նվազեցնում է փոփոխականը 1-ով</span> </p>

  <p>{'console.log(j);'} <span className='darkgreen'>// Արդյունք՝ 1</span></p>

</code>

  <p>Այս հայտարարությունները հաճախ օգտագործվում են ցիկլերում՝ ընթացիկ կրկնություններին հետևելու համար:</p>
  
  <p><b>5. Օպերատորներ if, else և else if</b></p>
 
  <p>
  Օպերատոր if-ը օգտագործվում է բլոկ կոդի կատարման համար, եթե տրված պայմանը ճիշտ է: Օպերատոր else-ը օգտագործվում է բլոկ կոդի կատարման համար, եթե պայմանը սխալ է: Օպերատոր else if-ը օգտագործվում է մի շարք պայմանների ստուգման համար: Օրինակ.
  </p> 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>15</span>; <span className='darkgreen'>// սկզբնավորել փոփոխականը</span></p>

  <p><span className='blueviole'>if</span> (x {'>'} <span className='blue'>10</span>) {'{'} <span className='darkgreen'>// ստուգել պայմանը</span></p>

  <p>{'console.log'}(<span className='red'>"x-ը 10-ից մեծ է"</span>)</p>

  <p>{'}'}</p>
</code>    

  <h3>Պայմանական (ternary) Օպերատոր</h3>

  <p>
  Պայմանական (ternary) օպերատորը JavaScript-ում if-else հայտարարությունը գրելու սղագրական եղանակ է: Այն պահանջում է երեք օպերանդ՝ պայման, արժեք, որը պետք է վերադարձվի, եթե պայմանը true է, և արժեք, որը պետք է վերադարձվի, եթե պայմանը false է:
Պայմանական օպերատորի շարահյուսություն. (պայման) ? true-value: false-value

Ահա JavaScript-ում պայմանական օպերատորի օգտագործման որոշ օրինակներ.

</p>

<p><p><b>Օրինակ 1.</b></p></p>

<code>  
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>5</span>;</p>

  <p><span className='blueviole'>var</span><span className='blue'> result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>

  <p>document.getElementById(<span className='red'>"example1"</span>).innerHTML = result;</p>
</code>

<p>ելք՝ true Բացատրություն. Այս օրինակում մենք a փոփոխականը դնում ենք 5-ի, այնուհետև օգտագործում ենք պայմանական օպերատոր՝ ստուգելու համար, թե արդյոք a-ն հավասար է 5-ի: Քանի որ դա ճիշտ է, «true» արժեքը վերադարձվում է և վերագրվում է փոփոխական արդյունքին, որն այնուհետև ցուցադրվում է HTML div տարրում:</p>
    
<p><b>Օրինակ 2.</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>

  <p>document.getElementById(<span className='red'>"example2"</span>).innerHTML = result;</p>
</code> 

<p>Արդյունք՝ false Բացատրություն. Այս օրինակում մենք a փոփոխականը դնում ենք 10-ի, այնուհետև օգտագործում ենք պայմանական օպերատոր՝ ստուգելու համար, թե արդյոք a-ն հավասար է 5-ի: Քանի որ սա կեղծ է, «false» արժեքը վերադարձվում է և վերագրվում է փոփոխական արդյունքին, որն այնուհետև ցուցադրվում է HTML div տարրում:</p>    
    
<p><b>Օրինակ 3.</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>7</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = ( a {'>'} <span className='blue'>10</span>) ? <span className='red'>"greater than10"</span>: (a {'<'} <span className='blue'>5</span>) ? <span className='red'>"less than 5"</span> : <span className='red'>"between 5 and 10"</span> ;</p>

  <p>document.getElementById(<span className='red'>"example3"</span>).innerHTML = result;</p>
</code>
   
<p> Արդյունք՝ 5-ից 10-ի միջև:  Բացատրություն. Այս օրինակում մենք a փոփոխականը դնում ենք 7-ի և այնուհետև օգտագործում ենք պայմանական՝ ստուգելու համար, թե արդյոք a-ն մեծ է 10-ից: Քանի որ սա սխալ է, մենք անցնում ենք երկրորդ պայմանին, որը ստուգում է, թե արդյոք a-ն 5-ից փոքր է: սա նույնպես սխալ է, մենք անցնում ենք երրորդ պայմանին, որը վերադարձնում է «5-ից 10-ի միջև» արժեքը, քանի որ դա միակ հնարավոր տարբերակն է: Արդյունքն այնուհետև ներկայացվում է HTML div տարրում:</p>   
   
   
   
   
    </div>
  )
}




export default  AmEs5_2;