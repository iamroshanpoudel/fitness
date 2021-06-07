import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
	BarChart,
	Bar,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import Typography from "@material-ui/core/Typography";

import moment from "moment";
import { last7DaysNutritionAPIMethod } from "../../api/client.js";

const Last7Chart = (props) => {
	// changes 2021/5/4 to 2021-5-4
	const dashedDate = (date) => {
		return moment(new Date(date).toISOString()).format("YYYY-MM-DD");
	};

	const [dataState, setDataState] = useState([]);

	useEffect(() => {
		if (props.userState._id) {
			last7DaysNutritionAPIMethod(
				props.userState._id,
				dashedDate(props.dateState),
				(response) => {
					setDataState(response);
					console.log(JSON.stringify(response));
				}
			);
		}
	}, [props.dateState]);
	return (
		<div id="body-itemsChart">
			<>
				<Typography gutterBottom variant="h6" style={{ margin: "20px" }}>
					Nutrition Consumption (gm) in the last 7 days:
				</Typography>
				<LineChart
					width={600}
					height={350}
					data={dataState}
					margin={{
						top: 10,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis />
					<Tooltip />

					<Legend />

					<Line
						type="monotone"
						dataKey="carbs"
						stroke="rgba(255, 69, 96, 0.85)"
					/>
					<Line
						type="monotone"
						dataKey="protein"
						stroke="rgba(254, 176, 25, 0.85)"
					/>
					<Line
						type="monotone"
						dataKey="fiber"
						stroke="rgba(0, 227, 150, 0.85)"
					/>
					<Line
						type="monotone"
						dataKey="fat"
						stroke="rgba(0, 143, 251, 0.85)"
					/>
				</LineChart>
				<br />
				<br />
			</>
			<>
				<Typography gutterBottom variant="h6" style={{ margin: "20px" }}>
					Calorie Consumption (KCal) in the last 7 days:
				</Typography>
				<BarChart
					width={500}
					height={350}
					data={dataState}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					barSize={20}
				>
					<XAxis
						dataKey="date"
						scale="point"
						padding={{ left: 10, right: 10 }}
					/>
					<YAxis />
					<Tooltip />
					<Legend />
					<CartesianGrid strokeDasharray="3 3" />
					<Bar
						dataKey="calories"
						fill="rgba(0, 143, 251, 0.85)"
						background={{ fill: "#eee" }}
					/>
				</BarChart>
			</>
		</div>
	);
};

export default Last7Chart;
