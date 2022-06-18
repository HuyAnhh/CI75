let menu = ["Ronaldo", "Messi", "Benzema", "Salah", "Neymar"]
alert(menu); 

let A = Number(prompt("Nhập số của bạn"))

switch (A) {
    case 0: 
        alert("Mời bạn nhập lại");
        break;

    case 1:
        alert(menu);
        break;
    
    case 2:
        let B = Number(prompt("Nhập vị trí bạn muốn thêm"));
        let C = prompt("Nhập tên cầu thủ bạn muốn thêm");
        menu.splice(B,0,C);
        alert(menu);
        break;

    case 3:
        let D = Number(prompt("Vị trí bạn muốn cập nhật"))
        let E = prompt("Nhập tên cầu thủ bạn muốn cập nhật")
        menu.splice(D,1,E);
        alert(menu);
        break;
        
    case 4:
        let F = Number(prompt("Vị trí bạn muốn xóa"))
        menu.splice(F,1);
        alert(menu);
        break;

    default: alert("Vui lòng nhập lại")
        break;
}



