import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },

}));

const images = [
    {
        url: 'https://media-exp1.licdn.com/dms/image/C4E1BAQEsM9i7d4AXQg/company-background_10000/0?e=2159024400&v=beta&t=Q7IUN3ypEGz2t1xfsdg9t9bglxVgiOJ0V0WoPzAIZQw',
        title: 'Food',
        width: '30%',


    },
    {
        url: 'https://www.spellbrand.com/wp-content/uploads/2012/12/beauty-salon-spa-business1.jpg',
        title: 'Beauty Service',
        width: '30%',
    },
    {
        url: 'https://alltopstartups.com/wp-content/uploads/2016/09/Retail-Business.png',
        title: 'Retail',
        width: '30%',
    },
];

export default function Home(){
    console.log("SUPPLIER HOME");
    const [openFood, setOpenFood] = React.useState(false);
    const [openBeauty, setOpenBeauty] = React.useState(false);
    const [openRetail, setOpenRetail] = React.useState(false);

    const handleClickOpenFood = () => {
        setOpenFood(true);
    };

    const handleCloseFood = () => {
        setOpenFood(false);
    };

    const handleClickOpenBeauty = () => {
        setOpenBeauty(true);
    };

    const handleCloseBeauty = () => {
        setOpenBeauty(false);
    };

    const handleClickOpenRetail = () => {
        setOpenRetail(true);
    };

    const handleCloseRetail = () => {
        setOpenRetail(false);
    };

    const classes = useStyles();
    return(

        <div align={"center"}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            SUPPLIER
            <br></br>{'\n'}<br></br>
            What type of businesses do you supply to?<br></br><br></br>
/////////////////////////////
            <div className={classes.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                    >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
              }}
          />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked} />
            </Typography>
          </span>
                    </ButtonBase>
                ))}
            </div>
////////////////////////////////////////////////////////
            <div>

                <Button variant="contained" color="primary" onClick={handleClickOpenFood}>
                    Food
                </Button>
                <Dialog open={openFood} onClose={handleCloseFood} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Business Kind</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            What kinds of food businesses do you supply to?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={handleCloseFood}>
                            Fast Food
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseFood}>
                            Café
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseFood}>
                            Bakery
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseFood}>
                            Drinks/ Juice
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseFood}>
                            Restaurant
                        </Button>
                    </DialogActions>
                </Dialog>

                <br></br>{'\n'}<br></br>


                <Button variant="contained" color="primary" onClick={handleClickOpenBeauty}>
                    Beauty Service
                </Button>
                <Dialog open={openBeauty} onClose={handleCloseBeauty} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Business Kind</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            What kinds of Beauty businesses do you supply to?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={handleCloseBeauty}>
                            Hair
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseBeauty}>
                            Skin/ Dermatology
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseBeauty}>
                            Makeup
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseBeauty}>
                            All
                        </Button>
                    </DialogActions>
                </Dialog>

                <br></br>{'\n'}<br></br>


                <Button variant="contained" color="primary" onClick={handleClickOpenRetail}>
                    Retail
                </Button>
                <Dialog open={openRetail} onClose={handleCloseRetail} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Business Kind</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            What kinds of Retail businesses do you supply to?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Clothing/ Shoes/ Accessories
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Pharmacy/ Drugstore
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Grocery/ Convenient Store
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Tech Store
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Department Store
                        </Button>
                    </DialogActions>
                </Dialog>

                <br></br>{'\n'}<br></br>

            </div>

            <div>
                <form noValidate autoComplete="off">
                    <TextField label="Other" variant="outlined" />
                </form>
                {'\n'}<br></br>
                <Button variant="contained" color="primary">
                    Continue
                </Button>
            </div>

        </div>

    );
}
