function addTextInDiv(key) {
    var cls = document.getElementsByClassName("container");
    var text = "";
    for (i in key) {

        //key : i
        //value : key[i]

        console.log(key[i]["question"]);

        text += '<div class="content">';
        text +=     '<div class="question" onclick="openAnswer(this,' + i + ')">';
        text +=         '<span id="q">Q</span>';
        text +=         '<span id="context">';
        text +=             key[i]["question"];
        text +=         '</span>';
        text +=         '<img class="image" src="img/down.svg" id="img' + i + '"/>';
        text +=     '</div>';
        text +=     '<div class="answer" id="' + i +'">';
        text +=         '<span>';
        text +=             key[i]["answer"];
        text +=         '</span>';
        text +=     '</div>';
        text += '</div>';
    }
    text += "";
    cls[0].innerHTML = text;
}

function openAnswer(self, questionId) {

    var bgStyle = self.style;
    var eleId = document.getElementById(questionId);
    var imgId = document.getElementById('img' + questionId);
    console.log("imgId " + imgId);

    if (eleId.style.display === "block") {
        eleId.style.display = "none";
        bgStyle.backgroundColor = "white";
        imgId.src = "img/down.svg";
    } else {
        eleId.style.display = "block";
        bgStyle.backgroundColor = "#efefef";
        imgId.src = "img/up.svg";
    }

}
