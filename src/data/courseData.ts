import React from "react";
import { Divide, Minus, Plus, X, Clock, Coins, Shapes, Ruler, PieChart, Hash, Repeat, BarChart, Binary, ListOrdered, Zap, Box, Droplets, Thermometer, Columns, MessageSquare } from "lucide-react";

export type Question = {
  id: string;
  text: string;
  type: "multiple-choice" | "input";
  options?: string[];
  answer: string;
  explanation?: string;
  hint?: string;
  image?: string;
};

export type LearnSlide = {
  id: string;
  title: string;
  content: string;
  image?: string;
  hint?: string;
  animation?: "bounce" | "fade" | "slide" | "zoom";
  interactive?: {
    type: "counter" | "sorter" | "matcher" | "numberline" | "choice" | "pattern" | "balance" | "grid" | "clock" | "money" | "ruler" | "slider" | "drag-drop" | "venn";
    data: any;
  };
};

export type Lesson = {
  id: string;
  title: string;
  type: "learn" | "practice" | "quiz";
  content?: React.ReactNode;
  questions?: Question[];
  slides?: LearnSlide[];
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  lessons: Lesson[];
};

const iconMap: Record<string, any> = {
  Hash, Plus, Minus, X, Divide, PieChart, Ruler, Clock, Coins, Shapes, Repeat, BarChart, Binary, ListOrdered, Zap, Box, Droplets, Thermometer, Columns, MessageSquare
};

const rawData = [
  {
    "id": "numbers",
    "title": "Numbers to 1000",
    "description": "Learn to count, read, and write big numbers!",
    "iconName": "Hash",
    "color": "bg-blue-400",
    "lessons": [
      {
        "id": "numbers-learn",
        "title": "Learning Numbers to 1000",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "Welcome to Big Numbers!",
            "content": "Did you know we can count all the way to 1000? It's like having 10 hundreds!",
            "image": "https://picsum.photos/seed/math1/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "counter",
              "data": { "target": 10, "label": "Apples" }
            }
          },
          {
            "id": "s2",
            "title": "Place Value",
            "content": "Every digit has a home! We have Ones, Tens, and now... Hundreds!",
            "image": "https://picsum.photos/seed/math2/400/300",
            "animation": "slide",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "10 Ones", "right": "1 Ten" },
                  { "left": "10 Tens", "right": "1 Hundred" }
                ]
              }
            }
          },
          {
            "id": "s3",
            "title": "Counting by 100s",
            "content": "Let's count together: 100, 200, 300... all the way to 1000!",
            "image": "https://picsum.photos/seed/math3/400/300",
            "animation": "zoom"
          },
          {
            "id": "s4",
            "title": "The Ones Home",
            "content": "The Ones home is for single digits from 0 to 9.",
            "image": "https://picsum.photos/seed/ones/400/300",
            "animation": "fade",
            "interactive": {
              "type": "counter",
              "data": { "target": 9, "label": "Ones" }
            }
          },
          {
            "id": "s5",
            "title": "Moving to Tens",
            "content": "When we get 10 ones, they bundle up and move to the Tens home!",
            "image": "https://picsum.photos/seed/tens/400/300",
            "animation": "slide"
          },
          {
            "id": "s6",
            "title": "The Tens Home",
            "content": "Each Ten is worth 10 ones. 3 Tens = 30!",
            "image": "https://picsum.photos/seed/tens3/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "counter",
              "data": { "target": 5, "label": "Tens" }
            }
          },
          {
            "id": "s7",
            "title": "The Hundreds Home",
            "content": "When we get 10 tens, they move to the Hundreds home!",
            "image": "https://picsum.photos/seed/hundreds/400/300",
            "animation": "zoom"
          },
          {
            "id": "s8",
            "title": "Building 123",
            "content": "123 is 1 Hundred, 2 Tens, and 3 Ones. Match them!",
            "image": "https://picsum.photos/seed/b123/400/300",
            "animation": "slide",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "1 Hundred", "right": "100" },
                  { "left": "2 Tens", "right": "20" },
                  { "left": "3 Ones", "right": "3" }
                ]
              }
            }
          },
          {
            "id": "s9",
            "title": "Zero the Hero",
            "content": "Zero is a placeholder. In 105, there are 0 tens!",
            "image": "https://picsum.photos/seed/zero/400/300",
            "animation": "fade"
          },
          {
            "id": "s10",
            "title": "Reading Numbers",
            "content": "We read 456 as 'Four hundred fifty-six'.",
            "image": "https://picsum.photos/seed/read456/400/300",
            "animation": "bounce"
          },
          {
            "id": "s11",
            "title": "Number Words",
            "content": "Match the numbers to their words!",
            "image": "https://picsum.photos/seed/words/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "200", "right": "Two Hundred" },
                  { "left": "500", "right": "Five Hundred" },
                  { "left": "1000", "right": "One Thousand" }
                ]
              }
            }
          },
          {
            "id": "s12",
            "title": "Comparing Numbers",
            "content": "To compare, look at the Hundreds first. 500 is bigger than 400!",
            "image": "https://picsum.photos/seed/compare/400/300",
            "animation": "slide"
          },
          {
            "id": "s13",
            "title": "Greater Than (>)",
            "content": "The alligator mouth always eats the bigger number! 800 > 200.",
            "image": "https://picsum.photos/seed/alligator/400/300",
            "animation": "bounce"
          },
          {
            "id": "s14",
            "title": "Less Than (<)",
            "content": "The small point points to the smaller number. 100 < 900.",
            "image": "https://picsum.photos/seed/lessthan/400/300",
            "animation": "fade"
          },
          {
            "id": "s15",
            "title": "Number Patterns",
            "content": "What comes next? 100, 200, 300, ...",
            "image": "https://picsum.photos/seed/pattern/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What is the next number in the pattern?",
                "options": [
                  { "label": "400", "isCorrect": true },
                  { "label": "500", "isCorrect": false },
                  { "label": "310", "isCorrect": false },
                  { "label": "1000", "isCorrect": false }
                ]
              }
            }
          },
          {
            "id": "s16",
            "title": "Counting by 10s",
            "content": "Let's count: 410, 420, 430, 440...",
            "image": "https://picsum.photos/seed/count10/400/300",
            "animation": "slide"
          },
          {
            "id": "s17",
            "title": "Before and After",
            "content": "What is 1 more than 999? It's 1000!",
            "image": "https://picsum.photos/seed/after/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "numberline",
              "data": { "start": 995, "end": 1000, "step": 1 }
            }
          },
          {
            "id": "s18",
            "title": "Between Numbers",
            "content": "What is between 500 and 502? It's 501!",
            "image": "https://picsum.photos/seed/between/400/300",
            "animation": "fade"
          },
          {
            "id": "s19",
            "title": "Ordering Numbers",
            "content": "Put them in order from smallest to biggest: 120, 450, 890.",
            "image": "https://picsum.photos/seed/order/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "sorter",
              "data": {
                "items": [
                  { "id": "1", "label": "120", "value": 120 },
                  { "id": "2", "label": "450", "value": 450 },
                  { "id": "3", "label": "890", "value": 890 }
                ]
              }
            }
          },
          {
            "id": "s20",
            "title": "Big Number Challenge",
            "content": "Can you count 10 hundreds to make 1000?",
            "image": "https://picsum.photos/seed/challenge/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "counter",
              "data": { "target": 10, "label": "Hundreds" }
            }
          },
          {
            "id": "s21",
            "title": "You're a Number Star!",
            "content": "You've learned so much about numbers to 1000. Ready to practice?",
            "image": "https://picsum.photos/seed/star/400/300",
            "animation": "zoom"
          }
        ]
      },
      {
        "id": "numbers-1",
        "title": "Numbers to 1000 Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What number comes after 514?",
            "type": "multiple-choice",
            "options": [
              "513",
              "515",
              "524"
            ],
            "answer": "515",
            "explanation": "The number after 514 is 515."
          },
          {
            "id": "q2",
            "text": "Which number is greater: 963 or 475?",
            "type": "multiple-choice",
            "options": [
              "963",
              "475"
            ],
            "answer": "963",
            "explanation": "963 is bigger than 475."
          },
          {
            "id": "q3",
            "text": "What is the value of 1 in 180?",
            "type": "multiple-choice",
            "options": [
              "1",
              "10",
              "100"
            ],
            "answer": "100",
            "explanation": "The 1 is in the hundreds place, so it means 100."
          },
          {
            "id": "q4",
            "text": "What number comes after 685?",
            "type": "multiple-choice",
            "options": [
              "684",
              "686",
              "695"
            ],
            "answer": "686",
            "explanation": "The number after 685 is 686."
          },
          {
            "id": "q5",
            "text": "Which number is greater: 736 or 405?",
            "type": "multiple-choice",
            "options": [
              "736",
              "405"
            ],
            "answer": "736",
            "explanation": "736 is bigger than 405."
          },
          {
            "id": "q6",
            "text": "What is the value of 6 in 646?",
            "type": "multiple-choice",
            "options": [
              "600",
              "60",
              "6"
            ],
            "answer": "600",
            "explanation": "The 6 is in the hundreds place, so it means 600."
          },
          {
            "id": "q7",
            "text": "What number comes after 610?",
            "type": "multiple-choice",
            "options": [
              "620",
              "611",
              "609"
            ],
            "answer": "611",
            "explanation": "The number after 610 is 611."
          },
          {
            "id": "q8",
            "text": "Which number is greater: 176 or 729?",
            "type": "multiple-choice",
            "options": [
              "176",
              "729"
            ],
            "answer": "729",
            "explanation": "729 is bigger than 176."
          },
          {
            "id": "q9",
            "text": "What is the value of 3 in 345?",
            "type": "multiple-choice",
            "options": [
              "300",
              "30",
              "3"
            ],
            "answer": "300",
            "explanation": "The 3 is in the hundreds place, so it means 300."
          },
          {
            "id": "q10",
            "text": "What number comes after 386?",
            "type": "multiple-choice",
            "options": [
              "385",
              "387",
              "396"
            ],
            "answer": "387",
            "explanation": "The number after 386 is 387."
          },
          {
            "id": "q11",
            "text": "Which number is greater: 416 or 813?",
            "type": "multiple-choice",
            "options": [
              "416",
              "813"
            ],
            "answer": "813",
            "explanation": "813 is bigger than 416."
          },
          {
            "id": "q12",
            "text": "What is the value of 3 in 337?",
            "type": "multiple-choice",
            "options": [
              "3",
              "30",
              "300"
            ],
            "answer": "300",
            "explanation": "The 3 is in the hundreds place, so it means 300."
          },
          {
            "id": "q13",
            "text": "What number comes after 553?",
            "type": "multiple-choice",
            "options": [
              "552",
              "554",
              "563"
            ],
            "answer": "554",
            "explanation": "The number after 553 is 554."
          },
          {
            "id": "q14",
            "text": "Which number is greater: 494 or 252?",
            "type": "multiple-choice",
            "options": [
              "494",
              "252"
            ],
            "answer": "494",
            "explanation": "494 is bigger than 252."
          },
          {
            "id": "q15",
            "text": "What is the value of 8 in 827?",
            "type": "multiple-choice",
            "options": [
              "800",
              "80",
              "8"
            ],
            "answer": "800",
            "explanation": "The 8 is in the hundreds place, so it means 800."
          },
          {
            "id": "q16",
            "text": "What number comes after 811?",
            "type": "multiple-choice",
            "options": [
              "812",
              "810",
              "821"
            ],
            "answer": "812",
            "explanation": "The number after 811 is 812."
          },
          {
            "id": "q17",
            "text": "Which number is greater: 417 or 669?",
            "type": "multiple-choice",
            "options": [
              "417",
              "669"
            ],
            "answer": "669",
            "explanation": "669 is bigger than 417."
          },
          {
            "id": "q18",
            "text": "What is the value of 8 in 872?",
            "type": "multiple-choice",
            "options": [
              "8",
              "80",
              "800"
            ],
            "answer": "800",
            "explanation": "The 8 is in the hundreds place, so it means 800."
          },
          {
            "id": "q19",
            "text": "What number comes after 988?",
            "type": "multiple-choice",
            "options": [
              "987",
              "989",
              "998"
            ],
            "answer": "989",
            "explanation": "The number after 988 is 989."
          },
          {
            "id": "q20",
            "text": "Which number is greater: 949 or 110?",
            "type": "multiple-choice",
            "options": [
              "949",
              "110"
            ],
            "answer": "949",
            "explanation": "949 is bigger than 110."
          }
        ]
      }
    ]
  },
  {
    "id": "addition",
    "title": "Addition",
    "description": "Adding numbers together makes them bigger!",
    "iconName": "Plus",
    "color": "bg-green-400",
    "lessons": [
      {
        "id": "addition-learn",
        "title": "Learning Addition",
        "type": "learn",
        "slides": [
          {
            "id": "as1",
            "title": "What is Addition?",
            "content": "Addition is putting things together! 2 apples + 3 apples = 5 apples!",
            "image": "https://picsum.photos/seed/add1/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "counter",
              "data": { "target": 5, "label": "Apples" }
            }
          },
          {
            "id": "as2",
            "title": "The Plus Sign (+)",
            "content": "The '+' sign tells us to add. It's like a bridge connecting numbers!",
            "image": "https://picsum.photos/seed/plus/400/300",
            "animation": "fade"
          },
          {
            "id": "as3",
            "title": "The Equals Sign (=)",
            "content": "The '=' sign shows us the total. 2 + 2 = 4!",
            "image": "https://picsum.photos/seed/equals/400/300",
            "animation": "zoom"
          },
          {
            "id": "as4",
            "title": "Adding 10",
            "content": "Adding 10 is easy! Just increase the Tens digit by 1. 20 + 10 = 30.",
            "image": "https://picsum.photos/seed/add10/400/300",
            "animation": "slide",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 50, "step": 10 }
            }
          },
          {
            "id": "as5",
            "title": "Adding 100",
            "content": "Adding 100 increases the Hundreds digit. 400 + 100 = 500.",
            "image": "https://picsum.photos/seed/add100/400/300",
            "animation": "bounce"
          },
          {
            "id": "as6",
            "title": "No Regrouping",
            "content": "Sometimes we just add the digits. 12 + 15 = 27. Easy peasy!",
            "image": "https://picsum.photos/seed/noregroup/400/300",
            "animation": "fade"
          },
          {
            "id": "as7",
            "title": "Regrouping Intro",
            "content": "When we have more than 9 ones, we carry them over to the Tens home!",
            "image": "https://picsum.photos/seed/add2/400/300",
            "animation": "slide"
          },
          {
            "id": "as8",
            "title": "Making a Ten",
            "content": "Match the pairs that make 10!",
            "image": "https://picsum.photos/seed/make10/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "7 + ?", "right": "3" },
                  { "left": "6 + ?", "right": "4" },
                  { "left": "5 + ?", "right": "5" }
                ]
              }
            }
          },
          {
            "id": "as9",
            "title": "Adding 2-Digits",
            "content": "25 + 18. First add ones: 5+8=13. Keep 3, carry 1 Ten!",
            "image": "https://picsum.photos/seed/add2digit/400/300",
            "animation": "bounce"
          },
          {
            "id": "as10",
            "title": "Adding 3-Digits",
            "content": "123 + 456. Add ones, then tens, then hundreds!",
            "image": "https://picsum.photos/seed/add3digit/400/300",
            "animation": "slide"
          },
          {
            "id": "as11",
            "title": "Commutative Property",
            "content": "3 + 2 is the same as 2 + 3. The order doesn't matter!",
            "image": "https://picsum.photos/seed/orderadd/400/300",
            "animation": "fade",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "10 + 5", "right": "5 + 10" },
                  { "left": "100 + 1", "right": "1 + 100" }
                ]
              }
            }
          },
          {
            "id": "as12",
            "title": "Adding Zero",
            "content": "Adding zero changes nothing! 500 + 0 = 500.",
            "image": "https://picsum.photos/seed/addzero/400/300",
            "animation": "zoom"
          },
          {
            "id": "as13",
            "title": "Doubles!",
            "content": "2+2=4, 5+5=10, 10+10=20. Knowing doubles helps add fast!",
            "image": "https://picsum.photos/seed/doubles/400/300",
            "animation": "bounce"
          },
          {
            "id": "as14",
            "title": "Near Doubles",
            "content": "If 5+5=10, then 5+6 is just 1 more: 11!",
            "image": "https://picsum.photos/seed/neardoubles/400/300",
            "animation": "slide"
          },
          {
            "id": "as15",
            "title": "Making 100",
            "content": "Match the pairs that make 100!",
            "image": "https://picsum.photos/seed/make100/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "90 + ?", "right": "10" },
                  { "left": "50 + ?", "right": "50" },
                  { "left": "25 + ?", "right": "75" }
                ]
              }
            }
          },
          {
            "id": "as16",
            "title": "Word Problem: Toys",
            "content": "Sam has 12 cars. He gets 8 more. How many now? 12 + 8 = 20!",
            "image": "https://picsum.photos/seed/toys/400/300",
            "animation": "bounce"
          },
          {
            "id": "as17",
            "title": "Word Problem: Zoo",
            "content": "There are 5 lions and 7 tigers. How many big cats? 5 + 7 = 12!",
            "image": "https://picsum.photos/seed/zoo/400/300",
            "animation": "fade"
          },
          {
            "id": "as18",
            "title": "Mental Math",
            "content": "To add 9, add 10 and subtract 1. 25 + 9 = 25 + 10 - 1 = 34!",
            "image": "https://picsum.photos/seed/mental/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What is 45 + 9 using our trick?",
                "options": [
                  { "label": "54", "isCorrect": true },
                  { "label": "55", "isCorrect": false },
                  { "label": "53", "isCorrect": false },
                  { "label": "44", "isCorrect": false }
                ]
              }
            }
          },
          {
            "id": "as19",
            "title": "Estimating",
            "content": "28 + 41 is about 30 + 40 = 70. Estimation is a great guess!",
            "image": "https://picsum.photos/seed/estimate/400/300",
            "animation": "slide",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What is 19 + 51 about?",
                "options": [
                  { "label": "70", "isCorrect": true },
                  { "label": "60", "isCorrect": false },
                  { "label": "80", "isCorrect": false },
                  { "label": "50", "isCorrect": false }
                ]
              }
            }
          },
          {
            "id": "as20",
            "title": "Addition Master",
            "content": "You can add anything now! Let's add 10 more apples!",
            "image": "https://picsum.photos/seed/addmaster/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "counter",
              "data": { "target": 10, "label": "Apples" }
            }
          },
          {
            "id": "as21",
            "title": "Great Job!",
            "content": "You are an Addition Superstar! Ready for the practice?",
            "image": "https://picsum.photos/seed/superstar/400/300",
            "animation": "zoom"
          }
        ]
      },
      {
        "id": "addition-1",
        "title": "Addition Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is 28 + 40?",
            "type": "multiple-choice",
            "options": [
              "58",
              "68",
              "78"
            ],
            "answer": "68",
            "explanation": "28 + 40 equals 68."
          },
          {
            "id": "q2",
            "text": "What is 33 + 21?",
            "type": "multiple-choice",
            "options": [
              "54",
              "64",
              "44"
            ],
            "answer": "54",
            "explanation": "33 + 21 equals 54."
          },
          {
            "id": "q3",
            "text": "What is 24 + 47?",
            "type": "multiple-choice",
            "options": [
              "61",
              "71",
              "81"
            ],
            "answer": "71",
            "explanation": "24 + 47 equals 71."
          },
          {
            "id": "q4",
            "text": "What is 52 + 17?",
            "type": "multiple-choice",
            "options": [
              "59",
              "79",
              "69"
            ],
            "answer": "69",
            "explanation": "52 + 17 equals 69."
          },
          {
            "id": "q5",
            "text": "What is 16 + 10?",
            "type": "multiple-choice",
            "options": [
              "16",
              "36",
              "26"
            ],
            "answer": "26",
            "explanation": "16 + 10 equals 26."
          },
          {
            "id": "q6",
            "text": "What is 28 + 14?",
            "type": "multiple-choice",
            "options": [
              "42",
              "52",
              "32"
            ],
            "answer": "42",
            "explanation": "28 + 14 equals 42."
          },
          {
            "id": "q7",
            "text": "What is 57 + 48?",
            "type": "multiple-choice",
            "options": [
              "95",
              "115",
              "105"
            ],
            "answer": "105",
            "explanation": "57 + 48 equals 105."
          },
          {
            "id": "q8",
            "text": "What is 15 + 20?",
            "type": "multiple-choice",
            "options": [
              "25",
              "45",
              "35"
            ],
            "answer": "35",
            "explanation": "15 + 20 equals 35."
          },
          {
            "id": "q9",
            "text": "What is 26 + 24?",
            "type": "multiple-choice",
            "options": [
              "50",
              "60",
              "40"
            ],
            "answer": "50",
            "explanation": "26 + 24 equals 50."
          },
          {
            "id": "q10",
            "text": "What is 42 + 20?",
            "type": "multiple-choice",
            "options": [
              "52",
              "72",
              "62"
            ],
            "answer": "62",
            "explanation": "42 + 20 equals 62."
          },
          {
            "id": "q11",
            "text": "What is 40 + 45?",
            "type": "multiple-choice",
            "options": [
              "85",
              "95",
              "75"
            ],
            "answer": "85",
            "explanation": "40 + 45 equals 85."
          },
          {
            "id": "q12",
            "text": "What is 31 + 33?",
            "type": "multiple-choice",
            "options": [
              "74",
              "64",
              "54"
            ],
            "answer": "64",
            "explanation": "31 + 33 equals 64."
          },
          {
            "id": "q13",
            "text": "What is 30 + 15?",
            "type": "multiple-choice",
            "options": [
              "35",
              "55",
              "45"
            ],
            "answer": "45",
            "explanation": "30 + 15 equals 45."
          },
          {
            "id": "q14",
            "text": "What is 31 + 40?",
            "type": "multiple-choice",
            "options": [
              "71",
              "81",
              "61"
            ],
            "answer": "71",
            "explanation": "31 + 40 equals 71."
          },
          {
            "id": "q15",
            "text": "What is 30 + 46?",
            "type": "multiple-choice",
            "options": [
              "76",
              "86",
              "66"
            ],
            "answer": "76",
            "explanation": "30 + 46 equals 76."
          },
          {
            "id": "q16",
            "text": "What is 57 + 34?",
            "type": "multiple-choice",
            "options": [
              "91",
              "101",
              "81"
            ],
            "answer": "91",
            "explanation": "57 + 34 equals 91."
          },
          {
            "id": "q17",
            "text": "What is 43 + 14?",
            "type": "multiple-choice",
            "options": [
              "57",
              "47",
              "67"
            ],
            "answer": "57",
            "explanation": "43 + 14 equals 57."
          },
          {
            "id": "q18",
            "text": "What is 15 + 19?",
            "type": "multiple-choice",
            "options": [
              "24",
              "44",
              "34"
            ],
            "answer": "34",
            "explanation": "15 + 19 equals 34."
          },
          {
            "id": "q19",
            "text": "What is 37 + 30?",
            "type": "multiple-choice",
            "options": [
              "67",
              "77",
              "57"
            ],
            "answer": "67",
            "explanation": "37 + 30 equals 67."
          },
          {
            "id": "q20",
            "text": "What is 57 + 21?",
            "type": "multiple-choice",
            "options": [
              "88",
              "68",
              "78"
            ],
            "answer": "78",
            "explanation": "57 + 21 equals 78."
          }
        ]
      }
    ]
  },
  {
    "id": "subtraction",
    "title": "Subtraction",
    "description": "Taking away numbers!",
    "iconName": "Minus",
    "color": "bg-red-400",
    "lessons": [
      {
        "id": "subtraction-learn",
        "title": "Learning Subtraction",
        "type": "learn",
        "slides": [
          {
            "id": "ss1",
            "title": "Taking Away!",
            "content": "Subtraction is taking things away. 5 cookies - 2 cookies = 3 cookies left!",
            "image": "https://picsum.photos/seed/sub1/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "counter",
              "data": { "target": 5, "label": "Cookies" }
            }
          },
          {
            "id": "ss2",
            "title": "The Minus Sign (-)",
            "content": "The '-' sign tells us to take away. It's like a magician making things disappear!",
            "image": "https://picsum.photos/seed/minus/400/300",
            "animation": "fade"
          },
          {
            "id": "ss3",
            "title": "Counting Back",
            "content": "We can count back to subtract. 10, 9, 8... 10 - 2 = 8!",
            "image": "https://picsum.photos/seed/countback/400/300",
            "animation": "slide",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 10, "step": 1 }
            }
          },
          {
            "id": "ss4",
            "title": "Subtracting 1",
            "content": "Subtracting 1 is just the number before! 100 - 1 = 99.",
            "image": "https://picsum.photos/seed/sub1/400/300",
            "animation": "bounce"
          },
          {
            "id": "ss5",
            "title": "Subtracting 10",
            "content": "Subtracting 10 is easy! Just decrease the Tens digit. 50 - 10 = 40.",
            "image": "https://picsum.photos/seed/sub10/400/300",
            "animation": "slide",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 100, "step": 10 }
            }
          },
          {
            "id": "ss6",
            "title": "Subtracting 100",
            "content": "Subtracting 100 decreases the Hundreds digit. 800 - 100 = 700.",
            "image": "https://picsum.photos/seed/sub100/400/300",
            "animation": "zoom"
          },
          {
            "id": "ss7",
            "title": "No Borrowing",
            "content": "Sometimes we just subtract the digits. 25 - 12 = 13. Simple!",
            "image": "https://picsum.photos/seed/noborrow/400/300",
            "animation": "fade"
          },
          {
            "id": "ss8",
            "title": "Borrowing Intro",
            "content": "If we don't have enough ones, we can borrow from the Tens home!",
            "image": "https://picsum.photos/seed/sub2/400/300",
            "animation": "slide"
          },
          {
            "id": "ss9",
            "title": "Trading a Ten",
            "content": "1 Ten = 10 Ones. We trade a Ten to get more Ones!",
            "image": "https://picsum.photos/seed/trade/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "1 Ten", "right": "10 Ones" },
                  { "left": "2 Tens", "right": "20 Ones" }
                ]
              }
            }
          },
          {
            "id": "ss10",
            "title": "Subtracting 2-Digits",
            "content": "42 - 15. Can't do 2-5, so borrow! 12-5=7, 3-1=2. Answer: 27!",
            "image": "https://picsum.photos/seed/sub2digit/400/300",
            "animation": "slide"
          },
          {
            "id": "ss11",
            "title": "Subtracting 3-Digits",
            "content": "987 - 123. Subtract ones, then tens, then hundreds!",
            "image": "https://picsum.photos/seed/sub3digit/400/300",
            "animation": "zoom"
          },
          {
            "id": "ss12",
            "title": "Subtracting Zero",
            "content": "Subtracting zero changes nothing! 100 - 0 = 100.",
            "image": "https://picsum.photos/seed/subzero/400/300",
            "animation": "fade"
          },
          {
            "id": "ss13",
            "title": "Subtracting the Same Number",
            "content": "If you have 5 and take 5, you have 0! 5 - 5 = 0.",
            "image": "https://picsum.photos/seed/subsame/400/300",
            "animation": "bounce"
          },
          {
            "id": "ss14",
            "title": "Fact Families",
            "content": "If 5 + 2 = 7, then 7 - 2 = 5! They are family!",
            "image": "https://picsum.photos/seed/family/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "10 - 3", "right": "7" },
                  { "left": "7 + 3", "right": "10" }
                ]
              }
            }
          },
          {
            "id": "ss15",
            "title": "Checking with Addition",
            "content": "To check 10 - 4 = 6, just add 6 + 4. If it's 10, you're right!",
            "image": "https://picsum.photos/seed/check/400/300",
            "animation": "slide"
          },
          {
            "id": "ss16",
            "title": "Word Problem: Birds",
            "content": "15 birds on a tree. 7 fly away. How many left? 15 - 7 = 8!",
            "image": "https://picsum.photos/seed/birds/400/300",
            "animation": "bounce"
          },
          {
            "id": "ss17",
            "title": "Word Problem: Candy",
            "content": "You have 20 candies. You eat 5. How many now? 20 - 5 = 15!",
            "image": "https://picsum.photos/seed/candy/400/300",
            "animation": "fade",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What is 20 - 5?",
                "options": [
                  { "label": "15", "isCorrect": true },
                  { "label": "10", "isCorrect": false },
                  { "label": "25", "isCorrect": false }
                ]
              }
            }
          },
          {
            "id": "ss18",
            "title": "Mental Math: Subtracting 9",
            "content": "To subtract 9, subtract 10 and add 1. 25 - 9 = 25 - 10 + 1 = 16!",
            "image": "https://picsum.photos/seed/mental/400/300",
            "animation": "zoom"
          },
          {
            "id": "ss19",
            "title": "Sorting Differences",
            "content": "Sort these from smallest to biggest difference!",
            "image": "https://picsum.photos/seed/sortsub/400/300",
            "animation": "slide",
            "interactive": {
              "type": "sorter",
              "data": {
                "items": [
                  { "id": "1", "label": "10-8", "value": 2 },
                  { "id": "2", "label": "10-5", "value": 5 },
                  { "id": "3", "label": "10-1", "value": 9 }
                ]
              }
            }
          },
          {
            "id": "ss20",
            "title": "Subtraction Master",
            "content": "You can take away anything now! Let's take away 3 cookies!",
            "image": "https://picsum.photos/seed/submaster/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "counter",
              "data": { "target": 3, "label": "Cookies" }
            }
          },
          {
            "id": "ss21",
            "title": "Amazing Job!",
            "content": "You are a Subtraction Hero! Ready to practice?",
            "image": "https://picsum.photos/seed/hero/400/300",
            "animation": "zoom"
          },
          {
            "id": "ss22",
            "title": "Subtraction Patterns",
            "content": "What comes next? 10, 8, 6, ...",
            "image": "https://picsum.photos/seed/subpattern/400/300",
            "animation": "slide",
            "interactive": {
              "type": "pattern",
              "data": {
                "sequence": ["10", "8", "6"],
                "options": ["4", "5", "2"],
                "answer": "4"
              }
            }
          },
          {
            "id": "ss23",
            "title": "Subtraction Balance",
            "content": "Make both sides equal to 5!",
            "image": "https://picsum.photos/seed/subbalance/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "balance",
              "data": { "left": 0, "right": 5, "label": "Weights" }
            }
          }
        ]
      },
      {
        "id": "subtraction-1",
        "title": "Subtraction Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is 73 - 11?",
            "type": "multiple-choice",
            "options": [
              "52",
              "72",
              "62"
            ],
            "answer": "62",
            "explanation": "73 minus 11 equals 62."
          },
          {
            "id": "q2",
            "text": "What is 85 - 44?",
            "type": "multiple-choice",
            "options": [
              "41",
              "51",
              "31"
            ],
            "answer": "41",
            "explanation": "85 minus 44 equals 41."
          },
          {
            "id": "q3",
            "text": "What is 53 - 10?",
            "type": "multiple-choice",
            "options": [
              "43",
              "53",
              "33"
            ],
            "answer": "43",
            "explanation": "53 minus 10 equals 43."
          },
          {
            "id": "q4",
            "text": "What is 72 - 19?",
            "type": "multiple-choice",
            "options": [
              "43",
              "63",
              "53"
            ],
            "answer": "53",
            "explanation": "72 minus 19 equals 53."
          },
          {
            "id": "q5",
            "text": "What is 84 - 19?",
            "type": "multiple-choice",
            "options": [
              "65",
              "75",
              "55"
            ],
            "answer": "65",
            "explanation": "84 minus 19 equals 65."
          },
          {
            "id": "q6",
            "text": "What is 71 - 43?",
            "type": "multiple-choice",
            "options": [
              "28",
              "38",
              "18"
            ],
            "answer": "28",
            "explanation": "71 minus 43 equals 28."
          },
          {
            "id": "q7",
            "text": "What is 58 - 43?",
            "type": "multiple-choice",
            "options": [
              "15",
              "25",
              "5"
            ],
            "answer": "15",
            "explanation": "58 minus 43 equals 15."
          },
          {
            "id": "q8",
            "text": "What is 89 - 28?",
            "type": "multiple-choice",
            "options": [
              "61",
              "71",
              "51"
            ],
            "answer": "61",
            "explanation": "89 minus 28 equals 61."
          },
          {
            "id": "q9",
            "text": "What is 63 - 21?",
            "type": "multiple-choice",
            "options": [
              "32",
              "42",
              "52"
            ],
            "answer": "42",
            "explanation": "63 minus 21 equals 42."
          },
          {
            "id": "q10",
            "text": "What is 80 - 34?",
            "type": "multiple-choice",
            "options": [
              "46",
              "56",
              "36"
            ],
            "answer": "46",
            "explanation": "80 minus 34 equals 46."
          },
          {
            "id": "q11",
            "text": "What is 56 - 39?",
            "type": "multiple-choice",
            "options": [
              "17",
              "27",
              "7"
            ],
            "answer": "17",
            "explanation": "56 minus 39 equals 17."
          },
          {
            "id": "q12",
            "text": "What is 88 - 45?",
            "type": "multiple-choice",
            "options": [
              "53",
              "43",
              "33"
            ],
            "answer": "43",
            "explanation": "88 minus 45 equals 43."
          },
          {
            "id": "q13",
            "text": "What is 58 - 12?",
            "type": "multiple-choice",
            "options": [
              "46",
              "56",
              "36"
            ],
            "answer": "46",
            "explanation": "58 minus 12 equals 46."
          },
          {
            "id": "q14",
            "text": "What is 70 - 21?",
            "type": "multiple-choice",
            "options": [
              "49",
              "59",
              "39"
            ],
            "answer": "49",
            "explanation": "70 minus 21 equals 49."
          },
          {
            "id": "q15",
            "text": "What is 92 - 14?",
            "type": "multiple-choice",
            "options": [
              "78",
              "88",
              "68"
            ],
            "answer": "78",
            "explanation": "92 minus 14 equals 78."
          },
          {
            "id": "q16",
            "text": "What is 92 - 10?",
            "type": "multiple-choice",
            "options": [
              "82",
              "92",
              "72"
            ],
            "answer": "82",
            "explanation": "92 minus 10 equals 82."
          },
          {
            "id": "q17",
            "text": "What is 57 - 26?",
            "type": "multiple-choice",
            "options": [
              "31",
              "41",
              "21"
            ],
            "answer": "31",
            "explanation": "57 minus 26 equals 31."
          },
          {
            "id": "q18",
            "text": "What is 53 - 39?",
            "type": "multiple-choice",
            "options": [
              "4",
              "24",
              "14"
            ],
            "answer": "14",
            "explanation": "53 minus 39 equals 14."
          },
          {
            "id": "q19",
            "text": "What is 87 - 21?",
            "type": "multiple-choice",
            "options": [
              "76",
              "56",
              "66"
            ],
            "answer": "66",
            "explanation": "87 minus 21 equals 66."
          },
          {
            "id": "q20",
            "text": "What is 54 - 13?",
            "type": "multiple-choice",
            "options": [
              "41",
              "51",
              "31"
            ],
            "answer": "41",
            "explanation": "54 minus 13 equals 41."
          }
        ]
      }
    ]
  },
  {
    "id": "multiplication",
    "title": "Multiplication",
    "description": "Fast adding! Learn your times tables.",
    "iconName": "X",
    "color": "bg-yellow-400",
    "lessons": [
      {
        "id": "multiplication-learn",
        "title": "Learning Multiplication",
        "type": "learn",
        "slides": [
          {
            "id": "ms1",
            "title": "Fast Adding!",
            "content": "Multiplication is just fast adding. 2 x 3 means 3 + 3. It's 6!",
            "image": "https://picsum.photos/seed/mult1/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "counter",
              "data": { "target": 6, "label": "Stars" }
            }
          },
          {
            "id": "ms2",
            "title": "Groups Of",
            "content": "Think of 'x' as 'groups of'. 3 x 2 means 3 groups of 2.",
            "image": "https://picsum.photos/seed/groups/400/300",
            "animation": "fade"
          },
          {
            "id": "ms3",
            "title": "The Times Table of 2",
            "content": "Counting by 2s is the 2 times table! 2, 4, 6, 8, 10...",
            "image": "https://picsum.photos/seed/table2/400/300",
            "animation": "slide",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 20, "step": 2 }
            }
          },
          {
            "id": "ms4",
            "title": "Multiplying by 5",
            "content": "Multiplying by 5 is like counting your fingers! 5, 10, 15, 20...",
            "image": "https://picsum.photos/seed/table5/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 50, "step": 5 }
            }
          },
          {
            "id": "ms5",
            "title": "Multiplying by 10",
            "content": "Just add a zero! 5 x 10 = 50. 8 x 10 = 80. So easy!",
            "image": "https://picsum.photos/seed/table10/400/300",
            "animation": "zoom"
          },
          {
            "id": "ms6",
            "title": "Multiplying by 0",
            "content": "Anything times zero is ZERO! 1,000,000 x 0 = 0.",
            "image": "https://picsum.photos/seed/multzero/400/300",
            "animation": "fade"
          },
          {
            "id": "ms7",
            "title": "Multiplying by 1",
            "content": "Anything times one stays the same! 5 x 1 = 5.",
            "image": "https://picsum.photos/seed/multone/400/300",
            "animation": "bounce"
          },
          {
            "id": "ms8",
            "title": "Arrays",
            "content": "We can use dots in rows and columns to multiply. 3 rows of 4 = 12!",
            "image": "https://picsum.photos/seed/array/400/300",
            "animation": "slide"
          },
          {
            "id": "ms9",
            "title": "Match the Product",
            "content": "Match the multiplication to its answer!",
            "image": "https://picsum.photos/seed/matchmult/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "2 x 5", "right": "10" },
                  { "left": "3 x 3", "right": "9" },
                  { "left": "4 x 2", "right": "8" }
                ]
              }
            }
          },
          {
            "id": "ms10",
            "title": "Commutative Property",
            "content": "2 x 3 is the same as 3 x 2. Both are 6!",
            "image": "https://picsum.photos/seed/commute/400/300",
            "animation": "fade"
          },
          {
            "id": "ms11",
            "title": "Doubles are x2",
            "content": "If you know your doubles, you know your 2 times table!",
            "image": "https://picsum.photos/seed/doublesmult/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "5 + 5", "right": "2 x 5" },
                  { "left": "10 + 10", "right": "2 x 10" }
                ]
              }
            }
          },
          {
            "id": "ms12",
            "title": "The 3 Times Table",
            "content": "3, 6, 9, 12, 15... Keep adding 3!",
            "image": "https://picsum.photos/seed/table3/400/300",
            "animation": "slide",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 30, "step": 3 }
            }
          },
          {
            "id": "ms13",
            "title": "The 4 Times Table",
            "content": "4, 8, 12, 16, 20... It's double the 2s!",
            "image": "https://picsum.photos/seed/table4/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 40, "step": 4 }
            }
          },
          {
            "id": "ms14",
            "title": "Word Problem: Wheels",
            "content": "A car has 4 wheels. How many wheels on 3 cars? 4 x 3 = 12!",
            "image": "https://picsum.photos/seed/wheels/400/300",
            "animation": "bounce"
          },
          {
            "id": "ms15",
            "title": "Word Problem: Legs",
            "content": "A spider has 8 legs. How many legs on 2 spiders? 8 x 2 = 16!",
            "image": "https://picsum.photos/seed/spider/400/300",
            "animation": "fade",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "How many legs on 2 spiders?",
                "options": [
                  { "label": "16", "isCorrect": true },
                  { "label": "10", "isCorrect": false },
                  { "label": "8", "isCorrect": false }
                ]
              }
            }
          },
          {
            "id": "ms16",
            "title": "The 9 Times Table Trick",
            "content": "Use your fingers! Fold down the finger you are multiplying by.",
            "image": "https://picsum.photos/seed/finger9/400/300",
            "animation": "zoom"
          },
          {
            "id": "ms17",
            "title": "Multiplying 2-Digits",
            "content": "12 x 3. Multiply 2x3=6, then 1x3=3. Answer: 36!",
            "image": "https://picsum.photos/seed/mult2digit/400/300",
            "animation": "slide"
          },
          {
            "id": "ms18",
            "title": "Sorting Products",
            "content": "Sort these from smallest to biggest product!",
            "image": "https://picsum.photos/seed/sortmult/400/300",
            "animation": "bounce",
            "interactive": {
              "type": "sorter",
              "data": {
                "items": [
                  { "id": "1", "label": "2 x 2", "value": 4 },
                  { "id": "2", "label": "3 x 3", "value": 9 },
                  { "id": "3", "label": "4 x 4", "value": 16 }
                ]
              }
            }
          },
          {
            "id": "ms19",
            "title": "Multiplication Master",
            "content": "You are getting fast! Let's count 12 stars!",
            "image": "https://picsum.photos/seed/multmaster/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "counter",
              "data": { "target": 12, "label": "Stars" }
            }
          },
          {
            "id": "ms20",
            "title": "Challenge Question",
            "content": "Can you solve this one?",
            "image": "https://picsum.photos/seed/challenge/400/300",
            "animation": "fade",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What is 5 x 6?",
                "options": [
                  { "label": "30", "isCorrect": true },
                  { "label": "25", "isCorrect": false },
                  { "label": "35", "isCorrect": false }
                ]
              }
            }
          },
          {
            "id": "ms21",
            "title": "Multiplication Pro!",
            "content": "You finished the lesson! Ready to show off your skills?",
            "image": "https://picsum.photos/seed/pro/400/300",
            "animation": "bounce"
          },
          {
            "id": "ms22",
            "title": "Building Arrays",
            "content": "Fill the grid to make a 3 x 4 rectangle!",
            "image": "https://picsum.photos/seed/gridmult/400/300",
            "animation": "zoom",
            "interactive": {
              "type": "grid",
              "data": { "rows": 4, "cols": 5, "target": 12 }
            }
          },
          {
            "id": "ms23",
            "title": "Multiplication Balance",
            "content": "Balance the scale to 20!",
            "image": "https://picsum.photos/seed/multbalance/400/300",
            "animation": "fade",
            "interactive": {
              "type": "balance",
              "data": { "left": 0, "right": 20, "label": "Points" }
            }
          }
        ]
      },
      {
        "id": "multiplication-1",
        "title": "Multiplication Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is 2 x 6?",
            "type": "multiple-choice",
            "options": [
              "12",
              "14",
              "10"
            ],
            "answer": "12",
            "explanation": "2 groups of 6 makes 12."
          },
          {
            "id": "q2",
            "text": "What is 3 x 10?",
            "type": "multiple-choice",
            "options": [
              "27",
              "30",
              "33"
            ],
            "answer": "30",
            "explanation": "3 groups of 10 makes 30."
          },
          {
            "id": "q3",
            "text": "What is 10 x 10?",
            "type": "multiple-choice",
            "options": [
              "110",
              "100",
              "90"
            ],
            "answer": "100",
            "explanation": "10 groups of 10 makes 100."
          },
          {
            "id": "q4",
            "text": "What is 4 x 4?",
            "type": "multiple-choice",
            "options": [
              "12",
              "16",
              "20"
            ],
            "answer": "16",
            "explanation": "4 groups of 4 makes 16."
          },
          {
            "id": "q5",
            "text": "What is 3 x 2?",
            "type": "multiple-choice",
            "options": [
              "3",
              "9",
              "6"
            ],
            "answer": "6",
            "explanation": "3 groups of 2 makes 6."
          },
          {
            "id": "q6",
            "text": "What is 4 x 7?",
            "type": "multiple-choice",
            "options": [
              "28",
              "24",
              "32"
            ],
            "answer": "28",
            "explanation": "4 groups of 7 makes 28."
          },
          {
            "id": "q7",
            "text": "What is 2 x 8?",
            "type": "multiple-choice",
            "options": [
              "18",
              "16",
              "14"
            ],
            "answer": "16",
            "explanation": "2 groups of 8 makes 16."
          },
          {
            "id": "q8",
            "text": "What is 5 x 10?",
            "type": "multiple-choice",
            "options": [
              "55",
              "50",
              "45"
            ],
            "answer": "50",
            "explanation": "5 groups of 10 makes 50."
          },
          {
            "id": "q9",
            "text": "What is 5 x 1?",
            "type": "multiple-choice",
            "options": [
              "5",
              "10",
              "41"
            ],
            "answer": "5",
            "explanation": "5 groups of 1 makes 5."
          },
          {
            "id": "q10",
            "text": "What is 5 x 10?",
            "type": "multiple-choice",
            "options": [
              "45",
              "50",
              "55"
            ],
            "answer": "50",
            "explanation": "5 groups of 10 makes 50."
          },
          {
            "id": "q11",
            "text": "What is 5 x 9?",
            "type": "multiple-choice",
            "options": [
              "40",
              "50",
              "45"
            ],
            "answer": "45",
            "explanation": "5 groups of 9 makes 45."
          },
          {
            "id": "q12",
            "text": "What is 10 x 7?",
            "type": "multiple-choice",
            "options": [
              "70",
              "80",
              "60"
            ],
            "answer": "70",
            "explanation": "10 groups of 7 makes 70."
          },
          {
            "id": "q13",
            "text": "What is 5 x 8?",
            "type": "multiple-choice",
            "options": [
              "40",
              "35",
              "45"
            ],
            "answer": "40",
            "explanation": "5 groups of 8 makes 40."
          },
          {
            "id": "q14",
            "text": "What is 2 x 1?",
            "type": "multiple-choice",
            "options": [
              "4",
              "2",
              "23"
            ],
            "answer": "2",
            "explanation": "2 groups of 1 makes 2."
          },
          {
            "id": "q15",
            "text": "What is 3 x 1?",
            "type": "multiple-choice",
            "options": [
              "3",
              "6",
              "29"
            ],
            "answer": "3",
            "explanation": "3 groups of 1 makes 3."
          },
          {
            "id": "q16",
            "text": "What is 10 x 5?",
            "type": "multiple-choice",
            "options": [
              "60",
              "50",
              "40"
            ],
            "answer": "50",
            "explanation": "10 groups of 5 makes 50."
          },
          {
            "id": "q17",
            "text": "What is 5 x 6?",
            "type": "multiple-choice",
            "options": [
              "30",
              "35",
              "25"
            ],
            "answer": "30",
            "explanation": "5 groups of 6 makes 30."
          },
          {
            "id": "q18",
            "text": "What is 3 x 6?",
            "type": "multiple-choice",
            "options": [
              "15",
              "18",
              "21"
            ],
            "answer": "18",
            "explanation": "3 groups of 6 makes 18."
          },
          {
            "id": "q19",
            "text": "What is 3 x 2?",
            "type": "multiple-choice",
            "options": [
              "6",
              "9",
              "3"
            ],
            "answer": "6",
            "explanation": "3 groups of 2 makes 6."
          },
          {
            "id": "q20",
            "text": "What is 4 x 3?",
            "type": "multiple-choice",
            "options": [
              "12",
              "16",
              "8"
            ],
            "answer": "12",
            "explanation": "4 groups of 3 makes 12."
          }
        ]
      }
    ]
  },
  {
    "id": "division",
    "title": "Division",
    "description": "Sharing things equally.",
    "iconName": "Divide",
    "color": "bg-purple-400",
    "lessons": [
      {
        "id": "division-learn",
        "title": "Learn Division",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "What is Division?",
            "content": "Division is sharing things equally into groups. It's like the opposite of multiplication!",
            "image": "https://picsum.photos/seed/share/400/300"
          },
          {
            "id": "s2",
            "title": "Sharing Cookies",
            "content": "If you have 6 cookies and want to share them with 2 friends, how many does each get?",
            "interactive": {
              "type": "counter",
              "target": 3,
              "label": "Cookies per friend"
            }
          },
          {
            "id": "s3",
            "title": "Equal Groups",
            "content": "Division means making sure every group has the SAME amount.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "6 ÷ 2", "right": "3" },
                { "id": "p2", "left": "8 ÷ 2", "right": "4" },
                { "id": "p3", "left": "10 ÷ 2", "right": "5" }
              ]
            }
          },
          {
            "id": "s4",
            "title": "The Division Sign",
            "content": "We use the symbol ÷ to show division. 12 ÷ 3 = 4 means 12 shared into 3 groups is 4.",
            "interactive": {
              "type": "choice",
              "question": "Which symbol is for division?",
              "options": ["+", "-", "÷", "×"],
              "answer": "÷"
            }
          },
          {
            "id": "s5",
            "title": "Sorting into Groups",
            "content": "Sort these numbers into those that can be divided by 2 without leftovers (Even numbers).",
            "interactive": {
              "type": "sorter",
              "categories": ["Even", "Odd"],
              "items": [
                { "id": "i1", "text": "2", "category": "Even" },
                { "id": "i2", "text": "5", "category": "Odd" },
                { "id": "i3", "text": "8", "category": "Even" },
                { "id": "i4", "text": "9", "category": "Odd" }
              ]
            }
          },
          {
            "id": "s6",
            "title": "Division on a Number Line",
            "content": "To solve 10 ÷ 2, we can jump backwards by 2s from 10. How many jumps to reach 0?",
            "interactive": {
              "type": "number-line",
              "target": 5,
              "range": [0, 10],
              "step": 2
            }
          },
          {
            "id": "s7",
            "title": "Arrays and Division",
            "content": "Look at this grid. If we have 12 dots in 3 rows, how many are in each row?",
            "interactive": {
              "type": "grid",
              "rows": 3,
              "cols": 4,
              "target": 4
            }
          },
          {
            "id": "s8",
            "title": "Balancing the Equation",
            "content": "Make both sides equal! 10 ÷ 2 is the same as what?",
            "interactive": {
              "type": "balance",
              "left": 5,
              "right": 5,
              "options": [3, 4, 5, 6]
            }
          },
          {
            "id": "s9",
            "title": "Division Patterns",
            "content": "Complete the pattern: 20, 15, 10, ... (Counting back by 5s is like dividing!)",
            "interactive": {
              "type": "pattern",
              "sequence": [20, 15, 10],
              "answer": 5
            }
          },
          {
            "id": "s10",
            "title": "Dividing by 1",
            "content": "Any number divided by 1 stays the same! 5 ÷ 1 = 5.",
            "interactive": {
              "type": "choice",
              "question": "What is 100 ÷ 1?",
              "options": ["1", "10", "100"],
              "answer": "100"
            }
          },
          {
            "id": "s11",
            "title": "Dividing by Itself",
            "content": "Any number divided by itself is 1. 8 ÷ 8 = 1.",
            "interactive": {
              "type": "choice",
              "question": "What is 50 ÷ 50?",
              "options": ["0", "1", "50"],
              "answer": "1"
            }
          },
          {
            "id": "s12",
            "title": "Sharing 20",
            "content": "Share 20 candies among 4 kids. How many does each kid get?",
            "interactive": {
              "type": "counter",
              "target": 5,
              "label": "Candies per kid"
            }
          },
          {
            "id": "s13",
            "title": "Division Match",
            "content": "Match the division problem to its answer.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "15 ÷ 3", "right": "5" },
                { "id": "p2", "left": "18 ÷ 2", "right": "9" },
                { "id": "p3", "left": "20 ÷ 5", "right": "4" }
              ]
            }
          },
          {
            "id": "s14",
            "title": "Number Line Jumps",
            "content": "Solve 12 ÷ 4 using the number line. Jump back by 4s.",
            "interactive": {
              "type": "number-line",
              "target": 3,
              "range": [0, 12],
              "step": 4
            }
          },
          {
            "id": "s15",
            "title": "Sorting Dividends",
            "content": "Sort these into 'Divisible by 5' or 'Not Divisible by 5'.",
            "interactive": {
              "type": "sorter",
              "categories": ["By 5", "Not"],
              "items": [
                { "id": "i1", "text": "10", "category": "By 5" },
                { "id": "i2", "text": "12", "category": "Not" },
                { "id": "i3", "text": "25", "category": "By 5" },
                { "id": "i4", "text": "7", "category": "Not" }
              ]
            }
          },
          {
            "id": "s16",
            "title": "Grid Sharing",
            "content": "We have 15 stars. If we put them in 5 columns, how many rows will we have?",
            "interactive": {
              "type": "grid",
              "rows": 3,
              "cols": 5,
              "target": 3
            }
          },
          {
            "id": "s17",
            "title": "Balance the Division",
            "content": "16 ÷ 4 = ?",
            "interactive": {
              "type": "balance",
              "left": 4,
              "right": 4,
              "options": [2, 4, 8]
            }
          },
          {
            "id": "s18",
            "title": "Pattern of 2s",
            "content": "10, 8, 6, 4, ...",
            "interactive": {
              "type": "pattern",
              "sequence": [10, 8, 6, 4],
              "answer": 2
            }
          },
          {
            "id": "s19",
            "title": "Word Problem",
            "content": "There are 24 legs in a room. If each dog has 4 legs, how many dogs are there?",
            "interactive": {
              "type": "choice",
              "question": "How many dogs?",
              "options": ["4", "6", "8"],
              "answer": "6"
            }
          },
          {
            "id": "s20",
            "title": "Sharing 30",
            "content": "Share 30 marbles into 3 bags.",
            "interactive": {
              "type": "counter",
              "target": 10,
              "label": "Marbles per bag"
            }
          },
          {
            "id": "s21",
            "title": "Great Job!",
            "content": "You've learned the basics of division! Ready to practice?",
            "image": "https://picsum.photos/seed/celebrate/400/300"
          }
        ]
      },
      {
        "id": "division-1",
        "title": "Division Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is 12 ÷ 4?",
            "type": "multiple-choice",
            "options": [
              "3",
              "2",
              "4"
            ],
            "answer": "3",
            "explanation": "If you share 12 into 4 equal groups, each group gets 3."
          },
          {
            "id": "q2",
            "text": "What is 16 ÷ 2?",
            "type": "multiple-choice",
            "options": [
              "8",
              "7",
              "9"
            ],
            "answer": "8",
            "explanation": "If you share 16 into 2 equal groups, each group gets 8."
          },
          {
            "id": "q3",
            "text": "What is 30 ÷ 10?",
            "type": "multiple-choice",
            "options": [
              "3",
              "4",
              "2"
            ],
            "answer": "3",
            "explanation": "If you share 30 into 10 equal groups, each group gets 3."
          },
          {
            "id": "q4",
            "text": "What is 8 ÷ 2?",
            "type": "multiple-choice",
            "options": [
              "3",
              "5",
              "4"
            ],
            "answer": "4",
            "explanation": "If you share 8 into 2 equal groups, each group gets 4."
          },
          {
            "id": "q5",
            "text": "What is 40 ÷ 4?",
            "type": "multiple-choice",
            "options": [
              "10",
              "11",
              "9"
            ],
            "answer": "10",
            "explanation": "If you share 40 into 4 equal groups, each group gets 10."
          },
          {
            "id": "q6",
            "text": "What is 25 ÷ 5?",
            "type": "multiple-choice",
            "options": [
              "4",
              "5",
              "6"
            ],
            "answer": "5",
            "explanation": "If you share 25 into 5 equal groups, each group gets 5."
          },
          {
            "id": "q7",
            "text": "What is 5 ÷ 5?",
            "type": "multiple-choice",
            "options": [
              "1",
              "2",
              "7"
            ],
            "answer": "1",
            "explanation": "If you share 5 into 5 equal groups, each group gets 1."
          },
          {
            "id": "q8",
            "text": "What is 70 ÷ 10?",
            "type": "multiple-choice",
            "options": [
              "6",
              "8",
              "7"
            ],
            "answer": "7",
            "explanation": "If you share 70 into 10 equal groups, each group gets 7."
          },
          {
            "id": "q9",
            "text": "What is 12 ÷ 2?",
            "type": "multiple-choice",
            "options": [
              "7",
              "6",
              "5"
            ],
            "answer": "6",
            "explanation": "If you share 12 into 2 equal groups, each group gets 6."
          },
          {
            "id": "q10",
            "text": "What is 40 ÷ 5?",
            "type": "multiple-choice",
            "options": [
              "8",
              "7",
              "9"
            ],
            "answer": "8",
            "explanation": "If you share 40 into 5 equal groups, each group gets 8."
          },
          {
            "id": "q11",
            "text": "What is 10 ÷ 5?",
            "type": "multiple-choice",
            "options": [
              "1",
              "3",
              "2"
            ],
            "answer": "2",
            "explanation": "If you share 10 into 5 equal groups, each group gets 2."
          },
          {
            "id": "q12",
            "text": "What is 30 ÷ 3?",
            "type": "multiple-choice",
            "options": [
              "11",
              "10",
              "9"
            ],
            "answer": "10",
            "explanation": "If you share 30 into 3 equal groups, each group gets 10."
          },
          {
            "id": "q13",
            "text": "What is 28 ÷ 4?",
            "type": "multiple-choice",
            "options": [
              "6",
              "7",
              "8"
            ],
            "answer": "7",
            "explanation": "If you share 28 into 4 equal groups, each group gets 7."
          },
          {
            "id": "q14",
            "text": "What is 16 ÷ 4?",
            "type": "multiple-choice",
            "options": [
              "3",
              "5",
              "4"
            ],
            "answer": "4",
            "explanation": "If you share 16 into 4 equal groups, each group gets 4."
          },
          {
            "id": "q15",
            "text": "What is 4 ÷ 4?",
            "type": "multiple-choice",
            "options": [
              "11",
              "2",
              "1"
            ],
            "answer": "1",
            "explanation": "If you share 4 into 4 equal groups, each group gets 1."
          },
          {
            "id": "q16",
            "text": "What is 10 ÷ 10?",
            "type": "multiple-choice",
            "options": [
              "3",
              "1",
              "2"
            ],
            "answer": "1",
            "explanation": "If you share 10 into 10 equal groups, each group gets 1."
          },
          {
            "id": "q17",
            "text": "What is 10 ÷ 2?",
            "type": "multiple-choice",
            "options": [
              "5",
              "6",
              "4"
            ],
            "answer": "5",
            "explanation": "If you share 10 into 2 equal groups, each group gets 5."
          },
          {
            "id": "q18",
            "text": "What is 20 ÷ 2?",
            "type": "multiple-choice",
            "options": [
              "10",
              "11",
              "9"
            ],
            "answer": "10",
            "explanation": "If you share 20 into 2 equal groups, each group gets 10."
          },
          {
            "id": "q19",
            "text": "What is 20 ÷ 2?",
            "type": "multiple-choice",
            "options": [
              "10",
              "11",
              "9"
            ],
            "answer": "10",
            "explanation": "If you share 20 into 2 equal groups, each group gets 10."
          },
          {
            "id": "q20",
            "text": "What is 40 ÷ 10?",
            "type": "multiple-choice",
            "options": [
              "5",
              "3",
              "4"
            ],
            "answer": "4",
            "explanation": "If you share 40 into 10 equal groups, each group gets 4."
          }
        ]
      }
    ]
  },
  {
    "id": "fractions",
    "title": "Fractions",
    "description": "Halves, thirds, and quarters.",
    "iconName": "PieChart",
    "color": "bg-pink-400",
    "lessons": [
      {
        "id": "fractions-learn",
        "title": "Learn Fractions",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "What is a Fraction?",
            "content": "A fraction is a part of a whole. When we cut a pizza into pieces, each piece is a fraction!",
            "image": "https://picsum.photos/seed/pizza-fraction/400/300",
            "animation": "bounce"
          },
          {
            "id": "s2",
            "title": "One Half (1/2)",
            "content": "When we cut something into 2 equal parts, each part is one half.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "How many halves make a whole?",
                "options": ["1", "2", "3"],
                "answer": "2"
              }
            }
          },
          {
            "id": "s3",
            "title": "One Third (1/3)",
            "content": "When we cut something into 3 equal parts, each part is one third.",
            "interactive": {
              "type": "grid",
              "data": {
                "rows": 1,
                "cols": 3,
                "target": 1
              }
            }
          },
          {
            "id": "s4",
            "title": "One Quarter (1/4)",
            "content": "When we cut something into 4 equal parts, each part is one quarter.",
            "interactive": {
              "type": "counter",
              "data": { "target": 4, "label": "Quarters in a whole" }
            }
          },
          {
            "id": "s5",
            "title": "Matching Fractions",
            "content": "Match the fraction name to its number.",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "id": "p1", "left": "One Half", "right": "1/2" },
                  { "id": "p2", "left": "One Third", "right": "1/3" },
                  { "id": "p3", "left": "One Quarter", "right": "1/4" }
                ]
              }
            }
          },
          {
            "id": "s6",
            "title": "Numerator and Denominator",
            "content": "The top number (Numerator) tells us how many parts we have. The bottom number (Denominator) tells us how many parts make a whole.",
            "image": "https://picsum.photos/seed/fraction-parts/400/300"
          },
          {
            "id": "s7",
            "title": "Sorting Fractions",
            "content": "Sort these into 'Unit Fractions' (numerator is 1) and 'Non-Unit Fractions'.",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["Unit", "Non-Unit"],
                "items": [
                  { "id": "i1", "text": "1/2", "category": "Unit" },
                  { "id": "i2", "text": "2/3", "category": "Non-Unit" },
                  { "id": "i3", "text": "1/4", "category": "Unit" },
                  { "id": "i4", "text": "3/4", "category": "Non-Unit" }
                ]
              }
            }
          },
          {
            "id": "s8",
            "title": "Fraction Number Line",
            "content": "Find where 1/2 is on the number line between 0 and 1.",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 1, "step": 0.5, "target": 0.5 }
            }
          },
          {
            "id": "s9",
            "title": "Comparing Fractions",
            "content": "Which is bigger: 1/2 or 1/4? (Hint: 1/2 is a bigger piece!)",
            "interactive": {
              "type": "balance",
              "data": { "left": 0.5, "right": 0.5, "label": "1/2 vs 1/4" }
            }
          },
          {
            "id": "s10",
            "title": "Fraction Pattern",
            "content": "1/4, 2/4, 3/4, ...",
            "interactive": {
              "type": "pattern",
              "data": {
                "sequence": ["1/4", "2/4", "3/4"],
                "options": ["4/4", "1/2", "1/4"],
                "answer": "4/4"
              }
            }
          },
          {
            "id": "s11",
            "title": "Three Quarters (3/4)",
            "content": "Three quarters means 3 out of 4 equal parts.",
            "interactive": {
              "type": "grid",
              "data": {
                "rows": 2,
                "cols": 2,
                "target": 3
              }
            }
          },
          {
            "id": "s12",
            "title": "Two Thirds (2/3)",
            "content": "Two thirds means 2 out of 3 equal parts.",
            "interactive": {
              "type": "grid",
              "data": {
                "rows": 1,
                "cols": 3,
                "target": 2
              }
            }
          },
          {
            "id": "s13",
            "title": "Whole Numbers as Fractions",
            "content": "A whole can be written as 2/2, 3/3, or 4/4!",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "id": "p1", "left": "1 Whole", "right": "4/4" },
                  { "id": "p2", "left": "1 Whole", "right": "2/2" },
                  { "id": "p3", "left": "1 Whole", "right": "3/3" }
                ]
              }
            }
          },
          {
            "id": "s14",
            "title": "Fraction of a Set",
            "content": "If you have 4 apples and 2 are red, then 2/4 (or 1/2) are red!",
            "interactive": {
              "type": "counter",
              "data": { "target": 2, "label": "Red Apples" }
            }
          },
          {
            "id": "s15",
            "title": "Sorting Equal Parts",
            "content": "Sort these into 'Equal Parts' and 'Unequal Parts'.",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["Equal", "Unequal"],
                "items": [
                  { "id": "i1", "text": "Halves", "category": "Equal" },
                  { "id": "i2", "text": "Random Pieces", "category": "Unequal" },
                  { "id": "i3", "text": "Quarters", "category": "Equal" },
                  { "id": "i4", "text": "Different Sizes", "category": "Unequal" }
                ]
              }
            }
          },
          {
            "id": "s16",
            "title": "Fraction Word Problem",
            "content": "You have a chocolate bar with 8 pieces. You eat 4. What fraction is left?",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Fraction left?",
                "options": ["1/2", "1/4", "1/8"],
                "answer": "1/2"
              }
            }
          },
          {
            "id": "s17",
            "title": "Venn Diagram: Fractions",
            "content": "Sort these fractions into 'Greater than 1/2' and 'Less than 1/2'.",
            "interactive": {
              "type": "venn",
              "data": {
                "leftLabel": "Greater than 1/2",
                "rightLabel": "Less than 1/2",
                "items": [
                  { "text": "3/4", "categories": ["left"] },
                  { "text": "1/4", "categories": ["right"] },
                  { "text": "2/3", "categories": ["left"] },
                  { "text": "1/3", "categories": ["right"] }
                ]
              }
            }
          },
          {
            "id": "s18",
            "title": "Drag and Drop: Fractions",
            "content": "Drag the fractions to the correct category.",
            "interactive": {
              "type": "drag-drop",
              "data": {
                "items": [
                  { "id": "f1", "text": "1/2", "category": "Halves" },
                  { "id": "f2", "text": "1/4", "category": "Quarters" },
                  { "id": "f3", "text": "2/4", "category": "Halves" },
                  { "id": "f4", "text": "2/2", "category": "Whole" }
                ],
                "categories": ["Halves", "Quarters", "Whole"]
              }
            }
          },
          {
            "id": "s19",
            "title": "Fraction Challenge",
            "content": "Can you find 3/4 on the number line?",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 1, "step": 0.25, "target": 0.75 }
            }
          },
          {
            "id": "s20",
            "title": "Fraction Master!",
            "content": "You now know all about parts of a whole! Ready to practice?",
            "image": "https://picsum.photos/seed/fraction-star/400/300"
          }
        ]
      },
      {
        "id": "fractions-1",
        "title": "Fractions Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is one quarter of 32?",
            "type": "multiple-choice",
            "options": [
              "9",
              "7",
              "8"
            ],
            "answer": "8",
            "explanation": "To find a quarter, you divide by 4.",
            "image": "https://picsum.photos/seed/pie-quarter/300/200"
          },
          {
            "id": "q2",
            "text": "What is half of 8?",
            "type": "multiple-choice",
            "options": [
              "5",
              "4",
              "3"
            ],
            "answer": "4",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q3",
            "text": "What is half of 6?",
            "type": "multiple-choice",
            "options": [
              "2",
              "4",
              "3"
            ],
            "answer": "3",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q4",
            "text": "What is half of 16?",
            "type": "multiple-choice",
            "options": [
              "7",
              "9",
              "8"
            ],
            "answer": "8",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q5",
            "text": "What is half of 14?",
            "type": "multiple-choice",
            "options": [
              "7",
              "8",
              "6"
            ],
            "answer": "7",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q6",
            "text": "What is one third of 18?",
            "type": "multiple-choice",
            "options": [
              "6",
              "7",
              "5"
            ],
            "answer": "6",
            "explanation": "To find a third, you divide by 3.",
            "image": "https://picsum.photos/seed/pie-third/300/200"
          },
          {
            "id": "q7",
            "text": "What is one quarter of 16?",
            "type": "multiple-choice",
            "options": [
              "3",
              "5",
              "4"
            ],
            "answer": "4",
            "explanation": "To find a quarter, you divide by 4.",
            "image": "https://picsum.photos/seed/pie-quarter/300/200"
          },
          {
            "id": "q8",
            "text": "What is one quarter of 20?",
            "type": "multiple-choice",
            "options": [
              "4",
              "5",
              "6"
            ],
            "answer": "5",
            "explanation": "To find a quarter, you divide by 4.",
            "image": "https://picsum.photos/seed/pie-quarter/300/200"
          },
          {
            "id": "q9",
            "text": "What is half of 16?",
            "type": "multiple-choice",
            "options": [
              "9",
              "8",
              "7"
            ],
            "answer": "8",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q10",
            "text": "What is one third of 15?",
            "type": "multiple-choice",
            "options": [
              "6",
              "5",
              "4"
            ],
            "answer": "5",
            "explanation": "To find a third, you divide by 3.",
            "image": "https://picsum.photos/seed/pie-third/300/200"
          },
          {
            "id": "q11",
            "text": "What is half of 12?",
            "type": "multiple-choice",
            "options": [
              "5",
              "7",
              "6"
            ],
            "answer": "6",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q12",
            "text": "What is one quarter of 20?",
            "type": "multiple-choice",
            "options": [
              "4",
              "6",
              "5"
            ],
            "answer": "5",
            "explanation": "To find a quarter, you divide by 4.",
            "image": "https://picsum.photos/seed/pie-quarter/300/200"
          },
          {
            "id": "q13",
            "text": "What is half of 6?",
            "type": "multiple-choice",
            "options": [
              "3",
              "2",
              "4"
            ],
            "answer": "3",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q14",
            "text": "What is half of 4?",
            "type": "multiple-choice",
            "options": [
              "1",
              "2",
              "3"
            ],
            "answer": "2",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q15",
            "text": "What is one third of 15?",
            "type": "multiple-choice",
            "options": [
              "6",
              "4",
              "5"
            ],
            "answer": "5",
            "explanation": "To find a third, you divide by 3.",
            "image": "https://picsum.photos/seed/pie-third/300/200"
          },
          {
            "id": "q16",
            "text": "What is one third of 12?",
            "type": "multiple-choice",
            "options": [
              "4",
              "5",
              "3"
            ],
            "answer": "4",
            "explanation": "To find a third, you divide by 3.",
            "image": "https://picsum.photos/seed/pie-third/300/200"
          },
          {
            "id": "q17",
            "text": "What is one quarter of 36?",
            "type": "multiple-choice",
            "options": [
              "8",
              "10",
              "9"
            ],
            "answer": "9",
            "explanation": "To find a quarter, you divide by 4.",
            "image": "https://picsum.photos/seed/pie-quarter/300/200"
          },
          {
            "id": "q18",
            "text": "What is half of 8?",
            "type": "multiple-choice",
            "options": [
              "4",
              "5",
              "3"
            ],
            "answer": "4",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          },
          {
            "id": "q19",
            "text": "What is one third of 30?",
            "type": "multiple-choice",
            "options": [
              "9",
              "11",
              "10"
            ],
            "answer": "10",
            "explanation": "To find a third, you divide by 3.",
            "image": "https://picsum.photos/seed/pie-third/300/200"
          },
          {
            "id": "q20",
            "text": "What is half of 16?",
            "type": "multiple-choice",
            "options": [
              "9",
              "7",
              "8"
            ],
            "answer": "8",
            "explanation": "To find a half, you divide by 2.",
            "image": "https://picsum.photos/seed/half-circle/300/200"
          }
        ]
      }
    ]
  },
  {
    "id": "measurement",
    "title": "Measurement",
    "description": "How long, how heavy, how much?",
    "iconName": "Ruler",
    "color": "bg-teal-400",
    "lessons": [
      {
        "id": "measurement-learn",
        "title": "Learn Measurement",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "What is Measurement?",
            "content": "Measurement tells us how long, how heavy, or how much of something we have.",
            "image": "https://picsum.photos/seed/measure/400/300",
            "animation": "fade"
          },
          {
            "id": "s2",
            "title": "Measuring Length",
            "content": "We use Centimeters (cm) for small things and Meters (m) for big things.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Which unit for a pencil?",
                "options": ["cm", "m", "km"],
                "answer": "cm"
              }
            }
          },
          {
            "id": "s3",
            "title": "Using a Ruler",
            "content": "A ruler helps us measure in centimeters. Always start at 0!",
            "interactive": {
              "type": "ruler",
              "data": { "target": 10, "unit": "cm", "objectWidth": 100 }
            }
          },
          {
            "id": "s4",
            "title": "100 cm = 1 Meter",
            "content": "Remember, 100 small centimeters make 1 big meter!",
            "interactive": {
              "type": "counter",
              "data": { "target": 100, "label": "cm in a meter" }
            }
          },
          {
            "id": "s5",
            "title": "Matching Lengths",
            "content": "Match the object to its likely length.",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "id": "p1", "left": "Paperclip", "right": "3 cm" },
                  { "id": "p2", "left": "Door", "right": "2 m" },
                  { "id": "p3", "left": "Pencil", "right": "15 cm" }
                ]
              }
            }
          },
          {
            "id": "s6",
            "title": "Measuring Weight",
            "content": "We use Grams (g) for light things and Kilograms (kg) for heavy things.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Which unit for an elephant?",
                "options": ["g", "kg"],
                "answer": "kg"
              }
            }
          },
          {
            "id": "s7",
            "title": "1000 g = 1 Kilogram",
            "content": "1000 grams is equal to 1 kilogram. 'Kilo' means thousand!",
            "interactive": {
              "type": "balance",
              "data": { "left": 1000, "right": 1000, "label": "1 kg vs 1000 g" }
            }
          },
          {
            "id": "s8",
            "title": "Sorting Weight",
            "content": "Sort these into 'Grams' (light) and 'Kilograms' (heavy).",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["Grams", "Kilograms"],
                "items": [
                  { "id": "i1", "text": "Feather", "category": "Grams" },
                  { "id": "i2", "text": "Bicycle", "category": "Kilograms" },
                  { "id": "i3", "text": "Apple", "category": "Grams" },
                  { "id": "i4", "text": "Car", "category": "Kilograms" }
                ]
              }
            }
          },
          {
            "id": "s9",
            "title": "Measuring Capacity",
            "content": "We use Milliliters (mL) for small amounts and Liters (L) for large amounts.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Which unit for a bathtub?",
                "options": ["mL", "L"],
                "answer": "L"
              }
            }
          },
          {
            "id": "s10",
            "title": "1000 mL = 1 Liter",
            "content": "1000 milliliters make 1 liter.",
            "interactive": {
              "type": "counter",
              "data": { "target": 1000, "label": "mL in a liter" }
            }
          },
          {
            "id": "s11",
            "title": "Ruler Challenge",
            "content": "Measure the object to 5 cm.",
            "interactive": {
              "type": "ruler",
              "data": { "target": 5, "unit": "cm", "objectWidth": 50 }
            }
          },
          {
            "id": "s12",
            "title": "Comparing Lengths",
            "content": "Which is longer: 50 cm or 1 m?",
            "interactive": {
              "type": "balance",
              "data": { "left": 100, "right": 100, "label": "1 m vs 50 cm" }
            }
          },
          {
            "id": "s13",
            "title": "Measurement Pattern",
            "content": "10cm, 20cm, 30cm, ...",
            "interactive": {
              "type": "pattern",
              "data": {
                "sequence": ["10cm", "20cm", "30cm"],
                "options": ["40cm", "50cm", "10cm"],
                "answer": "40cm"
              }
            }
          },
          {
            "id": "s14",
            "title": "Sorting Capacity: mL vs L",
            "content": "Sort these into 'Milliliters' and 'Liters'.",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["mL", "L"],
                "items": [
                  { "id": "i1", "text": "Spoon", "category": "mL" },
                  { "id": "i2", "text": "Swimming Pool", "category": "L" },
                  { "id": "i3", "text": "Juice Box", "category": "mL" },
                  { "id": "i4", "text": "Water Tank", "category": "L" }
                ]
              }
            }
          },
          {
            "id": "s15",
            "title": "Venn Diagram: Measurement",
            "content": "Sort these into 'Metric' and 'Imperial' (Wait, let's stick to Metric for now). Sort into 'Length' and 'Weight'.",
            "interactive": {
              "type": "venn",
              "data": {
                "leftLabel": "Length",
                "rightLabel": "Weight",
                "items": [
                  { "text": "cm", "categories": ["left"] },
                  { "text": "g", "categories": ["right"] },
                  { "text": "m", "categories": ["left"] },
                  { "text": "kg", "categories": ["right"] }
                ]
              }
            }
          },
          {
            "id": "s16",
            "title": "Drag and Drop: Units",
            "content": "Drag the units to their correct category.",
            "interactive": {
              "type": "drag-drop",
              "data": {
                "items": [
                  { "id": "u1", "text": "cm", "category": "Length" },
                  { "id": "u2", "text": "kg", "category": "Weight" },
                  { "id": "u3", "text": "mL", "category": "Capacity" },
                  { "id": "u4", "text": "m", "category": "Length" }
                ],
                "categories": ["Length", "Weight", "Capacity"]
              }
            }
          },
          {
            "id": "s17",
            "title": "Number Line: Measurement",
            "content": "Find 75 cm on the number line.",
            "interactive": {
              "type": "numberline",
              "data": { "start": 0, "end": 100, "step": 25, "target": 75 }
            }
          },
          {
            "id": "s18",
            "title": "Grid: Measurement",
            "content": "If one block is 2 cm, how many blocks for 10 cm?",
            "interactive": {
              "type": "grid",
              "data": {
                "rows": 1,
                "cols": 5,
                "target": 5
              }
            }
          },
          {
            "id": "s19",
            "title": "Measurement Slider",
            "content": "Slide to set the temperature to 30°C.",
            "interactive": {
              "type": "slider",
              "data": { "min": 0, "max": 50, "step": 1, "target": 30 }
            }
          },
          {
            "id": "s20",
            "title": "Measurement Master!",
            "content": "You can measure anything now! Ready to practice?",
            "image": "https://picsum.photos/seed/measure-star/400/300"
          }
        ]
      },
      {
        "id": "measurement-1",
        "title": "Measurement Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "Which is longer: 10 cm or 5 cm?",
            "type": "multiple-choice",
            "options": ["10 cm", "5 cm"],
            "answer": "10 cm",
            "explanation": "10 is a bigger number than 5, so 10 cm is longer."
          },
          {
            "id": "q2",
            "text": "How many centimeters are in 1 meter?",
            "type": "multiple-choice",
            "options": ["10 cm", "100 cm", "1000 cm"],
            "answer": "100 cm",
            "explanation": "There are exactly 100 centimeters in 1 meter."
          },
          {
            "id": "q3",
            "text": "Which unit is best for measuring the length of a pencil?",
            "type": "multiple-choice",
            "options": ["Centimeters (cm)", "Meters (m)", "Kilometers (km)"],
            "answer": "Centimeters (cm)",
            "explanation": "Pencils are small, so we use centimeters to measure them."
          },
          {
            "id": "q4",
            "text": "Which unit is best for measuring the length of a playground?",
            "type": "multiple-choice",
            "options": ["Centimeters (cm)", "Meters (m)", "Kilometers (km)"],
            "answer": "Meters (m)",
            "explanation": "Playgrounds are large, so meters are better than centimeters."
          },
          {
            "id": "q5",
            "text": "Which is heavier: 1 kg or 500 g?",
            "type": "multiple-choice",
            "options": ["1 kg", "500 g"],
            "answer": "1 kg",
            "explanation": "1 kg is equal to 1000 g, which is more than 500 g."
          },
          {
            "id": "q6",
            "text": "How many grams are in 1 kilogram?",
            "type": "multiple-choice",
            "options": ["100 g", "500 g", "1000 g"],
            "answer": "1000 g",
            "explanation": "Kilo means thousand, so 1 kilogram is 1000 grams."
          },
          {
            "id": "q7",
            "text": "Which unit is best for measuring the weight of an apple?",
            "type": "multiple-choice",
            "options": ["Grams (g)", "Kilograms (kg)"],
            "answer": "Grams (g)",
            "explanation": "An apple is light, so we use grams."
          },
          {
            "id": "q8",
            "text": "Which unit is best for measuring the weight of a bicycle?",
            "type": "multiple-choice",
            "options": ["Grams (g)", "Kilograms (kg)"],
            "answer": "Kilograms (kg)",
            "explanation": "A bicycle is heavy, so we use kilograms."
          },
          {
            "id": "q9",
            "text": "Which container holds more: 1 Liter or 500 Milliliters?",
            "type": "multiple-choice",
            "options": ["1 Liter", "500 Milliliters"],
            "answer": "1 Liter",
            "explanation": "1 Liter is 1000 mL, which is more than 500 mL."
          },
          {
            "id": "q10",
            "text": "How many milliliters are in 1 liter?",
            "type": "multiple-choice",
            "options": ["100 mL", "500 mL", "1000 mL"],
            "answer": "1000 mL",
            "explanation": "There are 1000 milliliters in 1 liter."
          },
          {
            "id": "q11",
            "text": "Which unit is best for measuring a small spoon of medicine?",
            "type": "multiple-choice",
            "options": ["Milliliters (mL)", "Liters (L)"],
            "answer": "Milliliters (mL)",
            "explanation": "A spoon holds a very small amount, so we use milliliters."
          },
          {
            "id": "q12",
            "text": "Which unit is best for measuring the water in a bathtub?",
            "type": "multiple-choice",
            "options": ["Milliliters (mL)", "Liters (L)"],
            "answer": "Liters (L)",
            "explanation": "A bathtub holds a lot of water, so we use liters."
          },
          {
            "id": "q13",
            "text": "If a book is 20 cm long and another is 15 cm long, what is their total length?",
            "type": "multiple-choice",
            "options": ["30 cm", "35 cm", "40 cm"],
            "answer": "35 cm",
            "explanation": "20 + 15 = 35."
          },
          {
            "id": "q14",
            "text": "If a bag of rice is 2 kg and a bag of flour is 3 kg, what is the total weight?",
            "type": "multiple-choice",
            "options": ["5 kg", "6 kg", "4 kg"],
            "answer": "5 kg",
            "explanation": "2 + 3 = 5."
          },
          {
            "id": "q15",
            "text": "If you have 500 mL of juice and add another 500 mL, how much do you have?",
            "type": "multiple-choice",
            "options": ["800 mL", "1000 mL (1 Liter)", "1200 mL"],
            "answer": "1000 mL (1 Liter)",
            "explanation": "500 + 500 = 1000. 1000 mL is the same as 1 Liter."
          },
          {
            "id": "q16",
            "text": "Which is shorter: 2 meters or 200 centimeters?",
            "type": "multiple-choice",
            "options": ["2 meters", "200 centimeters", "They are the same"],
            "answer": "They are the same",
            "explanation": "Since 1 meter = 100 cm, 2 meters = 200 cm."
          },
          {
            "id": "q17",
            "text": "Which is lighter: 100 grams or 1 kilogram?",
            "type": "multiple-choice",
            "options": ["100 grams", "1 kilogram"],
            "answer": "100 grams",
            "explanation": "1 kilogram is 1000 grams, which is much heavier than 100 grams."
          },
          {
            "id": "q18",
            "text": "Which holds less: 2 Liters or 2000 Milliliters?",
            "type": "multiple-choice",
            "options": ["2 Liters", "2000 Milliliters", "They are the same"],
            "answer": "They are the same",
            "explanation": "2 Liters = 2000 Milliliters."
          },
          {
            "id": "q19",
            "text": "What tool do you use to measure the length of your desk?",
            "type": "multiple-choice",
            "options": ["Ruler", "Scale", "Clock"],
            "answer": "Ruler",
            "explanation": "A ruler or measuring tape is used for length."
          },
          {
            "id": "q20",
            "text": "What tool do you use to measure how heavy you are?",
            "type": "multiple-choice",
            "options": ["Scale", "Ruler", "Thermometer"],
            "answer": "Scale",
            "explanation": "A weighing scale is used to measure weight."
          }
        ]
      }
    ]
  },
  {
    "id": "time",
    "title": "Time",
    "description": "Tick tock! Reading the clock.",
    "iconName": "Clock",
    "color": "bg-orange-400",
    "lessons": [
      {
        "id": "time-learn",
        "title": "Learning to Tell Time",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "What is Time?",
            "content": "Time helps us know when things happen! We use clocks to measure time.",
            "image": "https://picsum.photos/seed/clock1/400/300",
            "animation": "bounce"
          },
          {
            "id": "s2",
            "title": "The Clock Face",
            "content": "A clock has numbers from 1 to 12. It also has two hands: a short one and a long one.",
            "image": "https://picsum.photos/seed/clockface/400/300",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "Short Hand", "right": "Hours" },
                  { "left": "Long Hand", "right": "Minutes" }
                ]
              }
            }
          },
          {
            "id": "s3",
            "title": "Hours and Minutes",
            "content": "There are 60 minutes in 1 hour. The long hand moves faster than the short hand!",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "How many minutes are in 1 hour?",
                "options": ["30", "60", "100"],
                "answer": "60"
              }
            }
          },
          {
            "id": "s4",
            "title": "O'Clock",
            "content": "When the long hand points to 12, we say it is 'O'Clock'.",
            "image": "https://picsum.photos/seed/oclock/400/300",
            "interactive": {
              "type": "counter",
              "data": { "target": 3, "label": "3 O'Clock" }
            }
          },
          {
            "id": "s5",
            "title": "Half Past",
            "content": "When the long hand points to 6, it is 'Half Past'. That means 30 minutes have passed.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What is another way to say 4:30?",
                "options": ["Quarter past 4", "Half past 4", "4 o'clock"],
                "answer": "Half past 4"
              }
            }
          },
          {
            "id": "s6",
            "title": "Quarter Past",
            "content": "When the long hand points to 3, it is 'Quarter Past'. That's 15 minutes!",
            "interactive": {
              "type": "numberline",
              "data": { "min": 0, "max": 60, "step": 15, "target": 15 }
            }
          },
          {
            "id": "s7",
            "title": "Quarter To",
            "content": "When the long hand points to 9, it is 'Quarter To'. That's 45 minutes past the hour.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "If it is 5:45, it is quarter to...",
                "options": ["5", "6", "7"],
                "answer": "6"
              }
            }
          },
          {
            "id": "s8",
            "title": "AM and PM",
            "content": "AM is for the morning. PM is for the afternoon and night.",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["AM", "PM"],
                "items": [
                  { "id": "i1", "text": "Breakfast", "category": "AM" },
                  { "id": "i2", "text": "Bedtime", "category": "PM" },
                  { "id": "i3", "text": "Sunrise", "category": "AM" },
                  { "id": "i4", "text": "Dinner", "category": "PM" }
                ]
              }
            }
          },
          {
            "id": "s9",
            "title": "Days of the Week",
            "content": "There are 7 days in a week. Can you name them all?",
            "interactive": {
              "type": "pattern",
              "data": {
                "sequence": ["Mon", "Tue", "Wed", "Thu"],
                "options": ["Fri", "Sat", "Sun"],
                "answer": "Fri"
              }
            }
          },
          {
            "id": "s10",
            "title": "Months of the Year",
            "content": "There are 12 months in a year. January is the first month!",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Which month comes after June?",
                "options": ["May", "July", "August"],
                "answer": "July"
              }
            }
          },
          {
            "id": "s11",
            "title": "Seconds",
            "content": "A second is very short! There are 60 seconds in 1 minute.",
            "interactive": {
              "type": "counter",
              "data": { "target": 5, "label": "Seconds" }
            }
          },
          {
            "id": "s12",
            "title": "Digital Clocks",
            "content": "Digital clocks show time with numbers. 08:00 means 8 o'clock.",
            "image": "https://picsum.photos/seed/digitalclock/400/300"
          },
          {
            "id": "s13",
            "title": "Matching Time",
            "content": "Match the digital time to the words.",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "1:30", "right": "Half past 1" },
                  { "left": "2:15", "right": "Quarter past 2" },
                  { "left": "3:45", "right": "Quarter to 4" }
                ]
              }
            }
          },
          {
            "id": "s14",
            "title": "Elapsed Time",
            "content": "If it's 2:00 and 1 hour passes, it becomes 3:00.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What is 2 hours after 10:00?",
                "options": ["11:00", "12:00", "1:00"],
                "answer": "12:00"
              }
            }
          },
          {
            "id": "s15",
            "title": "Morning Routine",
            "content": "We do things in a certain order. First we wake up, then we eat breakfast.",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["Morning", "Evening"],
                "items": [
                  { "id": "i1", "text": "Brushing teeth (AM)", "category": "Morning" },
                  { "id": "i2", "text": "Reading a story", "category": "Evening" }
                ]
              }
            }
          },
          {
            "id": "s16",
            "title": "Calendar Fun",
            "content": "A calendar shows days, weeks, and months.",
            "image": "https://picsum.photos/seed/calendar/400/300"
          },
          {
            "id": "s17",
            "title": "Seasons",
            "content": "There are 4 seasons: Spring, Summer, Autumn, and Winter.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Which season is usually the coldest?",
                "options": ["Summer", "Winter", "Spring"],
                "answer": "Winter"
              }
            }
          },
          {
            "id": "s18",
            "title": "Time Units",
            "content": "Sort these from shortest to longest.",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["Short", "Long"],
                "items": [
                  { "id": "i1", "text": "Second", "category": "Short" },
                  { "id": "i2", "text": "Year", "category": "Long" },
                  { "id": "i3", "text": "Minute", "category": "Short" },
                  { "id": "i4", "text": "Century", "category": "Long" }
                ]
              }
            }
          },
          {
            "id": "s19",
            "title": "Balance the Time",
            "content": "Make both sides equal.",
            "interactive": {
              "type": "balance",
              "data": { "left": 60, "right": 60, "label": "Minutes" }
            }
          },
          {
            "id": "s20",
            "title": "Setting the Time",
            "content": "Can you set the clock to 3:00?",
            "interactive": {
              "type": "clock",
              "data": { "targetTime": "3:00" }
            }
          },
          {
            "id": "s21",
            "title": "Time Master!",
            "content": "You've learned so much about time! Ready for practice?",
            "image": "https://picsum.photos/seed/timepro/400/300"
          }
        ]
      },
      {
        "id": "time-1",
        "title": "Time Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "How many minutes are in 1 hour?",
            "type": "multiple-choice",
            "options": ["30 minutes", "60 minutes", "100 minutes"],
            "answer": "60 minutes",
            "explanation": "There are 60 minutes in one full hour."
          },
          {
            "id": "q2",
            "text": "How many hours are in 1 full day?",
            "type": "multiple-choice",
            "options": ["12 hours", "24 hours", "60 hours"],
            "answer": "24 hours",
            "explanation": "A full day and night combined is 24 hours."
          },
          {
            "id": "q3",
            "text": "What time is 'half past 4'?",
            "type": "multiple-choice",
            "options": ["4:15", "4:30", "5:30"],
            "answer": "4:30",
            "explanation": "'Half past' means 30 minutes after the hour."
          },
          {
            "id": "q4",
            "text": "What time is 'quarter past 2'?",
            "type": "multiple-choice",
            "options": ["2:15", "2:30", "2:45"],
            "answer": "2:15",
            "explanation": "'Quarter past' means 15 minutes after the hour."
          },
          {
            "id": "q5",
            "text": "What time is 'quarter to 6'?",
            "type": "multiple-choice",
            "options": ["5:45", "6:15", "6:45"],
            "answer": "5:45",
            "explanation": "'Quarter to' means 15 minutes before the hour, which is 45 minutes past the previous hour."
          },
          {
            "id": "q6",
            "text": "If it is 3:00 now, what time will it be in 1 hour?",
            "type": "multiple-choice",
            "options": ["2:00", "4:00", "3:30"],
            "answer": "4:00",
            "explanation": "3 + 1 = 4 o'clock."
          },
          {
            "id": "q7",
            "text": "If it is 10:30 now, what time was it 30 minutes ago?",
            "type": "multiple-choice",
            "options": ["10:00", "11:00", "10:15"],
            "answer": "10:00",
            "explanation": "30 minutes before 10:30 is 10:00."
          },
          {
            "id": "q8",
            "text": "How many days are in a week?",
            "type": "multiple-choice",
            "options": ["5 days", "6 days", "7 days"],
            "answer": "7 days",
            "explanation": "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday make 7 days."
          },
          {
            "id": "q9",
            "text": "Which month comes right after January?",
            "type": "multiple-choice",
            "options": ["March", "February", "December"],
            "answer": "February",
            "explanation": "The order is January, then February."
          },
          {
            "id": "q10",
            "text": "Which day comes right before Wednesday?",
            "type": "multiple-choice",
            "options": ["Tuesday", "Thursday", "Monday"],
            "answer": "Tuesday",
            "explanation": "The order is Monday, Tuesday, Wednesday."
          },
          {
            "id": "q11",
            "text": "What does 'AM' usually mean?",
            "type": "multiple-choice",
            "options": ["Morning", "Afternoon", "Night"],
            "answer": "Morning",
            "explanation": "AM is used for the time from midnight until noon (morning)."
          },
          {
            "id": "q12",
            "text": "What does 'PM' usually mean?",
            "type": "multiple-choice",
            "options": ["Morning", "Afternoon and Evening", "Midnight"],
            "answer": "Afternoon and Evening",
            "explanation": "PM is used for the time from noon until midnight."
          },
          {
            "id": "q13",
            "text": "How many months are in a year?",
            "type": "multiple-choice",
            "options": ["10 months", "12 months", "14 months"],
            "answer": "12 months",
            "explanation": "There are 12 months from January to December."
          },
          {
            "id": "q14",
            "text": "Which is longer: 1 hour or 60 minutes?",
            "type": "multiple-choice",
            "options": ["1 hour", "60 minutes", "They are the same"],
            "answer": "They are the same",
            "explanation": "1 hour is exactly 60 minutes."
          },
          {
            "id": "q15",
            "text": "Which is shorter: 1 day or 24 hours?",
            "type": "multiple-choice",
            "options": ["1 day", "24 hours", "They are the same"],
            "answer": "They are the same",
            "explanation": "1 day is exactly 24 hours."
          },
          {
            "id": "q16",
            "text": "What time is it when both hands on a clock point to 12?",
            "type": "multiple-choice",
            "options": ["6:00", "12:00", "1:00"],
            "answer": "12:00",
            "explanation": "When both hands are at 12, it is 12 o'clock."
          },
          {
            "id": "q17",
            "text": "The long hand on a clock measures...",
            "type": "multiple-choice",
            "options": ["Hours", "Minutes", "Seconds"],
            "answer": "Minutes",
            "explanation": "The long hand is the minute hand."
          },
          {
            "id": "q18",
            "text": "The short hand on a clock measures...",
            "type": "multiple-choice",
            "options": ["Hours", "Minutes", "Seconds"],
            "answer": "Hours",
            "explanation": "The short hand is the hour hand."
          },
          {
            "id": "q19",
            "text": "How many seconds are in 1 minute?",
            "type": "multiple-choice",
            "options": ["30 seconds", "60 seconds", "100 seconds"],
            "answer": "60 seconds",
            "explanation": "There are 60 seconds in one minute."
          },
          {
            "id": "q20",
            "text": "If school starts at 8:00 AM and ends at 2:00 PM, how many hours is that?",
            "type": "multiple-choice",
            "options": ["4 hours", "5 hours", "6 hours"],
            "answer": "6 hours",
            "explanation": "From 8 to 12 is 4 hours, plus 2 more hours is 6 hours total."
          }
        ]
      }
    ]
  },
  {
    "id": "money",
    "title": "Money",
    "description": "Coins, notes, and shopping!",
    "iconName": "Coins",
    "color": "bg-emerald-400",
    "lessons": [
      {
        "id": "money-learn",
        "title": "Learn Bangladeshi Money",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "Bangladeshi Currency",
            "content": "In Bangladesh, we use Taka (৳) and Poisha. 100 Poisha make 1 Taka.",
            "image": "https://picsum.photos/seed/taka/400/300"
          },
          {
            "id": "s2",
            "title": "The ৳1 Coin",
            "content": "This is a 1 Taka coin. How many 1 Taka coins do you need to make ৳5?",
            "interactive": {
              "type": "counter",
              "target": 5,
              "label": "৳1 coins"
            }
          },
          {
            "id": "s3",
            "title": "Matching Notes",
            "content": "Match the Bangladeshi notes to their values.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "Green Note", "right": "৳10" },
                { "id": "p2", "left": "Orange Note", "right": "৳20" },
                { "id": "p3", "left": "Red Note", "right": "৳5" }
              ]
            }
          },
          {
            "id": "s4",
            "title": "The ৳10 Note",
            "content": "The ৳10 note is very common. If you have two ৳10 notes, how much do you have?",
            "interactive": {
              "type": "choice",
              "question": "Total Taka?",
              "options": ["৳10", "৳20", "৳30"],
              "answer": "৳20"
            }
          },
          {
            "id": "s5",
            "title": "Sorting Coins and Notes",
            "content": "Sort these into 'Coins' and 'Notes'.",
            "interactive": {
              "type": "sorter",
              "categories": ["Coins", "Notes"],
              "items": [
                { "id": "i1", "text": "৳1", "category": "Coins" },
                { "id": "i2", "text": "৳2", "category": "Coins" },
                { "id": "i3", "text": "৳10", "category": "Notes" },
                { "id": "i4", "text": "৳50", "category": "Notes" }
              ]
            }
          },
          {
            "id": "s6",
            "title": "Taka Number Line",
            "content": "If you have ৳10 and someone gives you ৳5, where are you on the number line?",
            "interactive": {
              "type": "number-line",
              "target": 15,
              "range": [0, 20],
              "step": 5
            }
          },
          {
            "id": "s7",
            "title": "Buying Candies",
            "content": "A candy costs ৳2. If you want 4 candies, how much Taka do you need?",
            "interactive": {
              "type": "grid",
              "rows": 2,
              "cols": 4,
              "target": 8
            }
          },
          {
            "id": "s8",
            "title": "Balance the Taka",
            "content": "৳50 is the same as how many ৳10 notes?",
            "interactive": {
              "type": "balance",
              "left": 50,
              "right": 50,
              "options": [30, 40, 50]
            }
          },
          {
            "id": "s9",
            "title": "Money Pattern",
            "content": "৳2, ৳4, ৳6, ...",
            "interactive": {
              "type": "pattern",
              "sequence": [2, 4, 6],
              "answer": 8
            }
          },
          {
            "id": "s10",
            "title": "Poisha to Taka",
            "content": "Remember, 100 Poisha = ৳1.",
            "interactive": {
              "type": "choice",
              "question": "How many Poisha in ৳2?",
              "options": ["100", "200", "300"],
              "answer": "200"
            }
          },
          {
            "id": "s11",
            "title": "Collect Taka",
            "content": "Can you collect ৳150 using the notes?",
            "interactive": {
              "type": "money",
              "data": { "target": 150, "currency": "৳" }
            }
          },
          {
            "id": "s12",
            "title": "Counting ৳5 Coins",
            "content": "Count four ৳5 coins.",
            "interactive": {
              "type": "counter",
              "target": 20,
              "label": "Total Taka"
            }
          },
          {
            "id": "s13",
            "title": "Matching Values",
            "content": "Match the combinations to their totals.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "৳10 + ৳10", "right": "৳20" },
                { "id": "p2", "left": "৳50 + ৳50", "right": "৳100" },
                { "id": "p3", "left": "৳5 + ৳5", "right": "৳10" }
              ]
            }
          },
          {
            "id": "s14",
            "title": "Spending Money",
            "content": "You have ৳20. You spend ৳7. Use the number line to find what's left.",
            "interactive": {
              "type": "number-line",
              "target": 13,
              "range": [0, 20],
              "step": 1
            }
          },
          {
            "id": "s15",
            "title": "Sorting Small and Large",
            "content": "Sort these notes into 'Small Value' (under ৳50) and 'Large Value' (৳50 and above).",
            "interactive": {
              "type": "sorter",
              "categories": ["Small", "Large"],
              "items": [
                { "id": "i1", "text": "৳10", "category": "Small" },
                { "id": "i2", "text": "৳100", "category": "Large" },
                { "id": "i3", "text": "৳20", "category": "Small" },
                { "id": "i4", "text": "৳500", "category": "Large" }
              ]
            }
          },
          {
            "id": "s16",
            "title": "Buying Eggs",
            "content": "One egg costs ৳12. How much for 2 eggs?",
            "interactive": {
              "type": "grid",
              "rows": 2,
              "cols": 12,
              "target": 24
            }
          },
          {
            "id": "s17",
            "title": "Balance the Change",
            "content": "If you pay ৳100 for a ৳80 toy, how much change do you get?",
            "interactive": {
              "type": "balance",
              "left": 20,
              "right": 20,
              "options": [10, 20, 30]
            }
          },
          {
            "id": "s18",
            "title": "Savings Pattern",
            "content": "You save ৳10 every day: ৳10, ৳20, ৳30, ...",
            "interactive": {
              "type": "pattern",
              "sequence": [10, 20, 30],
              "answer": 40
            }
          },
          {
            "id": "s19",
            "title": "Shopping Trip",
            "content": "A pen is ৳15 and a notebook is ৳35. How much in total?",
            "interactive": {
              "type": "choice",
              "question": "Total cost?",
              "options": ["৳40", "৳50", "৳60"],
              "answer": "৳50"
            }
          },
          {
            "id": "s20",
            "title": "Counting Large Notes",
            "content": "How much is five ৳100 notes?",
            "interactive": {
              "type": "counter",
              "target": 500,
              "label": "Total Taka"
            }
          },
          {
            "id": "s21",
            "title": "Money Master!",
            "content": "You now know all about Bangladeshi Taka! Time to practice.",
            "image": "https://picsum.photos/seed/money-bag/400/300"
          }
        ]
      },
      {
        "id": "money-1",
        "title": "Money Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "How many Poisha are in 1 Taka?",
            "type": "multiple-choice",
            "options": ["50 Poisha", "100 Poisha", "200 Poisha"],
            "answer": "100 Poisha",
            "explanation": "There are exactly 100 Poisha in one Taka."
          },
          {
            "id": "q2",
            "text": "Which note is green in color?",
            "type": "multiple-choice",
            "options": ["৳10", "৳20", "৳50"],
            "answer": "৳10",
            "explanation": "The Bangladeshi ৳10 note is predominantly green."
          },
          {
            "id": "q3",
            "text": "Which note is orange/yellowish in color?",
            "type": "multiple-choice",
            "options": ["৳10", "৳20", "৳100"],
            "answer": "৳20",
            "explanation": "The Bangladeshi ৳20 note is orange/yellowish."
          },
          {
            "id": "q4",
            "text": "Which note is red in color?",
            "type": "multiple-choice",
            "options": ["৳5", "৳50", "৳500"],
            "answer": "৳5",
            "explanation": "The Bangladeshi ৳5 note is predominantly red."
          },
          {
            "id": "q5",
            "text": "How many ৳5 coins make ৳20?",
            "type": "multiple-choice",
            "options": ["2", "4", "5"],
            "answer": "4",
            "explanation": "5 + 5 + 5 + 5 = 20. So 4 coins."
          },
          {
            "id": "q6",
            "text": "If you have 2 ৳50 notes, how much money do you have?",
            "type": "multiple-choice",
            "options": ["৳50", "৳100", "৳150"],
            "answer": "৳100",
            "explanation": "50 + 50 = 100 Taka."
          },
          {
            "id": "q7",
            "text": "If you have ৳100 and spend ৳40, how much is left?",
            "type": "multiple-choice",
            "options": ["৳40", "৳50", "৳60"],
            "answer": "৳60",
            "explanation": "100 - 40 = 60 Taka."
          },
          {
            "id": "q8",
            "text": "Which is more: 3 ৳10 notes or 1 ৳20 note?",
            "type": "multiple-choice",
            "options": ["3 ৳10 notes", "1 ৳20 note"],
            "answer": "3 ৳10 notes",
            "explanation": "3 ৳10 notes = ৳30, which is more than ৳20."
          },
          {
            "id": "q9",
            "text": "How many ৳2 coins make ৳10?",
            "type": "multiple-choice",
            "options": ["3", "4", "5"],
            "answer": "5",
            "explanation": "2 + 2 + 2 + 2 + 2 = 10. So 5 coins."
          },
          {
            "id": "q10",
            "text": "How many ৳10 notes make ৳100?",
            "type": "multiple-choice",
            "options": ["5", "10", "20"],
            "answer": "10",
            "explanation": "10 groups of ৳10 make ৳100."
          },
          {
            "id": "q11",
            "text": "If a snack costs ৳15 and you pay with a ৳20 note, what is the change?",
            "type": "multiple-choice",
            "options": ["৳5", "৳10", "৳15"],
            "answer": "৳5",
            "explanation": "20 - 15 = 5 Taka."
          },
          {
            "id": "q12",
            "text": "You have three ৳500 bills. How much money is that?",
            "type": "multiple-choice",
            "options": ["৳1000", "৳1500", "৳2000"],
            "answer": "৳1500",
            "explanation": "500 + 500 + 500 = 1500."
          },
          {
            "id": "q13",
            "text": "Which note is worth more: ৳500 or ৳1000?",
            "type": "multiple-choice",
            "options": ["৳500", "৳1000"],
            "answer": "৳1000",
            "explanation": "1000 is a larger number than 500."
          },
          {
            "id": "q14",
            "text": "If you have 4 ৳5 coins, how many Taka do you have?",
            "type": "multiple-choice",
            "options": ["৳10", "৳20", "৳30"],
            "answer": "৳20",
            "explanation": "4 x 5 = 20 Taka."
          },
          {
            "id": "q15",
            "text": "A toy costs ৳80. You have a ৳100 note. How much change do you get?",
            "type": "multiple-choice",
            "options": ["৳10", "৳20", "৳30"],
            "answer": "৳20",
            "explanation": "100 - 80 = 20."
          },
          {
            "id": "q16",
            "text": "Which is less: 50 Poisha or ৳1?",
            "type": "multiple-choice",
            "options": ["50 Poisha", "৳1"],
            "answer": "50 Poisha",
            "explanation": "50 Poisha is half of 1 Taka."
          },
          {
            "id": "q17",
            "text": "How many ৳100 notes make ৳500?",
            "type": "multiple-choice",
            "options": ["3", "4", "5"],
            "answer": "5",
            "explanation": "5 groups of ৳100 make ৳500."
          },
          {
            "id": "q18",
            "text": "If you have 10 ৳1 coins, how many Taka do you have?",
            "type": "multiple-choice",
            "options": ["৳1", "৳10", "৳100"],
            "answer": "৳10",
            "explanation": "Each coin is ৳1, so 10 coins is ৳10."
          },
          {
            "id": "q19",
            "text": "You want to buy a book for ৳120. You have ৳100. How much more do you need?",
            "type": "multiple-choice",
            "options": ["৳10", "৳20", "৳30"],
            "answer": "৳20",
            "explanation": "120 - 100 = 20."
          },
          {
            "id": "q20",
            "text": "Which note has the highest value?",
            "type": "multiple-choice",
            "options": ["৳100", "৳500", "৳1000"],
            "answer": "৳1000",
            "explanation": "৳1000 is the highest value note."
          }
        ]
      }
    ]
  },
  {
    "id": "geometry",
    "title": "Shapes",
    "description": "2D shapes everywhere.",
    "iconName": "Shapes",
    "color": "bg-indigo-400",
    "lessons": [
      {
        "id": "geometry-learn",
        "title": "Learning About Shapes",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "Shapes are Everywhere!",
            "content": "Look around you! Everything is made of shapes. Let's learn about them.",
            "image": "https://picsum.photos/seed/shapes1/400/300",
            "animation": "bounce"
          },
          {
            "id": "s2",
            "title": "The Square",
            "content": "A square has 4 equal sides and 4 corners. It looks like a box!",
            "image": "https://picsum.photos/seed/square/400/300",
            "interactive": {
              "type": "counter",
              "data": { "target": 4, "label": "Sides" }
            }
          },
          {
            "id": "s3",
            "title": "The Circle",
            "content": "A circle is perfectly round. It has no corners and no straight sides!",
            "image": "https://picsum.photos/seed/circle/400/300",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "How many corners does a circle have?",
                "options": ["0", "1", "4"],
                "answer": "0"
              }
            }
          },
          {
            "id": "s4",
            "title": "The Triangle",
            "content": "A triangle has 3 sides and 3 corners. 'Tri' means three!",
            "image": "https://picsum.photos/seed/triangle/400/300",
            "interactive": {
              "type": "counter",
              "data": { "target": 3, "label": "Corners" }
            }
          },
          {
            "id": "s5",
            "title": "The Rectangle",
            "content": "A rectangle has 4 sides like a square, but two sides are longer than the others.",
            "image": "https://picsum.photos/seed/rectangle/400/300",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "Square", "right": "Equal sides" },
                  { "left": "Rectangle", "right": "Long and short sides" }
                ]
              }
            }
          },
          {
            "id": "s6",
            "title": "Pentagon",
            "content": "A pentagon has 5 sides. Think of a house shape!",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "How many sides does a pentagon have?",
                "options": ["4", "5", "6"],
                "answer": "5"
              }
            }
          },
          {
            "id": "s7",
            "title": "Hexagon",
            "content": "A hexagon has 6 sides. Bees make honeycombs with hexagon shapes!",
            "interactive": {
              "type": "numberline",
              "data": { "min": 0, "max": 10, "step": 1, "target": 6 }
            }
          },
          {
            "id": "s8",
            "title": "Octagon",
            "content": "An octagon has 8 sides. A stop sign is an octagon!",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Which sign is an octagon?",
                "options": ["Yield sign", "Stop sign", "Speed limit sign"],
                "answer": "Stop sign"
              }
            }
          },
          {
            "id": "s9",
            "title": "Sides and Corners",
            "content": "Match the shape to its number of sides.",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "Triangle", "right": "3 sides" },
                  { "left": "Square", "right": "4 sides" },
                  { "left": "Hexagon", "right": "6 sides" }
                ]
              }
            }
          },
          {
            "id": "s10",
            "title": "Sorting Shapes",
            "content": "Sort these shapes into 'Round' or 'Straight Sides'.",
            "interactive": {
              "type": "sorter",
              "data": {
                "categories": ["Round", "Straight"],
                "items": [
                  { "id": "i1", "text": "Circle", "category": "Round" },
                  { "id": "i2", "text": "Square", "category": "Straight" },
                  { "id": "i3", "text": "Oval", "category": "Round" },
                  { "id": "i4", "text": "Triangle", "category": "Straight" }
                ]
              }
            }
          },
          {
            "id": "s11",
            "title": "The Oval",
            "content": "An oval is like a stretched circle. It looks like an egg!",
            "image": "https://picsum.photos/seed/egg/400/300"
          },
          {
            "id": "s12",
            "title": "The Diamond (Rhombus)",
            "content": "A diamond shape is also called a rhombus. It has 4 equal sides but slanted corners.",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "How many sides does a rhombus have?",
                "options": ["3", "4", "5"],
                "answer": "4"
              }
            }
          },
          {
            "id": "s13",
            "title": "Shape Patterns",
            "content": "What comes next in the pattern?",
            "interactive": {
              "type": "pattern",
              "data": {
                "sequence": ["Circle", "Square", "Circle", "Square"],
                "options": ["Circle", "Square", "Triangle"],
                "answer": "Circle"
              }
            }
          },
          {
            "id": "s14",
            "title": "Finding Shapes",
            "content": "Click on the triangle in the grid.",
            "interactive": {
              "type": "grid",
              "data": {
                "rows": 2,
                "cols": 2,
                "items": [
                  { "id": "g1", "content": "Square", "correct": false },
                  { "id": "g2", "content": "Triangle", "correct": true },
                  { "id": "g3", "content": "Circle", "correct": false },
                  { "id": "g4", "content": "Oval", "correct": false }
                ]
              }
            }
          },
          {
            "id": "s15",
            "title": "Balance the Sides",
            "content": "Make both sides have the same number of sides.",
            "interactive": {
              "type": "balance",
              "data": { "left": 4, "right": 4, "label": "Sides" }
            }
          },
          {
            "id": "s16",
            "title": "Real World Shapes",
            "content": "Match the object to its shape.",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "left": "Pizza Slice", "right": "Triangle" },
                  { "left": "Door", "right": "Rectangle" },
                  { "left": "Clock", "right": "Circle" }
                ]
              }
            }
          },
          {
            "id": "s17",
            "title": "Counting Corners",
            "content": "How many corners does a hexagon have?",
            "interactive": {
              "type": "counter",
              "data": { "target": 6, "label": "Corners" }
            }
          },
          {
            "id": "s18",
            "title": "Star Shape",
            "content": "A star has many points! A 5-pointed star is very common.",
            "image": "https://picsum.photos/seed/star/400/300"
          },
          {
            "id": "s19",
            "title": "Heart Shape",
            "content": "A heart shape is a symbol of love. It is symmetrical!",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Is a heart shape symmetrical?",
                "options": ["Yes", "No"],
                "answer": "Yes"
              }
            }
          },
          {
            "id": "s20",
            "title": "Complex Shapes",
            "content": "Some shapes have many sides. A decagon has 10 sides!",
            "interactive": {
              "type": "numberline",
              "data": { "min": 0, "max": 12, "step": 1, "target": 10 }
            }
          },
          {
            "id": "s21",
            "title": "Shape Expert!",
            "content": "You can identify all sorts of shapes now! Ready for practice?",
            "image": "https://picsum.photos/seed/shapepro/400/300"
          }
        ]
      },
      {
        "id": "geometry-1",
        "title": "Shapes Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "How many sides does a square have?",
            "type": "multiple-choice",
            "options": ["3", "4", "5"],
            "answer": "4",
            "explanation": "A square has 4 equal sides.",
            "image": "https://picsum.photos/seed/square-shape/300/200"
          },
          {
            "id": "q2",
            "text": "How many sides does a triangle have?",
            "type": "multiple-choice",
            "options": ["2", "3", "4"],
            "answer": "3",
            "explanation": "A triangle has 3 sides.",
            "image": "https://picsum.photos/seed/triangle-shape/300/200"
          },
          {
            "id": "q3",
            "text": "Which shape is perfectly round?",
            "type": "multiple-choice",
            "options": ["Square", "Circle", "Triangle"],
            "answer": "Circle",
            "explanation": "A circle is round and has no corners.",
            "image": "https://picsum.photos/seed/circle-shape/300/200"
          },
          {
            "id": "q4",
            "text": "How many sides does a rectangle have?",
            "type": "multiple-choice",
            "options": ["4", "5", "6"],
            "answer": "4",
            "explanation": "A rectangle has 4 sides.",
            "image": "https://picsum.photos/seed/rectangle-shape/300/200"
          },
          {
            "id": "q5",
            "text": "How many sides does a pentagon have?",
            "type": "multiple-choice",
            "options": ["4", "5", "6"],
            "answer": "5",
            "explanation": "A pentagon has 5 sides.",
            "image": "https://picsum.photos/seed/pentagon-shape/300/200"
          },
          {
            "id": "q6",
            "text": "How many sides does a hexagon have?",
            "type": "multiple-choice",
            "options": ["5", "6", "7"],
            "answer": "6",
            "explanation": "A hexagon has 6 sides.",
            "image": "https://picsum.photos/seed/hexagon-shape/300/200"
          },
          {
            "id": "q7",
            "text": "Which shape looks like an egg?",
            "type": "multiple-choice",
            "options": ["Circle", "Oval", "Square"],
            "answer": "Oval",
            "explanation": "An oval is an elongated circle, like an egg.",
            "image": "https://picsum.photos/seed/oval-shape/300/200"
          },
          {
            "id": "q8",
            "text": "How many corners does a triangle have?",
            "type": "multiple-choice",
            "options": ["3", "4", "5"],
            "answer": "3",
            "explanation": "A triangle has 3 corners where its sides meet."
          },
          {
            "id": "q9",
            "text": "Which shape has 4 equal sides?",
            "type": "multiple-choice",
            "options": ["Rectangle", "Square", "Triangle"],
            "answer": "Square",
            "explanation": "A square's 4 sides are all the same length."
          },
          {
            "id": "q10",
            "text": "How many sides does an octagon have?",
            "type": "multiple-choice",
            "options": ["6", "8", "10"],
            "answer": "8",
            "explanation": "An octagon has 8 sides, like a stop sign."
          },
          {
            "id": "q11",
            "text": "Which shape has 0 corners?",
            "type": "multiple-choice",
            "options": ["Square", "Circle", "Pentagon"],
            "answer": "Circle",
            "explanation": "A circle is a continuous curve with no corners."
          },
          {
            "id": "q12",
            "text": "What do we call a shape with 5 sides?",
            "type": "multiple-choice",
            "options": ["Hexagon", "Pentagon", "Octagon"],
            "answer": "Pentagon",
            "explanation": "Penta means five."
          },
          {
            "id": "q13",
            "text": "What do we call a shape with 6 sides?",
            "type": "multiple-choice",
            "options": ["Hexagon", "Pentagon", "Octagon"],
            "answer": "Hexagon",
            "explanation": "Hexa means six."
          },
          {
            "id": "q14",
            "text": "Which shape is often used for stop signs?",
            "type": "multiple-choice",
            "options": ["Hexagon", "Octagon", "Square"],
            "answer": "Octagon",
            "explanation": "Stop signs are 8-sided octagons."
          },
          {
            "id": "q15",
            "text": "How many sides does a rhombus have?",
            "type": "multiple-choice",
            "options": ["3", "4", "5"],
            "answer": "4",
            "explanation": "A rhombus is a 4-sided shape."
          },
          {
            "id": "q16",
            "text": "Which shape has 3 sides and 3 corners?",
            "type": "multiple-choice",
            "options": ["Triangle", "Square", "Circle"],
            "answer": "Triangle",
            "explanation": "Triangles always have 3 sides and 3 corners."
          },
          {
            "id": "q17",
            "text": "A door is usually which shape?",
            "type": "multiple-choice",
            "options": ["Square", "Rectangle", "Circle"],
            "answer": "Rectangle",
            "explanation": "Doors are typically rectangular."
          },
          {
            "id": "q18",
            "text": "A pizza is usually which shape before it is cut?",
            "type": "multiple-choice",
            "options": ["Square", "Circle", "Triangle"],
            "answer": "Circle",
            "explanation": "Most pizzas are round circles."
          },
          {
            "id": "q19",
            "text": "How many sides does a decagon have?",
            "type": "multiple-choice",
            "options": ["10", "12", "8"],
            "answer": "10",
            "explanation": "A decagon has 10 sides."
          },
          {
            "id": "q20",
            "text": "Which shape has more sides: a square or a pentagon?",
            "type": "multiple-choice",
            "options": ["Square", "Pentagon"],
            "answer": "Pentagon",
            "explanation": "A pentagon has 5 sides, while a square has 4."
          }
        ]
      }
    ]
  },
  {
    "id": "patterns",
    "title": "Patterns",
    "description": "What comes next in the sequence?",
    "iconName": "Repeat",
    "color": "bg-cyan-400",
    "lessons": [
      {
        "id": "patterns-learn",
        "title": "Learn Patterns",
        "type": "learn",
        "slides": [
          {
            "id": "p1",
            "title": "What is a Pattern?",
            "content": "A pattern is something that repeats over and over again. Look at these colors!",
            "image": "https://picsum.photos/seed/pattern-intro/400/300",
            "interactive": {
              "type": "pattern",
              "data": {
                "sequence": ["🔴", "🔵", "🔴", "🔵"],
                "options": ["🔴", "🔵", "🟡"],
                "answer": "🔴"
              }
            }
          },
          {
            "id": "p2",
            "title": "Shape Patterns",
            "content": "Patterns can also be made with shapes. Square, Circle, Square, Circle...",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "What comes next: ⬛, ⭕, ⬛, ⭕, ?",
                "options": ["⬛", "⭕", "🔺"],
                "answer": "⬛"
              }
            }
          },
          {
            "id": "p3",
            "title": "Sorting Patterns",
            "content": "Can you sort these into repeating and non-repeating sequences?",
            "interactive": {
              "type": "drag-drop",
              "data": {
                "items": [
                  { "id": "s1", "text": "ABABAB", "category": "Repeating" },
                  { "id": "s2", "text": "ABCABC", "category": "Repeating" },
                  { "id": "s3", "text": "AABBC", "category": "Not Repeating" },
                  { "id": "s4", "text": "XYZ", "category": "Not Repeating" }
                ],
                "categories": ["Repeating", "Not Repeating"]
              }
            }
          }
        ]
      },
      {
        "id": "patterns-1",
        "title": "Patterns Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What comes next in the pattern: Red, Blue, Red, Blue, ...?",
            "type": "multiple-choice",
            "options": ["Red", "Blue", "Green"],
            "answer": "Red",
            "explanation": "The pattern repeats Red and Blue. After Blue comes Red."
          },
          {
            "id": "q2",
            "text": "What is the next number: 2, 4, 6, 8, ...?",
            "type": "multiple-choice",
            "options": ["9", "10", "12"],
            "answer": "10",
            "explanation": "The pattern is adding 2 each time. 8 + 2 = 10."
          },
          {
            "id": "q3",
            "text": "What is the next number: 5, 10, 15, 20, ...?",
            "type": "multiple-choice",
            "options": ["21", "25", "30"],
            "answer": "25",
            "explanation": "The pattern is counting by 5s. After 20 comes 25."
          },
          {
            "id": "q4",
            "text": "What comes next: Circle, Square, Circle, Square, ...?",
            "type": "multiple-choice",
            "options": ["Circle", "Square", "Triangle"],
            "answer": "Circle",
            "explanation": "The pattern alternates between Circle and Square."
          },
          {
            "id": "q5",
            "text": "What is the next number: 10, 20, 30, 40, ...?",
            "type": "multiple-choice",
            "options": ["41", "50", "60"],
            "answer": "50",
            "explanation": "The pattern is counting by 10s. After 40 comes 50."
          },
          {
            "id": "q6",
            "text": "What comes next: A, B, A, B, ...?",
            "type": "multiple-choice",
            "options": ["A", "B", "C"],
            "answer": "A",
            "explanation": "The pattern repeats A and B."
          },
          {
            "id": "q7",
            "text": "What comes next: Up, Down, Up, Down, ...?",
            "type": "multiple-choice",
            "options": ["Up", "Down", "Left"],
            "answer": "Up",
            "explanation": "The pattern alternates between Up and Down."
          },
          {
            "id": "q8",
            "text": "What is the next number: 1, 3, 5, 7, ...?",
            "type": "multiple-choice",
            "options": ["8", "9", "10"],
            "answer": "9",
            "explanation": "The pattern is adding 2 each time (odd numbers). 7 + 2 = 9."
          },
          {
            "id": "q9",
            "text": "What comes next: Apple, Banana, Apple, Banana, ...?",
            "type": "multiple-choice",
            "options": ["Apple", "Banana", "Orange"],
            "answer": "Apple",
            "explanation": "The pattern repeats Apple and Banana."
          },
          {
            "id": "q10",
            "text": "What is the next number: 100, 200, 300, 400, ...?",
            "type": "multiple-choice",
            "options": ["401", "500", "600"],
            "answer": "500",
            "explanation": "The pattern is counting by 100s. After 400 comes 500."
          },
          {
            "id": "q11",
            "text": "What comes next: Sun, Moon, Sun, Moon, ...?",
            "type": "multiple-choice",
            "options": ["Sun", "Moon", "Star"],
            "answer": "Sun",
            "explanation": "The pattern alternates between Sun and Moon."
          },
          {
            "id": "q12",
            "text": "What is the next number: 11, 22, 33, 44, ...?",
            "type": "multiple-choice",
            "options": ["45", "55", "66"],
            "answer": "55",
            "explanation": "The pattern is adding 11 each time. 44 + 11 = 55."
          },
          {
            "id": "q13",
            "text": "What comes next: Triangle, Triangle, Circle, Triangle, Triangle, ...?",
            "type": "multiple-choice",
            "options": ["Triangle", "Circle", "Square"],
            "answer": "Circle",
            "explanation": "The pattern is two triangles followed by one circle."
          },
          {
            "id": "q14",
            "text": "What is the next number: 2, 5, 8, 11, ...?",
            "type": "multiple-choice",
            "options": ["12", "13", "14"],
            "answer": "14",
            "explanation": "The pattern is adding 3 each time. 11 + 3 = 14."
          },
          {
            "id": "q15",
            "text": "What comes next: Big, Small, Big, Small, ...?",
            "type": "multiple-choice",
            "options": ["Big", "Small", "Medium"],
            "answer": "Big",
            "explanation": "The pattern alternates between Big and Small."
          },
          {
            "id": "q16",
            "text": "What is the next number: 10, 9, 8, 7, ...?",
            "type": "multiple-choice",
            "options": ["5", "6", "8"],
            "answer": "6",
            "explanation": "The pattern is counting backwards by 1. After 7 comes 6."
          },
          {
            "id": "q17",
            "text": "What comes next: Happy, Sad, Happy, Sad, ...?",
            "type": "multiple-choice",
            "options": ["Happy", "Sad", "Angry"],
            "answer": "Happy",
            "explanation": "The pattern alternates between Happy and Sad."
          },
          {
            "id": "q18",
            "text": "What is the next number: 50, 40, 30, 20, ...?",
            "type": "multiple-choice",
            "options": ["10", "15", "0"],
            "answer": "10",
            "explanation": "The pattern is counting backwards by 10s. After 20 comes 10."
          },
          {
            "id": "q19",
            "text": "What comes next: Red, Red, Blue, Red, Red, ...?",
            "type": "multiple-choice",
            "options": ["Red", "Blue", "Yellow"],
            "answer": "Blue",
            "explanation": "The pattern is two reds followed by one blue."
          },
          {
            "id": "q20",
            "text": "What is the next number: 1, 2, 3, 1, 2, ...?",
            "type": "multiple-choice",
            "options": ["1", "2", "3"],
            "answer": "3",
            "explanation": "The pattern repeats 1, 2, 3."
          }
        ]
      }
    ]
  },
  {
    "id": "data",
    "title": "Data",
    "description": "Reading charts and counting items.",
    "iconName": "BarChart",
    "color": "bg-lime-400",
    "lessons": [
      {
        "id": "data-learn",
        "title": "Learn Data",
        "type": "learn",
        "slides": [
          {
            "id": "d1",
            "title": "What is Data?",
            "content": "Data is information we collect. Let's count how many fruits we have!",
            "image": "https://picsum.photos/seed/data-intro/400/300",
            "interactive": {
              "type": "grid",
              "data": {
                "rows": 2,
                "cols": 5,
                "target": 7
              }
            }
          },
          {
            "id": "d2",
            "title": "Venn Diagrams",
            "content": "A Venn diagram helps us sort things into groups. Some things can belong to both groups!",
            "interactive": {
              "type": "venn",
              "data": {
                "leftLabel": "Red Things",
                "rightLabel": "Round Things",
                "items": [
                  { "text": "Apple", "categories": ["left", "right"] },
                  { "text": "Ball", "categories": ["right"] },
                  { "text": "Fire Truck", "categories": ["left"] },
                  { "text": "Sun", "categories": ["right"] }
                ]
              }
            }
          },
          {
            "id": "d3",
            "title": "Sorting Data",
            "content": "Let's sort these animals by where they live!",
            "interactive": {
              "type": "drag-drop",
              "data": {
                "items": [
                  { "id": "a1", "text": "Fish", "category": "Water" },
                  { "id": "a2", "text": "Shark", "category": "Water" },
                  { "id": "a3", "text": "Lion", "category": "Land" },
                  { "id": "a4", "text": "Elephant", "category": "Land" }
                ],
                "categories": ["Water", "Land"]
              }
            }
          }
        ]
      },
      {
        "id": "data-1",
        "title": "Data Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is a bar chart used for?",
            "type": "multiple-choice",
            "options": ["Showing data with bars", "Measuring weight", "Telling time"],
            "answer": "Showing data with bars",
            "explanation": "A bar chart uses bars of different heights to show information."
          },
          {
            "id": "q2",
            "text": "In a tally chart, what does a group of four lines with a diagonal slash through them mean?",
            "type": "multiple-choice",
            "options": ["4", "5", "6"],
            "answer": "5",
            "explanation": "We use a slash for the 5th mark to make counting easier."
          },
          {
            "id": "q3",
            "text": "If 5 kids like apples and 3 kids like bananas, how many kids were asked in total?",
            "type": "multiple-choice",
            "options": ["5", "8", "3"],
            "answer": "8",
            "explanation": "5 + 3 = 8 kids in total."
          },
          {
            "id": "q4",
            "text": "In a survey, 10 kids chose apples and 5 chose pears. Which fruit is more popular?",
            "type": "multiple-choice",
            "options": ["Apples", "Pears"],
            "answer": "Apples",
            "explanation": "More kids (10) chose apples than pears (5)."
          },
          {
            "id": "q5",
            "text": "If 2 kids like grapes and 8 like oranges, which fruit is least popular?",
            "type": "multiple-choice",
            "options": ["Grapes", "Oranges"],
            "answer": "Grapes",
            "explanation": "Fewer kids (2) chose grapes, so it is the least popular."
          },
          {
            "id": "q6",
            "text": "What is the title of a graph for?",
            "type": "multiple-choice",
            "options": ["To tell us what the graph is about", "To make it look pretty", "To show the numbers"],
            "answer": "To tell us what the graph is about",
            "explanation": "The title explains the information being shown in the graph."
          },
          {
            "id": "q7",
            "text": "If a bar for 'Dogs' on a graph reaches the number 7, how many people have dogs?",
            "type": "multiple-choice",
            "options": ["5", "6", "7"],
            "answer": "7",
            "explanation": "The height of the bar tells us the value, which is 7."
          },
          {
            "id": "q8",
            "text": "If a bar for 'Cats' on a graph reaches the number 4, how many people have cats?",
            "type": "multiple-choice",
            "options": ["3", "4", "5"],
            "answer": "4",
            "explanation": "The height of the bar tells us there are 4 cats."
          },
          {
            "id": "q9",
            "text": "If 7 people like Dogs and 4 people like Cats, how many more people like Dogs?",
            "type": "multiple-choice",
            "options": ["2", "3", "4"],
            "answer": "3",
            "explanation": "7 - 4 = 3 more people."
          },
          {
            "id": "q10",
            "text": "What do we call the information we collect for a graph?",
            "type": "multiple-choice",
            "options": ["Numbers", "Data", "Stories"],
            "answer": "Data",
            "explanation": "Information collected for study is called data."
          },
          {
            "id": "q11",
            "text": "If you ask your friends their favorite color, you are collecting...",
            "type": "multiple-choice",
            "options": ["Data", "Money", "Toys"],
            "answer": "Data",
            "explanation": "Collecting answers to a question is collecting data."
          },
          {
            "id": "q12",
            "text": "A pictograph uses...",
            "type": "multiple-choice",
            "options": ["Only numbers", "Pictures to show data", "Only words"],
            "answer": "Pictures to show data",
            "explanation": "Pictographs use symbols or pictures to represent numbers."
          },
          {
            "id": "q13",
            "text": "If one star picture means 2 stars, how many stars do 3 pictures represent?",
            "type": "multiple-choice",
            "options": ["3", "5", "6"],
            "answer": "6",
            "explanation": "3 groups of 2 equals 6 (2 + 2 + 2 = 6)."
          },
          {
            "id": "q14",
            "text": "If one circle means 5 students, how many students do 2 circles represent?",
            "type": "multiple-choice",
            "options": ["5", "10", "15"],
            "answer": "10",
            "explanation": "2 groups of 5 equals 10 (5 + 5 = 10)."
          },
          {
            "id": "q15",
            "text": "Which of these is a way to show data?",
            "type": "multiple-choice",
            "options": ["Bar chart", "Tally chart", "Both of these"],
            "answer": "Both of these",
            "explanation": "Both bar charts and tally charts are great ways to show data."
          },
          {
            "id": "q16",
            "text": "If 4 people like blue and 4 people like red, these colors are...",
            "type": "multiple-choice",
            "options": ["Equally popular", "Blue is more popular", "Red is more popular"],
            "answer": "Equally popular",
            "explanation": "Since the numbers are the same, they are equally popular."
          },
          {
            "id": "q17",
            "text": "In a tally chart, what does '|||' represent?",
            "type": "multiple-choice",
            "options": ["2", "3", "4"],
            "answer": "3",
            "explanation": "Each vertical line represents one item."
          },
          {
            "id": "q18",
            "text": "If a graph shows 0 for 'Fish', how many people have fish?",
            "type": "multiple-choice",
            "options": ["0", "1", "None"],
            "answer": "0",
            "explanation": "0 means no one chose that option."
          },
          {
            "id": "q19",
            "text": "What do we call the lines on the bottom and side of a graph?",
            "type": "multiple-choice",
            "options": ["Axes", "Borders", "Sticks"],
            "answer": "Axes",
            "explanation": "The horizontal and vertical lines are called axes."
          },
          {
            "id": "q20",
            "text": "Why do we use graphs and charts?",
            "type": "multiple-choice",
            "options": ["To see data easily", "To make math harder", "To draw pictures"],
            "answer": "To see data easily",
            "explanation": "Graphs help us understand information quickly by looking at them."
          }
        ]
      }
    ]
  },
  {
    "id": "oddeven",
    "title": "Odd & Even",
    "description": "Is it odd or is it even?",
    "iconName": "Binary",
    "color": "bg-rose-400",
    "lessons": [
      {
        "id": "oddeven-learn",
        "title": "Learn Odd & Even",
        "type": "learn",
        "slides": [
          {
            "id": "oe1",
            "title": "Even Numbers",
            "content": "Even numbers can be split into two equal groups. Like 2, 4, 6...",
            "image": "https://picsum.photos/seed/even/400/300",
            "interactive": {
              "type": "counter",
              "data": { "target": 4, "label": "Even Pairs" }
            }
          },
          {
            "id": "oe2",
            "title": "Odd Numbers",
            "content": "Odd numbers always have one left over! Like 1, 3, 5...",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Is 3 Odd or Even?",
                "options": ["Odd", "Even"],
                "answer": "Odd"
              }
            }
          },
          {
            "id": "oe3",
            "title": "Sorting Numbers",
            "content": "Sort these numbers into Odd and Even buckets.",
            "interactive": {
              "type": "drag-drop",
              "data": {
                "items": [
                  { "id": "n1", "text": "2", "category": "Even" },
                  { "id": "n2", "text": "5", "category": "Odd" },
                  { "id": "n3", "text": "8", "category": "Even" },
                  { "id": "n4", "text": "7", "category": "Odd" }
                ],
                "categories": ["Odd", "Even"]
              }
            }
          }
        ]
      },
      {
        "id": "odd-even-1",
        "title": "Odd & Even Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "Is the number 2 odd or even?",
            "type": "multiple-choice",
            "options": ["Odd", "Even"],
            "answer": "Even",
            "explanation": "2 can be split into two equal groups of 1, so it is even."
          },
          {
            "id": "q2",
            "text": "Is the number 7 odd or even?",
            "type": "multiple-choice",
            "options": ["Odd", "Even"],
            "answer": "Odd",
            "explanation": "7 cannot be split into two equal groups. One is always left over."
          },
          {
            "id": "q3",
            "text": "Even numbers always end in which digits?",
            "type": "multiple-choice",
            "options": ["1, 3, 5, 7, 9", "0, 2, 4, 6, 8", "5 only"],
            "answer": "0, 2, 4, 6, 8",
            "explanation": "Any number ending in 0, 2, 4, 6, or 8 is an even number."
          },
          {
            "id": "q4",
            "text": "Odd numbers always end in which digits?",
            "type": "multiple-choice",
            "options": ["1, 3, 5, 7, 9", "0, 2, 4, 6, 8", "0 only"],
            "answer": "1, 3, 5, 7, 9",
            "explanation": "Any number ending in 1, 3, 5, 7, or 9 is an odd number."
          },
          {
            "id": "q5",
            "text": "Is the number 10 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "10 ends in 0, so it is even."
          },
          {
            "id": "q6",
            "text": "Is the number 15 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Odd",
            "explanation": "15 ends in 5, so it is odd."
          },
          {
            "id": "q7",
            "text": "If you can pair up all items with none left over, the number is...",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "Even numbers can always be shared equally in pairs."
          },
          {
            "id": "q8",
            "text": "If one item is left over after pairing everything up, the number is...",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Odd",
            "explanation": "Odd numbers always have one left over when you try to pair them."
          },
          {
            "id": "q9",
            "text": "Is the number 24 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "24 ends in 4, so it is even."
          },
          {
            "id": "q10",
            "text": "Is the number 31 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Odd",
            "explanation": "31 ends in 1, so it is odd."
          },
          {
            "id": "q11",
            "text": "What is the next even number after 4?",
            "type": "multiple-choice",
            "options": ["5", "6", "8"],
            "answer": "6",
            "explanation": "Even numbers count by 2s: 2, 4, 6..."
          },
          {
            "id": "q12",
            "text": "What is the next odd number after 5?",
            "type": "multiple-choice",
            "options": ["6", "7", "9"],
            "answer": "7",
            "explanation": "Odd numbers count by 2s starting from 1: 1, 3, 5, 7..."
          },
          {
            "id": "q13",
            "text": "Is the number 0 considered even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "0 is an even number because it ends the sequence of even numbers."
          },
          {
            "id": "q14",
            "text": "Is the number 100 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "100 ends in 0, so it is even."
          },
          {
            "id": "q15",
            "text": "Is the number 99 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Odd",
            "explanation": "99 ends in 9, so it is odd."
          },
          {
            "id": "q16",
            "text": "If you add two even numbers (like 2 + 2), the result is always...",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "Even + Even = Even."
          },
          {
            "id": "q17",
            "text": "If you add two odd numbers (like 1 + 1), the result is always...",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "Odd + Odd = Even (because the two 'leftovers' make a pair!)."
          },
          {
            "id": "q18",
            "text": "Is the number 50 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Even",
            "explanation": "50 ends in 0, so it is even."
          },
          {
            "id": "q19",
            "text": "Is the number 13 even or odd?",
            "type": "multiple-choice",
            "options": ["Even", "Odd"],
            "answer": "Odd",
            "explanation": "13 ends in 3, so it is odd."
          },
          {
            "id": "q20",
            "text": "Which of these numbers is odd: 12, 14, 15?",
            "type": "multiple-choice",
            "options": ["12", "14", "15"],
            "answer": "15",
            "explanation": "15 ends in 5, while 12 and 14 end in even digits."
          }
        ]
      }
    ]
  },
  {
    "id": "ordinal",
    "title": "Ordinal Numbers",
    "description": "First, second, third, and more!",
    "iconName": "ListOrdered",
    "color": "bg-amber-400",
    "lessons": [
      {
        "id": "ordinal-learn",
        "title": "Learn Ordinal Numbers",
        "type": "learn",
        "slides": [
          {
            "id": "ord1",
            "title": "What are Ordinal Numbers?",
            "content": "Ordinal numbers tell us the position of something. 1st, 2nd, 3rd...",
            "image": "https://picsum.photos/seed/race/400/300",
            "interactive": {
              "type": "sorter",
              "data": {
                "items": [
                  { "id": "o1", "text": "3rd", "order": 2 },
                  { "id": "o2", "text": "1st", "order": 0 },
                  { "id": "o3", "text": "2nd", "order": 1 }
                ]
              }
            }
          },
          {
            "id": "ord2",
            "title": "Matching Positions",
            "content": "Match the number to its ordinal name.",
            "interactive": {
              "type": "matcher",
              "data": {
                "pairs": [
                  { "id": "m1", "left": "1", "right": "1st" },
                  { "id": "m2", "left": "2", "right": "2nd" },
                  { "id": "m3", "left": "3", "right": "3rd" }
                ]
              }
            }
          }
        ]
      },
      {
        "id": "ordinal-1",
        "title": "Ordinal Numbers Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is the ordinal number for 1?",
            "type": "multiple-choice",
            "options": ["1st (First)", "2nd (Second)", "3rd (Third)"],
            "answer": "1st (First)",
            "explanation": "1st is the ordinal number for 1."
          },
          {
            "id": "q2",
            "text": "What is the ordinal number for 2?",
            "type": "multiple-choice",
            "options": ["1st (First)", "2nd (Second)", "3rd (Third)"],
            "answer": "2nd (Second)",
            "explanation": "2nd is the ordinal number for 2."
          },
          {
            "id": "q3",
            "text": "What is the ordinal number for 3?",
            "type": "multiple-choice",
            "options": ["1st (First)", "2nd (Second)", "3rd (Third)"],
            "answer": "3rd (Third)",
            "explanation": "3rd is the ordinal number for 3."
          },
          {
            "id": "q4",
            "text": "What comes right after 3rd?",
            "type": "multiple-choice",
            "options": ["2nd", "4th", "5th"],
            "answer": "4th",
            "explanation": "The order is 1st, 2nd, 3rd, 4th."
          },
          {
            "id": "q5",
            "text": "If you are at the very front of a line, what position are you in?",
            "type": "multiple-choice",
            "options": ["1st", "Last", "Middle"],
            "answer": "1st",
            "explanation": "The front of the line is the 1st position."
          },
          {
            "id": "q6",
            "text": "What is the ordinal number for 10?",
            "type": "multiple-choice",
            "options": ["9th", "10th", "11th"],
            "answer": "10th",
            "explanation": "10th is the ordinal number for 10."
          },
          {
            "id": "q7",
            "text": "What is the ordinal number for 5?",
            "type": "multiple-choice",
            "options": ["4th", "5th", "6th"],
            "answer": "5th",
            "explanation": "5th is the ordinal number for 5."
          },
          {
            "id": "q8",
            "text": "If there are 5 people in a line and you are at the very end, what position are you in?",
            "type": "multiple-choice",
            "options": ["1st", "3rd", "5th"],
            "answer": "5th",
            "explanation": "The last person in a line of 5 is in the 5th position."
          },
          {
            "id": "q9",
            "text": "What is the ordinal number for 20?",
            "type": "multiple-choice",
            "options": ["19th", "20th", "21st"],
            "answer": "20th",
            "explanation": "20th is the ordinal number for 20."
          },
          {
            "id": "q10",
            "text": "What is the ordinal number for 11?",
            "type": "multiple-choice",
            "options": ["10th", "11th", "12th"],
            "answer": "11th",
            "explanation": "11th is the ordinal number for 11."
          },
          {
            "id": "q11",
            "text": "What is the ordinal number for 21?",
            "type": "multiple-choice",
            "options": ["20th", "21st", "22nd"],
            "answer": "21st",
            "explanation": "21st is the ordinal number for 21."
          },
          {
            "id": "q12",
            "text": "What is the ordinal number for 22?",
            "type": "multiple-choice",
            "options": ["21st", "22nd", "23rd"],
            "answer": "22nd",
            "explanation": "22nd is the ordinal number for 22."
          },
          {
            "id": "q13",
            "text": "What is the ordinal number for 23?",
            "type": "multiple-choice",
            "options": ["22nd", "23rd", "24th"],
            "answer": "23rd",
            "explanation": "23rd is the ordinal number for 23."
          },
          {
            "id": "q14",
            "text": "Which position is higher: 2nd or 5th?",
            "type": "multiple-choice",
            "options": ["2nd", "5th"],
            "answer": "5th",
            "explanation": "5th comes after 2nd, so it is a higher position."
          },
          {
            "id": "q15",
            "text": "If you win a race, what position did you finish in?",
            "type": "multiple-choice",
            "options": ["1st", "2nd", "3rd"],
            "answer": "1st",
            "explanation": "The winner always finishes in 1st place."
          },
          {
            "id": "q16",
            "text": "If you get the silver medal, what position did you finish in?",
            "type": "multiple-choice",
            "options": ["1st", "2nd", "3rd"],
            "answer": "2nd",
            "explanation": "Silver is for 2nd place."
          },
          {
            "id": "q17",
            "text": "If you get the bronze medal, what position did you finish in?",
            "type": "multiple-choice",
            "options": ["1st", "2nd", "3rd"],
            "answer": "3rd",
            "explanation": "Bronze is for 3rd place."
          },
          {
            "id": "q18",
            "text": "What is the ordinal number for 8?",
            "type": "multiple-choice",
            "options": ["7th", "8th", "9th"],
            "answer": "8th",
            "explanation": "8th is the ordinal number for 8."
          },
          {
            "id": "q19",
            "text": "What is the ordinal number for 9?",
            "type": "multiple-choice",
            "options": ["8th", "9th", "10th"],
            "answer": "9th",
            "explanation": "9th is the ordinal number for 9."
          },
          {
            "id": "q20",
            "text": "What position comes right before 2nd?",
            "type": "multiple-choice",
            "options": ["1st", "3rd", "None"],
            "answer": "1st",
            "explanation": "1st comes before 2nd."
          }
        ]
      }
    ]
  },
  {
    "id": "estimation",
    "title": "Estimation",
    "description": "Rounding to the nearest 10.",
    "iconName": "Zap",
    "color": "bg-violet-400",
    "lessons": [
      {
        "id": "estimation-learn",
        "title": "Learn Estimation",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "What is Estimation?",
            "content": "Estimation is a quick way to find an answer that is 'close enough'. We use it when we don't need an exact number.",
            "image": "https://picsum.photos/seed/guess/400/300"
          },
          {
            "id": "s2",
            "title": "Rounding to the Nearest 10",
            "content": "If a number ends in 1, 2, 3, or 4, we round DOWN. If it ends in 5, 6, 7, 8, or 9, we round UP.",
            "interactive": {
              "type": "sorter",
              "categories": ["Round Down", "Round Up"],
              "items": [
                { "id": "i1", "text": "12", "category": "Round Down" },
                { "id": "i2", "text": "18", "category": "Round Up" },
                { "id": "i3", "text": "44", "category": "Round Down" },
                { "id": "i4", "text": "45", "category": "Round Up" }
              ]
            }
          },
          {
            "id": "s3",
            "title": "Estimation Match",
            "content": "Match the number to its nearest 10.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "21", "right": "20" },
                { "id": "p2", "left": "39", "right": "40" },
                { "id": "p3", "left": "98", "right": "100" }
              ]
            }
          },
          {
            "id": "s4",
            "title": "Estimating Sums",
            "content": "19 + 11 is about 20 + 10. What is the estimated total?",
            "interactive": {
              "type": "choice",
              "question": "Estimated sum?",
              "options": ["20", "30", "40"],
              "answer": "30"
            }
          },
          {
            "id": "s5",
            "title": "Number Line Estimation",
            "content": "Where is 47 on the number line? Is it closer to 40 or 50?",
            "interactive": {
              "type": "number-line",
              "target": 50,
              "range": [40, 50],
              "step": 1
            }
          },
          {
            "id": "s6",
            "title": "Estimating Groups",
            "content": "If one jar has about 10 beans, how many are in 3 jars?",
            "interactive": {
              "type": "grid",
              "rows": 3,
              "cols": 10,
              "target": 30
            }
          },
          {
            "id": "s7",
            "title": "Balance the Estimate",
            "content": "48 is about...",
            "interactive": {
              "type": "balance",
              "left": 50,
              "right": 50,
              "options": [40, 50, 60]
            }
          },
          {
            "id": "s8",
            "title": "Rounding Pattern",
            "content": "10, 20, 30, 40, ...",
            "interactive": {
              "type": "pattern",
              "sequence": [10, 20, 30],
              "answer": 40
            }
          },
          {
            "id": "s9",
            "title": "Estimating Differences",
            "content": "52 - 19 is about 50 - 20.",
            "interactive": {
              "type": "choice",
              "question": "Estimated difference?",
              "options": ["20", "30", "40"],
              "answer": "30"
            }
          },
          {
            "id": "s10",
            "title": "Counting Large Groups",
            "content": "Estimate the number of dots. (Hint: count one row and multiply!)",
            "interactive": {
              "type": "counter",
              "target": 50,
              "label": "Estimated dots"
            }
          },
          {
            "id": "s11",
            "title": "Rounding 5s",
            "content": "Remember, 5 always rounds UP to the next 10.",
            "interactive": {
              "type": "choice",
              "question": "What is 25 rounded to the nearest 10?",
              "options": ["20", "30"],
              "answer": "30"
            }
          },
          {
            "id": "s12",
            "title": "Sorting Estimates",
            "content": "Sort these into 'Closer to 100' or 'Closer to 200'.",
            "interactive": {
              "type": "sorter",
              "categories": ["To 100", "To 200"],
              "items": [
                { "id": "i1", "text": "110", "category": "To 100" },
                { "id": "i2", "text": "190", "category": "To 200" },
                { "id": "i3", "text": "140", "category": "To 100" },
                { "id": "i4", "text": "160", "category": "To 200" }
              ]
            }
          },
          {
            "id": "s13",
            "title": "Matching Rounding",
            "content": "Match the numbers to their rounded versions.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "5", "right": "10" },
                { "id": "p2", "left": "14", "right": "10" },
                { "id": "p3", "left": "26", "right": "30" }
              ]
            }
          },
          {
            "id": "s14",
            "title": "Number Line Check",
            "content": "Find 82 on the number line. Is it closer to 80 or 90?",
            "interactive": {
              "type": "number-line",
              "target": 80,
              "range": [80, 90],
              "step": 1
            }
          },
          {
            "id": "s15",
            "title": "Grid Estimation",
            "content": "If each box has 5 apples, about how many in 4 boxes?",
            "interactive": {
              "type": "grid",
              "rows": 4,
              "cols": 5,
              "target": 20
            }
          },
          {
            "id": "s16",
            "title": "Balance the Sum",
            "content": "31 + 29 is about...",
            "interactive": {
              "type": "balance",
              "left": 60,
              "right": 60,
              "options": [50, 60, 70]
            }
          },
          {
            "id": "s17",
            "title": "Pattern of 10s",
            "content": "100, 90, 80, ...",
            "interactive": {
              "type": "pattern",
              "sequence": [100, 90, 80],
              "answer": 70
            }
          },
          {
            "id": "s18",
            "title": "Real World Estimation",
            "content": "If a toy costs $9.99, it is about...",
            "interactive": {
              "type": "choice",
              "question": "Estimated price?",
              "options": ["$9", "$10", "$11"],
              "answer": "$10"
            }
          },
          {
            "id": "s19",
            "title": "Sorting Rounding",
            "content": "Sort these into 'Rounds to 50'.",
            "interactive": {
              "type": "sorter",
              "categories": ["Rounds to 50", "Does Not"],
              "items": [
                { "id": "i1", "text": "48", "category": "Rounds to 50" },
                { "id": "i2", "text": "52", "category": "Rounds to 50" },
                { "id": "i3", "text": "44", "category": "Does Not" },
                { "id": "i4", "text": "56", "category": "Does Not" }
              ]
            }
          },
          {
            "id": "s20",
            "title": "Final Estimation",
            "content": "Estimate: 102 - 98 is about...",
            "interactive": {
              "type": "counter",
              "target": 5,
              "label": "Estimated difference"
            }
          },
          {
            "id": "s21",
            "title": "Estimation Expert!",
            "content": "You can now estimate numbers quickly! Ready for practice?",
            "image": "https://picsum.photos/seed/star/400/300"
          }
        ]
      },
      {
        "id": "estimation-1",
        "title": "Estimation Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What is estimation?",
            "type": "multiple-choice",
            "options": ["A quick guess that is close to the real answer", "An exact answer", "A random guess"],
            "answer": "A quick guess that is close to the real answer",
            "explanation": "Estimation is a way to find an answer that is 'close enough' quickly."
          },
          {
            "id": "q2",
            "text": "Estimate: 12 + 19 is about...",
            "type": "multiple-choice",
            "options": ["20", "30", "40"],
            "answer": "30",
            "explanation": "12 is about 10, and 19 is about 20. 10 + 20 = 30."
          },
          {
            "id": "q3",
            "text": "Estimate: 48 + 51 is about...",
            "type": "multiple-choice",
            "options": ["80", "90", "100"],
            "answer": "100",
            "explanation": "48 is about 50, and 51 is about 50. 50 + 50 = 100."
          },
          {
            "id": "q4",
            "text": "Estimate: 9 + 11 is about...",
            "type": "multiple-choice",
            "options": ["10", "20", "30"],
            "answer": "20",
            "explanation": "9 is about 10, and 11 is about 10. 10 + 10 = 20."
          },
          {
            "id": "q5",
            "text": "Estimate: 98 is close to...",
            "type": "multiple-choice",
            "options": ["90", "100", "110"],
            "answer": "100",
            "explanation": "98 is only 2 away from 100."
          },
          {
            "id": "q6",
            "text": "Estimate: 21 is close to...",
            "type": "multiple-choice",
            "options": ["10", "20", "30"],
            "answer": "20",
            "explanation": "21 is only 1 away from 20."
          },
          {
            "id": "q7",
            "text": "If a jar has about 50 beans, and you have 2 jars, about how many beans do you have?",
            "type": "multiple-choice",
            "options": ["50", "100", "150"],
            "answer": "100",
            "explanation": "50 + 50 = 100."
          },
          {
            "id": "q8",
            "text": "Estimate: 5 + 6 is about...",
            "type": "multiple-choice",
            "options": ["5", "10", "15"],
            "answer": "10",
            "explanation": "5 + 6 = 11, which is very close to 10."
          },
          {
            "id": "q9",
            "text": "Estimate: 102 - 5 is about...",
            "type": "multiple-choice",
            "options": ["90", "100", "110"],
            "answer": "100",
            "explanation": "102 is close to 100, and taking away 5 still keeps it near 100."
          },
          {
            "id": "q10",
            "text": "Estimate: 19 - 10 is about...",
            "type": "multiple-choice",
            "options": ["0", "10", "20"],
            "answer": "10",
            "explanation": "19 is about 20. 20 - 10 = 10."
          },
          {
            "id": "q11",
            "text": "Which is a better estimate for 38 + 41?",
            "type": "multiple-choice",
            "options": ["80", "100"],
            "answer": "80",
            "explanation": "38 is about 40, and 41 is about 40. 40 + 40 = 80."
          },
          {
            "id": "q12",
            "text": "Which is a better estimate for 12 + 13?",
            "type": "multiple-choice",
            "options": ["25", "50"],
            "answer": "25",
            "explanation": "12 + 13 is exactly 25!"
          },
          {
            "id": "q13",
            "text": "Estimate: 512 is close to...",
            "type": "multiple-choice",
            "options": ["500", "600", "400"],
            "answer": "500",
            "explanation": "512 is only 12 away from 500."
          },
          {
            "id": "q14",
            "text": "Estimate: 890 is close to...",
            "type": "multiple-choice",
            "options": ["800", "900", "1000"],
            "answer": "900",
            "explanation": "890 is only 10 away from 900."
          },
          {
            "id": "q15",
            "text": "Estimate: 24 + 26 is about...",
            "type": "multiple-choice",
            "options": ["40", "50", "60"],
            "answer": "50",
            "explanation": "24 is about 25, and 26 is about 25. 25 + 25 = 50."
          },
          {
            "id": "q16",
            "text": "If one apple costs about $1, about how much do 5 apples cost?",
            "type": "multiple-choice",
            "options": ["$1", "$5", "$10"],
            "answer": "$5",
            "explanation": "5 groups of $1 is $5."
          },
          {
            "id": "q17",
            "text": "Estimate: 99 + 1 is exactly 100, but it is also about...",
            "type": "multiple-choice",
            "options": ["90", "100", "110"],
            "answer": "100",
            "explanation": "100 is the best estimate here."
          },
          {
            "id": "q18",
            "text": "Estimate: 45 is halfway between 40 and 50. We usually estimate it as...",
            "type": "multiple-choice",
            "options": ["40", "50"],
            "answer": "50",
            "explanation": "In math, we usually round up when a number ends in 5."
          },
          {
            "id": "q19",
            "text": "Estimate: 72 - 21 is about...",
            "type": "multiple-choice",
            "options": ["40", "50", "60"],
            "answer": "50",
            "explanation": "70 - 20 = 50."
          },
          {
            "id": "q20",
            "text": "Why do we estimate in math?",
            "type": "multiple-choice",
            "options": ["To check if our answer makes sense", "To avoid doing real math", "To get the wrong answer"],
            "answer": "To check if our answer makes sense",
            "explanation": "Estimation helps us see if our calculated answer is reasonable."
          }
        ]
      }
    ]
  },
  {
    "id": "shapes3d",
    "title": "3D Shapes",
    "description": "Cubes, spheres, and cones.",
    "iconName": "Box",
    "color": "bg-fuchsia-400",
    "lessons": [
      {
        "id": "shapes3d-learn",
        "title": "Learn 3D Shapes",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "What are 3D Shapes?",
            "content": "3D shapes are solid shapes. They have length, width, and height. You can hold them!",
            "image": "https://picsum.photos/seed/3dshapes/400/300"
          },
          {
            "id": "s2",
            "title": "The Sphere",
            "content": "A sphere is perfectly round. It has no flat faces and no corners. It can roll!",
            "interactive": {
              "type": "counter",
              "target": 0,
              "label": "Flat faces on a sphere"
            }
          },
          {
            "id": "s3",
            "title": "The Cube",
            "content": "A cube has 6 flat square faces. All sides are the same length.",
            "interactive": {
              "type": "choice",
              "question": "How many faces does a cube have?",
              "options": ["4", "6", "8"],
              "answer": "6"
            }
          },
          {
            "id": "s4",
            "title": "Matching Shapes to Objects",
            "content": "Match the 3D shape to a real-world object.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "Sphere", "right": "Ball" },
                { "id": "p2", "left": "Cube", "right": "Dice" },
                { "id": "p3", "left": "Cylinder", "right": "Soda Can" }
              ]
            }
          },
          {
            "id": "s5",
            "title": "Sorting Shapes",
            "content": "Sort these into 'Can Roll' and 'Cannot Roll'.",
            "interactive": {
              "type": "sorter",
              "categories": ["Can Roll", "Cannot Roll"],
              "items": [
                { "id": "i1", "text": "Sphere", "category": "Can Roll" },
                { "id": "i2", "text": "Cube", "category": "Cannot Roll" },
                { "id": "i3", "text": "Cylinder", "category": "Can Roll" },
                { "id": "i4", "text": "Cone", "category": "Can Roll" }
              ]
            }
          },
          {
            "id": "s6",
            "title": "The Cylinder",
            "content": "A cylinder has 2 flat circular faces and 1 curved side.",
            "interactive": {
              "type": "choice",
              "question": "How many flat faces on a cylinder?",
              "options": ["1", "2", "3"],
              "answer": "2"
            }
          },
          {
            "id": "s7",
            "title": "The Cone",
            "content": "A cone has 1 flat circular face and 1 point at the top.",
            "interactive": {
              "type": "choice",
              "question": "What shape is the base of a cone?",
              "options": ["Square", "Circle", "Triangle"],
              "answer": "Circle"
            }
          },
          {
            "id": "s8",
            "title": "Counting Corners (Vertices)",
            "content": "A cube has 8 corners. How many corners does a sphere have?",
            "interactive": {
              "type": "counter",
              "target": 0,
              "label": "Corners on a sphere"
            }
          },
          {
            "id": "s9",
            "title": "Shape Pattern",
            "content": "Cube, Sphere, Cube, ...",
            "interactive": {
              "type": "pattern",
              "sequence": ["Cube", "Sphere", "Cube"],
              "answer": "Sphere"
            }
          },
          {
            "id": "s10",
            "title": "Balance the Faces",
            "content": "A cube has 6 faces. How many faces do two cubes have together?",
            "interactive": {
              "type": "balance",
              "left": 12,
              "right": 12,
              "options": [10, 12, 14]
            }
          },
          {
            "id": "s11",
            "title": "Rectangular Prism",
            "content": "A rectangular prism is like a long cube. Its faces are rectangles.",
            "interactive": {
              "type": "choice",
              "question": "Which object is a rectangular prism?",
              "options": ["Brick", "Orange", "Party Hat"],
              "answer": "Brick"
            }
          },
          {
            "id": "s12",
            "title": "Sorting by Faces",
            "content": "Sort these into 'Has Curved Faces' and 'Only Flat Faces'.",
            "interactive": {
              "type": "sorter",
              "categories": ["Curved", "Flat Only"],
              "items": [
                { "id": "i1", "text": "Sphere", "category": "Curved" },
                { "id": "i2", "text": "Cube", "category": "Flat Only" },
                { "id": "i3", "text": "Cone", "category": "Curved" },
                { "id": "i4", "text": "Rectangular Prism", "category": "Flat Only" }
              ]
            }
          },
          {
            "id": "s13",
            "title": "Matching Vertices",
            "content": "Match the shape to the number of vertices (corners).",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "Cube", "right": "8" },
                { "id": "p2", "left": "Sphere", "right": "0" },
                { "id": "p3", "left": "Cone", "right": "1" }
              ]
            }
          },
          {
            "id": "s14",
            "title": "Number Line of Edges",
            "content": "A cube has 12 edges. Find 12 on the number line.",
            "interactive": {
              "type": "number-line",
              "target": 12,
              "range": [0, 15],
              "step": 1
            }
          },
          {
            "id": "s15",
            "title": "Grid of Cubes",
            "content": "If we stack cubes in 3 rows and 3 columns, how many cubes do we have?",
            "interactive": {
              "type": "grid",
              "rows": 3,
              "cols": 3,
              "target": 9
            }
          },
          {
            "id": "s16",
            "title": "Balance the Edges",
            "content": "A rectangular prism also has 12 edges. Make it balance!",
            "interactive": {
              "type": "balance",
              "left": 12,
              "right": 12,
              "options": [8, 10, 12]
            }
          },
          {
            "id": "s17",
            "title": "Complex Pattern",
            "content": "Sphere, Cylinder, Cone, Sphere, ...",
            "interactive": {
              "type": "pattern",
              "sequence": ["Sphere", "Cylinder", "Cone", "Sphere"],
              "answer": "Cylinder"
            }
          },
          {
            "id": "s18",
            "title": "Pyramid",
            "content": "A pyramid has a square base and 4 triangular faces that meet at a point.",
            "interactive": {
              "type": "choice",
              "question": "How many faces on a square pyramid?",
              "options": ["4", "5", "6"],
              "answer": "5"
            }
          },
          {
            "id": "s19",
            "title": "Sorting by Edges",
            "content": "Sort these into 'Has Edges' and 'No Edges'.",
            "interactive": {
              "type": "sorter",
              "categories": ["Edges", "No Edges"],
              "items": [
                { "id": "i1", "text": "Cube", "category": "Edges" },
                { "id": "i2", "text": "Sphere", "category": "No Edges" },
                { "id": "i3", "text": "Pyramid", "category": "Edges" },
                { "id": "i4", "text": "Cylinder", "category": "Edges" }
              ]
            }
          },
          {
            "id": "s20",
            "title": "Counting Vertices",
            "content": "Count the corners on a rectangular prism.",
            "interactive": {
              "type": "counter",
              "target": 8,
              "label": "Vertices"
            }
          },
          {
            "id": "s21",
            "title": "3D Shape Master!",
            "content": "You've learned about solid shapes! Ready to practice?",
            "image": "https://picsum.photos/seed/shapes/400/300"
          }
        ]
      },
      {
        "id": "shapes3d-1",
        "title": "3D Shapes Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "Which of these looks like a ball?",
            "type": "multiple-choice",
            "options": ["Sphere", "Cube", "Cone"],
            "answer": "Sphere",
            "explanation": "A sphere is round like a ball.",
            "image": "https://picsum.photos/seed/sphere-ball/300/200"
          },
          {
            "id": "q2",
            "text": "Which shape looks like a dice?",
            "type": "multiple-choice",
            "options": ["Sphere", "Cube", "Cylinder"],
            "answer": "Cube",
            "explanation": "A cube has 6 square faces, just like a dice.",
            "image": "https://picsum.photos/seed/cube-dice/300/200"
          },
          {
            "id": "q3",
            "text": "Which shape looks like a party hat?",
            "type": "multiple-choice",
            "options": ["Cone", "Sphere", "Cube"],
            "answer": "Cone",
            "explanation": "A cone has a circular base and a pointy top.",
            "image": "https://picsum.photos/seed/cone-hat/300/200"
          },
          {
            "id": "q4",
            "text": "Which shape looks like a soda can?",
            "type": "multiple-choice",
            "options": ["Cylinder", "Cube", "Sphere"],
            "answer": "Cylinder",
            "explanation": "A cylinder has two circular ends and a curved side.",
            "image": "https://picsum.photos/seed/cylinder-can/300/200"
          },
          {
            "id": "q5",
            "text": "How many faces does a cube have?",
            "type": "multiple-choice",
            "options": ["4", "6", "8"],
            "answer": "6",
            "explanation": "A cube has 6 flat square faces."
          },
          {
            "id": "q6",
            "text": "Which shape can roll easily in any direction?",
            "type": "multiple-choice",
            "options": ["Sphere", "Cube", "Pyramid"],
            "answer": "Sphere",
            "explanation": "A sphere is perfectly round, so it rolls easily."
          },
          {
            "id": "q7",
            "text": "Which shape has a flat circular base and a point at the top?",
            "type": "multiple-choice",
            "options": ["Cone", "Cylinder", "Cube"],
            "answer": "Cone",
            "explanation": "That is the definition of a cone!"
          },
          {
            "id": "q8",
            "text": "Which of these is a 3D shape?",
            "type": "multiple-choice",
            "options": ["Square", "Circle", "Cube"],
            "answer": "Cube",
            "explanation": "A cube is 3D (solid), while squares and circles are 2D (flat)."
          },
          {
            "id": "q9",
            "text": "Which shape looks like a brick?",
            "type": "multiple-choice",
            "options": ["Rectangular Prism", "Sphere", "Cone"],
            "answer": "Rectangular Prism",
            "explanation": "A brick is a rectangular prism because its faces are rectangles."
          },
          {
            "id": "q10",
            "text": "Which shape has 0 flat faces?",
            "type": "multiple-choice",
            "options": ["Sphere", "Cube", "Cylinder"],
            "answer": "Sphere",
            "explanation": "A sphere is completely curved and has no flat surfaces."
          },
          {
            "id": "q11",
            "text": "How many vertices (corners) does a cube have?",
            "type": "multiple-choice",
            "options": ["4", "6", "8"],
            "answer": "8",
            "explanation": "A cube has 8 vertices."
          },
          {
            "id": "q12",
            "text": "Which shape has a square base and 4 triangular faces?",
            "type": "multiple-choice",
            "options": ["Pyramid", "Cube", "Cone"],
            "answer": "Pyramid",
            "explanation": "That's a square-based pyramid."
          },
          {
            "id": "q13",
            "text": "How many edges does a cube have?",
            "type": "multiple-choice",
            "options": ["8", "10", "12"],
            "answer": "12",
            "explanation": "A cube has 12 edges."
          },
          {
            "id": "q14",
            "text": "Which shape has 2 circular faces and 0 vertices?",
            "type": "multiple-choice",
            "options": ["Cylinder", "Cone", "Sphere"],
            "answer": "Cylinder",
            "explanation": "A cylinder has no corners!"
          },
          {
            "id": "q15",
            "text": "Which shape is NOT solid?",
            "type": "multiple-choice",
            "options": ["Sphere", "Circle", "Cone"],
            "answer": "Circle",
            "explanation": "A circle is a 2D (flat) shape."
          },
          {
            "id": "q16",
            "text": "What is another name for corners in 3D shapes?",
            "type": "multiple-choice",
            "options": ["Edges", "Faces", "Vertices"],
            "answer": "Vertices",
            "explanation": "Vertices is the mathematical name for corners."
          },
          {
            "id": "q17",
            "text": "Which shape can both roll and slide?",
            "type": "multiple-choice",
            "options": ["Sphere", "Cylinder", "Cube"],
            "answer": "Cylinder",
            "explanation": "A cylinder can roll on its side and slide on its flat ends."
          },
          {
            "id": "q18",
            "text": "How many faces does a rectangular prism have?",
            "type": "multiple-choice",
            "options": ["4", "6", "8"],
            "answer": "6",
            "explanation": "Just like a cube, it has 6 faces."
          },
          {
            "id": "q19",
            "text": "Which shape has only 1 vertex?",
            "type": "multiple-choice",
            "options": ["Cone", "Cylinder", "Sphere"],
            "answer": "Cone",
            "explanation": "A cone has one point at the top."
          },
          {
            "id": "q20",
            "text": "Which shape looks like an orange?",
            "type": "multiple-choice",
            "options": ["Sphere", "Cube", "Cylinder"],
            "answer": "Sphere",
            "explanation": "An orange is a sphere."
          }
        ]
      }
    ]
  },
  {
    "id": "capacity",
    "title": "Capacity",
    "description": "Liters and milliliters.",
    "iconName": "Droplets",
    "color": "bg-sky-400",
    "lessons": [
      {
        "id": "capacity-learn",
        "title": "Learn Capacity",
        "type": "learn",
        "slides": [
          {
            "id": "s1",
            "title": "What is Capacity?",
            "content": "Capacity is how much a container can hold. We measure liquids like water, milk, and juice.",
            "image": "https://picsum.photos/seed/water/400/300"
          },
          {
            "id": "s2",
            "title": "Liters and Milliliters",
            "content": "We use Liters (L) for large amounts and Milliliters (mL) for small amounts. 1 Liter = 1000 Milliliters.",
            "interactive": {
              "type": "choice",
              "question": "Which is more?",
              "options": ["1 Liter", "500 Milliliters"],
              "answer": "1 Liter"
            }
          },
          {
            "id": "s3",
            "title": "Matching Containers",
            "content": "Match the container to its likely capacity.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "Spoon", "right": "5 mL" },
                { "id": "p2", "left": "Water Bottle", "right": "500 mL" },
                { "id": "p3", "left": "Bucket", "right": "10 L" }
              ]
            }
          },
          {
            "id": "s4",
            "title": "Sorting Capacity",
            "content": "Sort these into 'Less than 1 Liter' and 'More than 1 Liter'.",
            "interactive": {
              "type": "sorter",
              "categories": ["Less than 1L", "More than 1L"],
              "items": [
                { "id": "i1", "text": "Cup of Tea", "category": "Less than 1L" },
                { "id": "i2", "text": "Bathtub", "category": "More than 1L" },
                { "id": "i3", "text": "Juice Box", "category": "Less than 1L" },
                { "id": "i4", "text": "Swimming Pool", "category": "More than 1L" }
              ]
            }
          },
          {
            "id": "s5",
            "title": "Measuring Jug",
            "content": "Look at the jug. How many mL of water are in it?",
            "interactive": {
              "type": "counter",
              "target": 500,
              "label": "mL of water"
            }
          },
          {
            "id": "s6",
            "title": "Capacity Pattern",
            "content": "250mL, 500mL, 750mL, ...",
            "interactive": {
              "type": "pattern",
              "sequence": [250, 500, 750],
              "answer": 1000
            }
          },
          {
            "id": "s7",
            "title": "Balance the Liquid",
            "content": "Two 500mL bottles equal...",
            "interactive": {
              "type": "balance",
              "left": 1000,
              "right": 1000,
              "options": [500, 1000, 1500]
            }
          },
          {
            "id": "s8",
            "title": "Number Line Capacity",
            "content": "Mark 2 Liters on the number line.",
            "interactive": {
              "type": "number-line",
              "target": 2,
              "range": [0, 5],
              "step": 0.5
            }
          },
          {
            "id": "s9",
            "title": "Grid of Glasses",
            "content": "If one glass holds 200mL, how much do 5 glasses hold?",
            "interactive": {
              "type": "grid",
              "rows": 1,
              "cols": 5,
              "target": 1000
            }
          },
          {
            "id": "s10",
            "title": "Estimating Capacity",
            "content": "About how much water does a large bucket hold?",
            "interactive": {
              "type": "choice",
              "question": "Estimate",
              "options": ["10 mL", "10 L", "100 L"],
              "answer": "10 L"
            }
          },
          {
            "id": "s11",
            "title": "Milliliters to Liters",
            "content": "2000 mL is equal to how many Liters?",
            "interactive": {
              "type": "counter",
              "target": 2,
              "label": "Liters"
            }
          },
          {
            "id": "s12",
            "title": "Sorting Units",
            "content": "Sort these by the unit you would use.",
            "interactive": {
              "type": "sorter",
              "categories": ["Use mL", "Use L"],
              "items": [
                { "id": "i1", "text": "Eye Drops", "category": "Use mL" },
                { "id": "i2", "text": "Gasoline Tank", "category": "Use L" },
                { "id": "i3", "text": "Perfume Bottle", "category": "Use mL" },
                { "id": "i4", "text": "Milk Carton", "category": "Use L" }
              ]
            }
          },
          {
            "id": "s13",
            "title": "Matching Totals",
            "content": "Match the additions to their total capacity.",
            "interactive": {
              "type": "matcher",
              "pairs": [
                { "id": "p1", "left": "500mL + 500mL", "right": "1 L" },
                { "id": "p2", "left": "250mL + 250mL", "right": "500 mL" },
                { "id": "p3", "left": "1L + 2L", "right": "3 L" }
              ]
            }
          },
          {
            "id": "s14",
            "title": "Number Line Check",
            "content": "Find 750mL on the number line (between 500 and 1000).",
            "interactive": {
              "type": "number-line",
              "target": 750,
              "range": [0, 1000],
              "step": 250
            }
          },
          {
            "id": "s15",
            "title": "Grid of Drops",
            "content": "If 10 drops make 1mL, how many drops for 5mL?",
            "interactive": {
              "type": "grid",
              "rows": 5,
              "cols": 10,
              "target": 50
            }
          },
          {
            "id": "s16",
            "title": "Balance the Jugs",
            "content": "1.5 Liters is equal to...",
            "interactive": {
              "type": "balance",
              "left": 1500,
              "right": 1500,
              "options": [1000, 1500, 2000]
            }
          },
          {
            "id": "s17",
            "title": "Decreasing Pattern",
            "content": "10L, 8L, 6L, ...",
            "interactive": {
              "type": "pattern",
              "sequence": [10, 8, 6],
              "answer": 4
            }
          },
          {
            "id": "s18",
            "title": "Cooking Capacity",
            "content": "A recipe needs 250mL of milk. How many cups is that roughly?",
            "interactive": {
              "type": "choice",
              "question": "Estimate",
              "options": ["1 cup", "4 cups", "10 cups"],
              "answer": "1 cup"
            }
          },
          {
            "id": "s19",
            "title": "Sorting Fullness",
            "content": "Sort these into 'Full' or 'Empty'.",
            "interactive": {
              "type": "sorter",
              "categories": ["Full", "Empty"],
              "items": [
                { "id": "i1", "text": "Jug at 1000/1000mL", "category": "Full" },
                { "id": "i2", "text": "Bottle at 0/500mL", "category": "Empty" },
                { "id": "i3", "text": "Glass with no water", "category": "Empty" },
                { "id": "i4", "text": "Bucket at 10/10L", "category": "Full" }
              ]
            }
          },
          {
            "id": "s20",
            "title": "Final Capacity Check",
            "content": "How many 250mL cups fill a 1 Liter jug?",
            "interactive": {
              "type": "counter",
              "target": 4,
              "label": "Cups"
            }
          },
          {
            "id": "s21",
            "title": "Capacity Expert!",
            "content": "You can now measure liquids like a pro! Ready for practice?",
            "image": "https://picsum.photos/seed/juice/400/300"
          }
        ]
      },
      {
        "id": "capacity-1",
        "title": "Capacity Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "Which holds more: a spoon or a bucket?",
            "type": "multiple-choice",
            "options": ["Spoon", "Bucket"],
            "answer": "Bucket",
            "explanation": "A bucket is much larger and can hold more water than a spoon.",
            "image": "https://picsum.photos/seed/bucket/300/200"
          },
          {
            "id": "q2",
            "text": "How many milliliters (ml) are in 1 liter (L)?",
            "type": "multiple-choice",
            "options": ["100 ml", "500 ml", "1000 ml"],
            "answer": "1000 ml",
            "explanation": "There are exactly 1000 milliliters in 1 liter."
          },
          {
            "id": "q3",
            "text": "Which unit would you use to measure the amount of juice in a small glass?",
            "type": "multiple-choice",
            "options": ["Milliliters (ml)", "Liters (L)"],
            "answer": "Milliliters (ml)",
            "explanation": "Milliliters are used for smaller amounts of liquid."
          },
          {
            "id": "q4",
            "text": "Which unit would you use to measure the water in a swimming pool?",
            "type": "multiple-choice",
            "options": ["Milliliters (ml)", "Liters (L)"],
            "answer": "Liters (L)",
            "explanation": "Liters are used for larger amounts of liquid."
          },
          {
            "id": "q5",
            "text": "If you have two 500ml bottles of water, how much do you have in total?",
            "type": "multiple-choice",
            "options": ["500 ml", "1000 ml (1 Liter)", "2000 ml"],
            "answer": "1000 ml (1 Liter)",
            "explanation": "500 + 500 = 1000 ml, which is the same as 1 Liter."
          },
          {
            "id": "q6",
            "text": "Which holds less: a bathtub or a teacup?",
            "type": "multiple-choice",
            "options": ["Bathtub", "Teacup"],
            "answer": "Teacup",
            "explanation": "A teacup is small and holds much less than a bathtub."
          },
          {
            "id": "q7",
            "text": "About how much liquid does a standard juice box hold?",
            "type": "multiple-choice",
            "options": ["200 ml", "2 Liters", "20 Liters"],
            "answer": "200 ml",
            "explanation": "A juice box is small, so 200 ml is a reasonable amount."
          },
          {
            "id": "q8",
            "text": "If a jug holds 2 liters, how many 1-liter bottles can it fill?",
            "type": "multiple-choice",
            "options": ["1", "2", "3"],
            "answer": "2",
            "explanation": "2 liters can be split into two 1-liter bottles."
          },
          {
            "id": "q9",
            "text": "Which is more: 500 ml or 1 Liter?",
            "type": "multiple-choice",
            "options": ["500 ml", "1 Liter"],
            "answer": "1 Liter",
            "explanation": "1 Liter is 1000 ml, which is more than 500 ml."
          },
          {
            "id": "q10",
            "text": "What does 'capacity' mean?",
            "type": "multiple-choice",
            "options": ["How heavy something is", "How much a container can hold", "How tall something is"],
            "answer": "How much a container can hold",
            "explanation": "Capacity is the amount of liquid a container can hold."
          },
          {
            "id": "q11",
            "text": "How many 250 ml cups fill a 1 liter jug?",
            "type": "multiple-choice",
            "options": ["2", "4", "8"],
            "answer": "4",
            "explanation": "250 x 4 = 1000 ml (1 L)."
          },
          {
            "id": "q12",
            "text": "Which is the smallest amount?",
            "type": "multiple-choice",
            "options": ["10 ml", "100 ml", "1 L"],
            "answer": "10 ml",
            "explanation": "10 ml is the smallest volume listed."
          },
          {
            "id": "q13",
            "text": "If you have 3 liters of milk and use 1 liter, how much is left?",
            "type": "multiple-choice",
            "options": ["1 L", "2 L", "3 L"],
            "answer": "2 L",
            "explanation": "3 - 1 = 2 liters."
          },
          {
            "id": "q14",
            "text": "What unit is used for a large bottle of soda?",
            "type": "multiple-choice",
            "options": ["Milliliters", "Liters"],
            "answer": "Liters",
            "explanation": "Large bottles are usually 1 or 2 Liters."
          },
          {
            "id": "q15",
            "text": "How many 500 ml bottles make 3 Liters?",
            "type": "multiple-choice",
            "options": ["3", "6", "9"],
            "answer": "6",
            "explanation": "Two bottles make 1L, so six bottles make 3L."
          },
          {
            "id": "q16",
            "text": "Which holds more: 750 ml or 1 Liter?",
            "type": "multiple-choice",
            "options": ["750 ml", "1 Liter"],
            "answer": "1 Liter",
            "explanation": "1 Liter is 1000 ml."
          },
          {
            "id": "q17",
            "text": "A standard teaspoon holds about...",
            "type": "multiple-choice",
            "options": ["5 ml", "50 ml", "500 ml"],
            "answer": "5 ml",
            "explanation": "Teaspoons are very small."
          },
          {
            "id": "q18",
            "text": "How many milliliters are in 2 Liters?",
            "type": "multiple-choice",
            "options": ["200 ml", "2000 ml", "20000 ml"],
            "answer": "2000 ml",
            "explanation": "2 x 1000 = 2000."
          },
          {
            "id": "q19",
            "text": "Which container would you use to measure exactly 10 ml?",
            "type": "multiple-choice",
            "options": ["Measuring spoon", "Bucket", "Bathtub"],
            "answer": "Measuring spoon",
            "explanation": "Spoons are used for small, precise measurements."
          },
          {
            "id": "q20",
            "text": "If a tank holds 100 L, is it bigger than a 10 L bucket?",
            "type": "multiple-choice",
            "options": ["Yes", "No"],
            "answer": "Yes",
            "explanation": "100 L is much more than 10 L."
          }
        ]
      }
    ]
  },
  {
    "id": "temperature",
    "title": "Temperature",
    "description": "Hot or cold? Reading degrees.",
    "iconName": "Thermometer",
    "color": "bg-red-500",
    "lessons": [
      {
        "id": "temperature-learn",
        "title": "Learn Temperature",
        "type": "learn",
        "slides": [
          {
            "id": "t1",
            "title": "Hot and Cold",
            "content": "Temperature tells us how hot or cold something is.",
            "image": "https://picsum.photos/seed/temp/400/300",
            "interactive": {
              "type": "slider",
              "data": { "min": 0, "max": 100, "target": 80, "label": "Hot (80°C)" }
            }
          },
          {
            "id": "t2",
            "title": "Sorting Temperatures",
            "content": "Sort these into Hot and Cold categories.",
            "interactive": {
              "type": "drag-drop",
              "data": {
                "items": [
                  { "id": "i1", "text": "Ice Cream", "category": "Cold" },
                  { "id": "i2", "text": "Hot Soup", "category": "Hot" },
                  { "id": "i3", "text": "Snow", "category": "Cold" },
                  { "id": "i4", "text": "Fire", "category": "Hot" }
                ],
                "categories": ["Hot", "Cold"]
              }
            }
          }
        ]
      },
      {
        "id": "temperature-1",
        "title": "Temperature Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "What tool do we use to measure temperature?",
            "type": "multiple-choice",
            "options": ["Ruler", "Thermometer", "Scale"],
            "answer": "Thermometer",
            "explanation": "A thermometer is used to measure how hot or cold something is."
          },
          {
            "id": "q2",
            "text": "At what temperature does water freeze?",
            "type": "multiple-choice",
            "options": ["0°C", "50°C", "100°C"],
            "answer": "0°C",
            "explanation": "Water turns into ice at 0 degrees Celsius."
          },
          {
            "id": "q3",
            "text": "At what temperature does water boil?",
            "type": "multiple-choice",
            "options": ["0°C", "50°C", "100°C"],
            "answer": "100°C",
            "explanation": "Water boils and turns into steam at 100 degrees Celsius."
          },
          {
            "id": "q4",
            "text": "If the temperature is 20°C and it goes up by 5°C, what is the new temperature?",
            "type": "multiple-choice",
            "options": ["15°C", "25°C", "30°C"],
            "answer": "25°C",
            "explanation": "20 + 5 = 25."
          },
          {
            "id": "q5",
            "text": "If the temperature is 15°C and it drops by 10°C, what is the new temperature?",
            "type": "multiple-choice",
            "options": ["5°C", "10°C", "25°C"],
            "answer": "5°C",
            "explanation": "15 - 10 = 5."
          },
          {
            "id": "q6",
            "text": "Which temperature is warmer: 10°C or 30°C?",
            "type": "multiple-choice",
            "options": ["10°C", "30°C"],
            "answer": "30°C",
            "explanation": "A higher number means it is warmer."
          },
          {
            "id": "q7",
            "text": "What is a normal body temperature for a human?",
            "type": "multiple-choice",
            "options": ["20°C", "37°C", "100°C"],
            "answer": "37°C",
            "explanation": "Around 37°C is the average body temperature for a healthy person."
          },
          {
            "id": "q8",
            "text": "If it is snowing outside, what is a likely temperature?",
            "type": "multiple-choice",
            "options": ["-2°C", "25°C", "40°C"],
            "answer": "-2°C",
            "explanation": "Snow happens when it is below freezing (0°C)."
          },
          {
            "id": "q9",
            "text": "Which is colder: -5°C or 5°C?",
            "type": "multiple-choice",
            "options": ["-5°C", "5°C"],
            "answer": "-5°C",
            "explanation": "Negative numbers are colder than positive numbers."
          },
          {
            "id": "q10",
            "text": "What unit do we usually use to measure temperature in many countries?",
            "type": "multiple-choice",
            "options": ["Kilograms", "Celsius", "Meters"],
            "answer": "Celsius",
            "explanation": "Celsius (°C) is a common unit for temperature."
          }
        ]
      }
    ]
  },
  {
    "id": "symmetry",
    "title": "Symmetry",
    "description": "Matching halves and mirror lines.",
    "iconName": "Columns",
    "color": "bg-indigo-500",
    "lessons": [
      {
        "id": "symmetry-learn",
        "title": "Learn Symmetry",
        "type": "learn",
        "slides": [
          {
            "id": "sym1",
            "title": "What is Symmetry?",
            "content": "Symmetry is when both sides of something are exactly the same.",
            "image": "https://picsum.photos/seed/butterfly/400/300",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Is a butterfly symmetrical?",
                "options": ["Yes", "No"],
                "answer": "Yes"
              }
            }
          },
          {
            "id": "sym2",
            "title": "Find the Symmetrical Shape",
            "content": "Which of these shapes is symmetrical?",
            "interactive": {
              "type": "grid",
              "data": {
                "rows": 1,
                "cols": 2,
                "items": [
                  { "id": "s1", "content": "Circle", "correct": true },
                  { "id": "s2", "content": "L-Shape", "correct": false }
                ]
              }
            }
          }
        ]
      },
      {
        "id": "symmetry-1",
        "title": "Symmetry Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "If you fold a square in half from corner to corner, is it symmetrical?",
            "type": "multiple-choice",
            "options": ["Yes", "No"],
            "answer": "Yes",
            "explanation": "A square has diagonal lines of symmetry!"
          },
          {
            "id": "q2",
            "text": "Which of these letters has a vertical line of symmetry?",
            "type": "multiple-choice",
            "options": ["A", "L", "F"],
            "answer": "A",
            "explanation": "You can draw a line down the middle of 'A' and both sides match."
          },
          {
            "id": "q3",
            "text": "Which of these letters has a horizontal line of symmetry?",
            "type": "multiple-choice",
            "options": ["B", "Q", "R"],
            "answer": "B",
            "explanation": "You can draw a line across the middle of 'B' and the top and bottom match."
          },
          {
            "id": "q4",
            "text": "How many lines of symmetry does a circle have?",
            "type": "multiple-choice",
            "options": ["1", "4", "Infinite (too many to count)"],
            "answer": "Infinite (too many to count)",
            "explanation": "Any line through the center of a circle is a line of symmetry!"
          },
          {
            "id": "q5",
            "text": "Is a human face perfectly symmetrical?",
            "type": "multiple-choice",
            "options": ["Almost, but not perfectly", "Yes, perfectly", "No, not at all"],
            "answer": "Almost, but not perfectly",
            "explanation": "Most faces are nearly symmetrical, but there are always small differences."
          },
          {
            "id": "q6",
            "text": "Which shape has 4 lines of symmetry?",
            "type": "multiple-choice",
            "options": ["Rectangle", "Square", "Triangle"],
            "answer": "Square",
            "explanation": "A square has vertical, horizontal, and two diagonal lines of symmetry."
          },
          {
            "id": "q7",
            "text": "Does the letter 'S' have a line of symmetry?",
            "type": "multiple-choice",
            "options": ["Yes", "No"],
            "answer": "No",
            "explanation": "If you fold an 'S', the parts won't match up perfectly."
          },
          {
            "id": "q8",
            "text": "Which of these animals is known for its symmetrical wings?",
            "type": "multiple-choice",
            "options": ["Butterfly", "Elephant", "Snake"],
            "answer": "Butterfly",
            "explanation": "Butterflies have beautiful symmetrical patterns on their wings."
          },
          {
            "id": "q9",
            "text": "If a shape can be folded so that both halves match exactly, it is...",
            "type": "multiple-choice",
            "options": ["Symmetrical", "Asymmetrical", "Invisible"],
            "answer": "Symmetrical",
            "explanation": "That is the definition of symmetry!"
          },
          {
            "id": "q10",
            "text": "Which of these shapes has NO lines of symmetry?",
            "type": "multiple-choice",
            "options": ["A random squiggle", "A heart", "A star"],
            "answer": "A random squiggle",
            "explanation": "Most random squiggles don't have matching halves."
          }
        ]
      }
    ]
  },
  {
    "id": "wordproblems",
    "title": "Word Problems",
    "description": "Math stories to solve!",
    "iconName": "MessageSquare",
    "color": "bg-emerald-500",
    "lessons": [
      {
        "id": "wordproblems-learn",
        "title": "Learn Word Problems",
        "type": "learn",
        "slides": [
          {
            "id": "wp1",
            "title": "Solving Problems",
            "content": "Word problems are like stories with numbers. Let's solve one!",
            "image": "https://picsum.photos/seed/story/400/300",
            "interactive": {
              "type": "choice",
              "data": {
                "question": "Sam has 3 apples. He buys 2 more. How many apples does he have?",
                "options": ["4", "5", "6"],
                "answer": "5"
              }
            }
          },
          {
            "id": "wp2",
            "title": "Using a Number Line",
            "content": "A number line can help us solve word problems.",
            "interactive": {
              "type": "numberline",
              "data": { "target": 7, "range": [0, 10], "step": 1 }
            }
          }
        ]
      },
      {
        "id": "wordproblems-1",
        "title": "Word Problems Practice",
        "type": "practice",
        "questions": [
          {
            "id": "q1",
            "text": "Sam has 5 apples. He buys 3 more. How many apples does he have now?",
            "type": "multiple-choice",
            "options": ["2", "8", "15"],
            "answer": "8",
            "explanation": "Add: 5 + 3 = 8."
          },
          {
            "id": "q2",
            "text": "There are 10 birds on a tree. 4 fly away. How many are left?",
            "type": "multiple-choice",
            "options": ["6", "14", "4"],
            "answer": "6",
            "explanation": "Subtract: 10 - 4 = 6."
          },
          {
            "id": "q3",
            "text": "Lily has 12 stickers. She gives 5 to her friend. How many does she have left?",
            "type": "multiple-choice",
            "options": ["7", "17", "5"],
            "answer": "7",
            "explanation": "Subtract: 12 - 5 = 7."
          },
          {
            "id": "q4",
            "text": "A box has 8 red balls and 6 blue balls. How many balls are in the box?",
            "type": "multiple-choice",
            "options": ["2", "14", "12"],
            "answer": "14",
            "explanation": "Add: 8 + 6 = 14."
          },
          {
            "id": "q5",
            "text": "Tom has 20 cents. He spends 10 cents on a candy. How much money does he have left?",
            "type": "multiple-choice",
            "options": ["10 cents", "30 cents", "5 cents"],
            "answer": "10 cents",
            "explanation": "Subtract: 20 - 10 = 10."
          },
          {
            "id": "q6",
            "text": "There are 3 rows of chairs. Each row has 5 chairs. How many chairs are there in total?",
            "type": "multiple-choice",
            "options": ["8", "15", "12"],
            "answer": "15",
            "explanation": "Multiply or add: 5 + 5 + 5 = 15."
          },
          {
            "id": "q7",
            "text": "A farmer has 15 cows. He sells 7 cows. How many cows does he have now?",
            "type": "multiple-choice",
            "options": ["8", "22", "7"],
            "answer": "8",
            "explanation": "Subtract: 15 - 7 = 8."
          },
          {
            "id": "q8",
            "text": "Sarah has 9 pencils. Her brother gives her 9 more. How many pencils does she have?",
            "type": "multiple-choice",
            "options": ["0", "18", "9"],
            "answer": "18",
            "explanation": "Add: 9 + 9 = 18."
          },
          {
            "id": "q9",
            "text": "A pizza is cut into 8 slices. 3 slices are eaten. How many slices are left?",
            "type": "multiple-choice",
            "options": ["5", "11", "3"],
            "answer": "5",
            "explanation": "Subtract: 8 - 3 = 5."
          },
          {
            "id": "q10",
            "text": "There are 4 nests. Each nest has 2 eggs. How many eggs are there in total?",
            "type": "multiple-choice",
            "options": ["6", "8", "4"],
            "answer": "8",
            "explanation": "Multiply or add: 2 + 2 + 2 + 2 = 8."
          }
        ]
      }
    ]
  }
];

export const courseData: Topic[] = rawData.map((topic: any) => ({
  ...topic,
  icon: iconMap[topic.iconName]
}));
