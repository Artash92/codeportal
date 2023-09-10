import React from 'react'

function AmEs5_5() {
  return (
    <div>
      
      <h1>Զանգված (Array)</h1>
      
<p>JavaScript-ում զանգվածը(array) տվյալների կառուցվածք է, որը թույլ է տալիս պահպանել բազմաթիվ արժեքներ մեկ փոփոխականում: Զանգվածը հայտարարվում է քառակուսի փակագծերով, իսկ դրա տարրերը բաժանվում են ստորակետերով։</p>
     
     <p><b>Օրինակ</b></p>
   
     <p className='darkgreen'>// Թվերի զանգված</p>
    
<code>
  <p><span className='blue'>var </span><span className='blue'> numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p className='darkgreen'>// Տողերի զանգված</p>

  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"խնձոր", "բանան", "նարինջ"</span>];</p>
</code>
   
<p><b>Զանգվածի երկարությունը (Array Length)</b></p>

<p>Զանգվածի երկարության հատկությունը վերադարձնում է զանգվածի տարրերի քանակը:</p>

<p><b>Օրինակ</b></p>  
      
 <code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>{'console.log(numbers.length);'} <span className='darkgreen'>// Արդյունք՝ 5</span></p>  
</code>

 <p><b>Զանգվածի մեթոդներ (Array Methods)</b></p>

<p> JavaScript-ում զանգվածներն ունեն ներկառուցված մեթոդներ, որոնք կարող են օգտագործվել զանգվածի տվյալները շահարկելու համար: Զանգվածի որոշ սովորաբար օգտագործվող մեթոդներ՝</p>   
   
<div>

<p><b>push()</b>. ավելացնում է մեկ կամ մի քանի տարրեր զանգվածի վերջում</p>

<p><b>pop()</b>. հեռացնում է վերջին տարրը զանգվածից</p>

<p><b>shift()</b>. հեռացնում է առաջին տարրը զանգվածից</p>

<p><b>unshift()</b>. ավելացնում է մեկ կամ մի քանի տարրեր զանգվածի սկզբում</p>

<p><b>splice()</b>. ավելացնել կամ հեռացնել տարրեր զանգվածից նշված ինդեքսում</p>

<p><b>slice()</b>. վերադարձնում է նոր զանգված, որը պարունակում է գոյություն ունեցող զանգվածի մի մասը</p>

<p><b>join()</b>. միավորում է զանգվածի բոլոր տարրերը տողի մեջ</p>

<p><b>concat()</b> . միավորում է երկու կամ ավելի զանգված</p>   
    
 </div>   
    
 <p><b>Օրինակ</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>numbers.push(<span className='blue'>6</span>); <span className='darkgreen'>// զանգվածի վերջում ավելացնում է 6</span></p>

  <p>{'console.log(numbers);'} <span className='darkgreen'> // Արդյունք՝ [1, 2, 3, 4, 5, 6]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"խնձոր", "բանան", "նարինջ"</span>];</p>

  <p>fruits.pop(); <span className='darkgreen'>// հեռացնում է զանգվածի վերջին տարրը</span></p>

  <p>{'console.log(fruits);'} <span className='darkgreen'>// Արդյունք՝ ["խնձոր", "բանան"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"կարմիր", "կանաչ", "կապույտ"</span>];</p>

  <p>colors.shift(); <span className='darkgreen'> // հեռացնում է զանգվածի առաջին տարրը</span></p>

  <p>{'console.log(colors);'} <span className='darkgreen'>// Արդյունք՝ ["կանաչ", "կապույտ"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>cars</span> = [<span className='red'>"BMW","Audi","Mercedes"</span>];</p>

  <p>cars.unshift(<span className='red'>"Toyota","Honda"</span>); <span className='darkgreen'>// զանգվածի սկզբին ավելացնում է երկու տարր</span></p>

  <p>{'console.log(cars);'} <span className='darkgreen'>// Արդյունք՝ ["Toyota", "Honda", "BMW", "Audi", "Mercedes"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>animals</span> = [<span className='red'>"շուն", "կատու", "փիղ", "առյուծ"</span>];</p>

  <p>animals.splice(<span className='blue'>2</span>,<span className='blue'> 0</span>,<span className='red'> "արջ"</span>,<span className='red'> "զեբրա"</span>); <span className='darkgreen'> // 2-րդ ինդեքսին ավելացնում է "արջ" և "զեբրա"</span></p>

  <p>{'console.log(animals);'} <span className='darkgreen'>// Արդյունք՝ ["շուն", "կատու", "արջ", "զեբրա", "փիղ","առյուծ"]</span></p>
</code>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>letters</span> = [<span className='red'>"ա", "բ", "գ", "դ", "ե"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>slice1</span> = letters.slice(<span className='blue'>0, 2</span>); <span className='darkgreen'>// վերադարձնում է ["ա", "բ"]</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>slice2</span> = letters.slice(<span className='blue'>2</span>); <span className='darkgreen'>// վերադարձնում է ["գ", "դ", "ե"]</span></p>

  <p>{'console.log(slice1);'}</p>

  <p>{'console.log(slice2);'}</p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"խնձոր", "բանան", "նարինջ"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>fruitString</span> = fruits.join(<span className='red'>", "</span>); <span className='darkgreen'>// միավորում է զանգվածի տարրերը ստորակետով</span></p>

  <p>{'console.log(fruitString);'} <span className='darkgreen'>// Արդյունք՝ " խնձոր, բանան, նարինջ"</span></p>
</code> 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>nums1</span> = [<span className='blue'>1, 2, 3</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums2</span> = [<span className='blue'>4, 5, 6</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums3</span> = nums1.concat(nums2); <span className='darkgreen'>// միավորում է nums1-ը և nums2-ը</span></p>

  <p>{'console.log(nums3);'} <span className='darkgreen'>// Արդյունք՝ [1, 2, 3, 4, 5, 6]</span></p>
</code>


<p><b>Զանգվածի մեթոդներ | Զանգվածների միավորում</b></p>

<p>Դուք կարող եք միացնել երկու կամ ավելի զանգվածներ JavaScript-ում՝ օգտագործելով concat() մեթոդը: Այս մեթոդը վերադարձնում է նոր զանգված, որը պարունակում է սկզբնական զանգվածների բոլոր տարրերը:</p>
    
<h3>forEach և map </h3>   
    
<p><b>forEach</b> օգտագործվում է զանգվածի յուրաքանչյուր տարր կրկնելու և յուրաքանչյուր տարրի վրա ֆունկցիա կատարելու համար: Այն ընդունում է ֆունկցիան որպես արգումենտ և զանգվածի յուրաքանչյուր տարր փոխանցում այդ ֆունկցիային որպես արգումենտ:</p>

<p>Ահա զանգվածի յուրաքանչյուր տարր տպելու համար forEach-ի օգտագործման օրինակ.</p>   
    
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>arr.forEach{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

  <p>{'console.log(element);'}</p>

  <p>{' });'}</p>
</code>

<p>Սա վերադարձնում է</p>

<code>
  <p className='blue'>1</p> 

  <p className='blue'>2</p>

  <p className='blue'>3</p>

  <p className='blue'>4</p>

  <p className ='blue'>5</p>
</code>
    
<p>map-ը, մյուս կողմից, օգտագործվում է սկզբնական զանգվածի յուրաքանչյուր տարրի վրա ֆունկցիայի կանչի արդյունքներով նոր զանգված ստեղծելու համար։ Այն նաև ընդունում է ֆունկցիան որպես արգումենտ և զանգվածի յուրաքանչյուր տարր փոխանցում այդ ֆունկցիային որպես արգումենտ։ Ֆունկցիան պետք է վերադարձնի նոր արժեք՝ նոր զանգվածին ավելացնելու համար։</p>

<p>Ահա map-ի օգտագործման օրինակ՝ սկզբնական զանգվածի յուրաքանչյուր տարր կրկնապատկված նոր զանգված ստեղծելու համար.</p>    
       
  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

    <p><span className='blueviole'>var</span> <span className='blue'>doubledArr</span> = arr.map{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> element * <span className='blue'>2</span>;</p>

    <p>{'});'}</p>

    <p>{'console.log(doubledArr);'}</p>
</code>
    
   
<p>Սա վերադարձնում է</p>

<code><p className='blue'>[2, 4, 6, 8, 10 ]</p></code> 
    
<p>Արդյունքում, forEach-ն օգտագործվում է զանգվածի յուրաքանչյուր տարրի վրա գործողություն կատարելու համար, մինչդեռ map -ը օգտագործվում է սկզբնական զանգվածի յուրաքանչյուր տարրի վրա ֆունկցիայի կանչի արդյունքներով նոր զանգված ստեղծելու համար:</p>   
    
<h3>Մեթոդ apply</h3>    
    
<p>JavaScript-ում application() մեթոդն օգտագործվում է տրված this արժեքով ֆունկցիան կանչելու համար և որպես զանգված (կամ զանգվածի նմանվող օբյեկտ) ներկայացված արգումենտներ։</p>

<p>Application() մեթոդի օգտագործման շարահյուսությունը հետևյալն է.</p>   
    
<p>{'functionName.apply(thisValue, [argumentsArray]) '}</p>

<p><b>Որտեղ</b></p>

<p>functionName-ն այն ֆունկցիայի անունն է, որը ցանկանում եք կանչել:</p>    

<p>thisValue-ն այն արժեքն է, որը ցանկանում եք օգտագործել որպես this արժեք ֆունկցիայի ներսում: Այս պարամետրը պարտադիր չէ: Եթե ​​այն բաց թողնեք, կօգտագործվի գլոբալ օբյեկտը:</p>

<p>Ահա apply() մեթոդի օգտագործման օրինակ զանգվածով.</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

    <p><span className='blueviole'>function</span> <span className='blue'>sumArray</span>() {'{'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>sum</span> = <span className='blue'>0</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} <span className='blueviole'>this</span>.length; i++) {'{'}</p>

    <p>sum += <span className='blueviole'>this</span>[i];</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>return</span> sum;</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sumArray.apply(numbers);</p>

    <p>{'console.log(result);'} <span className='darkgreen'>// Արդյունք՝ 15</span></p>

    <p>{''}</p>
  </code>

 <p>Այս օրինակում մենք ունենք թվերի զանգված և sumArray() ֆունկցիա, որը հաշվարկում է զանգվածի բոլոր տարրերի գումարը: Մենք կանաչում ենք apply() մեթոդը sumArray() ֆունկցիայի վրա՝ թվերի զանգվածով որպես այս արժեք: Apply() մեթոդը զանգվածը փոխանցում է որպես this արժեք, իսկ sumArray() ֆունկցիան հաշվարկում է զանգվածի բոլոր տարրերի գումարը և վերադարձնում այն:</p>

 <p>Ուշադրություն դարձրեք, որ apply() մեթոդը նման է call() մեթոդին։ Միակ տարբերությունն այն է, որ call() մեթոդը արգումենտներն ընդունում է որպես ստորակետերով բաժանված ցուցակ, մինչդեռ apply() մեթոդն ընդունում է արգումենտները որպես զանգված։</p>
    
   <h3>Ինքնականչվող  ֆունկցիա</h3>

   <p>
   Ինքնականչվող  ֆունկցիան JavaScript ֆունկցիա է, որն ավտոմատ կերպով աշխատում է, երբ այն սահմանվում է: Այն նաև հայտնի է որպես անմիջապես կանչվող ֆունկցիայի արտահայտություն (IIFE): Այս ֆունկցիան գրվում է փակագծերի մեջ, այնուհետև անմիջապես կանչվում է՝ օգտագործելով բացվող և փակող փակագծերը:
   </p>

   <p>Ինքնականչվող  ֆունկցիայի օրինակ.</p> 

  <code>
    <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

    <p>{'console.log'}(<span className='red'>"Բարեւ , աշխարհ"</span>);</p>

    <p>{' })();'}</p>
  </code>

  <p>Այս օրինակում ֆունկցիան սահմանվում է և անմիջապես կանչվում՝ բացվող և փակվող փակագծերով: Սա կվերադարցնի «Բարև աշխարհ»: կոնսոլում։</p>

  <p>Ինքնականչվող ֆունկցիաները սովորաբար օգտագործվում են մասնավոր շրջանակ ստեղծելու համար, որտեղ փոփոխականները և ֆունկցիաները կարող են սահմանվել առանց գլոբալ փոփոխությունները: Ահա մի օրինակ.</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>function</span> <span className='blue'>foo</span>() {'{'}</p>

  <p>{'console.log(x);'}</p>

  <p>{'}'}</p>

  <p>foo(); <span className='darkgreen'>// Արդյունք՝ 10</span></p>

  <p>{'})();'}</p>
</code>

<p>Այս օրինակում x փոփոխականը և foo ֆունկցիան սահմանվում են ինքնականչվող ֆունկցիայի ներսում: Դրանք հասանելի չեն գործառույթից դուրս, ինչն օգնում է կանխել այլ կոդի հետ անվանման հակասությունները:</p>

<p>Ինքնականչվող ֆունկցիաները կարող են նաև ընդունել այնպիսի արգումենտներ, ինչպիսիք են սովորական ֆունկցիաները: Ահա մի օրինակ՝</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>(<span className='blue'>x, y</span>) {'{'}</p>

  <p>{'console.log'}(x + y);</p>

  <p>{'})'}(10, 20); <span className='darkgreen'>// Արդյունք՝ 30</span></p>
</code>

<p>Այս օրինակում ինքնականչվող ֆունկցիան վերցնում է երկու արգումենտ (x և y) և տպում դրանց գումարը կոնսոլում։</p>

<p>Ինքնականչվող ֆունկցիաները JavaScript-ում հզոր գործիք են մասնավոր շրջանակներ ստեղծելու, անունների բախումներից խուսափելու և գլոբալ փոփոխականները կառավարելու համար:</p>


    </div>
  )
}




export default  AmEs5_5;