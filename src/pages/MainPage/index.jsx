import { useNavigate } from "react-router-dom";

export default function MainPage(){
    const navigate = useNavigate();
    return (
        <div>
            <header>
                <button onClick={()=> {navigate('/sign-in')}}>Login</button>
                <button onClick={()=> {navigate('/sign-up')}}>Sign-up</button>
            </header>
        </div>
    );
}