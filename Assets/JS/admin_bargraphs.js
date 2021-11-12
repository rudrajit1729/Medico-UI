const ctx2 = document.getElementById('myChart2').getContext('2d');

const mydata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Appointments',
            data: [12, 19, 3, 5, 6, 5, 12, 19, 3, 5, 6, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: mydata,
    options: {
        maintainAspectRatio: false,
        scales: {
            grid: {
                borderWidth: 15
            },
            y: {
                beginAtZero: true,
            },
            x :{
                
            }
        }
    }
});

let oTable = document.getElementById('barTableBody');
let i = 0;
mydata.labels.forEach(item=>{
    var row = oTable.insertRow();
    var key = row.insertCell(0);
    key.innerHTML = item;
    var value = row.insertCell(1);
    value.innerHTML = mydata.datasets[0].data[i++];

});