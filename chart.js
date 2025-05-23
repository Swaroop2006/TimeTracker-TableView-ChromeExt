function renderChart(labels, data) {
    let ctx = document.getElementById("usageChart").getContext("2d");
    new Chart(ctx, { type: "pie", data: { labels: labels, datasets: [{ data: data, backgroundColor: ["red", "blue", "green", "yellow", "purple"] }] } });
}