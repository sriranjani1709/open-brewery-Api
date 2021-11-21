
async function fetchData(){
    try{
        var breweryData = await fetch("https://api.openbrewerydb.org/breweries");
        var brewery = await breweryData.json();
        console.log(brewery);
        var board = document.createElement("div");
        board.style.backgroundImage = "url('Beer.png')";
        board.style.display = "flex";
        board.style.flexDirection = "row";
        board.style.flexWrap = "wrap";
        board.style.justifyContent = "center";

        
        brewery.forEach(element => {
            var box = document.createElement("div");
            box.style.width = "330px";
            box.style.height = "290px";
            box.style.border = "1px solid black";
            box.style.borderRadius = "15px";
            box.style.textAlign = "center";
            box.style.backgroundColor = "rgb(177, 157, 87)";  //#f2f6ec
        
            box.style.marginLeft = "25px";
            box.style.marginTop = "25px";
            box.style.paddingTop = "2rem";
            box.style.paddingBottom = "1rem";
            board.appendChild(box)

            var para = document.createElement("strong");
            para.innerText = "NAME:"+" "+element.name;
            box.appendChild(para)

            var para1 = document.createElement("p");
            para1.innerText = "TYPE:"+" "+element.brewery_type;
            box.appendChild(para1)

            var para2 = document.createElement("p");
            para2.innerText = "ADDRESS:"+" "+element.street+","+element.state+","+element.city+","+element.country;
            box.appendChild(para2)

            var para3 = document.createElement("p");
            para3.innerText = "WEBSITE:"+" "+element.website_url;
            box.appendChild(para3)

            var para4 = document.createElement("p");
            para4.innerText = "PHONE NO:"+" "+element.phone;
            box.appendChild(para4)
        });
        document.body.appendChild(board)
    } catch(error){
        console.log(error);
    }
}
fetchData();