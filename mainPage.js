var temp = []
document.getElementById('submit').addEventListener('click', () => {
    var x = document.getElementsByClassName('amt')
    for (var i = 0; i < x.length; i++) {

        temp.push((parseInt(x[i].value)))
    }
    // console.log(temp)
})


var temp1 = []
document.getElementById('submit').addEventListener('click', () => {
    var x1 = document.getElementsByClassName('menu')
    for (var i = 0; i < x1.length; i++) {

        temp1.push((x1[i].value))
    }
    // console.log(temp1)
})

document.getElementById('submit').addEventListener('click', () => {

    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: temp1,
            datasets: [{
                label: 'Population (in lakhs)',
                data: temp,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.getElementById('c-div').style.visibility='visible'
})