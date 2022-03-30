 function check()
 {
	 var hoten = f.HoVaTen.value;
	 var diachi = f.DiaChi.value;
	 var email = f.Email.value;
	 var dienthoai = f.DienThoai.value;
	 
	 var emRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	 var dtRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
	 
	 if(hoten == "")
	 {
		 alert("Họ và tên không được bỏ trống!");
		 return false;
	 }
	 
	 if(diachi == "")
	 {
		 alert("Địa chỉ không được bỏ trống!");
		 return false;
	 }
	 
	 if(email == "")
	 {
		 alert("Email không được bỏ trống!");
		 return false;
	 }
	 
	 if(dienthoai == "")
	 {
		 alert("Điện thoại không được bỏ trống!");
		 return false;
	 }
	 
	 if(!emRegExp.test(email))
	 {
		 alert("Email không hợp lệ!");
		 return false;
	 }
	 
	 if(!dtRegExp.test(dienthoai))
	 {
		 alert("Điện thoại không hợp lệ!");
		 return false;
	 }
	 
	 return true;
 }