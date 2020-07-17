
export const getCookie = (cookiename) => {
    const cookieProps = document.cookie.split(';');

    for(var i = 0; i < cookieProps.length; i++) {
        var cookieProp = cookieProps[i];
        cookieProp = cookieProp.split('=');
        cookieProp[0] = cookieProp[0].trim();
        cookieProp[1] = cookieProp[1].trim();
        if(cookieProp[0] == cookiename) return cookieProp[1];
    }
    return null;
}
