import React from 'react'

function AmReact_1() {
  return (
    <div>
      <h1>React JS</h1>

      <p><b>ReactJS</b>-ը հայտնի <b>JavaScript</b> գրադարան է, որը ստեղծվել է <b>Facebook</b>-ի կողմից: Այն առաջին անգամ թողարկվել է 2013 թվականին և մեծ ճանաչում է ձեռք բերել վեբ մշակողների շրջանում:</p>

      <p>ReactJS-ը ստեղծվել է կոնկրետ խնդիր լուծելու համար՝ ժամանակի ընթացքում փոփոխվող բազում տվյալների հետ բարդ օգտատերերի ինտերֆեյսեր ստեղծելու արագ և արդյունավետ միջոցի անհրաժեշտություն: Մինչև ReactJS-ը, նման ինտերֆեյսերի ստեղծումը պահանջում էր գրել շատ կոդեր և հաճախ դանդաղ էր ու դժվար կառավարելի:</p>

      <p>ReactJS-ի հիմնական գաղափարը օգտատիրոջ ինտերֆեյսը բաժանելն է առանձին բաղադրիչների(components), որոնք կարող են կրկին օգտագործվել հավելվածի տարբեր մասերում: Յուրաքանչյուր բաղադրիչ պատասխանատու է օգտատիրոջ ինտերֆեյսի մի փոքր մասի մատուցման համար և կարող է հեշտությամբ համակցվել՝ բարդ ինտերֆեյսներ ստեղծելու համար:</p>

      <p>ReactJS-ի հիմնական առավելություններից մեկն այն է, որ այն օգտագործում է վիրտուալ DOM, որը իրական DOM-ի թեթև ներկայացումն է: Սա թույլ է տալիս ReactJS-ին թարմացնել ինտերֆեյսը շատ արդյունավետ կերպով՝ առանց իրական DOM-ի  թարմացումներ կատարելու:</p>

      <p><b>ReactJS պարզ բաղադրիչի օրինակ.</b></p>

  <code>
    <p><span className='red'>import </span>React  <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}{'{'}props.<span className='blue'>title{'}'}</span>{'</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'} {'{'}props.<span className='blue'>description</span>{'}'}{'<'}<span className='green'>/p</span>{'>'}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{' );'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
  </code>

  <p>Այս բաղադրիչը վերցնում է երկու հատկություն՝ <b>title</b> և <b>description</b>, և ցուցադրում է դրանք պարզ HTML կառուցվածքով: Այնուհետև այս բաղադրիչը կարող է օգտագործվել հավելվածում՝ օգտատիրոջը տեղեկատվություն ցուցադրելու համար:</p>

  <p>Եթե դուք հետաքրքրված եք սովորելու ReactJS, խորհուրդ եմ տալիս սկսել ReactJS կայքի պաշտոնական փաստաթղթերից՝ <a href="https://reactjs.org/" target='_blank'>👉🏼 <b>https: //reactjs .org/.</b> </a>Այնտեղ դուք կգտնեք բազմաթիվ տեղեկություններ ReactJS-ի հետ աշխատանք սկսելու համար, ներառյալ ձեռնարկները, ուղեցույցները և տեղեկատու նյութերը:</p>

  <p>Որպեսզի տեղադրենք Node.js-ը՝ React-ի հետ աշխատելու համար, պետք է հետևել հետևյալ քայլերին.</p>

  <h1>Node.js-ի տեղադրում Windows-ում</h1>

  <p>1. Այցելեք Node.js-Ի պաշտոնական կայք՝ <a href="https://nodejs.org/" target='_blank'>👉🏼 https://nodejs.org/ </a></p>

  <p>2. Սեղմեք «Ներբեռնում» կոճակը «Windows Installer» տարբերակի համար</p>

  <p>3. Գործարկեք ներբեռնված տեղադրիչը և հետևեք հրահանգներին՝ տեղադրելու Node.js</p>

  <p>4. Տեղադրումն ավարտվելուց հետո բացեք հրամանի տողը և մուտքագրեք node -v՝ ստուգելու, որ Node.js-ը ճիշտ է տեղադրված</p>

  <h1>Node.js-ի տեղադրում Ubuntu-ում</h1>

  <p>1. Բացեք տերմինալի պատուհանը</p>

  <p>2. Գործարկեք <b>sudo apt update</b> հրամանը՝ փաթեթի կառավարիչը թարմացնելու համար</p>

  <p>3. Գործարկեք <b>sudo apt install nodejs</b> հրամանը՝ Node.js-ը տեղադրելու համար</p>

  <p>4. Գործարկեք <b>node -v</b> հրամանը` ստուգելու համար, որ Node.js-ը ճիշտ է տեղադրված</p>

  <b>Node.js-ը և React-ը միասին օգտագործելու օրինակ.</b>

  <p>1. Ստեղծեք նոր React հավելված՝ օգտագործելով <b>npx create-react-app my-app</b></p>

  <p>2. Փոխեք <b>my-app</b> գրացուցակը <b>cd my-app</b> հրամանով</p> 

  <p>3. Գործարկեք մշակման սերվերը` օգտագործելով <b>npm start</b> հրամանը</p>

  <p>4. Բացեք ձեր վեբ զննարկիչը և այցելեք <b>http://localhost:3000</b>՝ տեսնելու, որ ձեր React հավելվածը աշխատում է:</p> 

  <p>Եթե դուք հետաքրքրված եք սովորել Node.js-ը և React-ը, խորհուրդ եմ տալիս ստուգել երկու տեխնոլոգիաների պաշտոնական փաստաթղթերը: Ահա դրանց համապատասխան կայքերի հղումները.</p>

  <p><b><a href="https://nodejs.org/" target='_blank' > 👉🏼 Node.js</a></b></p> 

  <p><b><a href="https://reactjs.org/" target='_blank' > 👉🏼 React.js</a> </b></p>

 <p><b>React-ի հետ աշխատելու համար դուք պետք է լավ պատկերացնեք հետևյալը.</b></p>

 <p>1. <span className='chocolate'>HTML</span>/<span className='blue'>CSS</span>. Դուք պետք է լավ պատկերացնեք HTML-ը և CSS-ը, քանի որ React-ը հիմնականում օգտագործվում է օգտատերերի ինտերֆեյսներ ստեղծելու համար (UI ) և վեբ հավելվածներ:</p>

 <p>2. <span className='yellow'>JavaScript</span>. React-ը JavaScript գրադարան է, այնպես որ դուք պետք է լավ պատկերացնեք JavaScript-ը, ներառյալ այնպիսի հասկացություններ, ինչպիսիք են գործառույթները, զանգվածները, օբյեկտները և շրջանակները:</p>

 <p>3. <span className='red'>ES6</span>. React-ը մեծապես հիմնված է ES6-ի առանձնահատկությունների վրա, ինչպիսիք են սլաքների ֆունկցիաները(arrow functions), դեստրուկտուրիզացիան և կլասները, այնպես որ դուք պետք է լավ ըմբռնեք այս հատկանիշները:</p>

 <p>4. <span className='blueviole'>JSX</span>. Ինչպես նշվեց ավելի վաղ, JSX-ը JavaScript-ի շարահյուսական ընդլայնում է, որը թույլ է տալիս գրել HTML-անման կոդ ձեր JavaScript ֆայլերում: Դուք պետք է հասկանաք, թե ինչպես է աշխատում JSX-ը և ինչպես օգտագործել այն ինտերֆեյսների բաղադրիչները սահմանելու համար:</p>

 <p>5. <span className='green'>Node.js</span> և <span className='red'>npm</span>. React հավելվածները սովորաբար կառուցվում են Node.js-ի և npm փաթեթների կառավարչի միջոցով: Դուք պետք է հասկանաք, թե ինչպես տեղադրել և օգտագործել այս գործիքները:</p>

 <p>6. <span className='blue'>React</span> Էկոհամակարգ. կան գործիքների և գրադարանների լայն շրջանակ, որոնք սովորաբար օգտագործվում են React էկոհամակարգում, ինչպիսիք են React Router-ը, Redux-ը և Axios-ը: Դուք պետք է հասկանաք, թե ինչպես են աշխատում այս գործիքները և ինչպես օգտագործել դրանք React հավելվածներ ստեղծելու համար:</p>

 <p>7. <span className='dev-tools'>Մշակման գործիքներ</span>. Դուք նաև պետք է իմանաք մշակման այնպիսի գործիքներ, ինչպիսիք են Visual Studio Code-ը, Chrome DevTools-ը և Git-ը:</p>


    </div>
  )
}

export default AmReact_1;