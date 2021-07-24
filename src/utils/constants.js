import { Book, Home, Info, ShoppingBasket, Web } from "@material-ui/icons";

export const AppName = "IAN MUGUNA"
export const appBarItems = [
    {
        name: 'Home',
        url: '/home',
        icon: <Home />
    },
    
    {
        name: 'Shop',
        url: '/home',
        icon: <ShoppingBasket />
    },
    {
        name: 'Book Consultation',
        url: '/consultation',
        icon: <Book />
    },
    {
        name: 'About',
        url: '/about',
        icon: <Info />
    },
    {
        name: 'Blog',
        url: '/blog',
        icon: <Web />
    },
]