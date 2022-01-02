function kirim() {
    let nama = document. getElementById('name').value;
    if(nama == '') {
        alert('Masukan Nama Terlebih Dahulu');
    }
    let email = document.getElementById('email').value;
    if(email == '') {
        alert('Email Tidak Ada');
    }
    let umur = document. getElementById('umur').value;
    if(umur == '') {
        alert('Masukan Umur Anda');
    }
    let password = document. getElementById('password').value;
    if(password == '') {
        alert('Password Tidak Ada')
    }
    else {
        alert('Input Sukses');
    }
}