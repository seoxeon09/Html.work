const questions = [
  { question: '우리학교의 대표색은?', answer: '파란색' },
  {
    question: '광주소마고의 홈페이지를 만든 동아리 이름은? (한글로 입력)',
    answer: '더모먼트',
  },
  {
    question: '나의 전공은 무엇일까? (한글로 입력)',
    answer: '프론트앤드',
  },
  { question: '내가 가장 좋아하는 색은?', answer: '분홍색' },
  { question: '내가 좋아하는 음식은?', answer: '햄버거' },
  {
    question: '제 생일은 언제일까요?',
    answer: '7월 28일',
  },
];

function quizGame() {
  let score = 0;

  for (const q of questions) {
    let userAnswer = prompt(q.question);
    if (userAnswer && userAnswer.trim() === q.answer) {
      alert('Correct!');
      score++;
    } else {
      alert(`땡! 정답은 '${q.answer}' 였어요😎`);
    }
  }

  alert(`퀴즈 끝났어용 당신의 점수는 ${score}/${questions.length} 입니다!`);
}

quizGame();
