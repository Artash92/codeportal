import React from 'react'

function AmHtml_1() {
  return (
    <div>
      <h1>HTML</h1>

      <p>HTML (HyperText Markup Language) նշագրման լեզու է, որն օգտագործվում է համացանցում բովանդակություն ստեղծելու և կառուցվածքի համար: Այն յուրաքանչյուր վեբ կայքի հիմքն է և ծառայում է որպես վեբ էջերի կառուցում: HTML-ը դեկլարատիվ լեզու է, ինչը նշանակում է, որ այն օգտագործվում է վեբ էջի բովանդակությունը և կառուցվածքը նկարագրելու համար, բայց պարտադիր չէ, որ դրա տեսքը նկարագրվի:</p>

      <p>HTML-ը ստեղծվել է Թիմ Բերներս-Լիի կողմից 1990-ականների սկզբին, երբ աշխատում էր CERN-ում՝ Միջուկային հետազոտությունների եվրոպական կազմակերպությունում: Բերներս-Լին փնտրում էր հետազոտողների միջև տեղեկատվությունը կիսելու և կազմակերպելու միջոց, և HTML-ն այն լուծումն էր, որը նա գտավ: HTML-ը ստեղծվել է պարզ լեզու լինելու համար, որը կարող է հեշտությամբ հասկանալ և օգտագործվել բոլորի կողմից՝ անկախ նրանց տեխնիկական ծագումից:</p>

      <p>HTML-ը բաղկացած է մի շարք տարրերից, որոնք ներկայացված են թեգերով: Թեգերը փակցված են անկյունային փակագծերում և օգտագործվում են վեբ էջի կառուցվածքն ու բովանդակությունը սահմանելու համար: Օրինակ, {'<head>'} թեգը օգտագործվում է վեբ էջի վերնագրի հատվածը սահմանելու համար, որը սովորաբար պարունակում է տեղեկություններ, ինչպիսիք են էջի վերնագիրը և արտաքին ոճաթերթերի և սցենարների հղումները: {'<body>'} թեգը օգտագործվում է վեբ էջի հիմնական մասը սահմանելու համար, որը պարունակում է էջի հիմնական բովանդակությունը:</p>

      <p>HTML-ը անընդհատ զարգացող լեզու է, պարբերաբար թողարկվում են նոր տարբերակներ: HTML-ի ներկայիս տարբերակը HTML5-ն է, որը թողարկվել է 2014 թվականին։ HTML5-ը ներկայացրեց բազմաթիվ նոր հնարավորություններ և հնարավորություններ, ինչպիսիք են վիդեո և աուդիո պիտակները, canvas տարրերը գրաֆիկա նկարելու համար և իմաստային պիտակները ավելի լավ հասանելիության և SEO-ի համար:</p>

      <p>Մի խոսքով, HTML-ը նշագրման լեզուն է, որն օգտագործվում է համացանցում բովանդակություն ստեղծելու և կառուցվածքի համար: Այն ստեղծվել է Թիմ Բերներս-Լիի կողմից 1990-ականների սկզբին և հանդիսանում է յուրաքանչյուր կայքէջի հիմքը: HTML-ը բաղկացած է մի շարք տարրերից, որոնք ներկայացված են պիտակներով և անընդհատ զարգացող լեզու է՝ պարբերաբար թողարկվող նոր տարբերակներով:</p>

      <p>1. Պարզ վեբ էջ՝ վերնագրով և պարբերությամբ՝</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Իմ վեբ էջը{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարի գալուստ իմ վեբ էջ{'</'}<span className='green'>h1</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Սա իմ առաջին վեբ էջն է:{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Սա պարզ վեբ էջի օրինակ է, որը բաղկացած է վերնագրից և պարբերությունից: Վերնագիրը ներկայացված է "title" պիտակով, իսկ պարբերությունը՝ "p" պիտակով։ Էջի վերնագիրը հայտնվում է դիտարկիչի(բրաուզերի) վերնագրի տողում և որոնման արդյունքներում:</p>

<p>2. Պատկեր՝ այլընտրանքային տեքստով և հղում մեկ այլ էջի՝</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
       
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
       
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Իմ վեբ էջը{'</'}<span className='green'>title</span>{'>'}</p> 
       
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
       
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարի գալուստ իմ վեբ էջ{'</'}<span className='green'>h1</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Սա կատվի պատկերն է.{'</'}<span className='green'>p</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"A cute cat"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Սեղմեք {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}այստեղ{'</'}<span className='green'>a</span>{'>'} Google-ի էջ տեղափոխվելու համար։{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>

  <p>Այս օրինակը ցույց է տալիս կատվի պատկերը, որը ներկայացված է «img» պիտակով, որտեղ ցուցադրվում է այլընտրանքային տեքստ, երբ պատկերը հնարավոր չէ բեռնել: Google-ի հղումը ներկայացված է "a" թեգով՝ "href" հատկանիշով, որը ցույց է տալիս անցման էջի URL-ը:</p>

  <p>3. Անուն մուտքագրելու և սերվերին տվյալներ ուղարկելու ձև՝</p>

  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Իմ վեբ էջը{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարի գալուստ իմ վեբ էջ{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Մուտքագրեք ձեր անունը:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Ուղարկել"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
  </code>

  <p>Այս օրինակը ցույց է տալիս տեքստային դաշտ ունեցող ձև, որպեսզի օգտագործողը անուն մուտքագրի: Երբ ձևը ներկայացվում է, տվյալները ուղարկվում են սերվեր՝ մշակման: "label" պիտակը տրամադրում է մուտքագրման դաշտի տեքստային պիտակը, մինչդեռ "input" պիտակը օգտագործվում է մուտքագրման դաշտը ստեղծելու և ուղարկելու կոճակը:</p>

  <p>4. Տարրերի դասավորված ցանկ</p>

  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Իմ վեբ էջը{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարի գալուստ իմ վեբ էջ{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Իմ սիրելի ուտեստները{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Պիցցա{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Բուրգերներ{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Պաղպաղակ{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Այս օրինակը ցույց է տալիս "ol" թեգով ներկայացված տարրերի դասավորված ցանկը, որտեղ յուրաքանչյուր տարր ներկայացված է "li" թեգով: Ցանկի համարները ավտոմատ կերպով ստեղծվում են դիտարկիչի կողմից:</p>

<p>5. Տարրերի չդասավորված ցանկ.</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Իմ վեբ էջը{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարի գալուստ իմ վեբ էջ{'</'}<span className='green'>h1</span>{'>'}</p> 

  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Իմ սիրելի ֆիլմերը.{'</'}<span className='green'>h2</span>{'>'}</p> 

  <p>{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Shawshank Redemption{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Godfather{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Dark Knight{'</'}<span className='green'>li</span>{'>'}</p>

  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Այս օրինակը ցույց է տալիս տարրերի չդասավորված ցանկը, որը ներկայացված է "ul" թեգով, որտեղ յուրաքանչյուր տարր ներկայացված է "li" թեգով: Ցանկի տարրերը լռելյայն ցուցադրվում են պարբերակներով:</p>

<p>HTML-ի մասին իրենց հասկացողությունը խորացնելու համար ուսանողներին կարող են ուղղորդել լրացուցիչ ռեսուրսների, ինչպիսիք են <b>MDN Web Docs</b> կամ <b>W3Schools</b> փաստաթղթերը:</p>

<p>Ձեր կայքում MDN Web Docs-ին հղում ավելացնելու համար օգտագործեք հետևյալ HTML կոդը՝</p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'> <b>&#x1F44D; MDN Web Docs</b></a></p>

<p>Ձեր կայքում W3Schools-ին հղում ավելացնելու համար օգտագործեք հետևյալ HTML կոդը՝</p>

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>MDN Web Docs-ը և W3Schools-ը տրամադրում են մանրամասն փաստաթղթեր HTML-ի և հարակից տեխնոլոգիաների վերաբերյալ, ինչպես նաև ինտերակտիվ ձեռնարկներ և օրինակներ: Ուսանողները կարող են օգտագործել այս ռեսուրսները HTML-ի վերաբերյալ իրենց գիտելիքները խորացնելու և վեբ մշակման իրենց հմտությունները բարելավելու համար:</p>





    </div>
  )
}

export default AmHtml_1