import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Select, MenuItem, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Divider from '@material-ui/core/Divider';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { useStyles } from './SecondEditCargoStep.style';

export default function SecondCargoStep() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <TextField
              className="form-input-region"
              id="region"
              label="Region"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="Type">Type</InputLabel>
              <Select
                labelId="Type"
                id="Type"
                label="Type">
                <MenuItem value={1}>Billing</MenuItem>
                <MenuItem value={2}>Shipping</MenuItem>
                <MenuItem value={3}>Cash on Delivery</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>


        <Grid container spacing={4}>
          <Grid item sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="country">Country</InputLabel>
              <Select
                labelId="country"
                id="country"
                label="Country">
                <MenuItem value={1}>Russia</MenuItem>
                <MenuItem value={2}>Pakistan</MenuItem>
                <MenuItem value={3}>Canada</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControlLabel className={classes.formControlLabel}
              control={
                <Checkbox name="checkedB" />
              }
              label="Use this address as default"
            />
          </Grid>
        </Grid>


        <Grid container spacing={4}>
          <Grid item sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="city">City</InputLabel>
              <Select
                labelId="city"
                id="city"
                label="City">
                <MenuItem value={1}>Moscow</MenuItem>
                <MenuItem value={2}>Islamabad</MenuItem>
                <MenuItem value={3}>New York</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddRoundedIcon />}
            >
              Add Another Address
            </Button>
          </Grid>
        </Grid>


        <Grid container spacing={4}>
          <Grid item sm={6}>
            <TextField
              className="form-input-street"
              id="street"
              label="Street"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
        </Grid>


        <Grid container spacing={4}>
          <Grid item sm={6}>
            <TextField
              className="form-input-zip-code"
              id="zip-code"
              label="Zip code"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
        </Grid>

        <Divider variant="middle" className={classes.divider} />

        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={6}>
            <TextField
              className="form-input-region"
              id="region"
              label="Region"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="Type">Type</InputLabel>
              <Select
                labelId="Type"
                id="Type"
                label="Type">
                <MenuItem value={1}>Billing</MenuItem>
                <MenuItem value={2}>Shipping</MenuItem>
                <MenuItem value={3}>Cash on Delivery</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>


        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="country">Country</InputLabel>
              <Select
                labelId="country"
                id="country"
                label="Country">
                <MenuItem value={1}>Russia</MenuItem>
                <MenuItem value={2}>Pakistan</MenuItem>
                <MenuItem value={3}>Canada</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControlLabel className={classes.formControlLabel}
              control={
                <Checkbox name="checkedB" />
              }
              label="Use this address as default"
            />
          </Grid>
        </Grid>


        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="city">City</InputLabel>
              <Select
                labelId="city"
                id="city"
                label="City">
                <MenuItem value={1}>Moscow</MenuItem>
                <MenuItem value={2}>Islamabad</MenuItem>
                <MenuItem value={3}>New York</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <Button
              variant="contained"
              color="default"
              startIcon={<RemoveRoundedIcon />}
              className={classes.dangerButton}>
              Delete Address
            </Button>
          </Grid>
        </Grid>


        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={6}>
            <TextField
              className="form-input-street"
              id="street"
              label="Street"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item sm={6}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddRoundedIcon />}
            >
              Add Another Address
            </Button>
          </Grid>
        </Grid>


        <Grid container className={classes.firstCargoContainer} spacing={4}>
          <Grid item sm={6}>
            <TextField
              className="form-input-zip-code"
              id="zip-code"
              label="Zip code"
              variant="outlined"
              className={classes.formControl}
            />
          </Grid>
          <Grid item sm={6}>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}