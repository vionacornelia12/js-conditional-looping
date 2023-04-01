let count = 0;

function showConfirm() {
  const result = confirm("Apakah anda mau mengulang");
  if (result) {
    count++;
    showConfirm();
  } else {
    alert("Perulangan sudah dilakukan sebanyak " + count + " kali");
  }
}

showConfirm();