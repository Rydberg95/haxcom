function viewGraph(x, y){
	var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    		labels: x,
            datasets: [{
            	label: "YOUR LINE",
            	data: y,
            	backgroundColor: "rgba(153, 255, 200, 0.4)"
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        }
    }
});

}