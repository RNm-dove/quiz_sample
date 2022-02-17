let currentQuizDataIndex = 0; // 注意、変更するのでletで宣言

const QuizData = [
  {
    question: '1. aaa',
    answer: 'aaa!'
  },
  {
    question: '2. bbb',
    answer: 'bbb!'
  },
  {
    question: '3. ccc',
    answer: 'ccc!'
  },
]

// 現在の問題を表示する
const displayCurrentQuiz = () => {
  const quizStatement = document.getElementById('quiz_statement');
  quizStatement.innerHTML = QuizData[currentQuizDataIndex].question;
}

// 一旦全部のタグを先に取得しておく。
const assessmentButton = document.getElementById('assessment');
const quizAnswerInput = document.getElementById('quiz_answer_input');
const nextButton = document.getElementById('next_button');
const retryButton = document.getElementById('retry_button');
const quizAnswerShow = document.getElementById('quiz_answer_show')

// 回答ボタンのクリックしたあとの動作。
assessmentButton.onclick = () => {
  
  const quizAnswerText = quizAnswerInput.value;

  // 何も入力されてなければ何もしない。
  if(quizAnswerText.length === 0){
    return;
  }

  // 回答があっているかチェック。 ヒント: QuizData[currentQuizDataIndex].answerで正解を取得できる。
  const isSuccess = QuizData[currentQuizDataIndex].answer === quizAnswerText; // ここを書き換えること。
  if(isSuccess){
    // 正解の場合、次の問題へというボタンを表示。
    
    quizAnswerShow.innerHTML = "正解！";
    nextButton.classList.remove('display_hidden');
  } else {
    // 不正解の場合、正解を表示して、リトライボタンを表示。
    
    quizAnswerShow.innerHTML = "不正解！";
    retryButton.classList.remove('display_hidden');
  }
}

// 次へボタンをクリックしたあとの動作
nextButton.onclick = () => {
  currentQuizDataIndex = currentQuizDataIndex + 1;
  displayCurrentQuiz();

  nextButton.classList.add('display_hidden');
  quizAnswerInput.value = "";
  quizAnswerShow.innerHTML = "";
}

// リトライボタンをクリックしたあとの動作
retryButton.onclick = () => {
  retryButton.classList.add('display_hidden');
  quizAnswerInput.value = "";
  quizAnswerShow.innerHTML = "";
}


// 初回描画
displayCurrentQuiz();