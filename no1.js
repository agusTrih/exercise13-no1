const jobIt = [
    "Front end developer",
    "Back end developer",
    "Cyber security",
    "Fullstack Web Developer",
];
document.write(
    `Jumlah array ada ${jobIt.length} diantaranya sebagai berikut :</br>`
);
jobIt.forEach((element) => {
    console.log(element);
    document.write(`<li>${element}</li>`);
});
console.log(jobIt.length);
