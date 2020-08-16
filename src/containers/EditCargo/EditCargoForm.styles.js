import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Switch } from "@material-ui/core";
 
export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& svg:first-child': {
      fill: 'white',
      background: theme.palette.primary.main,
      borderRadius: 100,
      width: 36,
      height: 36,
      padding: '4px 8px',
      marginRight: theme.spacing(2)
    },
    '& svg:last-child': {
      fill: 'white',
      background: theme.palette.primary.main,
      borderRadius: 100,
      width: 32,
      height: 32,
      padding: '0 6px',
      marginLeft: theme.spacing(2)
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
  },
  formControlStatus: {
    minWidth: 111,
  },
  mr20: {
    marginRight: 20
  },
  ml8: {
    marginLeft: theme.spacing(1)
  },
  mlMinus6: {
    marginLeft: '-6px'
  },
  btnContainer: {
    marginBottom: theme.spacing(3)
  }
}));

export const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  }
}))(Switch);