var form=document.getElementById("form");       
var itemList=document.getElementById("container");
var email=document.getElementById("email").value;

function display(data){
 
        const len=data.length;
        for(let i=0;i<len;i++){

          var li=document.createElement("li");
          var button=document.createElement("button");
          button.classList="btn";
          li.classList="list";
          li.idList=data[i]._id;
          button.appendChild(document.createTextNode("X"));
          li.appendChild(button);
          var itemList=document.getElementById("container");
          li.appendChild(document.createTextNode(data[i].name+" "+data[i].email+" "+data[i].num));
          itemList.appendChild(li);

        }
        
}

form.addEventListener("submit",function(e){
  // e.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var num=document.getElementById("number").value;
    const obj={
      name,
      email,
      num
    }
    axios.post("https://crudcrud.com/api/30eb8978017a462780581e2abd1bd06f/data",obj)
    .then((res)=>{
      console.log(res.data);
      // display(res.data);
    }).catch((err)=>{
      console.log(err)
    })
})

window.addEventListener("DOMContentLoaded",()=>{
  // alert("loaded");
  axios.get("https://crudcrud.com/api/30eb8978017a462780581e2abd1bd06f/data")
  .then((res)=>{
    display(res.data);
    console.log(res.data);
  }).catch(err=>{
    console.log(err);
  })
})


document.getElementById("container").addEventListener("click",function(e){
      e.preventDefault();
    if(e.target.classList.contains('btn')){
        if(confirm('are u sure??')){
             //remove from local storage
             var li =e.target.parentElement;
             var id=e.target.parentElement.idList;
             console.log(id);
             axios({
              method:'delete',
              url:`https://crudcrud.com/api/30eb8978017a462780581e2abd1bd06f/data/${id}`,
             })
             .then(res=>console.log(res))
             .catch(err=>console.log(err));
            
             itemList.removeChild(li);

        }

    }
   
})





