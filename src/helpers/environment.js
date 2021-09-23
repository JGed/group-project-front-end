let APIURL= '';
switch(window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'jklp-click-n-cook-front.herokuapp.com':
        APIURL = 'https://jklp-click-n-cook.herokuapp.com';
        break;
    default:
        break;
}

export default APIURL;