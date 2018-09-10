
		
		function setTitle(title){
			x=document.getElementById("page_title")
			x.innerHTML=title;
			x.style.color="black";
		}

		function btn1click(){
			document.getElementById("page_title").innerHTML= "AlgoHack";
			//x.style.color="black";
		}

		function getData(){
			url="getData.php";
			ajaxGet(url);
		}

		function ajaxGet(url){
        try {
            // Opera 8.0+, Firefox, Safari
            ajaxRequest = new XMLHttpRequest();
        }
        catch (e){
                // Internet Explorer Browsers
            try {
                    ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e) {
                try{
                   ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }catch (e){
                            // Something went wrong
                    alert("error!");
                    return false;
                }
            }
        }


        ajaxRequest.onreadystatechange = function(){
             if(ajaxRequest.readyState == 4){
                processGetResponse(ajaxRequest.responseText);
             }
        }

        ajaxRequest.open("GET", url, true);
        ajaxRequest.send(null); 

    }
function processGetResponse(responseText){
    console.log(responseText)
    jsonobj=JSON.parse(responseText)
    document.getElementById("page_title").innerHTML=jsonobj.text;

}

