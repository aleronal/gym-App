const GYM_DATA = [
    {
        id:1,
        title: 'Chest and Arms',
        routeName: 'chestandarms',
        items: [
            {
                id: 1,
                name: 'Chest Press',
                image: "./images/chest/chest_press.jpg",
                reps: 20,
                times:4,
            },
            {
                id: 2,
                name: 'Barbell Bench Press',
                image: "./images/chest/barbell-press.jpg",
                reps: 12,
                times:4,
            },
            {
                id:3,
                name:'Dumbbell Bench Press',
                image: "./images/chest/dumbell-press.jpg",
                reps:12,
                times:4
            },
            {
                id:4,
                name:'Dumbbell Bicep Curl',
                image: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/08.gif?resize=768:*",
                reps:12,
                times:4
            }
        ]
    },
    {
        id:2,
        title: "Legs",
        routeName: 'legs',
        items: [
            {
                id:1,
                name:'Back Squat',
                image:'./images/legs/backsquat.jpg',
                reps:15,
                times:4
            },
            {
                id:2,
                name:'Walking Lunges',
                image:'./images/legs/lunges.jpg',
                reps:20,
                times:4
            },
            {
                id:3,
                name:'Legs Press',
                image:'./images/legs/press.jpg',
                reps:20,
                times:4
            },
            {
                id:4,
                name: 'Treadmill',
                image:'./images/legs/treadmill.jpg',
                reps:20,
                times:1
            }
        ]

    }
]

export default GYM_DATA;