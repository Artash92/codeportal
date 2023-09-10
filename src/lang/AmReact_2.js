import React from 'react'

function AmReact_2() {
  return (
    
    <div>
      
      <h1>JSX</h1>
  
  <p>JSX-ը JavaScript-ի շարահյուսական ընդլայնում է, որը թույլ է տալիս JavaScript ֆայլերում գրել HTML-անման կոդ: Այն լայնորեն օգտագործվում է React-ում՝ օգտատիրոջ ինտերֆեյսներ (UI) բաղադրիչների կառուցվածքն ու դասավորությունը սահմանելու համար:</p>
  
  <p>Ահա մի օրինակ, թե ինչպես է աշխատում JSX-ը.</p>

  <code>
   <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարեւ աշխարհ!{'</'}<span className='green'>h1</span>{'>'} </p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Սա JSX-ի պարզ օրինակ է:{'</'}<span className='green'>p</span>{'>'} </p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{');'}</p>

   <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>Այս օրինակում մենք սահմանում ենք պարզ React բաղադրիչ՝ օգտագործելով JSX: Բաղադրիչը ներկայացնում է <b>div</b> տարր, որը պարունակում է <b>h1 և p</b> տարրեր: Նկատի ունեցեք, որ HTML-ի նման ծածկագիրը փակ է փակագծերում և սահմանվում է JSX շարահյուսության միջոցով:</p>

<p>JSX-ը հեշտացնում է HTML-ի նմանվող կոդը JavaScript-ի տրամաբանության հետ համատեղելը: Օրինակ, կարող եք օգտագործել JavaScript փոփոխականներ և արտահայտություններ ձեր JSX կոդի ներսում՝</p>

<code>
   <p><p><span className='red'>import</span> React<span className='red'> from</span> <span className='blue1'>'react'</span>;</p></p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'Ջոն'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարեւ,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Սա պարզ JSX օրինակ է{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>Այս օրինակում մենք օգտագործում ենք JavaScript փոփոխականը <b>(name)</b> մեր JSX կոդի ներսում` անհատականացված ողջույնը դինամիկ կերպով ցուցադրելու համար:</p>

<p>JSX-ը չի պահանջվում React-ի մշակման համար, սակայն խորհուրդ է տրվում, քանի որ այն շատ ավելի հեշտ է դարձնում UI-ի բարդ բաղադրիչները գրելն ու կառավարելը: Երբ դուք գրում եք կոդ JSX-ում, այն փոխակերպվում է սովորական JavaScript կոդի, որը կարող է գործարկվել զննարկչի կողմից:</p>

<p>React-ում կան երկու հիմնական տիպի բաղադրիչներ՝ ֆունկցիոնալ բաղադրիչներ և կլասի բաղադրիչներ:</p>

<p>Ֆունկցիոնալ բաղադրիչները սահմանվում են որպես JavaScript ֆունկցիաներ, որոնք վերադարձնում են JSX տարր: Դրանք սովորաբար օգտագործվում են պարզ, ներկայացուցչական UI բաղադրիչների համար, որոնք չունեն վիճակի կամ կյանքի ցիկլի մեթոդներ:</p>

<p>Ահա պարզ ֆունկցիոնալ բաղադրիչի օրինակ.</p>

<code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարեւ,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Սա ֆունկցիոնալ բաղադրիչ է{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>

 <p>Այս օրինակում մենք սահմանում ենք <b>MyComponent</b> անունով ֆունկցիոնալ բաղադրիչ, որը որպես արգումենտ ընդունում է <b>props</b> օբյեկտը: Բաղադրիչը վերադարձնում է JSX տարր, որը ներառում է h1 տարր՝ անհատականացված ողջույնով և <b>p</b> տարր՝ հաղորդագրությամբ:</p>

 <p>Կլասի բաղադրիչները, մյուս կողմից, սահմանվում են որպես JavaScript կլասներ, որոնք ընդլայնում են <b>React.Component</b> կլասը: Դրանք օգտագործվում են ավելի բարդ UI բաղադրիչների համար, որոնք պետք է կառավարեն վիճակը և ունենան կյանքի ցիկլի մեթոդներ:</p>

 <p>Ահա պարզ կլասի բաղադրիչի օրինակ.</p>

 <code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

    <p><span className='blue'>constructor</span>(props) {'{'}</p>

    <p>super(props);</p>

    <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

    <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>

    <p>&nbsp;{'};'}</p>

    <p>{'}'}</p>

    <p><span className='blue'>render</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>{'<'}<span className='green'>h1</span>{'>'}Count: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='green'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Increment{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{' );'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>Այս օրինակում մենք սահմանում ենք կլասի բաղադրիչ, որը կոչվում է MyComponent, որն ունի վիճակի հատկություն, որը կոչվում է <b>count և render մեթոդ</b>, որը վերադարձնում է JSX տարրը h1 տարրով, որը ցուցադրում է ընթացիկ count արժեքը և տարր: <b>button</b>, որը սեղմելիս մեծացնում է հաշվիչի արժեքը:</p>


<p>Բաղադրիչները կարող են կազմվել և տեղադրվել՝ օգտատիրոջ ինտերֆեյսի բարդ տարրեր ստեղծելու համար: Նրանք կարող են նաև ընդունել հատկությունները որպես մուտքագրում, ինչը թույլ է տալիս դրանք հարմարեցնել և օգտագործել ամբողջ հավելվածում:</p>

<p><b>{'<Component />'}</b> շարահյուսությունն է, որն օգտագործվում է React-ում` բաղադրիչը արտապատկերելու համար: Սա կոչվում է ինքնափակվող թեգ և համարժեք է բաղադրիչը որպես առանց արգումենտների ֆունկցիա կանչելուն:</p>

<p>Օրինակ, ենթադրենք, որ մենք ունենք MyComponent անունով պարզ բաղադրիչ.</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Բարեւ, աշխարհ!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p>    
</code>

<p>Այս բաղադրիչը ցուցադրելու համար մենք կօգտագործենք շարահյուսությունը <b>{'<MyComponent /> '}</b>:</p>

<code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p> document.<span className='blue'>getElementById</span>('root')</p> 
</code>

<p>Շարահյուսություն <b>{'<MyComponent /> '}</b> ստեղծում է MyComponent-ը և մատուցում այն ​​DOM-ին:</p>



    </div>
  )
}

export default AmReact_2;