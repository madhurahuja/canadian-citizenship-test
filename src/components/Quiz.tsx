import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  LinearProgress,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Chip,
} from '@mui/material';
import { Question } from '../types';
import { questions } from '../data/questions';

const QUESTION_TIME_LIMIT = 30; // Time limit in seconds per question

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>(questions);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(questions.map(q => q.category)))];

  useEffect(() => {
    // Filter questions when category changes
    if (selectedCategory === 'all') {
      setFilteredQuestions(questions);
    } else {
      setFilteredQuestions(questions.filter(q => q.category === selectedCategory));
    }
    // Reset quiz state when changing categories
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer('');
    setShowAnswer(false);
  }, [selectedCategory]);

  useEffect(() => {
    // Timer logic
    if (!showAnswer && !quizCompleted) {
      const newTimer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(newTimer);
            handleTimeUp();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setTimer(newTimer);
      return () => clearInterval(newTimer);
    }
    return undefined;
  }, [currentQuestion, showAnswer, quizCompleted]);

  const handleTimeUp = () => {
    if (!showAnswer) {
      setShowAnswer(true);
      if (selectedAnswer === filteredQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    if (!showAnswer) {
      if (timer) clearInterval(timer);
      setShowAnswer(true);
      if (selectedAnswer === filteredQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    } else {
      setSelectedAnswer('');
      setShowAnswer(false);
      setTimeLeft(QUESTION_TIME_LIMIT);
      if (currentQuestion < filteredQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
  };

  if (quizCompleted) {
    return (
      <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Quiz Completed!
            </Typography>
            <Typography variant="h6">
              Your Score: {score} out of {filteredQuestions.length}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Percentage: {((score / filteredQuestions.length) * 100).toFixed(1)}%
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={restartQuiz}
              >
                Restart Quiz
              </Button>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  label="Category"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }

  const question: Question = filteredQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Box sx={{ flex: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Chip
            label={`Time: ${timeLeft}s`}
            color={timeLeft < 10 ? "warning" : "primary"}
            sx={{ width: '100%', height: '40px' }}
          />
        </Box>
      </Box>
      
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 3 }} />
      
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </Typography>
            <Chip label={question.category} color="primary" size="small" />
          </Box>
          
          <Typography variant="h6" gutterBottom>
            {question.question}
          </Typography>
          
          <RadioGroup value={selectedAnswer} onChange={handleAnswerSelect}>
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
                disabled={showAnswer}
              />
            ))}
          </RadioGroup>
          
          {showAnswer && (
            <Alert
              severity={selectedAnswer === question.correctAnswer ? "success" : "error"}
              sx={{ mt: 2 }}
            >
              {selectedAnswer === question.correctAnswer
                ? "Correct!"
                : `Incorrect. The correct answer is: ${question.correctAnswer}`}
              <Typography variant="body2" sx={{ mt: 1 }}>
                {question.explanation}
              </Typography>
            </Alert>
          )}
          
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!selectedAnswer && !showAnswer}
            sx={{ mt: 3 }}
          >
            {showAnswer ? "Next Question" : "Submit Answer"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Quiz; 