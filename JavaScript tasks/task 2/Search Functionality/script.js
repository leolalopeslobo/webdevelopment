const search = () => {
    const searchbox1 = document.getElementById("search-item-one").value.toUpperCase();
    const searchbox2 = document.getElementById("search-item-two").value.toUpperCase();
    const storeditems = document.getElementById("product-items");
    const product = document.querySelectorAll(".product");
    const plocation = storeditems.getElementsByTagName("h2");


    for (var i=0; i<plocation.length; i++){

        if(document.getElementById("search-item-one").value == ""){
            product[i].style.display = "flex";
        }

        else{

        let match = product[i].getElementsByTagName('h2')[0];
        

        if (match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox1) > -1){
                console.log(textvalue,"me!");
                console.log(product[i].getElementsByTagName("h3")[0].innerHTML.toUpperCase());
                let sector = product[i].getElementsByTagName("h3")[0].innerHTML.toUpperCase();

                if (searchbox2 == sector){
                    console.log(searchbox2 == sector);
                    product[i].style.display = "";
                }
                else {
                    product[i].style.display = "none";
                }
                
            } else {
                product[i].style.display = "none";
            }
            
        }

        }
    }
}