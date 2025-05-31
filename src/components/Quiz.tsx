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
  Paper,
  Tooltip,
} from '@mui/material';
import { Question } from '../types';
import { getRandomQuestions } from '../data/questions';
import TimerIcon from '@mui/icons-material/Timer';
import QuizIcon from '@mui/icons-material/Quiz';
import CategoryIcon from '@mui/icons-material/Category';

const QUESTION_TIME_LIMIT = 30; // Time limit in seconds per question
const QUESTIONS_PER_TEST = 20; // Number of questions per test attempt

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [questions, setQuestions] = useState<Question[]>(getRandomQuestions(QUESTIONS_PER_TEST));
  const [categoryStats, setCategoryStats] = useState<Record<string, { total: number; correct: number }>>({});

  // Get unique categories from all questions
  const categories = ['all', ...Array.from(new Set(questions.map(q => q.category)))].sort();

  useEffect(() => {
    // Get new set of questions when category changes
    const newQuestions = getRandomQuestions(QUESTIONS_PER_TEST, selectedCategory);
    setQuestions(newQuestions);
    // Reset quiz state
    resetQuizState();
  }, [selectedCategory]);

  const resetQuizState = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer('');
    setShowAnswer(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setCategoryStats({});
  };

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
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        updateScore(true);
      }
    }
  };

  const updateScore = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Update category statistics
    const currentCategory = questions[currentQuestion].category;
    setCategoryStats(prev => ({
      ...prev,
      [currentCategory]: {
        total: (prev[currentCategory]?.total || 0) + 1,
        correct: (prev[currentCategory]?.correct || 0) + (isCorrect ? 1 : 0)
      }
    }));
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
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        updateScore(true);
      } else {
        updateScore(false);
      }
    } else {
      setSelectedAnswer('');
      setShowAnswer(false);
      setTimeLeft(QUESTION_TIME_LIMIT);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const restartQuiz = () => {
    // Get new set of questions
    const newQuestions = getRandomQuestions(QUESTIONS_PER_TEST, selectedCategory);
    setQuestions(newQuestions);
    resetQuizState();
  };

  if (quizCompleted) {
    const totalScore = (score / questions.length) * 100;
    const passingScore = 75; // 75% is typically required to pass the actual citizenship test

    return (
      <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Quiz Completed!
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">
                Final Score: {score} out of {questions.length} ({totalScore.toFixed(1)}%)
              </Typography>
              <Alert severity={totalScore >= passingScore ? "success" : "warning"} sx={{ mt: 2 }}>
                {totalScore >= passingScore 
                  ? "Congratulations! You've passed the practice test!"
                  : "Keep practicing! You need 75% to pass the actual test."}
              </Alert>
            </Box>

            <Typography variant="h6" gutterBottom>
              Performance by Category:
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 3 }}>
              {Object.entries(categoryStats).map(([category, stats]) => (
                <Paper key={category} sx={{ p: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {category}
                  </Typography>
                  <Typography variant="body2">
                    Correct: {stats.correct}/{stats.total} ({((stats.correct/stats.total) * 100).toFixed(1)}%)
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={(stats.correct/stats.total) * 100}
                    sx={{ mt: 1 }}
                  />
                </Paper>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={restartQuiz}
                startIcon={<QuizIcon />}
              >
                Try New Questions
              </Button>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  label="Category"
                  startAdornment={<CategoryIcon sx={{ mr: 1 }} />}
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

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 3 }}>
        <Box>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
              startAdornment={<CategoryIcon sx={{ mr: 1 }} />}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Tooltip title="Time remaining for current question">
            <Chip
              icon={<TimerIcon />}
              label={`${timeLeft}s`}
              color={timeLeft < 10 ? "warning" : "primary"}
              sx={{ width: '100%', height: '100%' }}
            />
          </Tooltip>
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ height: 10, borderRadius: 5 }}
        />
        <Typography variant="body2" color="text.secondary" align="right" sx={{ mt: 1 }}>
          Question {currentQuestion + 1} of {questions.length}
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Score: {score}/{currentQuestion + (showAnswer ? 1 : 0)}
            </Typography>
            <Chip label={question.category} color="primary" size="small" />
          </Box>
          
          <Typography variant="h6" gutterBottom>
            {question.question}
          </Typography>
          
          <RadioGroup 
            value={selectedAnswer} 
            onChange={handleAnswerSelect}
            sx={{ mb: 2 }}
          >
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
                disabled={showAnswer}
                sx={{
                  ...(showAnswer && option === question.correctAnswer && {
                    color: 'success.main',
                  }),
                  ...(showAnswer && selectedAnswer === option && option !== question.correctAnswer && {
                    color: 'error.main',
                  }),
                }}
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
            fullWidth
          >
            {showAnswer ? "Next Question" : "Submit Answer"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Quiz; 