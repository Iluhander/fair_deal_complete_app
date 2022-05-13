import './App.css';
import './Forms.css';
import {BrowserRouter as Router, Routes, Route, Navigate}
    from 'react-router-dom';
import {useContext} from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./pages/Main/Main";
import Footer from "./Footer/Footer";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts.";
import Enter from "./pages/Enter/Enter";
import Header from "./pages/Account/Header/Header";
import DealsList from "./pages/Account/Deals/DealsList";
import Settings from "./pages/Account/Settings/Settings";
import Chats from "./pages/Account/Chats/Chats";
import CreateDeal from "./pages/Account/Deals/CreateDeal/CreateDeal";
import Deal from "./pages/Account/Deals/Deal/Deal";

function App() {
    let chats = [
        {
            name: "Андей Полосков",
            deal: "Iphone 12 gold",
            status: "",
            key: "chat_1"
        },
        {
            name: "Сергей Иванов",
            deal: "Радиатор",
            status: "2 непрочитаных",
            key: "chat_2"
        },
        {
            name: "Команда Fair Deal",
            deal: "",
            status: "",
            key: "chat_2"
        }
    ];

    function getBasicPage(component) {
        return (
            <div>
                <Navbar/>
                {component}
                <Footer/>
            </div>
        );
    }

    function getAccountPage(component, page) {
        return (
            <div>
                <Header currentPage={page}/>
                {component}
            </div>
        );
    }

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={getBasicPage(<Main/>)}/>
                <Route path='/about' element={getBasicPage(<About/>)}/>
                <Route path='/contacts' element={getBasicPage(<Contacts/>)}/>
                <Route path='/enter' element={getBasicPage(<Enter/>)}/>
                <Route path='/deals' element={getAccountPage(<DealsList/>, 1)}/>
                <Route path='/deals/new_deal' element={getAccountPage(<CreateDeal/>)}/>
                <Route path='/deals/deal' element={getAccountPage(<Deal/>)}/>
                <Route path='/chats' element={getAccountPage(<Chats chats={chats}/>, 2)}/>
                <Route path='/settings' element={getAccountPage(<Settings/>, 3)}/>
            </Routes>

        </Router>
    );
}

export default App;
