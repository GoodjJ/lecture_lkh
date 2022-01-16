//[Dashboard Javascript]

//Project:	Unique Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
//ticker
 	if ($('#webticker-6').length) {   
		$("#webticker-6").webTicker({
			height:'auto', 
			duplicate:true,
			startEmpty:false, 
			rssfrequency:5,
			direction: 'right'
		});
	}
//data table
    $('#example1').DataTable({
      'paging'      : false,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : false,
      'autoWidth'   : false
    });
	
	if ($('.table-responsive').length) {
        setRandomClass();
        setInterval(function () {
            setRandomClass();
        },1000);
        function setRandomClass() {
            var tbody = $(".table-responsive table tbody");
            var items = tbody.find("tr");
            var number = items.length;
            var random1 = Math.floor((Math.random() * number));
            var random2 = Math.floor((Math.random() * number));
            items.removeClass("bg-pale-success");
            items.eq(random1).addClass("bg-pale-success");
            items.eq(random2).addClass("bg-pale-success");
        }
    }
	
	
	//----chart1
    //Get the context of the Chart canvas element we want to select
    var dasChartjs = document.getElementById("chartjs1").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = dasChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(247, 147, 26,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var DASStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(247, 147, 26,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var DASMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "BTC",
            data: [20, 18, 35, 60, 38, 40, 70],
            backgroundColor: blue_trans_gradient,
            borderColor: "#F7931A",
            borderWidth: 1.5,
            strokeColor : "#F7931A",
            pointRadius: 0,
        }]
    };

    var DASCardconfig = {
        type: 'line',

        // Chart Options
        options : DASStats,

        // Chart Data
        data : DASMonthData
    };

    // Create the chart
    var DASAreaChart = new Chart(dasChartjs, DASCardconfig);
	
	
	//----chart2
    //Get the context of the Chart canvas element we want to select
    var dasChartjs = document.getElementById("chartjs2").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = dasChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(131, 131, 131,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var DASStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(131, 131, 131,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var DASMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "ETH",
            data: [40, 30, 60, 40, 45, 30, 60],
            backgroundColor: blue_trans_gradient,
            borderColor: "#838383",
            borderWidth: 1.5,
            strokeColor : "#838383",
            pointRadius: 0,
        }]
    };

    var DASCardconfig = {
        type: 'line',
        // Chart Options
        options : DASStats,
        // Chart Data
        data : DASMonthData
    };

    // Create the chart
    var DASAreaChart = new Chart(dasChartjs, DASCardconfig);

    //----chart3
    //Get the context of the Chart canvas element we want to select
    var dasChartjs = document.getElementById("chartjs3").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = dasChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(73, 152, 6,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var DASStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(73, 152, 6,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var DASMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "XRP",
            data: [70, 20, 35, 60, 20, 40, 30],
            backgroundColor: blue_trans_gradient,
            borderColor: "#499806",
            borderWidth: 1.5,
            strokeColor : "#499806",
            pointRadius: 0,
        }]
    };

    var DASCardconfig = {
        type: 'line',

        // Chart Options
        options : DASStats,

        // Chart Data
        data : DASMonthData
    };

    // Create the chart
    var DASAreaChart = new Chart(dasChartjs, DASCardconfig);
	
	
	 //----chart4
    //Get the context of the Chart canvas element we want to select
    var dasChartjs = document.getElementById("chartjs4").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = dasChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(28, 117, 188,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var DASStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(28, 117, 188,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var DASMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "XRP",
            data: [20, 50, 65, 30, 24, 60, 40],
            backgroundColor: blue_trans_gradient,
            borderColor: "#1c75bc",
            borderWidth: 1.5,
            strokeColor : "#1c75bc",
            pointRadius: 0,
        }]
    };

    var DASCardconfig = {
        type: 'line',

        // Chart Options
        options : DASStats,

        // Chart Data
        data : DASMonthData
    };

    // Create the chart
    var DASAreaChart = new Chart(dasChartjs, DASCardconfig);
	
	
}); // End of use strict