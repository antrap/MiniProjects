const container = document.querySelector(".data-container");
  

function generatebars(num = 30) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1; 
      
    const bar = document.createElement("div");
  
    bar.classList.add("bar"); //bar class is added to division class
  
    bar.style.height = `${value * 3}px`;
  
    bar.style.transform = `translateX(${i * 30}px)`;
      
    const barLabel = document.createElement("label");
  
    barLabel.classList.add("bar_id");

    barLabel.innerHTML = value;
      
    bar.appendChild(barLabel);
  
    container.appendChild(bar);
  }
}
  // "Selection Sort"
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  
   var min_idx = 0;
   for (var i = 0; i < bars.length; i += 1) {

    min_idx = i;

  
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      bars[j].style.backgroundColor = "red";
        
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
  
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
        
    
      if (val1 < val2) {
        if (min_idx !== i) {
  
          bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
  
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
      }
    }
  
    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
  
  
    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
  

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
}
  

generatebars();
  

 function generate()
{
  window.location.reload();
 }
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Selection Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  
}