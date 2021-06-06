import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import DeleteIcon from "@material-ui/icons/Delete";
import { GiCupcake, GiMuscleFat } from "react-icons/gi";
import { IconContext } from "react-icons";
import { FaBreadSlice, FaCarrot } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "300px",
		marginTop: "20px",

		backgroundColor: "#f7f9fb",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
}));

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
		width: "250px",
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);
const FoodCard = (props) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const deleteFoodHandler = () => {
		let copiedFoodStateByDate = { ...props.foodStateByDate };
		for (let i = 0; i < copiedFoodStateByDate.foodIntake.length; i++) {
			if (
				copiedFoodStateByDate.foodIntake[i].foodName === props.food.foodName
			) {
				copiedFoodStateByDate.foodIntake.splice(i, 1);
				props.setFoodStateByDate(copiedFoodStateByDate);
				return;
			}
		}
	};

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={<RestaurantIcon />}
				title={
					<Typography gutterBottom variant="h5">
						{props.food.foodName}
					</Typography>
				}
				action={
					<IconButton aria-label="delete item">
						<DeleteIcon onClick={deleteFoodHandler} />
					</IconButton>
				}
			/>
			<CardMedia
				className={classes.media}
				image={props.food.image}
				title={props.food.foodName}
			/>

			<CardActions disableSpacing>
				<Typography gutterBottom variant="h6">
					Nutritional Information:
				</Typography>
				<IconButton
					onClick={handleClickOpen}
					aria-label="show nutrition information"
				>
					<InfoIcon />
				</IconButton>
			</CardActions>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					{props.food.foodName}
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
		</Card>
	);
};

export default FoodCard;
