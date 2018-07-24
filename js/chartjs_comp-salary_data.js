// =====================
// Comparable Salary Chart
// =====================


//pie version
var ctxCompSalaryM = document.getElementById("comp-salaryM").getContext("2d");

var compsalaryDataM = {
  labels: [
    "Yes",
    "No"
  ],
    datasets: [
      {
        data: [75, 25],
        label: ['Yes', 'No'],
        backgroundColor: [
          '#2F7392',
          '#E03A47'
        ] //blue red

      }
    ],
};

var compSalaryPieM = new Chart(ctxCompSalaryM, {
    type: 'pie',
    data: compsalaryDataM,
    options: {
      title: {
        display: true,
        text: "Men",
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 8,
        },
      },
      elements: {
        arc: {
          borderWidth: 0
        },
      },
      maintainAspectRatio: true,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      responsive: true,
  }
});

var ctxCompSalaryW = document.getElementById("comp-salaryW").getContext("2d");

var compsalaryDataW = {
  labels: [
    "Yes",
    "No"
  ],
    datasets: [
      {
        data: [48, 52],
        label: ['Yes', 'No'],
        backgroundColor: [
          '#2F7392',
          '#E03A47'
        ] //blue red

      }
    ],
};

var compSalaryPieW = new Chart(ctxCompSalaryW, {
    type: 'pie',
    data: compsalaryDataW,
    options: {
      title: {
        display: true,
        text: "Women",
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 8,
        },
      },
      elements: {
        arc: {
          borderWidth: 0
        },
      },
      maintainAspectRatio: true,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      responsive: true,
  }
});



//bar version
// var ctxCompSalary = document.getElementById("comp-salary").getContext("2d");
//
// var compsalaryData = {
//   labels: [
//     "Men", "Women"
//   ],
//     datasets: [
//       {
//         data: [75,48],
//         label: 'Yes',
//         backgroundColor: '#2F7392' //blue
//
//       }, {
//         data: [25,52],
//         label: 'No',
//         backgroundColor: '#E03A47' //red
//       }
//     ],
// };
//
// var compSalaryBar = new Chart(ctxCompSalary, {
//     type: 'bar',
//     data: compsalaryData,
//     options: {
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           boxWidth: 8,
//         },
//       },
//       maintainAspectRatio: true,
//       scales: {
//         yAxes: [{
//           stacked: true,
//           gridLines: {
//             display: false,
//             drawBorder: false,
//           },
//           ticks: {
//               beginAtZero:true
//
//           }
//         }],
//         xAxes: [{
//           stacked: true,
//           barThickness: 30,
//           gridLines: {
//             display: false,
//             drawBorder: false,
//           }
//         }]
//       }
//   }
// });
