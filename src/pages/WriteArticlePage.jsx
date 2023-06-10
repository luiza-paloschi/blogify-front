import styled from 'styled-components';
import Layout from "../components/Layout";
import WriteForm from '../components/Write/WriteForm';

export default function WriteArticlePage(){

    return (
        <Layout>
            <Heading>
                <Title>Write an article</Title>
            </Heading>
            <WriteForm />
        </Layout>
    );
}

const Heading = styled.div`
    margin-top: 40px;
    padding: 0px 15px;
    display: flex;
    h1 {
        margin: 0px;
        padding: 0px;
        font-family: "Lora", sans-serif;
        font-weight: 300;
        font-size: 40px;
        color: #080808;
        -webkit-transition: all 0.4s ease 0s;
        -o-transition: all 0.4s ease 0s;
        transition: all 0.4s ease 0s;
        em {
            font-style: normal;
            font-weight: 600;
        }
    }
`;

const Title = styled.h1`
        text-align: center;
        word-break: break-word;
        font-size:30px; font-weight:300; color:#222; letter-spacing:1px;
        text-transform: uppercase;
        display: flex;
        column-gap: 27px;
        align-items: center;
        &::after {
            content: " ";
            width:100px;
            display: block;
            border-bottom: 1px solid #c50000;
            border-top: 1px solid #c50000;
            height: 5px;
            background-color:#f8f8f8;
            @media screen {
                display: hidden;
            }
        }
        &::before{
            content: " ";
            @media (max-width: 500px) {
                display: hidden;
            }
            width:100px;
            display: block;
            border-bottom: 1px solid #c50000;
            border-top: 1px solid #c50000;
            height: 5px;
            background-color:#f8f8f8;
        }

`