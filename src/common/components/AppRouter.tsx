import { Route, Routes, } from "react-router-dom";
import { HomeFeature, ContactsFeature, PostFeature } from "../../features";

export const AppRouter = () => (

    <Routes>
        <Route path="/" element={<HomeFeature />} />
        <Route path="/contacts" element={<ContactsFeature />} />
        <Route path="/post/:postId" element={<PostFeature />} />
    </Routes>

);
