import React, { useState, useEffect } from 'react';



const questions = {
  en: [
    {
      question: 'What is closure in JavaScript?',
      answers: [
      { text: 'A function that has access to variables in its outer function', correct: true },
      { text: 'A function that returns another function', correct: false },
      { text: 'A function that does not have access to variables in its outer function', correct: false }
      ]
    },
      {
      question: 'What is prototype in JavaScript?',
      answers: [
      { text: 'An object that contains methods and properties available only to the class', correct: false },
      { text: 'An object that contains methods and properties available only to instances of a class', correct: false },
      { text: 'An object that contains methods and properties available to instances of a class', correct: true }
      ]
    },
      {
    question: 'Which data types are falsy in JavaScript?',
    answers: [
    { text: '[], {}, function() {}', correct: false },
    { text: "null, undefined, 0, '', NaN", correct: true },
    { text: "true, false, 1, 'hello', Infinity", correct: false }
    ]
    },
    {
    question: 'What is asynchronous programming in JavaScript?',
    answers: [
    { text: 'The ability to execute multiple tasks simultaneously', correct: false },
    { text: 'The ability to execute tasks in a specific order', correct: false },
    { text: 'The ability to execute tasks without blocking the main thread of execution', correct: true }
    ]
    },
    {
    question: 'Which methods can be used to work with objects in JavaScript?',
    answers: [
      { text: 'Object.keys, Object.values, Object.entries', correct: true },
      { text: 'concat, slice, join, map', correct: false },
      { text: 'sort, reverse, forEach, filter', correct: false }
    ]
    },
    {
      question: 'Which operator is used to compare the values and types of two variables in JavaScript?',
      answers: [
        { text: '==', correct: false },
        { text: '=', correct: false },
        { text: '===', correct: true }
    ]
    },
    {
    question: 'Which methods can be used to sort an array in JavaScript?',
    answers: [
      { text: 'sort(), reverse(), splice()', correct: true },
      { text: 'slice(), push(), unshift()', correct: false },
      { text: 'map(), reduce(), filter()', correct: false }
      ]
    },
    {
    question: 'Which methods can be used to work with dates in JavaScript?',
    answers: [
      { text: 'toDateString(), getTimezoneOffset(), getDate()', correct: true },
      { text: 'getMonth(), setMinutes(), parse()', correct: false },
      { text: 'toString(), getTime(), setDate()', correct: false }
    ]
    },
    {
    question: 'Which method allows you to add a new element to the end of an array in JavaScript?',
    answers: [
      { text: 'shift()', correct: false },
      { text: 'push()', correct: true },
      { text: 'splice()', correct: false }
      ]
    },
    {
      question: 'Which method allows you to remove the last element from an array in JavaScript?',
      answers: [
        { text: 'splice()', correct: false },
        { text: 'shift()', correct: false },
        { text: 'pop()', correct: true }
    ]
    },
    ],
  ru: [
    {
      question: 'Что такое замыкание (closure) в JavaScript?',
      answers: [
        { text: 'Функция, которая имеет доступ к переменным из внешней функции', correct: true },
        { text: 'Функция, которая возвращает другую функцию', correct: false },
        { text: 'Функция, которая не имеет доступа к переменным из внешней функции', correct: false }
      ]
    },
    {
      question: 'Что такое прототип (prototype) в JavaScript?',
      answers: [
        { text: 'Объект, который содержит методы и свойства, доступные только классу', correct: false },
        { text: 'Объект, который содержит методы и свойства, доступные только экземплярам класса', correct: false },
        { text: 'Объект, который содержит методы и свойства, доступные экземплярам класса', correct: true }
      ]
    },
    {
      question: 'Какие типы данных являются falsy в JavaScript?',
      answers: [
        { text: '[], {}, function() {}', correct: false },
        { text: "null, undefined, 0, '', NaN", correct: true },
        { text: "true, false, 1, 'hello', Infinity", correct: false }
      ]
    },
    {
      question: 'Что такое асинхронность в JavaScript?',
      answers: [
        { text: 'Возможность выполнения нескольких задач одновременно', correct: false },
        { text: 'Возможность выполнения задач в заданном порядке', correct: false },
        { text: 'Возможность выполнения задач без блокировки главного потока выполнения', correct: true }
      ]
    },
    {
      question: 'Какие методы можно использовать для работы с объектами в JavaScript?',
      answers: [
        { text: 'Object.keys, Object.values, Object.entries', correct: true },
        { text: ' concat, slice, join, map', correct: false },
        { text: 'sort, reverse, forEach, filter', correct: false }
      ]
    },
    {
      question: 'Какой оператор позволяет сравнить значения и типы двух переменных в JavaScript?',
      answers: [
        { text: '==', correct: false },
        { text: '=', correct: false },
        { text: '===', correct: true }
      ]
    },
    {
      question: 'Какие методы можно использовать для сортировки массива в JavaScript?',
      answers: [
        { text: 'sort(), reverse(), splice()', correct: true },
        { text: 'slice(), push(), unshift()', correct: false },
        { text: 'map(), reduce(), filter() ', correct: false }
      ]
    },
    {
      question: 'Какие методы можно использовать для работы с датами в JavaScript?',
      answers: [
        { text: 'toDateString(), getTimezoneOffset(), getDate()', correct: true },
        { text: 'getMonth(), setMinutes(), parse()', correct: false },
        { text: 'toString(), getTime(), setDate()', correct: false }
      ]
    },
    {
      question: 'Какой метод позволяет добавлять новый элемент в конец массива?',
      answers: [
        { text: 'shift()', correct: false },
        { text: 'push()', correct: true },
        { text: 'splice()', correct: false }
      ]
    },
    {
      question: 'Какой метод позволяет удалить последний элемент из массива?',
      answers: [
        { text: 'splice()', correct: false },
        { text: 'shift()', correct: false },
        { text: 'pop()', correct: true }
      ]
    },
  ],
  hy: [
    {
      question: 'Ի՞նչ է JavaScript-ում փակումը (closure)',
      answers: [
        { text: 'Ֆունկցիա, որն ունի արտաքին ֆունկցիայի փոփոխականների հասանելիություն', correct: true },
        { text: 'Ֆունկցիա, որը վերադարձնում է մեկ այլ ֆունկցիա', correct: false },
        { text: 'Ֆունկցիա, որը մուտք չունի արտաքին ֆունկցիայի փոփոխականներ', correct: false }
      ]
    },
    {
      question: 'Ի՞նչ է պրոտոտիպը (prototype) JavaScript-ում',
      answers: [
        { text: 'Օբյեկտ, որը պարունակում է մեթոդներ և հատկություններ, որոնք հասանելի են միայն կլասին', correct: false },
        { text: 'Օբյեկտ, որը պարունակում է մեթոդներ և հատկություններ, որոնք հասանելի են միայն կլասի օրինակներին', correct: false },
        { text: 'Օբյեկտ, որը պարունակում է մեթոդներ և հատկություններ, որոնք հասանելի են կլասի օրինակներին', correct: true }
      ]
    },
    {
      question: 'Տվյալների ո՞ր տեսակներն են կեղծ JavaScript-ում',
      answers: [
        { text: '[], {}, function() {}', correct: false },
        { text: "null, undefined, 0, '', NaN", correct: true },
        { text: "true, false, 1, 'hello', Infinity", correct: false }
      ]
    },
    {
      question: 'Ի՞նչ է ասինխրոնությունը JavaScript-ում',
      answers: [
        { text: 'Միաժամանակ մի քանի առաջադրանքներ կատարելու ունակություն', correct: false },
        { text: 'Տվյալ հերթականությամբ առաջադրանքները կատարելու ունակություն', correct: false },
        { text: 'Առաջադրանքները կատարելու հնարավորություն՝ առանց կատարման հիմնական շարանը արգելափակելու', correct: true }
      ]
    },
    {
      question: 'Ի՞նչ մեթոդներ կարելի է օգտագործել JavaScript-ում օբյեկտների հետ աշխատելու համար',
      answers: [
        { text: 'Object.keys, Object.values, Object.entries', correct: true },
        { text: 'concat, slice, join, map', correct: false },
        { text: 'sort, reverse, forEach, filter', correct: false }
      ]
    },
    {
      question: 'Ո՞ր օպերատորն է համեմատում JavaScript-ում երկու փոփոխականների արժեքներն ու տեսակները',
      answers: [
        { text: '==', correct: false },
        { text: '=', correct: false },
        { text: '===', correct: true }
      ]
    },
    {
      question: 'Ի՞նչ մեթոդներ կարող են օգտագործվել JavaScript-ում զանգվածը դասավորելու համար',
      answers: [
        { text: 'sort(), reverse(), splice()', correct: true },
        { text: 'slice(), push(), unshift()', correct: false },
        { text: 'map(), reduce(), filter() ', correct: false }
      ]
    },
  
    {
      question: 'Ի՞նչ մեթոդներ կարող են օգտագործվել JavaScript-ում ամսաթվերի հետ աշխատելու համար',
      answers: [
        { text: 'toDateString(), getTimezoneOffset(), getDate()', correct: true },
        { text: 'getMonth(), setMinutes(), parse()', correct: false },
        { text: 'toString(), getTime(), setDate()', correct: false }
      ]
    },
    {
      question: 'Ո՞ր մեթոդն է թույլ տալիս նոր տարր ավելացնել զանգվածի վերջում։',
      answers: [
        { text: 'shift()', correct: false },
        { text: 'push()', correct: true },
        { text: 'splice()', correct: false }
      ]
    },
   {
      question: 'Ո՞ր մեթոդն է թույլ տալիս հեռացնել վերջին տարրը զանգվածից',
      answers: [
        { text: 'splice()', correct: false },
        { text: 'shift()', correct: false },
        { text: 'pop()', correct: true }
      ]
    },
   
  ]
};


function Quiz() {
  const [language, setLanguage] = useState('en');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleLanguageButtonClick = (language) => {
    setLanguage(language);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[language].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'JavaScript Quiz ';
        break;
      case 'ru':
        document.title = ' Онлайн тест на JavaScript ';
        break;
      case 'hy':
        document.title = 'ՋավաՍկրիպտ Օնլայն Տեստ';
        break;
      default:
        document.title = 'Online Quiz JavaScript';
    }
  }, [language]);
  
  return (
    <div className='flex-container'>
    
    <div className="quiz-container">
      
      
      <div className="language-buttons-container">
        
        <button  onClick={() => handleLanguageButtonClick('en')}>English</button>
        
        <button  onClick={() => handleLanguageButtonClick('ru')}>Русский</button>
        
        <button  onClick={() => handleLanguageButtonClick('hy')}>Հայերեն</button>
      </div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions[language].length}
        </div>
      ) : (
        <>
          <div className="question-section">
            
            <div className="question-count">
              
              <span>Question {currentQuestion + 1}</span>/{questions[language].length}
            
            </div>
            
            <div className="question-text">{questions[language][currentQuestion].question}</div>
          
          </div>
          
          <div className="answer-section">
            {questions[language][currentQuestion].answers.map((answer, index) => (
              <button key={index} className="answer-button" onClick={() => handleAnswerButtonClick(answer.correct)}>
                {answer.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Quiz;