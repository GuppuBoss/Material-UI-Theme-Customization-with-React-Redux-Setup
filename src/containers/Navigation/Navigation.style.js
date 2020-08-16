import { fade, makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
	customListItem: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  },
  mr5: {
    marginRight: 5
  },
	appBarBox: {
		background: theme.transparent,
		color: theme.black,
		boxShadow: theme.blackShadow,
		borderRadius: 5
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
			marginRight: theme.spacing(2),
			fontSize: 24,
			fontWeight: 'bold'
		},
	},
	periodFormControl: {
		width: 330,
		marginRight: theme.spacing(1),
		marginLeft: 0,
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
		},
	},
	languageFormControl: {
		width: 127,
		marginRight: theme.spacing(1),
		marginLeft: 0,
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
		},
	},
	locationFormControl: {
		width: 134,
		marginRight: theme.spacing(1),
		marginLeft: 0,
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	newButton: {
		borderRadius: 100,
		padding: '6px 18px',
	}
}));