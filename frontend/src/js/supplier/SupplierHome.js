import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';


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
        title: 'Service',
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
    const [openSave, setOpenSave] = React.useState(false);
    const [openOptions, setOpenOptions] = React.useState(true);

    const handleClickOpenOptions = () => {
        setOpenOptions(true);
    };
    const handleCloseOptions = () => {
        setOpenOptions(false);
    };

    const [checkedff, setCheckedff] = React.useState(false);
    const [checkedc, setCheckedc] = React.useState(false);
    const [checkedb, setCheckedb] = React.useState(false);
    const [checkedh, setCheckedh] = React.useState(false);
    const [checkedcl, setCheckedcl] = React.useState(false);
    const [checkeds, setCheckeds] = React.useState(false);
    const [checkeda, setCheckeda] = React.useState(false);
    const [checkedm, setCheckedm] = React.useState(false);
    const [checkedp, setCheckedp] = React.useState(false);
    const [checkedj, setCheckedj] = React.useState(false);
    const [checkedg, setCheckedg] = React.useState(false);
    const [checkedr, setCheckedr] = React.useState(false);
    const [checkedt, setCheckedt] = React.useState(false);
    const [checkedd, setCheckedd] = React.useState(false);
    const [checkedfit, setCheckedfit] = React.useState(false);

    const handleChangeFastFood = (event) => {
        setCheckedff(event.target.checked);
    };
    const handleChangeCafe = (event) => {
        setCheckedc(event.target.checked);
    };
    const handleChangeBakery = (event) => {
        setCheckedb(event.target.checked);
    };
    const handleChangeHair = (event) => {
        setCheckedh(event.target.checked);
    };
    const handleChangeClothing = (event) => {
        setCheckedcl(event.target.checked);
    };
    const handleChangeSkin = (event) => {
        setCheckeds(event.target.checked);
    };
    const handleChangeAccessories = (event) => {
        setCheckeda(event.target.checked);
    };
    const handleChangeMakeup = (event) => {
        setCheckedm(event.target.checked);
    };
    const handleChangePharmacy = (event) => {
        setCheckedp(event.target.checked);
    };
    const handleChangeJuice = (event) => {
        setCheckedj(event.target.checked);
    };
    const handleChangeGrocery = (event) => {
        setCheckedg(event.target.checked);
    };
    const handleChangeRestaurant = (event) => {
        setCheckedr(event.target.checked);
    };
    const handleChangeTechStore = (event) => {
        setCheckedt(event.target.checked);
    };
    const handleChangeDepStore = (event) => {
        setCheckedd(event.target.checked);
    };
    const handleChangeFitnessGym = (event) => {
        setCheckedfit(event.target.checked);
    };


    const classes = useStyles();
    return(
        <div className={classes.image}>
        <div >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            SUPPLIER
            <br></br>{'\n'}<br></br>
            <Button onClick={handleClickOpenOptions}
                    variant="contained"
                    color="primary"
            >Change Supplier Options
            </Button>
            <Dialog open={openOptions} onClose={handleCloseOptions} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Supplier Options</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        What kind of businesses do you supply to?
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
                        <div>
                            <TableContainer align={'center'} >
                                <Table  aria-label="customized table">
                                    <TableHead>
                                        <TableRow >
                                            <TableCell>Choose Food options</TableCell>
                                            <TableCell>Choose Service Options</TableCell>
                                            <TableCell>Choose Retail Options</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    <TableRow >
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedff}
                                                onChange={handleChangeFastFood}
                                                inputProps={{ 'aria-label': 'fastFood' }}/>Fast Food
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedh}
                                                onChange={handleChangeHair}
                                                inputProps={{ 'aria-label': 'hair' }}/>Hairdressing
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedcl}
                                                onChange={handleChangeClothing}
                                                inputProps={{ 'aria-label': 'clothing' }}/>Clothing/ Shoes
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedc}
                                                onChange={handleChangeCafe}
                                                inputProps={{ 'aria-label': 'cafe' }}/>Café
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkeds}
                                                onChange={handleChangeSkin}
                                                inputProps={{ 'aria-label': 'skin' }}/>Dermatology
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkeda}
                                                onChange={handleChangeAccessories}
                                                inputProps={{ 'aria-label': 'accessories' }}/>Accessories
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedb}
                                                onChange={handleChangeBakery}
                                                inputProps={{ 'aria-label': 'bakery' }}/>Bakery
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedm}
                                                onChange={handleChangeMakeup}
                                                inputProps={{ 'aria-label': 'makeup' }}/>Makeup
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedp}
                                                onChange={handleChangePharmacy}
                                                inputProps={{ 'aria-label': 'pharmacy' }}/>Pharmacy
                                        </TableCell>

                                    </TableRow>
                                    <TableRow >
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedj}
                                                onChange={handleChangeJuice}
                                                inputProps={{ 'aria-label': 'juice' }}/>Drinks/ Juice
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox
                                                checked={checkedfit}
                                                onChange={handleChangeFitnessGym}
                                                inputProps={{ 'aria-label': 'fitnessGym' }}/>Fitness Gym
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedg}
                                                onChange={handleChangeGrocery}
                                                inputProps={{ 'aria-label': 'grocery' }}/>Grocery Store
                                        </TableCell>
                                    </TableRow>

                                    <TableCell >
                                        <Checkbox
                                            checked={checkedr}
                                            onChange={handleChangeRestaurant}
                                            inputProps={{ 'aria-label': 'restaurant' }}/>Restaurant
                                    </TableCell>

                                    <TableCell>

                                    </TableCell>
                                    <TableCell >
                                        <Checkbox
                                            checked={checkedt}
                                            onChange={handleChangeTechStore}
                                            inputProps={{ 'aria-label': 'techstore' }}/>Tech Store
                                    </TableCell>
                                    <TableRow>
                                        <TableCell >

                                        </TableCell>
                                        <TableCell>
                                        </TableCell>
                                        <TableCell >
                                            <Checkbox
                                                checked={checkedd}
                                                onChange={handleChangeDepStore}
                                                inputProps={{ 'aria-label': 'department' }}/>Department Store
                                        </TableCell>
                                    </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>
                        <div align={'center'}>

                            {'\n'}<br></br>


                            <Button onClick={handleCloseOptions}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<SaveIcon />}
                            >
                                Save Options
                            </Button>
                            <Dialog open={openSave} onClose={handleCloseOptions} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Save Options</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Do you wish to save these options?
                                        Options can be changed again in Home
                                    </DialogContentText>
                                </DialogContent>

                            </Dialog>
                            <br></br>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <br></br>
        </div>
        </div>


    );
}
