import { Routes,Route } from "react-router-dom"
import BecomeHost from "../../Pages/BecomeHost"
import Home from "../../Pages/Home"
import SearchResultsPage from "../../Pages/Search"
import LoginPage from "../../Pages/LogInPage"
import AdminLoginPage from "../../Pages/AdminLogin"
import AdminPage from "../../Pages/AdminPage"
import SignUpForm from "../../Pages/CustomerSignUp"
import BookingPage from "../../Pages/Booking"
import BookingSuccessPage from "../../Pages/Confirm"
const AllRoutes=()=>{
   return(
    <Routes>
        <Route path="/host" element={<BecomeHost></BecomeHost>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/searchres" element={<SearchResultsPage></SearchResultsPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/adminlogin" element={<AdminLoginPage></AdminLoginPage>}></Route>
        <Route path="/adminpage" element={<AdminPage></AdminPage>}></Route>
        <Route path="/CustomerSignUp" element={<SignUpForm></SignUpForm>}></Route>
        <Route path='/booking/:id' element={<BookingPage></BookingPage>}></Route>
        <Route path='/bookingconfirmed' element={<BookingSuccessPage></BookingSuccessPage>}></Route>
    </Routes>
   )
}
export default AllRoutes