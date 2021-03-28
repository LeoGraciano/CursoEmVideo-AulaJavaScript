function confirm() {
    var number = Number(document.getElementById('id_number').value);
    var resp = document.getElementById('id_resp')
    var table = document.createElement('table');
    table.style = 'text-align: left'
    var tbody = document.createElement('tbody')
    table.appendChild(tbody);
    resp.appendChild(table);
    for (i = 0; i <= 10; i++){
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var td = document.createElement('td');
        th.innerHTML = `${number} x ${i} =`
        td.innerHTML = `${number*i}`
        
        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr)
    }
}
