import React,{useState, useEffect } from 'react';
import AmHtml_2 from '../lang/AmHtml_2';
import RuHtml_2 from '../lang/RuHtml_2';

function Html_2() {
  
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
        document.title = 'HTML tags and their descriptions | HTML Table Tags and Attributes | Links or Hypertext references ';
        break;
      case 'ru':
        document.title = ' Теги HTML и их описания | Теги и атрибуты таблиц HTML | Ссылки или гипертекстовые ссылки ';
        break;
      case 'am':
        document.title = ' HTML թեգեր և դրանց նկարագրությունները | HTML աղյուսակի թեգեր և ատրիբուտներ | Հղումներ կամ հիպերտեքստային հղումներ';
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
     
     
      <h1>HTML tags and their descriptions:</h1>

      <p>1. <b>{'<'}<span className='green'>html</span>{'>'}</b>Defines an HTML document.</p>

      <p>2. <b>{'<'}<span className='green'>head</span>{'>'}</b>Contains metadata information about the document, such as the title and links to CSS stylesheets.</p>

      <p>3. <b>{'<'}<span className='green'>title</span>{'>'}</b>Defines the title of the document, which appears in the browser's title bar or tab.</p>

      <p>4. <b>{'<'}<span className='green'>body</span>{'>'}</b>Contains the visible content of the document.</p>

      <p>5. <b>{'<'}<span className='green'>h1</span>{'>'} - {'<'}<span className='green'>h6</span>{'>'}</b> Defines headings of different levels of importance, with {'<h1>'}being the most important and{'<h6>'}being the least. </p>

      <p>6. <b>{'<'}<span className='green'>p</span>{'>'}</b>Defines a paragraph of text.</p>

      <p>7. <b>{'<'}<span className='green'>a</span>{'>'}</b>Defines a hyperlink to another web page or a specific location within the same page.</p>

      <p>8. <b>{'<'}<span className='green'>img</span>{'>'}</b>Inserts an image into the document.</p>

      <p>9. <b>{'<'}<span className='green'>ul</span>{'>'}</b> Defines an unordered list, typically marked with bullet points.</p>

      <p>10. <b>{'<'}<span className='green'>ol</span>{'>'}</b>Defines an ordered list, typically marked with numbers or letters.</p>

      <p>11. <b>{'<'}<span className='green'>li</span>{'>'}</b>Defines a list item within an ordered or unordered list.</p>

      <p>12. <b>{'<'}<span className='green'>div</span>{'>'}</b>Defines a container for HTML elements, which can be used for styling and positioning.</p>

      <p>13. <b>{'<'}<span className='green'>span</span>{'>'}</b> Defines a small container for inline HTML elements, which can be used for styling and positioning.</p>

      <p>14. <b>{'<'}<span className='green'>form</span>{'>'}</b> Defines a form for user input, which can contain various input fields and submit buttons.</p>

      <p>15. <b>{'<'}<span className='green'>input</span>{'>'}</b> Defines an input field for user input, such as a text box or a checkbox.</p>

      <p>16. <b>{'<'}<span className='green'>button</span>{'>'}</b> Defines a clickable button element, which can be used for various user interactions.</p>

      <p>17. <b>{'<'}<span className='green'>select</span>{'>'}</b> Defines a dropdown list, which allows users to select one or more options.</p>

      <p>14. <b>{'<'}<span className='green'>option</span>{'>'}</b>Defines an option within a dropdown list.</p>

       <p>15. <b>{'<'}<span className='green'>textarea</span>{'>'}</b>Defines a multi-line text input field.</p>

       <p>16. <b>{'<'}<span className='green'>hr</span>{'>'}</b> Stands for "horizontal rule". It is used to insert a horizontal line in the HTML page. The line can be used to separate content visually.</p>

       <p>17. <b>{'<'}<span className='green'>br</span>{'>'}</b> Stands for "line break". It is used to insert a line break or a new line in the HTML content. Unlike the {'<p>'} tag which creates a new paragraph, the {'<br>'} tag only creates a new line.</p>

       <p>18. <b>{'<'}<span className='green'>small</span>{'>'}</b> Defines smaller text (like copyright and other side-comments).</p> 
      
       <p><a href="https://www.w3schools.com/tags/" target='_blank' > <b>More tags can be found here 👉🏼 W3Schools</b></a></p>


      <h2>HTML Table Tags and Attributes</h2>

      
       <p>1. <b>{'<'}<span className='green'>table</span>{'>'}</b> Is used to define the start and end of an HTML table. All table-related tags are contained within the {'<table>'} element.</p>

       <p>2. <b>{'<'}<span className='green'>caption</span>{'>'}</b> Is used to provide a title or caption for the table. It should be placed immediately after the opening {'<table>'} tag.</p>

       <p>3. <b>{'<'}<span className='green'>frame</span>{'>'}</b> Specifies how the table borders should be displayed. It has three possible values: void, above, and below.</p>

       <p>4. <b>{'<'}<span className='green'>rules</span>{'>'}</b> Specifies the visibility of the table's borders. It can be set to "none" to hide the borders, "groups" to display borders between row groups and column groups, or "rows" to display borders between rows.</p>

       <p>5. <b>{'<'}<span className='green'>border</span>{'>'}</b> Specifies the width of the table's borders in pixels.</p>

       <p>6. <b>{'<'}<span className='green'>cellspacing</span>{'>'}</b> Specifies the amount of space between adjacent cells in the table. It is specified in pixels.</p>

       <p>7. <b>{'<'}<span className='green'>cellpadding</span>{'>'}</b> Specifies the amount of space between the cell content and the cell borders. It is also specified in pixels.</p>

       <p>8. <b>{'<'}<span className='green'>tr</span>{'>'}</b> Defines a table row.</p>

       <p>9. <b>{'<'}<span className='green'>th</span>{'>'}</b> Defines a table header cell. This is typically used to provide headings for each column in the table.</p>

       <p>10. <b>{'<'}<span className='green'>td</span>{'>'}</b> Defines a table data cell. This is where the actual content of the table is placed.</p>


        <h2>Links or Hypertext references</h2>

       <p>Links or hypertext references in HTML are used to create clickable elements on a web page that allow users to navigate to other pages, sections of the same page, or other online resources. The basic structure of a link consists of an anchor tag {'(<a>)'} and an href attribute that specifies the destination of the link.</p> 

      <p>Here's an example of a basic link in HTML</p>

      <code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"https://www.example.com"</span>{'>'}Click here to visit Example.com{'</'}<span className='green'>a</span>{'>'}</p></code>

      <p>In this example, the text "Click here to visit Example.com" is the clickable part of the link, while the href attribute specifies the URL of the destination. When the user clicks on the link, they will be taken to the website at the specified URL.</p>

      <p>Links can also be used to create anchor points within a single web page. This allows users to quickly jump to a specific section of the page by clicking on a link. To create an anchor point, you would add an <b>id</b> attribute to the element that you want to link to, and then create a link with a <b>#</b>symbol followed by the <b>id</b> value as the destination</p>
    
    <code>
      <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section1"</span>{'>'}Section 1{'</'}<span className='green'>h2 </span>{'>'}</p>

      <p>{'<'}<span className='green'>p</span>{'>'}This is the first section of the page.{'</'}<span className='green'>p</span>{'>'}</p>

      <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section2"</span>{'>'}Section 2 {'</'}<span className='green'>h2 </span>{'>'}</p>

      <p>{'<'}<span className='green'>p</span>{'>'}This is the second section of the page.{'</'}<span className='green'>p</span>{'>'}</p>

      <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section1"</span>{'>'}Go to Section 1{'</'}<span className='green'>a</span>{'>'}</p>

      <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section2"</span>{'>'}Go to Section 2{'</'}<span className='green'>a</span>{'>'}</p>
    </code>

      <p>In this example, we've added <b>id</b> attributes to the two <b>h2</b> tags to create anchor points for each section. The two links at the bottom of the page use the <b>href</b> attribute to link to these anchor points, allowing users to quickly jump to a specific section of the page.</p>

      <p>There are many other options and attributes that can be used with links in HTML, including target, download, rel, and more. By using links effectively, you can create a more interactive and engaging user experience on your web pages.</p>

      <p>To create a link for a phone number or Skype, you can use the {'<a>'} tag with the href attribute set to <b>"tel:"</b> or <b>"skype:"</b> followed by the phone number or Skype username.</p>

      <p>For example, to create a link for a phone number, you can use the following code:</p>

      <code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"tel:+1234567890"</span>{'>'}Call us at +1 (234) 567-890{'</'}<span className='green'>a</span>{'>'}</p></code>

      <p>In this example, <b>"tel:"</b> is used as the protocol for phone numbers, and "+1234567890" is the phone number. When a user clicks on this link on a mobile device, it will automatically launch the phone app with the number pre-populated.</p>

      <p>To create a link for Skype, you can use the following code</p>

      <code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"skype:username?call"</span>{'>'}Call us on Skype{'</'}<span className='green'>a</span>{'>'}</p></code>

      <p>In this example, <b>"skype:"</b> is used as the protocol for Skype links, "username" is the username of the person or company you want to call, and "?call" is added to initiate a call. When a user clicks on this link, it will launch the Skype app and initiate a call to the specified username.</p>

      <p><b>The {'<img>'} tag in HTML is used to display images on a web page. Here is an example of how to use the {'<img>'} tag:</b></p>

      <code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Description of image"</span>{'>'}</p></code>

      <p>Let's break down the different parts of this tag:</p>

      <p>The "src" attribute specifies the URL of the image file you want to display.</p>

      <p>The "alt" attribute provides a description of the image for screen readers and other assistive technologies.</p>

      <p>Here is an example of how to use the {'<img>'} tag to display an image with a specific width and height:</p>

       <code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Description of image"</span> <span className='blue'>width</span>=<span className='blue1'>"500"</span> <span className='blue'>height</span>=<span className='blue1'>"300"</span> {'>'}</p></code>

       <p>In this example, the <b>"width"</b> and <b>"height" </b> attributes specify the dimensions of the image in pixels.</p>

      <p>You can also add other attributes to the {'<img>'} tag to further customize the image display, such as <b>"class"</b> and <b>"id"</b> for CSS styling purposes.</p>

      </div>
      )}
      {language === 'ru' && (
        <div>
          <RuHtml_2 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmHtml_2 />
        </div>
      )}   


    </div>
  )
}

export default Html_2