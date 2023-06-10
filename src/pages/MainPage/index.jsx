import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Branding from "../../components/Main/Branding";

export default function MainPage(){
    const navigate = useNavigate();
    return (
        <Layout>
            <Branding />
        </Layout>
    );
}