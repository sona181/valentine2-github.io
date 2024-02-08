$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open"); // Assuming this is your "Yes" button
    var btn_reset = $("#reset"); // This will now act as your "No" button, so you might want to rename it in HTML as well

    // Rename the "Reset" button to "No" initially, if not already done in HTML
    btn_reset.text("No");

    var noButtonTexts = ["That was a quick no!", "Think about it", "me you us so perfect", "u so cute pressing no", "cmon press the left button" , "wow u-a-u", "uff dedikimi", "Please press Yes", "Pleaseeeeeeeeeeeeeeeeeeeeeee" ,"Pookie come on", "Are you fr rn?", "esht thjesht nji buton i vogel i parendesishem","pres yes if u even care" , "s'me besohett", "ill change the buttonss","Yup","nvm", "That felt like an  insincere yes :[" , "Do you even like me" , "Damn" , "Press left" , "OHH COMONNN" , "mund te shkruaj 100 mesazhe te tilla" ,"like gjith diten","s lodhem prz", "ill make you then! idc" , "yes please! :3"];
    var noClickCount = 0;

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        if (noClickCount < noButtonTexts.length) {
            btn_reset.text(noButtonTexts[noClickCount]);
            noClickCount++;
            if (noClickCount == noButtonTexts.length) {
                btn_reset.off("click").click(function() {
                    open(); // Open the envelope after cycling through all texts
                });
            }
        }
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});
