
var selectedRow = null


function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("show").getElementsByTagName('tbody')[0];
    console.log(table);
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)" class="btn btn-success">Edit</button> <button onClick="onDelete(this)" class="btn btn-danger">Delete</button>`;
}
function myFunction() {
    document.getElementById("myForm").reset();
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    console.log(selectedRow);
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;

    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.age;

}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('show').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("age").value = '';
    selectedRow = null;
}

function validateForm() {
    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var e = document.getElementById("email").value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+).*$/;
    var a = document.getElementById("age").value;
    if (f == "") {
        document.getElementById("firstname_error").style.display = "block";
        document.getElementById('fname').setAttribute("class", "form-control border_color");
        return false;
    }
    if (l == "") {
        document.getElementById("lastname_error").style.display = "block";
        document.getElementById('lname').setAttribute("class", "form-control border_color");
        return false;
    }
    if (e == "") {
        swal("email must be filled out");
        return false;
    }
    if (e == "") {
        swal("email must be filled out");
        return false;
    }
    if (!document.form1.agree.checked) {
        swal("Agree to Terms & Conditions checkbox before submitting");
        return false;
    }
    if (!e.match(validRegex)) {

        swal("email is not valid");
        return false;
    }

    if (a == "") {
        swal("age must be filled out");
        return false;
    }
    onFormSubmit();

}

