import React, { useState, useEffect } from 'react';

const questions = {
  en: [
    {
      question: 'What is Virtual DOM in React?',
      answers: [
        { text: 'Virtual representation of the DOM tree', correct: true },
        { text: 'Virtual copy of the real DOM tree', correct: false },
        { text: 'This is a function that creates new elements for the DOM.', correct: false }
      ]

    },
    {
      question: 'What React lifecycle methods are used to connect a component to a data source?',
      answers: [
        { text: 'componentWillUpdate()', correct: false },
        { text: 'componentWillMount()', correct: false },
        { text: 'componentDidMount()', correct: true }
      ]
    },
    {
      question: 'What is Redux in React?',
      answers: [
        { text: 'Web application framework', correct: false },
        { text: 'Application state management library', correct: true },
        { text: 'A component that provides an API for manipulating DOM elements', correct: false }
      ]

    },
    {
      question: 'What are the benefits of using Redux in React?',
      answers: [
        { text: 'Performance improvement', correct: false },
        { text: 'Faster code execution', correct: false },
        { text: 'Simplify application state management', correct: true }
      ]
    },
    {
      question: 'What is action in Redux?',
      answers: [
        { text: 'Object describing application state changes', correct: true },
        { text: 'Method causing application state changes', correct: false },
        { text: 'A string describing the type of application state change', correct: false }
      ]

    },
    {
      question: 'What is a reducer in Redux?',
      answers: [
        { text: 'Function that handles errors in Redux', correct: false },
        { text: 'Component that renders new elements in the DOM', correct: false },
        { text: 'A function that handles an action and returns a new state', correct: true }
      ]
    },
    {
      question: 'Which Redux method is used to update the application state?',
      answers: [
        { text: 'dispatch()', correct: true },
        { text: 'setState()', correct: false },
        { text: 'updateState()', correct: false }
      ]

    },
    {
      question: 'What pattern is used to pass data down the component hierarchy in React?',
      answers: [
        { text: 'HOC (Higher Order Component)', correct: false },
        { text: 'Redux', correct: false },
        { text: 'Props drilling', correct: true }
      ]
    },
    {
      question: 'What method is used to update the state of a component in React?',
      answers: [
        { text: 'this.state()', correct: false },
        { text: 'setState()', correct: true },
        { text: 'updateState()', correct: false }
      ]

    },
    {
      question: 'What is a store in Redux?',
      answers: [
        { text: 'An object that contains all of the applications state', correct: false },
        { text: 'The component that stores data in memory', correct: false },
        { text: 'An object that contains all of the applications state', correct: true }
      ]
    },
  ],
  
  ru: [
   {
      question: 'Что такое Virtual DOM в React?',
      answers: [
        { text: 'Виртуальное представление DOM-дерева', correct: true },
        { text: 'Виртуальная копия реального DOM-дерева', correct: false },
        { text: 'Это функция, которая создает новые элементы для DOM.', correct: false }
      ]
    },
    {
      question: 'Какие методы жизненного цикла React используются для подключения компонента к источнику данных?',
      answers: [
        { text: 'componentWillUpdate()', correct: false },
        { text: 'componentWillMount()', correct: false },
        { text: 'componentDidMount()', correct: true }
      ]
    },
    {
      question: 'Что такое Redux в React?',
      answers: [
        { text: 'Фреймворк для создания веб-приложений', correct: false },
        { text: 'Библиотека управления состоянием приложения', correct: true },
        { text: 'Компонент, который предоставляет API для управления DOM-элементами', correct: false }
      ]
    },
    {
      question: 'Какие преимущества дает использование Redux в React?',
      answers: [
        { text: 'Улучшение производительности', correct: false },
        { text: 'Более быстрое выполнение кода', correct: false },
        { text: 'Упрощение управления состоянием приложения', correct: true }
      ]
    },
    {
      question: 'Что такое action в Redux?',
      answers: [
        { text: 'Объект, описывающий изменения состояния приложения', correct: true },
        { text: 'Метод, вызывающий изменения состояния приложения', correct: false },
        { text: 'Строка, описывающая тип изменения состояния приложения', correct: false }
      ]
    },
    {
      question: 'Что такое reducer в Redux?',
      answers: [
        { text: 'Функция, которая обрабатывает ошибки в Redux', correct: false },
        { text: 'Компонент, который рендерит новые элементы в DOM', correct: false },
        { text: 'Функция, которая обрабатывает action и возвращает новое состояние', correct: true }
      ]
    },
    {
      question: 'Какой метод Redux используется для обновления состояния приложения?',
      answers: [
        { text: 'dispatch()', correct: true },
        { text: 'setState()', correct: false },
        { text: 'updateState()', correct: false }
      ]
    },
    {
      question: 'Какой паттерн используется для передачи данных вниз по иерархии компонентов в React?',
      answers: [
        { text: 'HOC (Higher Order Component)', correct: false },
        { text: 'Redux', correct: false },
        { text: 'Props drilling', correct: true }
      ]
    },
    {
      question: 'Какой метод используется для обновления состояния компонента в React?',
      answers: [
        { text: 'this.state()', correct: false },
        { text: 'setState()', correct: true },
        { text: 'updateState()', correct: false }
      ]
    },
    {
      question: 'Что такое store в Redux?',
      answers: [
        { text: 'Объект, который содержит все состояние приложения', correct: false },
        { text: 'Компонент, который хранит данные в памяти', correct: false },
        { text: 'Объект, который содержит все состояние приложения', correct: true }
      ]
    },
  ],
  hy: [
    {
      question: 'Ի՞նչ է Virtual DOM-ը React-ում',
      answers: [
        { text: 'DOM ծառի վիրտուալ ներկայացում', correct: true },
        { text: 'Իրական DOM ծառի վիրտուալ պատճեն', correct: false },
        { text: 'Սա ֆունկցիա է, որը ստեղծում է նոր տարրեր DOM-ի համար', correct: false }
      ]
    },
    {
      question: 'React կյանքի ցիկլի ո՞ր մեթոդներն են օգտագործվում կոմպոնենտը տվյալների աղբյուրին միացնելու համար',
      answers: [
        { text: 'componentWillUpdate()', correct: false },
        { text: 'componentWillMount()', correct: false },
        { text: 'componentDidMount()', correct: true }
      ]
    },
    {
      question: 'Ի՞նչ է Redux-ը React-ում',
      answers: [
        { text: 'Վեբ հավելվածի շրջանակ', correct: false },
        { text: 'Ծրագրի վիճակի կառավարման գրադարան', correct: true },
        { text: 'Կոմպոնենտ, որն ապահովում է API՝ DOM տարրերը կառավարման համար ', correct: false }
      ]
    },
    {
      question: 'Որո՞նք են Redux-ի օգտագործման առավելությունները React-ում',
      answers: [
        { text: 'Կատարման բարելավում', correct: false },
        { text: 'Ավելի արագ կոդի կատարում', correct: false },
        { text: 'Պարզեցնել հավելվածի վիճակի կառավարումը', correct: true }
      ]
    },
    {
      question: 'Ի՞նչ է action -ը Redux-ում',
      answers: [
        { text: 'Օբյեկտ, որը նկարագրում է հավելվածի վիճակի փոփոխությունները', correct: true },
        { text: 'Մեթոդ, որն առաջացնում է հավելվածի վիճակի փոփոխություններ', correct: false },
        { text: 'Տող, որը նկարագրում է կիրառման վիճակի փոփոխության տեսակը', correct: false }
      ]
    },
    {
      question: 'Ի՞նչ է reducer -ը Redux-ում',
      answers: [
        { text: 'Ֆունկցիա, որը կարգավորում է Redux-ի սխալները', correct: false },
        { text: 'Կոմպոնենտ, որը ներկայացնում է նոր տարրեր DOM-ում', correct: false },
        { text: 'Ֆունկցիա, որը մշակում է action -ը և վերադարձնում նոր վիճակ', correct: true }
      ]
    },
    {
      question: 'Redux-ի ո՞ր մեթոդն է օգտագործվում հավելվածի վիճակը թարմացնելու համար',
      answers: [
        { text: 'dispatch()', correct: true },
        { text: 'setState()', correct: false },
        { text: 'updateState()', correct: false }
      ]
    },
  
    {
      question: 'Ի՞նչ օրինաչափություն է օգտագործվում React-ում կոմպոնենտի հերարխիայում տվյալները փոխանցելու համար',
      answers: [
        { text: 'HOC (Higher Order Component)', correct: false },
        { text: 'Redux', correct: false },
        { text: 'Props drilling', correct: true }
      ]
    },
    {
      question: 'Ի՞նչ մեթոդ է օգտագործվում React-ում կոմպոնենտի վիճակը թարմացնելու համար',
      answers: [
        { text: 'this.state()', correct: false },
        { text: 'setState()', correct: true },
        { text: 'updateState()', correct: false }
      ]
    },
   {
      question: 'Ի՞նչ է store Redux-ում',
      answers: [
        { text: 'Օբյեկտ, որը պարունակում է հավելվածի բոլոր վիճակները', correct: false },
        { text: 'Կոմպոնենտ, որը պահպանում է տվյալները հիշողության', correct: false },
        { text: 'Օբյեկտ, որը պարունակում է հավելվածի բոլոր վիճակները', correct: true }
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
        document.title = 'React Redux Online Test: Difficult Level ';
        break;
      case 'ru':
        document.title = 'Онлайн опросы на React и Redux: Сложный уровень ';
        break;
      case 'hy':
        document.title = 'React & Redux Բարդ Մակարդակ';
        break;
      default:
        document.title = 'Online Quiz React & Redux';
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