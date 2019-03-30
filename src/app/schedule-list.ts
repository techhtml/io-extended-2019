import { ScheduleList } from './schedule';

export const SessionList: ScheduleList[] = [
    {
        id: 0,
        startTime: "11:00",
        ampm: "AM",
        schedules: [
            {
                id: 0,
                name: "Registration",
                place: "Lobby",
                description: "hello",
                categories: [],
                speakers: []
            }
        ]
    },
    {
        id: 1,
        startTime: "12:00",
        ampm: "PM",
        schedules: [
            {
                id: 0,
                name: "Keynote",
                place: "A·B·C Hall",
                description: "hello",
                categories: [],
                speakers: []
            }
        ]
    },
    {
        id: 2,
        startTime: "12:50",
        ampm: "PM",
        schedules: [
            {
                id: 0,
                name: "What's new in Android Q",
                place: "A Hall",
                description: "hello",
                categories: ["Android"],
                speakers: []
            },
            {
                id: 1,
                name: "What's new in TensorFlow",
                place: "B Hall",
                description: "hello",
                categories: ["ML"],
                speakers: []
            },
            {
                id: 2,
                name: "Exploring what're new in Web for the Natively app",
                place: "C Hall",
                description: "hello",
                categories: ["Web"],
                speakers: []
            }
        ]
    }
]