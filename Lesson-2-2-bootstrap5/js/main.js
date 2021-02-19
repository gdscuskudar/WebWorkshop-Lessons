$(document).ready(function(){
    $("#gonder").click(function(){
        var alert = $(".alert");
        var adsoyad = $("#adsoyad"), eposta = $("#eposta"), sehir = $("#sehir"), comment = $("#comment");

        if(adsoyad.val() === ""){
            alert("Lütfen ad soyad alanını boş bırakmayınız");
            setTimeout(function(){
                adsoyad.focus();
            },500);

            return false;
        }
        else if(eposta.val() === ""){
            alert("Lütfen e-posta alanını boş bırakmayınız");
            setTimeout(function(){
                eposta.focus();
            },500);

            return false;
        }
        else if(sehir.val() == "0"){
            alert("Lütfen şehir alanını boş bırakmayınız");
            setTimeout(function(){
                sehir.focus();
            },500);

            return false;
        }
        else if(comment.val() === ""){
            alert("Lütfen açıklama alanını boş bırakmayınız");
            setTimeout(function(){
                comment.focus();
            },500);

            return false;
        }
        else {
            if($("div").hasClass("alert")){
                $(".customformElements").addClass("d-none");
                $(".alert").removeClass("d-none");

                // $(".alert").hide(1000);
            }

            setTimeout(function(){
                $("input, textarea").val("");
                $("select").val("0");
                $(".customformElements").removeClass("d-none");
                $(".alert").addClass("d-none");
            },2000);
        }

    });
});