import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Paper } from '@mui/material';

const QuizStepper = ({ getQuizs }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="container m-4">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {getQuizs.map((_, index) => (
            <Step key={index}>
              <StepLabel>{`Question ${index + 1}`}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === getQuizs.length ? (
            <div>
              <Typography variant="h6" gutterBottom>
                All questions completed!
              </Typography>
              <Button onClick={handleReset} variant="contained" color="primary">
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant="h6" gutterBottom>
                {getQuizs[activeStep].question}
              </Typography>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {getQuizs[activeStep].answers.map((ans, index) => (
                  <li key={index} style={{ color: ans.correctAnswer ? 'green' : 'red' }}>
                    {ans.correctAnswer ? '✔️ ' : '❌ '}
                    {ans.name}
                  </li>
                ))}
              </ul>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                  style={{ marginRight: '10px' }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === getQuizs.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default QuizStepper