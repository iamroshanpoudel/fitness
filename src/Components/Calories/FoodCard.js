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

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: "50px",

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

	alert(JSON.stringify(props));
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
				image={props.image}
				title={props.food.foodName}
			/>

			<CardActions disableSpacing>
				<Typography gutterBottom variant="h6">
					Nutritional Information:
				</Typography>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show nutrition information"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
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
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default FoodCard;
