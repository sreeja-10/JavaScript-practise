function runDOM() {
            // 1. Change text
            document.getElementById("msg").innerText = "Text changed using DOM!";

            // 2. Change CSS
            document.getElementById("msg").style.color = "Green";
            document.getElementById("msg").style.backgroundColor = "Yellow";
            document.getElementById("msg").style.fontWeight = "bold";

            // 3. Add new element dynamically
            let newPara = document.createElement("p");
            newPara.innerText = "This paragraph was added using JavaScript!";
            newPara.style.color = "blue";
            newPara.style.fontSize= "18px";
            newPara.style.marginTop = "15px";
            newPara.style.fontFamily= "Arial"
            document.body.appendChild(newPara);

            // 4. Show output in webpage
            document.getElementById("result1").innerHTML = "Page Title: " + document.title;
            document.getElementById("result2").innerHTML = "URL: " + location.href;
            document.getElementById("result3").innerHTML = "Hostname: " + location.hostname;

             // Add styles to result boxes
    let results = document.querySelectorAll("#result1, #result2, #result3");
    results.forEach(box => {
        box.style.background = "#f3f3f3";
        box.style.padding = "8px";
        box.style.marginTop = "6px";
        box.style.borderRadius = "5px";
        box.style.border = "1px solid #ccc";
        box.style.fontSize = "16px";
    });

            // 5. Console outputs
            console.log("You clicked the button!");
            console.log("Title:", document.title);
            console.log("URL:", location.href);
            console.log("Hostname:", location.hostname);
            console.log("DOM updated successfully!");
        }

    function changeText() {
    document.getElementById("heading").innerText = "Text Changed Successfully!";
}

function changeCSS() {
    document.getElementById("box").style.backgroundColor = "yellow";
    document.getElementById("box").style.color = "blue";
    document.getElementById("box").style.fontSize = "20px";
}

function addElement() {
    let para = document.createElement("p");
    para.innerText = "A new paragraph has been added dynamically!";
    document.body.appendChild(para);
}

function showOutput() {
    document.getElementById("output").innerText = "Output displayed successfully using JavaScript!";
}

function showConsole() {
    console.log("Console message: JavaScript function executed!");
}


