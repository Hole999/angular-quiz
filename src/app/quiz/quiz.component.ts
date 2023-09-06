import { Component, OnInit } from '@angular/core';

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: Question[] = [
    {
      text: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctIndex: 2,
    },
    {
      text: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctIndex: 1,
    },
    {
      text: 'How many continents are there?',
      options: ['5', '6', '7', '8'],
      correctIndex: 2,
    },
    {
      text: 'Who wrote "Romeo and Juliet"?',
      options: [
        'William Shakespeare',
        'Leo Tolstoy',
        'Mark Twain',
        'J.K. Rowling',
      ],
      correctIndex: 0,
    },
    {
      text: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correctIndex: 2,
    },
    {
      text: 'What is the tallest mountain in the world?',
      options: ['Mount Kilimanjaro', 'Mount Everest', 'K2', 'Mount McKinley'],
      correctIndex: 1,
    },
    {
      text: 'Which gas do plants absorb from the atmosphere?',
      options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Helium'],
      correctIndex: 2,
    },
    {
      text: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctIndex: 2,
    },
    {
      text: 'How many elements are there in the periodic table?',
      options: ['118', '120', '112', '108'],
      correctIndex: 0,
    },
    {
      text: 'Which animal is known as the king of the jungle?',
      options: ['Elephant', 'Lion', 'Tiger', 'Leopard'],
      correctIndex: 1,
    },
    {
      text: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Australia', 'Japan', 'Mexico'],
      correctIndex: 2,
    },
    {
      text: 'Which element is represented by the symbol "Na"?',
      options: ['Neon', 'Nitrogen', 'Sodium', 'Nickel'],
      correctIndex: 2,
    },
    {
      text: 'Which country invented tea?',
      options: ['China', 'India', 'England', 'Morocco'],
      correctIndex: 0,
    },
    {
      text: 'Who painted the Mona Lisa?',
      options: [
        'Leonardo da Vinci',
        'Pablo Picasso',
        'Vincent van Gogh',
        'Claude Monet',
      ],
      correctIndex: 0,
    },
    {
      text: 'How many stripes are there on the American flag?',
      options: ['11', '12', '13', '14'],
      correctIndex: 2,
    },
    {
      text: 'What is the square root of 121?',
      options: ['10', '11', '12', '13'],
      correctIndex: 1,
    },
    {
      text: 'What is the smallest state in the U.S.?',
      options: ['Delaware', 'Rhode Island', 'Vermont', 'Wyoming'],
      correctIndex: 1,
    },
    {
      text: 'Which country has the most number of islands?',
      options: ['Australia', 'Indonesia', 'Sweden', 'Philippines'],
      correctIndex: 2,
    },
    {
      text: 'Which fruit is known as the king of fruits?',
      options: ['Apple', 'Banana', 'Mango', 'Grapes'],
      correctIndex: 2,
    },
    {
      text: 'What is the largest ocean?',
      options: ['Atlantic', 'Indian', 'Southern', 'Pacific'],
      correctIndex: 3,
    },
  ];

  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  score = 0;

  ngOnInit(): void {}

  nextQuestion(): void {
    if (
      this.selectedOptionIndex ===
      this.questions[this.currentQuestionIndex].correctIndex
    ) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedOptionIndex = null;
  }

  isQuizOver(): boolean {
    return this.currentQuestionIndex >= this.questions.length;
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedOptionIndex = null;
  }
}
