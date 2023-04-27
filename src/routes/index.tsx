import { Route, Routes as RoutesReactRouterDom } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Dashboard } from "../Pages/Dashboard";

import { Register } from "../Pages/SignOut";
import { SignIn } from "../Pages/SignIn";
import { RequireAuth } from "./RequireAuth";
import { RequireNotAuth } from "./RequireNotAuth";
import { User } from "../Pages/User";

export function Routes() {
    return (
        <RoutesReactRouterDom>
        <Route path='/' element={
            <RequireNotAuth>
            <SignIn />
            </RequireNotAuth>
        } />

        <Route path='/register' element={
            <RequireNotAuth>
            <Register />
            </RequireNotAuth>
        } />

        <Route element={
            <DefaultLayout />
        }>
            <Route path='/dashboard' element={
            <RequireAuth>
                <Dashboard />
            </RequireAuth>
            } />
            <Route path='/user' element={
            <RequireAuth>
                <User />
            </RequireAuth>
            } />
        </Route >
        </RoutesReactRouterDom >
    )
}
