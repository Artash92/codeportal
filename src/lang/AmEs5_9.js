import React from 'react'

function AmEs5_9() {
  return (
    <div> 
  <h1>Pseudo protocol JavaScript</h1>

  <p>Pseudo protocol-ի օգտագործման օրինակ՝ ({'<a>'}) թեգի href ֆունկցիայում: Երբ օգտվողը սեղմում է հղումը, այն կգործարկի href ֆունկցիայում նշված JavaScript կոդը:</p> 

  <p>Նույն կոդը գրելու այլընտրանքային եղանակ՝ առանց Javascript-ի օգտագործման. protocol-ի</p>

  <code>
    <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#"</span> <span className='blue'>onclick</span>=<span className='blue1'>"myFunction(); return false;"</span>{'>'}Սեղմել{'</'}<span className='green'>a</span>{'>'}</p>

    <p>{'<'}<span className='green'>script</span>{'>'}</p>

    <p>&nbsp;<span className='red'>function</span> myFunction() {'{'}</p>

    <p>&nbsp;&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Բարեւ"</span>);</p>

    <p>&nbsp;{'}'}</p>

    <p>{'</'}<span className='green'>script</span>{'>'}</p>
 </code>
    
 <p>Այս օրինակում մենք օգտագործում ենք դատարկ href հատկանիշը և onclick իրադարձությունների մշակիչը՝ myFunction()-ին կանչելու համար, երբ հղումը սեղմվում է: Վերադարձի կեղծ հայտարարությունը(return false ) թույլ չի տալիս, որ հղումը հետևի նոր էջի հղմանը:</p>    
    
 <p>Երկու օրինակներն էլ հասնում են նույն արդյունքին` հղմանը սեղմելիս կոնսոլում տպվում է "Բարև" հաղորդագրություն: Այնուամենայնիվ, երկրորդ օրինակը համարվում է ավելի ճիշտ, քանի որ այն առանձնացնում է JavaScript կոդը HTML նշումից, ինչը հեշտացնում է ծածկագրի պահպանումն ու վրիպազերծումը:</p>  
    
 <h2>Բրաուզերի օբյեկտի մոդել (Browser Object Model, BOM)</h2>

 <p>JavaScript ES5-ում Փաստաթղթի օբյեկտի մոդելը (DOM) ներկայացնում է վեբ էջի HTML տարրերը կառուցվածքային ծառի մեջ, որը թույլ է տալիս JavaScript կոդը փոխազդել վեբ էջի բովանդակության հետ և դինամիկ կերպով փոխել այն: Ստորև բերված են դիտարկիչի պատուհանի օբյեկտում սովորաբար օգտագործվող որոշ օբյեկտներ.</p>

 <p>1. <b>window.</b> բրաուզերի JavaScript հիերարխիայի վերին օբյեկտը, որը ներկայացնում է բրաուզերի պատուհանը: Բոլոր գլոբալ JavaScript օբյեկտները, գործառույթները և փոփոխականները ավտոմատ կերպով դառնում են window օբյեկտի անդամներ:</p>

 <p>2. <b>history.</b> History օբյեկտը թույլ է տալիս JavaScript-ին փոխազդել բրաուզերի պատմության հետ՝ թույլ տալով հետ ու առաջ շարժվել էջերի միջև:</p>

 <p>Օրինակ՝</p>

 <code><p>window.history.back(); <span className='green'>// Տեղափոխվել մեկ էջ հետ</span> </p></code>
    
 <p>3. <b>navigator.</b> Navigator օբյեկտը տեղեկատվություն է տրամադրում օգտատիրոջ համակարգչում աշխատող վեբ բրաուզերի և օպերացիոն համակարգի մասին:</p>

<p>Օրինակ՝</p>

<code><p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Տպում է բրաուզերի համար օգտագործողի user agent տողը</span></p></code>

<p>4.<b>screen.</b> Screen օբյեկտը տեղեկատվություն է տրամադրում օգտատիրոջ էկրանի վերահսկման և գույնի խորության մասին:</p>

<p>Օրինակ՝</p>

<code><p>{'console'}.<span className='blue'>log</span>(screen.width);<span className='green'> // Ցուցադրում է օգտագործողի էկրանի լայնությունը</span></p></code>

<p>5.<b>location.</b> Location օբյեկտը տեղեկատվություն է տրամադրում վեբ էջի ընթացիկ URL-ի մասին և թույլ է տալիս անցնելու նոր URL-ներ:</p>

<p>Օրինակ՝</p>

<code><p>{'console'}.<span className='blue'>log</span>(location.href);<span className='green'> // Ցուցադրում է ընթացիկ URL location.href = "https://www.example.com"; // Անցնում է դեպի նոր URL</span></p></code>

<p>6.<b>document.</b> Document օբյեկտը ներկայացնում է ընթացիկ վեբ էջի HTML բովանդակությունը և թույլ է տալիս JavaScript կոդին փոխազդել և կառավարել էջի բովանդակությունը:</p>

<p>Օրինակ՝</p>

<code><p>{'document'}.<span className='blue'>getElementById</span>(<span className='blue1'>"myDiv"</span>).<span className='blue'>innerHTML </span>= <span className='blue1'>"Նոր բովանդակություն"</span>; <span className='green'>// Փոխում է HTML-ի բովանդակությունը "myDiv"</span></p></code>

<p>7. <b>methods.</b> Բրաուզերի պատուհանի օբյեկտի վրա կան բազմաթիվ այլ մեթոդներ, ինչպիսիք են alert() , prompt() , confirm() , setInterval() և setTimeout(), որոնք թույլ են տալիս ցուցադրել երկխոսության պատուհաններ, սահմանել ժամանակաչափեր և այլն:</p>

<p>Օրինակ՝</p>

<code><p><span className='blueviole'>alert</span>(<span className='blue1'>"Բարեւ աշխարհ!"</span>); <span className='green'>// Ցուցադրում է ազդանշանային երկխոսություն "Բարև աշխարհ" հաղորդագրությամբ:</span></p></code>

<h5>Բրաուզերի օբյեկտի մոդելը (BOM) JavaScript API-ն է, որն ապահովում է մուտք դեպի վեբ բրաուզերի պատուհանի օբյեկտը և դրա հատկությունները: window օբյեկտի հատկություններից մեկը history օբյեկտն է, որը պարունակում է օգտատիրոջ զննման պատմությունը:</h5>

<p>history օբյեկտը մի քանի եղանակ է տրամադրում ձեր բրաուզերի պատմության մեջ նավարկելու համար:</p>

<p><b>history.go()</b> մեթոդը կարող է օգտագործվել զննման պատմության որոշակի էջ նավարկելու համար: Այս մեթոդը որպես փաստարկ ընդունում է դրական կամ բացասական ամբողջ թիվը: Եթե ​​փաստարկը դրական ամբողջ թիվ է, ապա այն առաջ է շարժվում պատմության մեջ, իսկ եթե բացասական է, ապա պատմության մեջ հետընթաց է ընթանում: Օրինակ, history.go(-1)-ը մեկ էջ հետ կտեղափոխի զննարկման պատմության մեջ, իսկ history.go(2)-ը երկու էջ առաջ:</p>

<p><b>history.back()</b> մեթոդն օգտագործվում է զննարկման պատմության մեջ մեկ էջ հետ տեղափոխելու համար, որը համարժեք է <b>history.go(-1)</b>-ին:</p>

<p><b>history.forward()</b> մեթոդն օգտագործվում է զննարկման պատմության մեջ մեկ էջ առաջ տեղափոխելու համար, որը համարժեք է <b>history.go(1)</b>-ին:</p>

<p><b> history.length հատկությունը </b>վերադարձնում է զննարկման պատմության էջերի քանակը:</p>

<p>history օբյեկտի օգտագործման օրինակ՝</p>

<code>
  <p><span className='green'>{ '// Մեկ էջ հետ գնալ զննարկման պատմության մեջ'} </span> history.<span className='blue'>back</span>();</p>

  <p><span className='green'>{'// Մեկ էջ առաջ գնալ զննարկման պատմության մեջ'} </span>history.<span className='blue'>forward</span>();</p>

  <p><span className='green'>{'// Գնալ դեպի զննարկման պատմության երրորդ էջ'} </span> history.<span className='blue'>go</span>(<span className='blue1'>2</span>);</p>

  <p><span className='green'>{ '// Ստանալ զննարկման պատմության էջերի քանակ'}</span>  {'console'}.<span className='blue'>log</span>(history.<span className='blue'>length</span>);</p>
</code>

<h4>Բրաուզերի օբյեկտի մոդելը (BOM) JavaScript API-ի մի մասն է, որն ապահովում է մուտք դեպի բրաուզերի պատուհանը և դրա հատկությունները: Navigator օբյեկտը BOM-ի մի մասն է և ներկայացնում է բրաուզերը: Այն տեղեկատվություն է տրամադրում տվյալ պահին օգտագործվող բրաուզերի մասին:</h4>

<p>Navigator օբյեկտի որոշ հատկություններ և դրանց բացատրությունները.</p>

<code>
  <p>navigator.<span className='blue'>appCodeName</span>: Վերադարձնում է բրաուզերի ծածկանունը:</p>

  <p>navigator.<span className='blue'>appName</span>: Վերադարձնում է բրաուզերի անունը։</p>

  <p>navigator.<span className='blue'>appVersion</span>: Վերադարձնում է բրաուզերի տարբերակի տեղեկատվությունը:</p>

  <p>navigator.<span className='blue'>language</span>: Վերադարձնում է այն լեզուն, որով կազմված է բրաուզերը:</p>

  <p>navigator.<span className='blue'>platform</span>: Վերադարձնում է օպերացիոն համակարգի հարթակը, որի վրա աշխատում է բրաուզերը:</p>

  <p>navigator.<span className='blue'>userAgent</span>: Վերադարձնում է բրաուզերի համար օգտագործողի գործակալի տողը:</p>
</code>

<p>Օրինակ, թե ինչպես օգտագործել Navigator օբյեկտը.</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(navigator.appName); <span className='green'>// Ցուցադրում է բրաուզերի անունը</span></p>

  <p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Տպում է բրաուզերի համար օգտագործողի գործակալի տողը</span></p>
</code>

<p>Օգտագործելով Navigator օբյեկտի հատկությունները, դուք կարող եք գրել JavaScript կոդ, որն այլ կերպ է վարվում՝ կախված օգտագործողի կողմից օգտագործվող բրաուզերից:</p>

<h3>Բրաուզերի օբյեկտի մոդելը (BOM) JavaScript-ում ապահովում է բրաուզերի պատուհանի և դրա հատկությունների հետ փոխազդելու միջոցը: window.screen օբյեկտը BOM-ի մի մասն է և տեղեկատվություն է տրամադրում օգտագործողի էկրանի մասին:</h3>

<p>Օբյեկտների հատկությունների ցանկ <b> window.screen:</b></p>

<p><b>screen.height.</b> վերադարձնում է օգտատիրոջ էկրանի ընդհանուր բարձրությունը պիքսելներով:</p>

<p><b>screen.width:</b> վերադարձնում է օգտատիրոջ էկրանի ընդհանուր լայնությունը պիքսելներով:</p>

<p><b>screen.availHeight.</b> վերադարձնում է օգտատիրոջ հասանելի էկրանի բարձրությունը պիքսելներով, առանց Windows-ի առաջադրանքների տողի և համակարգի այլ տարրերի:</p>

<p><b>screen.availWidth.</b> վերադարձնում է օգտատիրոջ հասանելի էկրանի լայնությունը պիքսելներով, առանց Windows-ի առաջադրանքների տողի և համակարգի այլ տարրերի:</p>

<p> JavaScript կոդի օրինակ, որը թույլ է տալիս տեղեկատվություն ստանալ էկրանի չափերի և գտնվելու վայրի մասին, ինչպես նաև օգտագործում է setTimeout() և clearTimeout() մեթոդները. </p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"էկրանի ընդհանուր բարձրությունը: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>height</span> + <span className='blue1'>" պիքսել"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Էկրանի ընդհանուր լայնությունը: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>width</span> + <span className='blue1'>" պիքսել"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Էկրանի հասանելի բարձրությունը: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availHeight</span> + <span className='blue1'>" պիքսել"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Էկրանի հասանելի լայնությունը: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availWidth</span> + <span className='blue1'>" պիքսել"</span>);</p>
</code>

<p>Այս կոդը կոնսոլում կտպագրի էկրանի բարձրությունն ու լայնությունը, ինչպես նաև էկրանի հասանելի բարձրությունն ու լայնությունը:</p>

<p>Նկատի ունեցեք, որ screen օբյեկտը միայն կարդալու է և հնարավոր չէ փոփոխել:</p>

<h3>Browser Object Model-ը (BOM) JavaScript-ի օբյեկտների մի շարք է, որը տրամադրվում է վեբ բրաուզերների կողմից՝ դիտարկիչի պատուհանի հետ փոխազդելու համար: BOM-ի օբյեկտներից մեկը location օբյեկտն է, որը ներկայացնում է բրաուզերի պատուհանի ներկայիս URL-ը: location օբյեկտն ունի մի քանի հատկություններ, որոնց կարելի է մուտք գործել և փոփոխել՝ URL-ի հետ փոխազդելու համար:</h3>

<p>օբյեկտի <b>location</b> հատկությունների բացատրություններ.</p>

<p><b>location.protocol :</b> Այս հատկությունը սահմանում է URL-ում օգտագործվող արձանագրությունը, օրինակ՝ <span className='blue1'>"http:"</span> կամ <span className='blue1'>"https:"</span>.</p>

<p><b>location.host:</b> Այս հատկությունը նշում է տիրույթի անունը և պորտի համարը URL-ում, օրինակ <span className='blue1'> "www.site.com:8080"</span>:</p>

<p><b>location.hostname:</b>Այս հատկությունը նշում է տիրույթի անունը URL-ում, օրինակ <span className='blue1'>"www.site.com"</span>:</p>

<p><b>location.href:</b> Այս հատկությունը սահմանում է ամբողջ URL-ը, օրինակ <span className='blue1'>"http://www.site.com/about/?name=javascript#content"</span>:</p>

<p><b>location.port:</b> Այս հատկությունը նշում է պորտի համարը URL-ում, օրինակ <span className='blue1'>"8080"</span>:</p>

<p><b>location.pathname:</b> Այս հատկությունը սահմանում է URL-ի ուղին, օրինակ <span className='blue1'>"/about/"</span>:</p>

<p><b>location.search:</b> Այս հատկությունը սահմանում է հարցման տող URL-ում, ինչպիսին է <span className='blue1'>"?name=javascript"</span>:</p>

<p><b>location.hash:</b> Այս հատկությունը սահմանում է նույնացուցիչի հատվածը URL-ում, օրինակ <span className='blue1'>"#content"</span>:</p>

<p>Մուտք գործելով և փոփոխելով <b>location</b> օբյեկտի այս հատկությունները, դուք կարող եք փոխազդել բրաուզերի պատուհանի ընթացիկ URL-ի հետ, օրինակ՝ օգտատիրոջը վերահղելով այլ էջ կամ փոխելով հարցման տողը:</p>

<p>Մեթոդ <b>setTimeout()</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sayHello</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>"Բարեւ աշխարհ!"</span>);</p>

  <p>{'}'}</p>

  <p className='green'>// Կանչել ֆունկցիան 2 վայրկյան հետո</p>

  <p><span className='blueviole'>var</span> <span className='blue'>timer</span> = setTimeout(sayHello, <span className='blue'>2000</span>);</p>

  <p className='green'>// Չեղարկել ժամանակաչափը նախքան այն ավարտելը</p>

  <p>clearTimeout(timer);</p>
 </code>

 <p>Այս օրինակն օգտագործում է <b>setTimeout</b> ֆունկցիան՝ <b>sayHello</b> ֆունկցիայի կատարումը 2 վայրկյանով հետաձգելու համար: Ֆունկցիան որպես պարամետր փոխանցվում է setTimeout-ին և հետաձգման ժամանակը միլիվայրկյաններով: <b>setTimeout</b> ֆունկցիան վերադարձնում է ժամանակաչափի ID-ն, որն օգտագործվում է ժմչփը չեղարկելու համար, նախքան այն գործարկվելը, օգտագործելով <b>clearTimeout</b> ֆունկցիան:</p>

 <h3>Իրադարձություններ</h3>

 <p>Փաստաթղթի օբյեկտի մոդելը (DOM) ծրագրավորման ինտերֆեյս է վեբ փաստաթղթերի համար: Այն ներկայացնում է էջն այնպես, որ ծրագրերը կարող են փոխել փաստաթղթի կառուցվածքը, ոճը և բովանդակությունը: Իրադարձությունները գործողություններ են, որոնք տեղի են ունենում բրաուզերում, օրինակ՝ կոճակի վրա սեղմելը, էջը փոփոխելը կամ ստեղնաշարի վրա ստեղնը սեղմելը:</p>

 <p>onclick</p>

<p>onmousedown</p>

<p>onmouseup</p>

<p>onmousemove</p>

<p>onmouseover</p>

<p>onmouseout</p>

<p>onkeydown</p>

<p>onkeyup</p>

<p>onkeypress</p>

<p>onfocus</p>

<p>onblur</p>

<p>onsubmit</p>

<p>onreset</p>

<p>onselect</p>

<p>onchange</p>

<p>onscroll</p>

<p>onload</p>

<p>onunload</p>

<p>Թվարկված իրադարձությունները իրադարձությունների մշակիչներ են, որոնք ֆունկցիաներ են և որոնք գործում են, երբ որոշակի իրադարձություն տեղի է ունենում վեբ էջում: Օրինակ, "onclick" իրադարձությունների մշակիչը գործարկվում է, երբ օգտվողը կտտացնում է վեբ էջի որևէ տարրի վրա: Նմանապես, "onload" իրադարձությունների մշակիչը գործարկվում է, երբ էջը բեռնվում է բրաուզերում:</p>

<p>Այս մշակողները կարող են ավելացվել HTML տարրերին "on" նախածանցով, որին հաջորդում է իրադարձության անվանումը, օրինակ՝ "onclick" կամ "onload": Երբ նշված իրադարձությունը տեղի է ունենում, իրադարձության մշակողին տրված ֆունկցիան կատարվում է: Սա թույլ է տալիս ծրագրավորողներին ստեղծել ինտերակտիվ վեբ էջեր, որոնք արձագանքում են օգտվողի գործողություններին</p>

    </div>
  )
}




export default  AmEs5_9;