export const workoutOptions = [
	{ value: "Chest", label: "Chest", color: "#00B8D9", isFixed: true },
	{ value: "Back", label: "Back", color: "#0052CC" },
	// { value: 'purple', label: 'Purple', color: '#5243AA' },
	// { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
	// { value: 'orange', label: 'Orange', color: '#FF8B00' },
	// { value: 'yellow', label: 'Yellow', color: '#FFC400' },
	{ value: "Leg", label: "Leg", color: "#36B37E" },
	{ value: "Abdominis", label: "Abdominis", color: "#00875A" },
	{ value: "Aerobic", label: "Aerobic", color: "#253858" },
	{ value: "Arm", label: "Arm", color: "#666666" },
];

export const workOuts = [
	{
		name: "Chest",
		exercises: [
			{ value: "PushUp", label: "PushUp", calories: "100kcal" },
			{ value: "BenchPress", label: "BenchPress", calories: "100kcal" },
			{ value: "ChestPress", label: "ChestPress", calories: "100kcal" },
		],
		color: "#00B8D9",

		// per minute
	},
	{
		name: "Back",
		exercises: [
			{ value: "Lat pulldown", label: "Lat pulldown" },
			{ value: "Barbell deadlift", label: "Barbell deadlift" },
			{ value: "Hyperextension", label: "Hyperextension" },
		],
		color: "#0052CC",
	},
	{
		name: "Leg",
		exercises: [
			{ value: "Squats", label: "Squats" },
			{ value: "Lunges", label: "Lunges" },
			{ value: "Plank leg lifts", label: "Plank leg lifts" },
		],
		color: "#36B37E",
	},
	{
		name: "Aerobic",
		exercises: [
			{ value: "Running", label: "Running" },
			{ value: "Swimming", label: "Swimming" },
			{ value: "Biking", label: "Biking" },
		],
		color: "#253858",
	},
	{
		name: "Abdominis",
		exercises: [
			{ value: "Reverse Crunch", label: "Reverse Crunch" },
			{ value: "Bicycle Crunches", label: "Bicycle Crunches" },
			{ value: "Vertical Leg Crunch", label: "Vertical Leg Crunch" },
		],
		color: "#00875A",
	},

	{
		name: "Arm",
		exercises: [
			{ value: "Plank sidewalk", label: "Plank sidewalk" },
			{ value: "Rolling pushups", label: "Rolling pushups" },
			{ value: "Side plank", label: "Side plank" },
		],
		color: "#666666",
	},
];

// export const Back = [
//     { value: 'PushUp', label: "PushUp" },
//     { value: 'BenchPress', label: "BenchPress" },
//     { value: 'ChestPress', label: "ChestPress" },
// ];
// export const Leg = [
//     { value: 'PushUp', label: "PushUp" },
//     { value: 'BenchPress', label: "BenchPress" },
//     { value: 'ChestPress', label: "ChestPress" },
// ];
// export const Crunch = [
//     { value: 'PushUp', label: "PushUp" },
//     { value: 'BenchPress', label: "BenchPress" },
//     { value: 'ChestPress', label: "ChestPress" },
// ];
// export const Aerobic = [
//     { value: 'PushUp', label: "PushUp" },
//     { value: 'BenchPress', label: "BenchPress" },
//     { value: 'ChestPress', label: "ChestPress" },
// ];
// export const Arm = [
//     { value: 'PushUp', label: "PushUp" },
//     { value: 'BenchPress', label: "BenchPress" },
//     { value: 'ChestPress', label: "ChestPress" },
// ];
