var selectedRow = null;

function onFormSubmit(){
    if (validate()) {
        var formData = readFormData();
        if(selectedRow == null){
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
    resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["cFullName"] = document.getElementById("cFullName").value;
    formData["cCode"] = document.getElementById("cCode").value;
    formData["cExamCenter"] = document.getElementById("cExamCenter").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table-list-id").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.cFullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cCode;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cExamCenter;
    
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = '<a onClick="onEdit(this)">Edit</a><a onClick="onDelete(this)">Delete</a>';
}

function resetForm() {
    document.getElementById("cFullName").value = "";
    document.getElementById("cCode").value = "";
    document.getElementById("cExamCenter").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("cFullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cExamCenter").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.cFullName;
    selectedRow.cells[1].innerHTML = formData.cCode;
    selectedRow.cells[2].innerHTML = formData.cExamCenter;

}

function onDelete(td){
    if (confirm('Are you sure you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table-list-id").deleteRow(row.rowIndex);
        resetForm();
    }   
}

function validate(){
    isValid = true;
    if(document.getElementById("cCode").value == ""){
        isValid = false;
        document.getElementById("cCodeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cCodeValidationError").classList.contains("hide")) {
            document.getElementById("cCodeValidationError").classList.add("hide");
        }
    }
    return isValid;
}