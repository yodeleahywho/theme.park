
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
 _       __    ______    __    ______   ____     __  ___    ______    __    __
| |     / /   / ____/   / /   / ____/  / __ \\   /  |/  /   / ____/   / /   / /
| | /| / /   / __/     / /   / /      / / / /  / /|_/ /   / __/     / /   / / 
| |/ |/ /   / /___    / /___/ /___   / /_/ /  / /  / /   / /___    /_/   /_/  
|__/|__/   /_____/   /_____/\\____/   \\____/  /_/  /_/   /_____/   (_)   (_)   
                                                                             
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
