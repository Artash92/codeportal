import React from 'react'

function AmJsEs5_10() {
  return (
    <div>

  <h1>JavaScript ES5 Օրինակներ</h1>
    
  <p><b>Թվի աստիճանը հաշվելու ֆունկցիա</b></p>    
    
  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>     

<p><b>pow(num, exp)</b>. այս ֆունկցիան հաշվարկում է թվի աստիճանը: Այն վերցնում է երկու պարամետր՝ num և exp, և վերադարձնում է num-ի արժեքը բարձրացված exp-ի աստիճանը: Ֆունկցիան օգտագործում է while ցիկլ և հաշվիչ՝ num-ը ինքն իրենով բազմապատկելու համար, մինչև հաշվիչը հասնի exp:</p>
    
    
<p><b>Թվի աստիճանը հաշվարկելու ֆունկցիա (այլընտրանքային տարբերակ)</b></p>   
    
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>

  <p>{'num3 *= num1;'}</p>

  <p>&nbsp;{'}'}</p>

  <p><span className='blueviole'>return</span> num3;</p>

  <p>{'}'}</p>
</code>   
    
<p><b>pow2(num1, num2)</b>. այս ֆունկցիան հաշվարկում է թվի աստիճանը: Այն վերցնում է երկու պարամետր՝ num1 և num2, և վերադարձնում է num1-ի արժեքը՝ բարձրացված num2-ի աստիճանը: Ֆունկցիան օգտագործում է for ցիկլ՝ num1-ը իր կողմից num2 անգամ բազմապատկելու համար, նախքան ցիկլի ավարտը:</p>   
    
<p><b>Ֆունկցիա, որը ստուգում է, թե արդյոք թիվը պարզ է</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 

  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 

  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 

  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 

  <p><span className='blueviole'>return</span> undefined;</p> 

  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>

   <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 

   <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>

   <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code>     
    
<p><b>isPrime(number)</b>. այս ֆունկցիան ստուգում է, թե արդյոք թիվը պարզ է: Այն վերցնում է թվային պարամետր և վերադարձնում է true, եթե թիվը պարզ է, հակառակ դեպքում այն ​​վերադարձնում է false: Ֆունկցիան նախ ստուգում է, թե արդյոք թիվը 2-ից փոքր է, այդ դեպքում այն ​​անմիջապես վերադարձնում է false: Եթե ​​թիվը սահմանված չէ (undefined), այն վերադառնում է undefined: Հակառակ դեպքում ֆունկցիան օգտագործում է for loop՝ ստուգելու համար, թե արդյոք թիվը բաժանվում է որևէ թվի 2-ի և թվի (բացառելով number) առանց մնացորդի: Նման թիվ գտնելու դեպքում ֆունկցիան վերադարձնում է false: Եթե ​​նման թիվ չգտնվի, ֆունկցիան վերադարձնում է true:</p>    
    
<h4>Աստղանիշներով բուրգի ստեղծում JavaScript-ում</h4>   
    
<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>   
    
<p>Այս կոդը ստեղծում է բուրգ՝ օգտագործելով աստղանիշ ('*') նիշերը և բացատները(пробел):</p>    
    
<p>Կոդը սկսվում է՝ սահմանելով "x" փոփոխական՝ 6 արժեքով և դատարկ "string" տող: Այնուհետև այն օգտագործում է for ցիկլ՝ բուրգի յուրաքանչյուր տողի վրա կրկնելու համար՝ սկսած 1-ից մինչև "x":</p>    
    
<p>Առաջին for ցիկլի շրջանակում մեկ այլ for օղակ օգտագործվում է աստղանիշներից առաջ բացատներ ավելացնելու համար: Աստղանիշների յուրաքանչյուր տողից առաջ ավելացնում է (x-i) բացատների քանակը:</p>   
    
<p>Երկրորդ for ցիկլն այնուհետև օգտագործվում է տողին աստղանիշներ ավելացնելու համար: Յուրաքանչյուր տողի վրա ավելացված աստղանիշների թիվը տրվում է 2 * i -1 բանաձևով, որտեղ "i"-ն ընթացիկ տողի համարն է:</p>   

<p>Վերջապես, յուրաքանչյուր տողում ավելացվում է նոր տողի նիշ, և ստացված տողը տպվում է վահանակում` օգտագործելով {'console'}.log() մեթոդը:</p>    

<p><b>Աստղերով և թվերով բուրգի նախշի ստեղծում</b> </p>   

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
</code>

<p>Այս կոդը ստեղծում է աստղերի և թվերի նախշ՝ բուրգի տեսքով: Նախ, որոշվում են բուրգի գծերի քանակը և նախշերի մեջ օգտագործվող նիշը (այս դեպքում '*'): Այնուհետև բուրգի յուրաքանչյուր տող կառուցելու համար օգտագործվում են բույն դրված օղակներ՝ սկսած ներքևից և ամեն անգամ ավելացնելով մեկ նիշ, մինչև այն հասնի վերևին: Նախշի թվերը ներկայացված են "1" թվով: Յուրաքանչյուր բուրգի տող ստեղծվում է՝ ավելացնելով համապատասխան թվով "1", որին հաջորդում է նիշ և տողերի ընդմիջում: Յուրաքանչյուր տողի համար օգտագործվող նիշը թարմացվում է տողերի միացման օպերատորի հետ՝ յուրաքանչյուր նոր տողի համար ավելացնելով լրացուցիչ աստղանիշ: Վերջապես, ստացված օրինաչափությունը մուտքագրվում է վահանակ՝ օգտագործելով "{'console'}.log" ֆունկցիան:</p>

<h3>JavaScript ֆունկցիաներ Ֆիբոնաչիի թվեր ստեղծելու համար</h3>

<p><b>Օրինակ</b></p>

<code>
      <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>

      <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

      <p><span className='blueviole'>return</span> <span className='red'>'ERROR'</span>; </p>

      <p>{" } "}</p>

      <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

      <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

      <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

      <p>{" secondN = firstN + secondN; "}</p>

      <p>{"firstN = secondN - firstN; "}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>

      <p>fibo(<span className='blue'>55</span>);</p>
    </code>

    <p><b>Օրինակ</b></p>

    <code>
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"գրել միայն թվեր"</span>);</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(num1);</p>

  <p>{" i = num1 + num2;"}</p>

  <p>{"num1 = num2;"}</p>

  <p>{"num2 = i;"}</p>

  <p>&nbsp;&nbsp;&nbsp;{"}"}</p>

  <p>&nbsp;{" }"}</p>

  <p>{"}"}</p>

  <p>fibonachi(<span className='blue'>100</span>);</p>
</code>

<p><b>Օրինակ</b></p>

<code> 
      <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

      <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

      <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>for</span> (; a {'<'} n;) {"{"}</p>

      <p>{"console"}.<span className='blue'>log</span>(a)</p>

      <p>{"result = a + b;"}</p>

      <p>{"  a = b;"}</p>

      <p>{" b = result; "}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

      <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"գրել միայն թվեր"</span>)</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>
   </code>

   <p>Սրանք Ֆիբոնաչիի հաջորդականության գեներատորի երեք տարբեր JavaScript իրականացումներ են:</p>

   <p>Առաջին իրականացումը (fibo) օգտագործում է while ցիկլը Ֆիբոնաչիի թվերը մինչև տրված սահմանը (num) գեներացնելու համար և տպում դրանք էկրանին՝ օգտագործելով {'console'}.log(): Այն նախ ստուգում է, թե արդյոք մուտքագրված արժեքը վավեր թիվ է, և եթե ոչ, վերադարձնում է սխալի հաղորդագրություն:</p>

   <p>Երկրորդ իրականացումը (fibonachi) օգտագործում է for loop՝ մինչև տվյալ սահմանաչափը (num) ֆիբոնաչի թվեր ստեղծելու համար և տպում դրանք էկրանին՝ օգտագործելով {'console'}.log(): Նախ, այն ստուգում է, թե արդյոք մուտքային արժեքը վավեր թիվ է, և եթե ոչ, սխալի հաղորդագրություն է տպում վահանակում:</p>

   <p>Երրորդ իրականացումը (fibonachi) նաև օգտագործում է for loop՝ մինչև տվյալ սահմանաչափը (n) ֆիբոնաչի թվեր ստեղծելու համար և դրանք տպում էկրանին՝ օգտագործելով {'console'}.log(): Նախ, այն ստուգում է, թե արդյոք մուտքային արժեքը վավեր թիվ է, և եթե ոչ, ապա վահանակում սխալի հաղորդագրություն է տպում: Այս իրականացումը օգտագործում է երեք փոփոխական՝ հաջորդ Ֆիբոնաչիի համարը ստեղծելու համար՝ a, b և result: Այն սկսվում է a = 0-ով և b = 1-ով, և յուրաքանչյուր կրկնության վրա հաշվարկում է a-ի և b-ի գումարը, արդյունքը պահպանում է արդյունքի փոփոխականում, a-ն սահմանում է b-ի և b-ի՝ result-ի համար:</p> 
    
   <h3>Շախմատային տախտակ JavaScript-ում</h3> 

   <code>
    <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>

    <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"Invalid params"</span>);</p>

    <p> <span className='blueviole'>return</span>; </p>

    <p>{"}"}</p>

    <p>rows = rows || <span className='blue1'>8</span>;</p>

    <p> symbolOne = symbolOne ||<span className='red'> " ⬛"</span>;</p>
  
    <p>symbolTwo = symbolTwo || <span className='red'>" ⬜"</span>;</p>

    <p>currentRow = currentRow || <span className='blue1'>1</span>;</p>

    <p><span className='blueviole'>if</span> (currentRow {'>'} rows) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} rows / <span className='blue1'>2</span>; i++) {"{"}</p>

    <p>{"symbol += symbolOne + symbolTwo;"}</p>

    <p>{" }"}</p>

    <p>symbol += <span className='red'>"\n"</span>; </p>

    <p>symbol += chess(rows, symbolTwo, symbolOne, currentRow + <span className='blue1'>1</span>);</p>

    <p><span className='blueviole'>return</span> symbol;</p>
  
    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
  </code>  

  <p>Այս կոդը սահմանում է ռեկուրսիվ "chess" ֆունկցիա, որն ընդունում է չորս պարամետր՝ "rows", "symbolOne", "symbolTwo" և "currentRow": Ֆունկցիայի նպատակն է ստեղծել շախմատային տախտակի գծային պատկեր՝ փոխարինելով երկու նշաններ՝ "symbolOne" և "symbolTwo", տախտակի յուրաքանչյուր քառակուսու համար:</p>

  <p>Ֆունկցիան նախ ստուգում է՝ արդյոք մուտքային պարամետրերը հասանելի են, այսինքն՝ "rows" թիվ են, իսկ "symbolOne"-ն ու "symbolTwo"-ը՝ տողեր։ Եթե ​​որևէ պարամետր անհասանելի է, ֆունկցիան վերադարձնում է սխալի հաղորդագրություն և դուրս է գալիս ֆունկցիայից:</p>

  <p>Այնուհետև այն սահմանում է "rows"-ի, "symbolOne"-ի և "symbolTwo"-ի լռելյայն արժեքները, եթե ոչ մեկը չի տրամադրվել: "rows" լռելյայն արժեքը 8-ն է, իսկ "symbolOne"-ի և "symbolTwo"-ի լռելյայն արժեքը երկու Unicode նիշ է, որոնք ներկայացնում են համապատասխանաբար սև և սպիտակ քառակուսիները:</p>

  <p>Այնուհետև ֆունկցիան ստուգում է՝ արդյոք այն հասել է շախմատի տախտակի վերջնամասին (այսինքն՝ "currentRow"-ը մեծ է "rows"-ից): Եթե ​​այո, այն վերադարձնում է դատարկ տող և դուրս է գալիս ֆունկցիայից:</p>

  <p>Եթե շախմատի տախտակի վերջը դեռ չի հասել, ֆունկցիան ստեղծում է "symbol" տողը հերթով ավելացնելով "symbolOne" և "symbolTwo" "rows / 2" (քանի որ յուրաքանչյուր տող բաղկացած է "rows / 2"-ից։ Զույգ նիշերից):</ p>

  <p>Այնուհետև այն ավելացնում է նոր տողի նիշ "symbol" տողի վրա և կանչում է "chess" ֆունկցիան ռեկուրսիվորեն՝ փոխանակելով «symbolOne»-ը և «symbolTwo»-ն և ավելացնելով «currentRow»-ը 1-ով:</p>

  <p>Վերջապես, ֆունկցիան վերադարձնում է "symbol" տողը, որը պարունակում է ամբողջ շախմատային տախտակը: Կոդի վերջին տողը կոչում է "chess" ֆունկցիան, որտեղ "rows"-ը դրված է 8, իսկ "symbolOne" և "symbolTwo" սահմանված են: Յունիկոդի նիշերը, որոնք ներկայացնում են համապատասխանաբար սև և սպիտակ քառակուսիները և տպում ստացված շախմատի տախտակը կոնսոլի մեջ:</p>


    </div>
  )
}

export default AmJsEs5_10;