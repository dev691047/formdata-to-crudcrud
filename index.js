var form=document.getElementById("form");       



form.addEventListener("submit",function(e){
    e.preventDefault();
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var num=document.getElementById("number").value;

      var li=document.createElement("li");
      var itemList=document.getElementById("container");
      li.appendChild(document.createTextNode(name+" "+email+" "+num));
      itemList.appendChild(li);


    //stringify hte input data
     var data=JSON.stringify(name+" "+email+" "+num);
    localStorage.setItem(email,data);




})