import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import CreateUserPage from "./pages/CreateUserPage";
import EditUserPage from "./pages/EditUserPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="users" element={<UserListPage/>}/>
        <Route path="users/create" element={<CreateUserPage/>}/>
        <Route path="users/edit/:id" element={<EditUserPage/>}/>
        <Route path="users/:id" element={<UserDetailsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App