document.getElementById("languageToggle").addEventListener("click", function () {
    const htmlTag = document.documentElement; // Select <html>
    const navbar = document.getElementById("navbar"); // Select navbar

    if (htmlTag.dir === "ltr" || htmlTag.dir === "") {
        htmlTag.dir = "rtl"; // Switch to right-to-left
        htmlTag.lang = "ar"; // Set language to Arabic
        this.textContent = "English"; // Change button text to English
    } else {
        htmlTag.dir = "ltr"; // Switch back to left-to-right
        htmlTag.lang = "en"; // Set language to English
        this.textContent = "العربية"; // Change button text to Arabic
    }
});
