
window.onload = function() {
        //Button one
        document.getElementById("btnOne").addEventListener("click", function(){
                alert("You have clicked button one");
        })
        
        // const firstButton = document.querySelector("button");
        // firstButton.addEventListener("click", fucntion(){
        //     alert("You have clicked ");
        // })


        //Button two 
        document.getElementById("btnTwo").addEventListener("click", function(){
                var paragraph = document.createElement("p");
                var t = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
                paragraph.appendChild(t);
                document.getElementById("information").appendChild(paragraph);
        })
        //another way to do 
        // const secondbtn = document.getElementById("btnTwo")
        // secondbtn.addEventListener("click", function(){
        //     const newParagraph = document.createElement("p");
        //     const newContent = document.createTextNode("New para");
        //     newParagraph.appendChild(newContent);
        //     document.querySelector("#information").appendChild(newParagraph);

        // })
        // const info = document.createElement("div").id = "information";
        // document.body.appendChild(info);


        //Button three
        document.getElementById("btnThree").addEventListener("click", function(){
            let del = document.getElementById("information");
            del.removeChild(del.childNodes[0]);

    })
}
