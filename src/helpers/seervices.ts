export const getCurrentNav = () => {
    const pathname = window.location.pathname
    console.log(location)

    switch (pathname) {
        case '/cards':
            return 2
        case '/payments':
            return 3
        case '/credit':
            return 4
        case '/settings':
            return 5
        default:
            return 1
    }
}