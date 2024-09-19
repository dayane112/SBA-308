// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];



    // the ID of the learner for which this data has been collected "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%. "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)<assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores

    // learner_id: 125,                        learner_id: 132,
    // assignment_id: 1,                       assignment_id: 1,
    // submission: {                           submission: {
    //   submitted_at: "2023-01-25",              submitted_at: "2023-01-24",
    //   score: 47                                score: 39

    // learner_id: 125,                        learner_id: 132,
    // assignment_id: 2,                       assignment_id: 2,
    // submission: {                           submission: {
    //   submitted_at: "2023-02-12",               submitted_at: "2023-03-07",
    //   score: 150                                core: 140
      
    // learner_id: 125,
    // assignment_id: 3,
    // submission: {
    //   submitted_at: "2023-01-25",
    //   score: 400  
      
// // empty  object for the learner data
// let learnerData = {
//     id: ''
// }

  try {
    if(CourseInfo.id !== AssignmentGroup.course_id){
        console.log(`Input invalid`)
    }
} catch (err) {
    console.error(err)
}

// for(let assignment = AssignmentGroup; assignment > 0;){
//     if(AssignmentGroup.assignments.points_possible !== number || AssignmentGroup.assignments.points_possible <= 0)
// } else if(points_possible <= 0)

for(let i = 0; i < AssignmentGroup.assignments; i++){
    let assignment = AssignmentGroup.assignments[i]
    if(typeof assignment.points_possible !== 'number' || assignment.points_possible <= 0){
        console.log('Invalid: The assignment does not have a valid value')
    } else {
        break;
    }
}

//  What do we know 
    // need to creata function called getLearnerData
    // gathers data, processes it, and then outputs
    // thro error if 


// let learnerData = {
//     learner_id125: {
//         totalScore: 0,
//         totalPoint: 0,
//         a1: pScore,
//         a2: pscore,
//     },
//     learner_id132: {
//         totalScore: 0,
//         totalPoint: 0,
//         a1: pScore,
//         a2: pscore,
//     }
// }

// getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)

// function getLearnerData (CourseInfo, AssignmentGroup, LearnerSubmissions){
//     // console.log(CourseInfo, AssignmentGroup, LearnerSubmissions)
//     let result = []
// }





  
//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     let result = []

      // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];

//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  

//objects = 4 data types : CourseInfo, AssignmentGroup, LearnerSubmission, AssignmentInfo
//compare due dates and get the average

//compare (manipulate array)
//iterate over objects to pull into an array
//308.3 loops example
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

let arr = []

for (let i = 0; i <  AssignmentGroup.assignments.length; i++) {
	//access the object
    const ag = AssignmentGroup.assignments[i];
    const subDate = {}; //trying to get due_at
    subDate.due_at = ag.due_at;

    //pushing array 
    arr.push(subDate)
}
console.log(arr)