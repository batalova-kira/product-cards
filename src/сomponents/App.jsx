import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

import Layout from "./Layout/Layout";

const Card1 = lazy(() => import("../../pages/Card1"));
const Card2 = lazy(() => import("../../pages/Card2"));

export const App = () => {
    return (
        <Layout>
            <Suspense fallback={<p>Loading..</p>}>
                <Routes>
                    <Route path="/card1" element={<Card1 />} />
                    <Route path="/card2" element={<Card2 />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </Layout>
    );
};

export default App;
