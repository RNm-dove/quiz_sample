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
  const isSuccess = true; // ここを書き換えること。
  if(isSuccess){ // 正解の場合
    // quizAnswerShowに正解と表示。
    
    // 次の問題へというボタンを表示。 ヒント: nextButtonからdisplay_hiddenクラスを除去する。調べてみて。
    
  } else {// 不正解の場合
    // quizAnswerShowに不正解と表示
    
    // リトライボタンを表示。 ヒント: retryButtonからdisplay_hiddenクラスを除去する。

  }
}

// 次へボタンをクリックしたあとの動作
nextButton.onclick = () => {
  // currentQuizDataIndexを次に進める。　ヒント: インクリメント。現在の値に+1をする。

  // 問題を再表示
  displayCurrentQuiz();

  // nextButtonを非表示にする。  ヒント: nextButtonにdisplay_hiddenクラスを付与。

  // 入力欄を空欄にする。 inputタグを空にする。 https://web-tsuku.life/input-text-form-clear/

  // 答えの欄を空欄にする。 ヒント: quizAnswerShowに空文字 '' を入力する。

}

// リトライボタンをクリックしたあとの動作
retryButton.onclick = () => {
  // retryButtonを非表示にする。  ヒント: retryButtonにdisplay_hiddenクラスを付与。

  // 入力欄を空欄にする。 inputタグを空にする。 https://web-tsuku.life/input-text-form-clear/

  // 答えの欄を空欄にする。 ヒント: quizAnswerShowに空文字 '' を入力する。v
}


// 初回描画
displayCurrentQuiz();