var form=document.getElementById("form");       
var itemList=document.getElementById("container");
var email=document.getElementById("email").value;

form.addEventListener("submit",function(e){
    e.preventDefault();
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var num=document.getElementById("number").value;
      const obj={
        name,
        email,
        num
      }


      axios.post("https://crudcrud.com/api/91ca4f343b47454496262bef8f11108e/data",obj)
      .then((res)=>{
        console.log(res.data);
        display(res.data);
      }).catch((err)=>{
        console.log(err)
      })




})
function display(data){
  var li=document.createElement("li");
        var button=document.createElement("button");
        button.classList="btn";
        li.classList="list";
        button.appendChild(document.createTextNode("X"));
        li.appendChild(button);
        var itemList=document.getElementById("container");
        li.appendChild(document.createTextNode(data.name+" "+data.email+" "+data.num));
        itemList.appendChild(li)
  }











// window.addEventListener("DOMContentLoaded",()=>{
//   alert("loaded");
//   axios.get("https://crudcrud.com/api/91ca4f343b47454496262bef8f11108e/data")
//   .then((res)=>{
//     // console.log(res.data[0].name);
//   }).catch(err=>{
//     console.log(err);
//   })
// })




document.getElementById("container").addEventListener("click",function(e){
      e.preventDefault();
    if(e.target.classList.contains('btn')){
        if(confirm('are u sure??')){
             //remove from local storage
             var li =e.target.parentElement;
             
             itemList.removeChild(li);

        }

    }
   
})



