import React,{ useState, useEffect } from 'react';
import AmHtml_1 from '../lang/AmHtml_1';
import RuHtml_1 from '../lang/RuHtml_1';

function Html_1() {
  
  const [language, setLanguage] = useState('en'); // по умолчанию язык выбран английский

  const handleEnglishClick = () => {
    setLanguage('en');
  };

  const handleRussianClick = () => {
    setLanguage('ru');
  };

  const handleArmenianClick = () => {
    setLanguage('am');
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'HTML document structure  | HTML (HyperText Markup Language) ';
        break;
      case 'ru':
        document.title = ' Структура HTML-документа | HTML (язык гипертекстовой разметки)';
        break;
      case 'am':
        document.title = 'HTML փաստաթղթի կառուցվածքը | HTML (հիպերտեքստի նշագրման լեզու)';
        break;
      default:
        document.title = 'HTML';
    }
  }, [language]);
  
  return (
    <div className='java-script'>
        
        <div>
        <button onClick={handleEnglishClick}>English</button>
        <button onClick={handleRussianClick}>Русский</button>
        <button onClick={handleArmenianClick}>Հայերեն</button>
      </div>
      {language === 'en' && (
        <div>

        <h1>HTML</h1>

<p>HTML, which stands for HyperText Markup Language, is a markup language used to create and structure content on the web. It is the backbone of every website and serves as the building blocks of web pages. HTML is a declarative language, meaning it is used to describe the content and structure of a web page, but not necessarily its appearance.</p>   
    
<p>HTML was created by Tim Berners-Lee in the early 1990s while working at CERN, the European Organization for Nuclear Research. Berners-Lee was looking for a way to share and organize information among researchers, and HTML was the solution he came up with. HTML was designed to be a simple language that could be easily understood and used by anyone, regardless of their technical background.</p>

<p>HTML is made up of a series of elements, which are represented by tags. Tags are enclosed in angle brackets and are used to define the structure and content of a web page. For example, the {'<head>'} tag is used to define the head section of a web page, which typically contains information such as the title of the page and links to external stylesheets and scripts. The {'<body>'} tag is used to define the body section of a web page, which contains the main content of the page.</p>

<p>HTML is a constantly evolving language, with new versions being released periodically. The current version of HTML is HTML5, which was released in 2014. HTML5 introduced many new features and capabilities, such as video and audio tags, canvas elements for drawing graphics, and semantic tags for better accessibility and SEO.</p>

<p>In summary, HTML is a markup language used to create and structure content on the web. It was created by Tim Berners-Lee in the early 1990s and is the backbone of every website. HTML is made up of a series of elements represented by tags, and it is a constantly evolving language with new versions being released periodically.</p>

<p>1. Simple web page with a title and paragraph:</p>
    
    
<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is my first web page.{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>This is an example of a simple web page that consists of a title and a paragraph. The title is represented by the "title" tag, and the paragraph by the "p" tag. The page title is displayed in the browser's title bar and in search engine results.</p>

<p>2. Image with alternative text and a link to another page:</p>

 
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
       
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
       
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p> 
       
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
       
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a picture of a cat:{'</'}<span className='green'>p</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"A cute cat"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Click {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}here{'</'}<span className='green'>a</span>{'>'} to go to Google.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>

<p>This example includes an image of a cat, represented by the "img" tag, with alternative text displayed in case the image cannot be loaded. The link to Google is represented by the "a" tag with the "href" attribute pointing to the URL of the destination page.</p>

<p>3. Form for entering a name and submitting data to a server:</p>

  
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Enter your name:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Submit"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
  </code>
 

<p>This example shows a form with a text input field for the user to enter their name. When the form is submitted, the data is sent to a server for processing. The "label" tag provides a text label for the input field, and the "input" tag is used to create the input field and the submit button.</p>

    <p>4. Ordered list of items:</p>

    
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}My favorite foods:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Pizza{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Burgers{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Ice cream{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
 

<p>This example shows an ordered list of items represented by the "ol" tag, with each item represented by the "li" tag. The numbers for the list are automatically generated by the browser.</p>

<p>5. Unordered list of items:</p>

 
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p> 

  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}My favorite movies:{'</'}<span className='green'>h2</span>{'>'}</p> 

  <p>{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Shawshank Redemption{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Godfather{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Dark Knight{'</'}<span className='green'>li</span>{'>'}</p>

  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>
      
<p>This example shows an unordered list of items represented by the "ul" tag, with each item represented by the "li" tag. The list items are displayed with bullet points by default.</p> 

<p>To further enhance their understanding of HTML, students can be directed to additional resources such as the documentation on <b>MDN Web Docs</b> or <b>W3Schools</b>.</p> 

<p>To add a link to MDN Web Docs on your website, use the following HTML code:</p> 

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 
     
<p>To add a link to W3Schools on your website, use the following HTML code:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Both MDN Web Docs and W3Schools provide comprehensive and detailed documentation on HTML and related technologies, as well as interactive tutorials and examples. Students can use these resources to deepen their knowledge of HTML and improve their web development skills.</p>

    </div>
      )}
      {language === 'ru' && (
        <div>
          <RuHtml_1 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmHtml_1 />
        </div>
      )} 

    </div>
  )
}

export default Html_1;