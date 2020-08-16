import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fill: 'white',
      background: '#2979FF',
      borderRadius: '100%',
      width: '36px',
      height: '36px',
      padding: '4px 9px',
      marginRight: '16px'
    }
  },
  titlePaper: {
    boxShadow: "0px 1px 2px rgba(120, 120, 133, 0.7), 0px 3px 5px rgba(120, 120, 133, 0.2)"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: "0px 2px 3px rgba(34, 100, 209, 0.4), 0px 5px 8px rgba(34, 100, 209, 0.2)",
    '& .MuiTypography-h6': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    '& .MuiStepConnector-root': {
      width: "32px",
      margin: "0 16px",
      border: "2px",
    },
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: '#2979FF',
    },
  },
  stepper: {
    marginLeft: 63,
    padding: 0
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  stepsGrid: {
    padding: 13
  },
  dangerFill: {
    fill: theme.palette.error.main,
  },
  buttonsContainer: {
    padding: theme.spacing(0, 3, 3, 3)
  },
  singleStepLabel: {
    "& .MuiStepLabel-label.MuiStepLabel-active": {
      color: theme.palette.color.DARK_GREY,
      fontWeight: 'normal'
    },
    "& .MuiStepLabel-label": {
      color: theme.palette.color.LIGHT_GREY,
      fontWeight: 'normal'
    }
  },
  textRight: {
    textAlign: 'right'
  },
  backButton: {
    marginRight: theme.spacing(2)
  },
  stepsComplete: {
    padding: theme.spacing(3)
  }
}));