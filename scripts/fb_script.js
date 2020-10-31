//Feedback Page Script
document.getElementById("checkYes").addEventListener("click", function(){
    if (document.getElementById("checkYes").checked == true) {
        document.getElementById("ratingTools").style.display = "inline";
    } else {
        document.getElementById("ratingTools").style.display = "none";
    }
})

document.getElementById("ratings").innerHTML = document.getElementById("ratingSlider").value;
document.getElementById("ratingSlider").oninput = function() {
    document.getElementById("ratings").innerHTML = this.value;
}

document.getElementById("ratingTools").style.display = "none";

function validateForm() {
    var invalid = false
    if (document.forms["fb_form"]["name"].value == "") {
        // alert("Name cannot be left blank!");
        document.getElementById("name").style.background = "rgb(255, 230, 233) url(img/invalid.png) bottom right/contain no-repeat";
        document.getElementById("name").focus();
        invalid = true;
    } else {
        document.getElementById("name").style.background = "rgb(220, 255, 220) url(img/valid.png) bottom right/contain no-repeat";
    }

    if (document.forms["fb_form"]["email"].value == "") {
        // alert("Email cannot be left blank!");
        document.getElementById("email").style.background = "rgb(255, 230, 233) url(img/invalid.png) bottom right/contain no-repeat";
        document.getElementById("email").focus();
        invalid = true;
    } else {
        document.getElementById("email").style.background = "rgb(220, 255, 220) url(img/valid.png) bottom right/contain no-repeat";
    }

    if (!document.forms["fb_form"]["email"].value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alert("Email must be in the correct format!");
        document.getElementById("email").style.background = "rgb(255, 230, 233) url(img/invalid.png) bottom right/contain no-repeat";
        document.getElementById("email").focus();
        invalid = true;
    } else {
        document.getElementById("email").style.background = "rgb(220, 255, 220) url(img/valid.png) bottom right/contain no-repeat";
    }

    if (!document.getElementById("checkYes").checked && !document.getElementById("checkNo").checked) {
        alert("Please Check at least ONE option!");
        invalid = true;
    }

    if (document.forms["fb_form"]["textarea"].value == "") {
        // alert("Please tell me about your experience!");
        document.getElementById("textarea").style.background = "rgb(255, 230, 233) url(img/invalid.png) bottom right no-repeat";
        document.getElementById("textarea").focus();
        invalid = true;
    } else {
        document.getElementById("textarea").style.background = "rgb(220, 255, 220) url(img/valid.png) bottom right no-repeat";
    }
    // document.getElementById("fb_form").setAttribute("action","thankyou.html")
    return (!invalid);
}
