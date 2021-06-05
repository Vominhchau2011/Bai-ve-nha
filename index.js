function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
var acc = [{
    email_data:"vmchau@gmail.com",
    pass_data: "123456"
}]
$(document).ready(function(){
    $("#btn_logout").click(function(){
        $("#sign_in").show();
        $("#logout").hide();
        $("#register").hide();
    });
    $("#btn_register").click(function(){
        $("#sign_in").hide();
        $("#logout").hide();
        $("#register").show();
    });
    $("#btn_back").click(function(){
        $("#sign_in").show();
        $("#logout").hide();
        $("#register").hide();
    });

    $("#btn_ok").click(function (){
        let email_register = $.trim($("#username").val())
        let password_register = $.trim($("#password").val())
        let repassword_register= $.trim($("#re-password").val())
        let error = true
        if(email_register==""){
            $("#err_email_register").text("Vui lòng không để trống trường này!")
            error = false
        }
        else if(!isEmail(email_register)){
            $("#err_email_register").text("Email không đúng định dạng !")
            error = false
        } else {
            $("#err_email_register").text("")
        }
        if(password_register==""){
            $("#err_pass_register").text("Vui lòng không để trống trường này!")
            error = false
        }
        if(password_register != repassword_register){
            $("#err_repass_register").text("Mật khẩu không khớp !")
            error = false
        }
        acc.forEach(account=>{
            if (account["email_data"] == email_register){
                error = false;
                $("#err_email_register").text("Email đã tồn tại!");
            }
        })
        if (error){
            acc.push({email_data: email_register, pass_data: password_register})
            $("#sign_in").show();
            $("#register").hide();
            $("#logout").hide();
            alert("Đăng kí thành công!");
        }
        return error;
    });
    $("#btn_login").click(function () {
        let email_signin = $.trim($("#username_signin").val());
        let password_signin = $.trim($("#password_signin").val());
        let check = true;
        if (email_signin == "") {
            check = false;
            $("#err_email_sign_in").text("Vui lòng không để trống trường này!");
        }
        else if (!isEmail(email_signin)) {
            check = false;
            $("#err_email_sign_in").text("Không đúng định dạng email!");
        } else {
            $("#err_email_sign_in").text("");
        }
        if (password_signin == "" ) {
            check = false;
            $("#err_pass_signin").text("Vui lòng không để trống trường này!");
        }

        acc.forEach(account => {
            if (account["email_data"] == email_signin && account["pass_data"] == password_signin){
                $("#sign_in").hide();
                $("#logout").show();
                $("#register").hide();
            }else{
                alert("Sai thông tin đăng nhập")
            }
        })
    })

});
