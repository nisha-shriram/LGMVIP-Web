function data(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let image = document.getElementById("image").value;
    let gender;
    let skill;


    if(document.getElementById("male").checked){
        gender = "Male";
    }
    else if(document.getElementById("female").checked){
        gender = "Female";
    }

    if(document.getElementById("html").checked){
        skill = "HTML";
    }
    else if(document.getElementById("css").checked){
        skill = "CSS";
    }
    else if(document.getElementById("js").checked){
        skill = "JS";
    }


    let string1 = "Name: "+ name;
    let string2 = "Email: "+ email;
    let string3 = "Gender: "+gender;
    let string4 = "Skill: "+skill;
    let Image =  "<img src= \"image\">";
    document.getElementById("data").innerHTML =string1 + "<br/>"+ string2 + "<br/>"+ string3+ "<br/>" + string4+ "<br/>" +Image;

}