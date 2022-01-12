export interface QuestionModel {
  id: number;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  question: string;
  status?: string;
}

export class Question {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  status?: string;

  constructor(id: number, question: string, option1: string, option2: string, option3: string, option4: string, answer: string) {
    this.id = id;
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = answer;
  }
}
