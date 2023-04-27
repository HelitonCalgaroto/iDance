import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";

import { Dashboard } from "../Pages/Dashboard";
import { SignIn } from '../Pages/SignIn';
import { Register } from '../Pages/SignOut';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/Register' element={<Register/>} />

            <Route path="/" element={<DefaultLayout />}>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/user' element={<Dashboard/>} />
            </Route>
        </Routes>
    )
}