
// =====================
// Salary Chart
// =====================
var ctxSalary = document.getElementById("salary").getContext("2d");

var salaryData = {
  labels: [
    "Yes",
    "No"
  ],
  datasets: [
    {
      data: [13, 87],
      backgroundColor: [
        '#FFFF8B',
        '#FF4C4C',
      ]
    }]
};

var salaryDoughnut = new Chart(ctxSalary, {
  type: 'doughnut',
  data: salaryData,
  options: {
    percentageInnerCutout : 50,
    animationEasing : "easeOutBounce",
    animateRotate : true,
    responsive: true,
    maintainAspectRatio: true
  }
});
