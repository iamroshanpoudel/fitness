
export const workoutOptions = [
    { value: 'Full Body', label: 'Full Body', color: '#00B8D9', isFixed: true },
    { value: 'Stretching', label: 'Stretching', color: '#36B37E' },
    { value: 'Aerobic', label: 'Aerobic', color: '#5243AA' },
    { value: 'Sports', label: 'Sports', color: '#FF8B00' },

    // { value: 'Back', label: 'Back', color: '#0052CC' },
    // { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    // { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    // { value: 'Abdominis', label: 'Abdominis', color: '#00875A' },
    // { value: 'Arm', label: 'Arm', color: '#666666' },
];

export const workOuts = [
    {
        name: 'Full Body',
        exercises: [
            { value: 'PushUp', label: "PushUp", calories: "11.4" },
            { value: 'Squats', label: "Squats", calories: "7.9" },
            { value: 'Lunges', label: "Lunges", calories: "5.7" },
            { value: 'Jumping Rope', label: "Jumping Rope", calories: "13.5" },
        ],
        color: '#00B8D9',
    },
    {
        name: 'Stretching',
        exercises: [
            { value: 'Light Yoga', label: "Light Yoga", calories: "2.8"  },
            { value: 'Hot Yoga', label: "Hot Yoga", calories: "3.7"  },
            { value: 'Pilates', label: "Pilates", calories: "2.8"  },
            { value: 'Biking', label: "Biking", calories: "3.8" },
        ],
        color: '#36B37E',
    },
    {
        name: 'Aerobic',
        exercises: [
            { value: 'Running', label: "Running", calories: "16.0" },
            { value: 'Jogging', label: "Jogging", calories: "11.0" },
            { value: 'Walking', label: "Walking", calories: "4.4" },
            { value: 'Dancing', label: "Dancing", calories: "6.6" },
        ],
        color: '#5243AA',
    },
    {
        name: 'Sports',
        exercises: [
            { value: 'Tennis', label: "Tennis", calories: "7.8" },
            { value: 'Swimming', label: "Swimming", calories: "12.1" },
            { value: 'Rock Climbing', label: "Rock Climbing", calories: "12.2" },
            { value: 'Cycling', label: "Cycling", calories: "9.9" },
        ],
        color: '#FF8B00',
    },
];


 // {
    //     name: 'Back',
    //     exercises: [
    //         { value: 'Lat pulldown', label: "Lat pulldown" },
    //         { value: 'Barbell deadlift', label: "Barbell deadlift" },
    //         { value: 'Hyperextension', label: "Hyperextension" },
    //     ],
    //     color:'#0052CC',
    // },
     // {
    //     name: 'Abdominis',
    //     exercises: [
    //         { value: 'Reverse Crunch', label: "Reverse Crunch", calories:."" },
    //         { value: 'Bicycle Crunches', label: "Bicycle Crunches", calories:."" },
    //         { value: 'Vertical Leg Crunch', label: "Vertical Leg Crunch", calories:."" },
    //     ],
    //     color:'#00875A',
    // },

    // {
    //     name: 'Arm',
    //     exercises: [
    //         { value: 'Plank sidewalk', label: "Plank sidewalk", calories:."" },
    //         { value: 'Rolling pushups', label: "Rolling pushups", calories:."" },
    //         { value: 'Side plank', label: "Side plank", calories:."" },
    //     ],
    //     color:'#666666',
    // },