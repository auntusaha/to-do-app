let input = document.getElementById("inputTask");
let btn = document.getElementById("addBtn");
let listRoper = document.getElementById("listRoper");

//click Add Task button to run this function
btn.addEventListener('click', function(){
  //after puting any carrecter to start this action
  if(input.value !== ""){
  //creating sun element 
  let item = document.createElement("input");
  let itemTxt = document.createElement("label");
  let del = document.createElement("button")
  let br = document.createElement("br");
  let hr = document.createElement("hr");

  //modiefieing that elements
  item.type = "checkbox";
  item.classList.add("chakBox");
  item.setAttribute('id','checkBox');
  itemTxt.innerHTML = `&#160; ${input.value} &#160;`;
  itemTxt.for = "checkBox";
  del.innerHTML = "🗑";
  del.classList.add("delBtn");

  //delete button for deliting the list iten
  del.addEventListener('click',function(){
    item.remove();
    itemTxt.remove();
    del.remove();
    br.remove();
    hr.remove();
  });

  //save to local stroage
  console.log(itemTxt);
  // localStorage.setItem = ('storData', item)
  localStorage.setItem("lastname", itemTxt);
  // localStorage.setItem = ('storData', del)
  // localStorage.setItem = ('storData', br)
  // localStorage.setItem = ('storData', hr)
  
  //pushing the value in my html document 
  listRoper.appendChild(item);
  listRoper.appendChild(itemTxt);
  listRoper.appendChild(del);
  listRoper.appendChild(br);
  listRoper.appendChild(hr);
  }
});

