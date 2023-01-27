// Check User Information in browser storage 
if (true) {
    let baseUrl = window.location.origin;
    // For GitHub
    if (baseUrl.includes("github.io")) {
        baseUrl += window.location.pathname;
    }

    switch (window.location.pathname) {
        // for github
        case '/AttendanceSystem/':
            window.location.href = baseUrl + 'pages/login.html';
            break;

        // for localhost
        case '/index.html':
        case '/':
            window.location.href = baseUrl + '/pages/login.html';
            break;
    }
}