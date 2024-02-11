import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Details } from "./pages/Details";
import { AddEditPost } from "./pages/AddEditPost";
import { SignInUp } from "./pages/SignInUp";
import { PwReset } from "./pages/PwReset";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./context/UserContext";

/**a details több helyre is kell majd, több posztra, ezért úgy lesz a pathja, hogy details/:id */
/**a postot szeretném módosítani, így ugyanannak a komponensnek adok update-et, de ennek a posztnak biztos lesz egyedi azonosítója */
/**path-nál minden más esetben ez az oldal jelenjen meg path="*" */
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="create" element={<AddEditPost />} />
            <Route path="update/:id" element={<AddEditPost />} />
            <Route path="signinup/:type" element={<SignInUp />} />
            <Route path="pwreset" element={<PwReset />} />
            <Route path="*" element={<NotFound />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}
export default App;
