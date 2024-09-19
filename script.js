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




// AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error,

// for(let assignment = AssignmentGroup; assignment > 0;){
//     if(AssignmentGroup.assignments.points_possible !== number || AssignmentGroup.assignments.points_possible <= 0)
// } else if(points_possible <= 0)

console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions))

function getLearnerData (course, ag, submissions){
    // console.log(CourseInfo, AssignmentGroup, LearnerSubmissions)
    let result = []
    try {
        if(course.id !== ag.course_id){
            throw `Input invalid`
        }

        let temp = 0;

        for(let sub of submissions){
            // console.log(sub)
            if(!result.some(el => el.id == sub.learner_id)){ //if learner doesn't exist
                let student = {id: sub.learner_id}
                student[sub.assignment_id] = sub.submission.score
                result.push(student)
            } else { // if a learner does exist
                
                result.forEach((s) => {
                    if(s.id == sub.learner_id){
                        s[sub.assignment_id] = sub.submission.score
                        temp += sub.submission.score
                        // console.log(s[sub.assignment_id])
                    }
                })
                
            }
        }
        console.log(temp / 3)





    } catch (err) {
        console.error(err)
    }


    return result
}
// for(let j = 0; j < AssignmentGroup.assignments.length; j++){
//     let assignment = AssignmentGroup.assignments[j]
//     if(typeof assignment.points_possible !== 'number' || assignment.points_possible <= 0){
//         console.error('Invalid: The assignment does not have a valid value')
//     } else {
//         typeof assignment.points_possible == 'number' || assignment.points_possible >= 0
//         continue;
//     }
// }

//  What do we know 
    // need to creata function called getLearnerData
    // gathers data, processes it, and then outputs
    // thro error if 




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

// same loop for retrieving point
// attempt to put in a funcion later
let ptsp = []

for (let p = 0; p <  AssignmentGroup.assignments.length; p++) {
	//access the object
    const pt = AssignmentGroup.assignments[p];
    const points = {}; //trying to get point_possible
    points.points_possible = pt.points_possible;

    //pushing array 
    ptsp.push(points)
}
console.log(ptsp)

// trying to get the total score
// let scoreTotal = []

// for (let sub2 in LearnerSubmissions) {
//     let sub3 = sub2[0];
// 	//access the object
//     const sT = sub2[0].score;
//     const LearnerS = {}; //trying to get score
//     LearnerS.sub3 = sT;

//     //pushing array 
//     scoreTotal.push(LearnerS)
// }
// console.log(scoreTotal)


// trying to get the average grade
// let due = AssignmentGroup.assignments
// let sub = LearnerSubmissions.submission
let allScore = 0;
let allCount = 0;

for(let due of AssignmentGroup.assignments){
    for(let sub of LearnerSubmissions){
        let sub1 = sub.submission.submitted_at
        
        if(due.due_at < sub1){
            let lateGrade = sub.submission.score * 0.10
            allScore += lateGrade;
            allCount ++;

            // lateGrade = sub.submission.score -= lateGrade
            // return lategrade

        } else if(due.due_at >= sub1){
            let grade = sub.submission.score + sub.submission.score
            return grade

        }else if(grade > 0 && lateGrade > 0){
            let total = grade + grade || lateGrade + grade
            let average = total / 2
            return average
        }
    }
console.log(average)
}
















  
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