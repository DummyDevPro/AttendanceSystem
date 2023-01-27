// Check User Information in browser storage 
if (true) {
    console.log("if => true");
    console.log(window.location.pathname);
    switch (window.location.pathname) {
        case '/index.html':
        case '/':
            console.log("redirect here");
            window.location.href = window.location.origin + '/pages/login.html';
            break;
        case 404:
            window.location.href = window.location.origin + '404.html';
            break;
    }
}