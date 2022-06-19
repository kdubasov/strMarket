import AppMain from "./app/AppMain";
import ShopMain from "./shop/ShopMain";
import NotFound from "./NotFound";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AppNavbar from "./app/components-app/AppNavbar";
import AppFooter from "./app/components-app/AppFooter";
import AboutUsMain from "./about-us-page/AboutUsMain";
import ContactMain from "./contact-page/ContactMain";

const Router = () =>{
    //12
    return(
        <BrowserRouter>
            <AppNavbar />
            <Switch>
                <Route exact path='/' component={AppMain} />
                <Route path='/shop/:shopUrl' component={ShopMain} />
                <Route path='/about' component={AboutUsMain} />
                <Route path='/contacts' component={ContactMain} />
                <Route path='*' component={NotFound} />
            </Switch>
            <AppFooter />
        </BrowserRouter>
    )
}

export default Router;