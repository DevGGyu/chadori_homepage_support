function addTextInDiv(key) {
    var cls = document.getElementsByClassName("qna_container");
    var text = "";
    for (i in key) {

        //key : i
        //value : key[i]

        text +=     '<div class="qna_question" onclick="openAnswer(this,' + i + ')">';
        text +=         '<span id="qna_q">Q</span>';
        text +=         '<span id="qna_context">';
        text +=             key[i]["question"];
        text +=         '</span>';
        text +=         '<img class="qna_image" src="../img/down.svg" id="qna_img' + i + '"/>';
        text +=     '</div>';
        text +=     '<div class="qna_answer" id="' + i +'">';
        text +=         '<span>';
        text +=             key[i]["answer"];
        text +=         '</span>';
        text +=     '</div>';
    }
    text += "";
    cls[0].innerHTML = text;
}

function openAnswer(self, questionId) {

    var bgStyle = self.style;
    var eleId = document.getElementById(questionId);
    var imgId = document.getElementById('qna_img' + questionId);

    if (eleId.style.display === "block") {
        eleId.style.display = "none";
        bgStyle.backgroundColor = "white";
        imgId.src = "../img/down.svg";
    } else {
        eleId.style.display = "block";
        bgStyle.backgroundColor = "#efefef";
        imgId.src = "../img/up.svg";
    }

}
