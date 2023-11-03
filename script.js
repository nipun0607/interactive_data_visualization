const ctx = document.getElementById("myChart");
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly sales",
        data: [60, 80, 30, 75, 45, 60],
        borderWidth: 1,
        backgroundColor: ["#ccc", "#000"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
