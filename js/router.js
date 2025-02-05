let pageUrls = {  
    about: '/index.html?about',  
    contact: '/index.html?contact'  
}; 
 
function OnStartUp() {      
    popStateHandler();  
} 

OnStartUp(); 
 
document.querySelector('#about-link').addEventListener('click', (event) => {      
    event.preventDefault();
    let stateObj = { page: 'about' };  
    document.title = 'About';  
    history.pushState(stateObj, "about", "?about");  
    RenderAboutPage();  
}); 
 
document.querySelector('#contact-link').addEventListener('click', (event) => {      
    event.preventDefault();
    let stateObj = { page: 'contact' };  
    document.title = 'Contact';  
    history.pushState(stateObj, "contact", "?contact");  
    RenderContactPage();  
}); 
 
function RenderAboutPage() {      
    document.querySelector('main').innerHTML = ` 
        <h1 class="title">About Me</h1> 
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>`; 
} 
 
function RenderContactPage() {      
    document.querySelector('main').innerHTML = ` 
        <h1 class="title">Contact with me</h1> 
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>`; 
} 
 
function popStateHandler() {  
    let loc = window.location.search;  
 
    if (loc === "?contact") { 
        RenderContactPage(); 
    } 
    if (loc === "?about") { 
        RenderAboutPage(); 
    } 
} 
 
window.onpopstate = popStateHandler;

function RenderContactPage() {      
    document.querySelector('main').innerHTML = ` 
        <h1 class="title">Contact with me</h1> 
        <form id="contact-form"> 
            <label for="name">Name:</label> 
            <input type="text" id="name" name="name" required> 
            
            <label for="email">Email:</label> 
            <input type="email" id="email" name="email" required> 
            
            <label for="message">Message:</label> 
            <textarea id="message" name="message" required></textarea> 
            
            <button type="submit">Send</button> 
        </form>`; 
     
    document.getElementById('contact-form').addEventListener('submit', (event) => { 
        event.preventDefault(); 
        
        // Pobranie danych z formularza
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Tymczasowe wyświetlenie w alercie (można zastąpić wysyłką na serwer)
        alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Opcjonalnie: wyczyść formularz po wysłaniu
        document.getElementById('contact-form').reset();
    }); 
}  

// Funkcja przełączania motywu
function toggleTheme() {
    let body = document.body;
    body.classList.toggle('dark-theme');

    // Zapisz preferencję użytkownika w localStorage
    let theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Sprawdzenie preferencji użytkownika przy starcie
function applySavedTheme() {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Dodaj event listener do przycisku
document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
