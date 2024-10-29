function showInfo(member) {
    let name, role, description;

    switch(member) {
        case 'member1':
            name = 'Thành viên 1';
            role = 'Lập trình viên';
            description = 'Đây là thông tin về thành viên 1.';
            break;
        case 'member2':
            name = 'Thành viên 2';
            role = 'Designer';
            description = 'Đây là thông tin về thành viên 2.';
            break;
        case 'member3':
            name = 'Thành viên 3';
            role = 'Quản lý dự án';
            description = 'Đây là thông tin về thành viên 3.';
            break;
        case 'member4':
            name = 'Thành viên 4';
            role = 'Phân tích dữ liệu';
            description = 'Đây là thông tin về thành viên 4.';
            break;
    }

    document.getElementById('member-name').innerText = name;
    document.getElementById('member-role').innerText = role;
    document.getElementById('member-description').innerText = description;

    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
