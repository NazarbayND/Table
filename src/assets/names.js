const names = [
  {
    _id: 1,
    name: "Nazarbay Nursultan",
    courseDetails: [
      {
        _id: 1,
        next: "Math 2",
        trainer: "Nazarbay Nursultan",
        delivery: "11.11.20",
        duration: "11 hours",
        course: "Math 1",
        description: "Begining to Calculus",
        frequency: "twice per week",
        last: "today",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 2,
        next: "Physics 2",
        trainer: "Jack Mackwel",
        delivery: "11.10.20",
        duration: "15 hours",
        course: "Phusics 1",
        description: "Begining to Physical World",
        frequency: "twice per week",
        last: "yesterday",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 3,
        next: "Algebra 2",
        trainer: "Dagni Taggert",
        delivery: "12.12.20",
        duration: "15 hours",
        course: "Algebra 1",
        description: "Begining to Calculus",
        frequency: "three times per week",
        last: "10.10.20",
        by: "Lecturer",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 4,
        next: "Informatics 2",
        trainer: "John Gold",
        delivery: "11.10.20",
        duration: "20 hours",
        course: "Informatics 1",
        description: "Begining to Computer Science",
        frequency: "four times per week",
        last: "10.10.20",
        by: "Programmer",
        history: {
          _id: 1,
          content: "none",
        },
      },
    ],
  },
  {
    _id: 2,
    name: "John Gold",
    courseDetails: [
      {
        _id: 1,
        next: "Math 2",
        trainer: "John Gold",
        delivery: "11.11.20",
        duration: "11 hours",
        course: "Math 1",
        description: "Begining to Calculus",
        frequency: "twice per week",
        last: "today",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 2,
        next: "Physics 2",
        trainer: "Jack Mackwel",
        delivery: "11.10.20",
        duration: "15 hours",
        course: "Phusics 1",
        description: "Begining to Physical World",
        frequency: "twice per week",
        last: "yesterday",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 3,
        next: "Algebra 2",
        trainer: "Dagni Taggert",
        delivery: "12.12.20",
        duration: "15 hours",
        course: "Algebra 1",
        description: "Begining to Calculus",
        frequency: "three times per week",
        last: "10.10.20",
        by: "Lecturer",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 4,
        next: "Informatics 2",
        trainer: "John Gold",
        delivery: "11.10.20",
        duration: "20 hours",
        course: "Informatics 1",
        description: "Begining to Computer Science",
        frequency: "four times per week",
        last: "10.10.20",
        by: "Programmer",
        history: {
          _id: 1,
          content: "none",
        },
      },
    ],
  },
  {
    _id: 3,
    name: "John Doe",
    courseDetails: [
      {
        _id: 1,
        next: "Math 2",
        trainer: "John Doe",
        delivery: "11.11.20",
        duration: "11 hours",
        course: "Math 1",
        description: "Begining to Calculus",
        frequency: "twice per week",
        last: "today",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 2,
        next: "Physics 2",
        trainer: "Jack Mackwel",
        delivery: "11.10.20",
        duration: "15 hours",
        course: "Phusics 1",
        description: "Begining to Physical World",
        frequency: "twice per week",
        last: "yesterday",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 3,
        next: "Algebra 2",
        trainer: "Dagni Taggert",
        delivery: "12.12.20",
        duration: "15 hours",
        course: "Algebra 1",
        description: "Begining to Calculus",
        frequency: "three times per week",
        last: "10.10.20",
        by: "Lecturer",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 4,
        next: "Informatics 2",
        trainer: "John Gold",
        delivery: "11.10.20",
        duration: "20 hours",
        course: "Informatics 1",
        description: "Begining to Computer Science",
        frequency: "four times per week",
        last: "10.10.20",
        by: "Programmer",
        history: {
          _id: 1,
          content: "none",
        },
      },
    ],
  },
  {
    _id: 4,
    name: "Emma Watson",
    courseDetails: [
      {
        _id: 1,
        next: "Math 2",
        trainer: "Emma Watson",
        delivery: "11.11.20",
        duration: "11 hours",
        course: "Math 1",
        description: "Begining to Calculus",
        frequency: "twice per week",
        last: "today",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 2,
        next: "Physics 2",
        trainer: "Jack Mackwel",
        delivery: "11.10.20",
        duration: "15 hours",
        course: "Phusics 1",
        description: "Begining to Physical World",
        frequency: "twice per week",
        last: "yesterday",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 3,
        next: "Algebra 2",
        trainer: "Dagni Taggert",
        delivery: "12.12.20",
        duration: "15 hours",
        course: "Algebra 1",
        description: "Begining to Calculus",
        frequency: "three times per week",
        last: "10.10.20",
        by: "Lecturer",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 4,
        next: "Informatics 2",
        trainer: "John Gold",
        delivery: "11.10.20",
        duration: "20 hours",
        course: "Informatics 1",
        description: "Begining to Computer Science",
        frequency: "four times per week",
        last: "10.10.20",
        by: "Programmer",
        history: {
          _id: 1,
          content: "none",
        },
      },
    ],
  },
  {
    _id: 5,
    name: "Jack London",
    courseDetails: [
      {
        _id: 1,
        next: "Math 2",
        trainer: "Jack London",
        delivery: "11.11.20",
        duration: "11 hours",
        course: "Math 1",
        description: "Begining to Calculus",
        frequency: "twice per week",
        last: "today",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 2,
        next: "Physics 2",
        trainer: "Jack Mackwel",
        delivery: "11.10.20",
        duration: "15 hours",
        course: "Phusics 1",
        description: "Begining to Physical World",
        frequency: "twice per week",
        last: "yesterday",
        by: "Teacher",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 3,
        next: "Algebra 2",
        trainer: "Dagni Taggert",
        delivery: "12.12.20",
        duration: "15 hours",
        course: "Algebra 1",
        description: "Begining to Calculus",
        frequency: "three times per week",
        last: "10.10.20",
        by: "Lecturer",
        history: {
          _id: 1,
          content: "none",
        },
      },
      {
        _id: 4,
        next: "Informatics 2",
        trainer: "John Gold",
        delivery: "11.10.20",
        duration: "20 hours",
        course: "Informatics 1",
        description: "Begining to Computer Science",
        frequency: "four times per week",
        last: "10.10.20",
        by: "Programmer",
        history: {
          _id: 1,
          content: "none",
        },
      },
    ],
  },
];

export default names;
