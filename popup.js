document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get(["timeData"], (result) => {
        let timeData = result.timeData || {};
        let tableBody = document.getElementById("usageTable");
        let labels = [], data = [];

        Object.entries(timeData).forEach(([site, time]) => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${site}</td><td>${Math.round(time)}</td>`;
            tableBody.appendChild(row);
            labels.push(site); data.push(time);
        });

        renderChart(labels, data);
    });
});