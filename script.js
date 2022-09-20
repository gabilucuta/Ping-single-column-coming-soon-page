function myFunction()
{
    var dom = document.getElementById("searchbar").value;
    if(dom=="")
    {   
        document.getElementById("searchbar").style.border.color = "red";
        document.getElementById("error").style.opacity = "1";
    }else{
        document.getElementById("error").style.opacity = "0";
    }
    
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dom)))
    {
        document.getElementById("error").style.opacity = "0";
    }else{
        document.getElementById("error").style.opacity = "1";
    }
  

}