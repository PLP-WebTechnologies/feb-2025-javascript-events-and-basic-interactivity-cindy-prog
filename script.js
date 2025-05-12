// DOM Elements
const heading = document.getElementById('main-heading');
const dynamicText = document.getElementById('dynamic-text');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const itemList = document.getElementById('item-list');
const footerText = document.getElementById('footer-text');

// Change Text Content
changeTextBtn.addEventListener('click', () => {
    const newTexts = [
        "The text has been changed!",
        "JavaScript is powerful!",
        "DOM manipulation in action!",
        "Content updated dynamically!"
    ];
    
    const randomText = newTexts[Math.floor(Math.random() * newTexts.length)];
    dynamicText.textContent = randomText;
    
    // Also update the heading for demonstration
    heading.textContent = "Text Updated!";
    setTimeout(() => {
        heading.textContent = "DOM Manipulation Demo";
    }, 1500);
});

// Toggle Dark Mode
changeStyleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        changeStyleBtn.textContent = "Light Mode";
        footerText.textContent = "© 2023 (Dark Mode Enabled)";
    } else {
        changeStyleBtn.textContent = "Dark Mode";
        footerText.textContent = "© 2023 DOM Manipulation Demo";
    }
});

// Add New List Item
addElementBtn.addEventListener('click', () => {
    const itemCount = itemList.children.length + 1;
    const newItem = document.createElement('li');
    newItem.textContent = `New item ${itemCount} added dynamically`;
    itemList.appendChild(newItem);
});

// Remove Last List Item
removeElementBtn.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        const lastItem = itemList.lastElementChild;
        itemList.removeChild(lastItem);
        
        // Show a temporary message
        const message = document.createElement('p');
        message.textContent = "Item removed!";
        message.style.color = "#e74c3c";
        message.style.marginTop = "1rem";
        document.querySelector('.card').appendChild(message);
        
        setTimeout(() => {
            document.querySelector('.card').removeChild(message);
        }, 1500);
    } else {
        alert("No more items to remove!");
    }
});

// Bonus: Current year in footer
const currentYear = new Date().getFullYear();
footerText.textContent = `© ${currentYear} DOM Manipulation Demo`;