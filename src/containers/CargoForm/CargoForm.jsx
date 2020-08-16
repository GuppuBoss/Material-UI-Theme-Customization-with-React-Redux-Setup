import React from 'react';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Container,
  Grid,
  Icon
} from '@material-ui/core';

import {
  CloudUploadOutlined,
  AddCircleOutlined,
  HighlightOffOutlined,
  ClearOutlined,
  ChevronRight,
  ChevronLeft
} from '@material-ui/icons';
import FirstCargoStep from './FirstCargoStep';
import SecondCargoStep from './SecondCargoStep';
import { useStyles } from './CargoForm.style';

const steps = ['Cargo info', 'Address'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FirstCargoStep />;
    case 1:
      return <SecondCargoStep />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CargoForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="md">

      <Paper className={classes.paper} elevation={3}>

        <Paper className={classes.titlePaper} elevation={3}>
          <Grid
            container
            wrap="nowrap"
            alignItems="center"
            justify="space-between"
            className={classes.stepsGrid}
          >
            <Grid item xs={7}>
              <div className={classes.logo}>
                <CloudUploadOutlined />
                <Typography variant="h6">
                  New Cargo
                </Typography>
              </div>
            </Grid>
            <Grid item xs={5}>
              <Grid
                container
                wrap="nowrap"
                alignItems="center"
                justify="space-between"

              >
                <Stepper nonLinear activeStep={activeStep} className={classes.stepper}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel className={classes.singleStepLabel}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <ClearOutlined className={classes.dangerFill} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <>
          {activeStep === steps.length ? (
            <p className={classes.stepsComplete}>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will
                send you an update when your order has shipped.
                </Typography>
            </p>
          ) : (
              <>
                {getStepContent(activeStep)}
                <Grid
                  container
                  alignItems="baseline"
                  justify="space-between"
                  className={classes.buttonsContainer}
                >
                  <Grid item xs={4}>
                    <Button
                      onClick={handleBack}
                      variant="contained"
                      color="secondary"
                      size="medium"
                    >
                      Cancel
                      </Button>
                  </Grid>
                  <Grid item xs={6} className={classes.textRight}>
                    {
                      activeStep !== 0 && (
                        <Button
                          variant="outlined"
                          color="primary"
                          size="medium"
                          startIcon={<ChevronLeft />}
                          className={classes.backButton}
                          onClick={handleBack}
                        >
                          Back
                        </Button>)
                    }
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      endIcon={(activeStep === steps.length - 1) ? '' : <ChevronRight />}
                      size="medium"
                    >
                      {activeStep === steps.length - 1 ? 'Create' : 'Next'}
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
        </>
      </Paper>
    </Container>
  );
}