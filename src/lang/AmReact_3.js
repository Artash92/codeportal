import React from 'react'

function AmReact_3() {
  return (
    <div>
      <h1>React Events</h1>
    
      <p>React-ը հնարավորություն է տալիս կարգավորել իրադարձությունները բաղադրիչներում, որոնք նման են այն բանին, թե ինչպես են իրադարձությունները մշակվում մաքուր JavaScript-ում: React-ում կարող եք իրադարձությունների մշակիչներ ավելացնել ցանկացած JSX տարրի՝ օգտագործելով <b>[EventName]</b>-ի շարահյուսությունը:</p>
    
      <p>Օրինակ, ենթադրենք, որ մենք ունենք կոճակ React բաղադրիչում, որի համար ցանկանում ենք կառավարել սեղմումների իրադարձությունը.</p>
    
    <code>
      <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

      <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

      <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Կոճակը սեղմված է'</span>); </p>

      <p>{' }'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Սեղմեք կոճակը{'</'}<span className='green'>button</span>{'>'}  </p>

      <p>&nbsp;{');'}</p>

      <p>{'} '}</p>
    </code>
    
    <p>Այս օրինակում մենք սահմանում ենք <b>MyButton</b> բաղադրիչ, որը պարունակում է կոճակի տարր՝ <b>onClick</b> հենարանով(props), որը սահմանված է <b>handleClick</b> կոչվող ֆունկցիայի վրա: Երբ կոճակը սեղմվի, <b>handleClick</b> ֆունկցիան կկանչվի, և «Button clicked» հաղորդագրությունը կգրվի կոնսոլում:</p>

    <p>Դուք կարող եք նաև արգումենտներ փոխանցել իրադարձությունների մշակման գործառույթին՝ օգտագործելով սլաքների ֆունկցիաները: Ենթադրենք, մենք ունենք տարրերի ցանկ, որոնք ցանկանում ենք ցուցադրել որպես կոճակներ.</p>
    
    <code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Տարրը սեղմված է $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'>`</span>); </p>

    <p>&nbsp;{'}'}</p>

    <p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

    <p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

    <p>{'{item'}.<span className='blue'>{'name}'}</span></p>

    <p>{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{' ); '}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>{'{buttonList} '}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{'); '}</p>

    <p>{'} '}</p>
 </code>

 <p>Այս օրինակում մենք սահմանում ենք <b>ItemList</b> բաղադրիչ, որն ընդունում է <b>items</b> մուտքագրման պարամետրը: Մենք սահմանում ենք <b>handleClick</b> ֆունկցիա, որն ընդունում է <b>item</b> արգումենտ, որը կօգտագործվի կոնսոլում հաղորդագրություն տպելու համար, երբ սեղմվում է համապատասխան կոճակը:</p>

 <p>Մենք օգտագործում ենք <b>map</b> մեթոդը՝ <b>{'<button>'}</b> տարրերի նոր զանգված ստեղծելու համար, որտեղ յուրաքանչյուր տարր համապատասխանում է  մուտքային պարամետրից մեկին <b>items</b >: Մենք սահմանել ենք <b>key</b> հատկությունը յուրաքանչյուր <b>{'<button>'}</b> տարրի համար համապատասխան տարրի <b>id</b> արժեքին, որը պարտադիր է React թարմացումները օպտիմալացնելու համար: Մենք նաև օգտագործում ենք սլաքի ֆունկցիան՝ կոճակը սեղմելիս <b>item</b> օբյեկտը <b>handleClick</b> ֆունկցիային փոխանցելու համար:</p>

 <p>Այնուհետև մենք վերադարձնում ենք <b>{'<div>'}</b> տարր, որը պարունակում է <b>buttonList</b> զանգված:</p>

 <h5>React Events</h5>

<p className='blue1'>onKeyDown</p>

    <p className='blue1'>onKeyPress </p>

    <p className='blue1'>onKeyUp</p>

    <p className='blue1'>onFocus</p>

    <p className='blue1'>onBlur</p>

    <p className='blue1'>onChange</p>

    <p className='blue1'>onInput</p>

    <p className='blue1'>onInvalid </p>

    <p className='blue1'>onSubmit</p>

    <p className='blue1'>onClick</p>

    <p className='blue1'>onContextMenu</p>

    <p className='blue1'>onDoubleClick</p>

    <p className='blue1'>onDrag</p>

    <p className='blue1'>onDragEnd</p>

    <p className='blue1'>onDragEnter</p>

    <p className='blue1'>onDragExit</p>

    <p className='blue1'>onDragLeave</p>

    <p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>
    
    <b>React state կլասի բաղադրիչներում</b>






    </div>
  )
}

export default AmReact_3;