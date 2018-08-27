function addTextInDiv(key) {
    var cls = document.getElementsByClassName("notice_content");
    var text = "";
    for (i in key) {

        //key : i
        //value : key[i]
        
        console.log(i);
        console.log(key[i]);

        text += '<div class="notice_main" onclick="openContext(this,' + i + ')">';
        text +=    '<span id="notice_number">' + key[i]["index"] + '</span>';
        text +=     '<span id="notice_main_title">';
        text +=         key[i]["title"];
        text +=     '</span>';
        text +=     '<span id="notice_submit_date">' + key[i]["date"] + '</span>'
        text +=     '<img class="notice_image" alt="" id="notice_img' + i + '" src="../img/down.svg" />';
        text += '</div>';
        text += '<div class="notice_context" id="' + i +'">';
        text +=     '<span>';
        text +=         key[i]["context"];
        text +=     '</span>';
        text += '</div>';
    }
    text += "";
    cls[0].innerHTML = text;
}

function changedColor(event) {
    var paging = document.getElementsByClassName("notice_paging_link");
    for (var i = 0; i < paging.length; i++) {
        paging[i].className = paging[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";
}

function openContext(self, index) {

    var bgStyle = self.style;
    var eleId = document.getElementById(index);
    var imgId = document.getElementById('notice_img' + index);

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
