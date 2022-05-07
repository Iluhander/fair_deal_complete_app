import './App.css';
import Navbar from "./Navbar/Navbar";
import Main from "./pages/Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts.";
import Enter from "./pages/Enter/Enter";
import Header from "./pages/Account/Header/Header";
import Deals from "./pages/Account/Deals/Deals";
import Settings from "./pages/Account/Settings/Settings";
import Chats from "./pages/Account/Chats/Chats";

function App() {
    let deals = [
        {
            name: "Iphone 11 gold",
            status: "На проверке у Fair Deal",
            statusColor: 'orange',
            key: "1"
        },
        {
            name: "Радиатор",
            status: "Средства переведены",
            statusColor: 'green',
            key: "2"
        }
    ];

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
    ]

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
        )
    }

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={getBasicPage(<Main/>)}/>
                <Route path='/about' element={getBasicPage(<About/>)}/>
                <Route path='/contacts' element={getBasicPage(<Contacts/>)}/>
                <Route path='/enter' element={getBasicPage(<Enter/>)}/>
                <Route path='/deals' element={getAccountPage(<Deals deals={deals}/>, 1)}/>
                <Route path='/chats' element={getAccountPage(<Chats chats={chats}/>, 2)}/>
                <Route path='/settings' element={getAccountPage(<Settings/>, 3)}/>
            </Routes>

        </Router>
    );
}

export default App;
