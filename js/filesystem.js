


    const remote = require('electron').remote;
    console.log(remote.app.getVersion());

    var navgroup = document.getElementById("navgroup");
    getfiles().forEach(element => {
      var span = document.createElement("span");
      span.appendChild(document.createTextNode(element));
      span.className = "nav-group-item";
      
      span.setAttribute("id", element); // added line
      navgroup.appendChild(span);

     
      
    });