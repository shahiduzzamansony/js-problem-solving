function paperRequirements(book1, book2, book3) {
    const paperForBook1 = 100;
    const paperForBook2 = 200;
    const paperForBook3 = 300;
    const totalPapersForBook1 = paperForBook1 * book1;
    const totalPapersForBook2 = paperForBook2 * book2;
    const totalPapersForBook3 = paperForBook3 * book3;
    const totalPaperRequirements = totalPapersForBook1 + totalPapersForBook2 + totalPapersForBook3;
    return totalPaperRequirements;
}
console.log(paperRequirements(6, 5, 1));