import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  card: {
    marginTop: 20,
    padding: 8,
  },
});

class Refused extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify='center' alignItems='center' className={classes.paper}>
        <Grid item xs={6}>
          <Paper className={classes.card}>
            <Typography gutterBottom variant="headline" component="p">
              Oops! It looks like you refused consent for our application to book a ride for you with Grab!
            </Typography>
            <Button color='secondary' onClick={this.props.onGoHome}>
              Return Home
            </Button>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Refused);