function createTable() {
    //Write your code here

	let rn = prompt("Input number of rows");
	rn = parseInt(rn);

	let cn = prompt("Input number of columns");
	cn = parseInt(cn);

	let tr = document.createElement("tr");
	let td = document.createElement("td");
	const table = document.querySelector("#myTable");

	if((!rn ||rn<=0)|| (!cn || cn<=0)){
		alert("values are not defined");
	}else{
	for(let i=0;i<rn;i++){

		for(let j=0;j<cn;j++){
          td.textContent = `Row-${i} Column-${j}`
			tr.appendChild(td);
		}
		table.appendChild(tr);
	};
	};

	
  
}
