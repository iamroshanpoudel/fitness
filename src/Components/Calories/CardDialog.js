import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import DeleteIcon from "@material-ui/icons/Delete";
import { GiCupcake, GiMuscleFat } from "react-icons/gi";
import { IconContext } from "react-icons";
import { FaBreadSlice, FaCarrot } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

export default function CardDialog(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					Food Name
				</DialogTitle>
				<DialogContent dividers>
					<IconContext.Provider
						value={{ color: "rgba(119, 93, 208, 0.85)", size: 30 }}
					>
						<Typography gutterBottom variant="h6">
							<GiCupcake /> {props.food.calories} KCAL <br />
						</Typography>
					</IconContext.Provider>

					<IconContext.Provider
						value={{ color: "rgba(255, 69, 96, 0.85)", size: 30 }}
					>
						<Typography gutterBottom variant="h6">
							<FaBreadSlice /> {props.food.nutrients.CARBS} GM <br />
						</Typography>
					</IconContext.Provider>

					<IconContext.Provider
						value={{ color: "rgba(254, 176, 25, 0.85)", size: 30 }}
					>
						<Typography gutterBottom variant="h6">
							<GiChickenOven /> {props.food.nutrients.PRTN} GM <br />
						</Typography>
					</IconContext.Provider>

					<IconContext.Provider
						value={{ color: "rgba(0, 227, 150, 0.85)", size: 30 }}
					>
						<Typography gutterBottom variant="h6">
							<FaCarrot /> {props.food.nutrients.FIBR} GM <br />
						</Typography>
					</IconContext.Provider>

					<IconContext.Provider
						value={{ color: "rgba(0, 143, 251, 0.85)", size: 30 }}
					>
						<Typography gutterBottom variant="h6">
							<GiMuscleFat /> {props.food.nutrients.FAT} GM <br />
						</Typography>
					</IconContext.Provider>
				</DialogContent>
			</Dialog>
		</div>
	);
}
