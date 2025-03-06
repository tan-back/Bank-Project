import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { Suspense, lazy } from "react";
const Login = lazy(() => import("./Login"))
const Home = lazy(() => import("./Home"))
const Dashboard = lazy(() => import("./Dashboard"))
const Accinfo = lazy(() => import("./Accinfo"))
const Banks = lazy(() => import("./Bank-services"))
const Loans = lazy(() => import("./Loans"))
const Atm = lazy(() => import("./Atmser"))
const Check = lazy(() => import("./Chkbook"))
const Bill = lazy(() => import("./Bill"))
const Insur = lazy(() => import("./Insurance"))
const Locker = lazy(() => import("./Locker"))
const Digi = lazy(() => import("./Digital"))
const Tax = lazy(() => import("./Tax"))
const Cust = lazy(() => import("./custsupport"))
const Locate = lazy(() => import("./Loacte"))
const Rules = lazy(() => import("./Rules"))
const Updates = lazy(() => import("./Updates"))
const Saving = lazy(() => import("./SavingAcc"))
const Recurr = lazy(() => import("./Recurring"))
const Fix = lazy(() => import("./Fixed"))
const Sal = lazy(() => import("./Salary"))
const Curr = lazy(() => import("./Current"))
const Eduloan = lazy(() => import("./Eduloan"))
const Homel = lazy(() => import("./Homeloan"))
const Gold = lazy(() => import("./Goldloan"))
const Personal = lazy(() => import("./Perloan"))
const Vehicle = lazy(() => import("./Vehloan"))
const Business = lazy(() => import("./Busiloan"))
const Chat = lazy(() => import("./Faq"))
const Banner = lazy(() => import("./Banner"))

export default function Main(props) {
    return (
        <Container bsPrefix="main">
            <Routes>
                <Route exact path="/" element={<Suspense fallback={
                    <div className="spinner-box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Banner /></Suspense>}></Route>

                    <Route exact path="/dashboard" element={<Suspense fallback={
                    <div className="spinner-box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Dashboard /></Suspense>}></Route>

                {<Route exact path="/accinfo" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Accinfo /></Suspense>}></Route>}

                {<Route exact path="/bank-services" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Banks /></Suspense>}></Route>}

                {<Route exact path="/loans" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Loans /></Suspense>}></Route>}
                    
                    {<Route exact path="/atmser" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Atm /></Suspense>}></Route>} 

                    {/* {<Route exact path="/chkbook" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Chkbook /></Suspense>}></Route>}  */}

                    {<Route exact path="/bill" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Bill /></Suspense>}></Route>} 

                    {<Route exact path="/tax" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Tax /></Suspense>}></Route>} 

                    {<Route exact path="/chkbook" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Check /></Suspense>}></Route>} 

                    {<Route exact path="/insurance" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Insur /></Suspense>}></Route>} 

                    {<Route exact path="/locker" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Locker /></Suspense>}></Route>} 

                    {<Route exact path="/digital" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Digi /></Suspense>}></Route>} 

                    {<Route exact path="/locate" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Locate /></Suspense>}></Route>}

                    {<Route exact path="/custsupport" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Cust /></Suspense>}></Route>} 

                    
                    {<Route exact path="/rules" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Rules /></Suspense>}></Route>} 

                    {<Route exact path="/updates" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Updates /></Suspense>}></Route>} 

                    {<Route exact path="/savingAcc" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Saving /></Suspense>}></Route>} 

                    {<Route exact path="/Recurring" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Recurr /></Suspense>}></Route>} 

                    {<Route exact path="/fixed" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Fix /></Suspense>}></Route>} 

                    {<Route exact path="/salary" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Sal /></Suspense>}></Route>} 

                    {<Route exact path="/current" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Curr /></Suspense>}></Route>} 


                    {<Route exact path="/eduloan" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Eduloan /></Suspense>}></Route>} 

                    {<Route exact path="/homeloan" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Homel /></Suspense>}></Route>} 

                    {<Route exact path="/goldloan" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Gold /></Suspense>}></Route>} 

                    {<Route exact path="/perloan" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Personal /></Suspense>}></Route>} 

                    {<Route exact path="/vehloan" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Vehicle /></Suspense>}></Route>} 

                    {<Route exact path="/busiloan" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Business /></Suspense>}></Route>} 

                    {<Route exact path="/faq" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Chat /></Suspense>}></Route>} 





            </Routes>
        </Container>
    )
}
