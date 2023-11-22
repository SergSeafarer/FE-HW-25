const createTable = function (size1, size2) {
  const tableRef = document.createElement('table');
  tableRef.style.border =  '1px solid black';
  tableRef.style.borderCollapse = 'collapse';

  let count = 1;
  for(let i = 1; i <= size1; i++) {
    let column = document.createElement('tr');
    column.style.border = '1px solid black';
    tableRef.append(column);
    
    for(let k = 1; k <= size2; k++) {
      let row = document.createElement('td');
      row.style.border = '1px solid black';
      row.textContent = count;
      count++;
      column.append(row);
    }
  }
  return tableRef;
}
const rootRef = document.querySelector('.root');
rootRef.appendChild(createTable(10, 10));