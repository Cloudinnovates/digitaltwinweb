export function init_app() {
    return () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //window.location.href = '/dashboard';
        } else {
            //window.location.href = '/login';
        }
    };
}

