const itemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsByClass.length}`);

itemsByClass.forEach(item => {
    const categoryTitle = item.querySelector("h2");
    console.log(`Category: ${categoryTitle.textContent}`);

    const liTitleElements = item.querySelectorAll("ul li");
    console.log(`Elements: ${liTitleElements.length}`);
});


