import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));


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

    return(

        <div align={"center"}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            SUPPLIER
            <br></br>{'\n'}<br></br>


            <div>

                What type of businesses do you supply to?<br></br><br></br>
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
                            Grocery Store
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Convenient Store
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Department Store
                        </Button>
                    </DialogActions>
                </Dialog>

                <br></br>{'\n'}<br></br>

                <Button variant="contained" color="primary" onClick={handleClickOpenRetail}>
                    Technology
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
                            Grocery Store
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCloseRetail}>
                            Convenient Store
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
