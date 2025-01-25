const themeButton = document.querySelector('.navbar_items-btn')

themeButton.addEventListener('click',()=>{
    const body = document.body;
    if(body.className ==""){
        body.className="dark"
    }
    else{
        body.className=""
    }
})

const sidebarOpenbtn =  document.querySelector('.sidebar_toggle-open')
const sidebarClosebtn =  document.querySelector('.sidebar_toggle-close')
const sidebar =  document.querySelector('.sidebar')

sidebarOpenbtn.addEventListener('click',()=>{
    sidebar.computedStyleMap.left = "0"
    sidebarOpenbtn.style.display = "none"
    sidebarClosebtn.style.display = "inline-block"
  
})

sidebarClosebtn.addEventListener('click',()=>{
    sidebar.computedStyleMap.left = "-100%"
    sidebarOpenbtn.style.display = "inline-block"
    sidebarClosebtn.style.display = "none"
  
})

const chart = document.getElementById('chart');

new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: ' Sales for the month',
      data: [12, 19, 3, 5, 2, 3,],
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