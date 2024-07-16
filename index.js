Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;// first it check if order.status equal to Decline if true then class = danger and if false then it check if the status is pending if true it set the status to warning if false it class = primary
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})