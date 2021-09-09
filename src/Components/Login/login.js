import TrackIt from '../../Shared/images/trackit.svg';
import { Container, Image, Form, Ancora } from './cssLogin';
import { useState } from 'react';
import { postLogin } from '../../Services/axios';
import { useHistory, Link } from 'react-router-dom';
import LoaderSpinner from '../../Shared/Components/spinner/loader';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('Entrar')
    const history = useHistory();

    function isRegistered() {
        const body = {
            email,
            password,
        };

        setLoading(<LoaderSpinner />)

        postLogin(body).then(() => {
            history.push('/hoje');
        }).catch(() => {
            alert('Usuário ou senha inválidos');
            setLoading('Entrar')
        })
    }

    return (
        <Container>
            <Image src={TrackIt} alt='' />
            <Form>
                <input type='text' id='email' placeholder='email' onChange={e => setEmail(e.target.value)} value={email} />
                <input type='text' id='senha' placeholder='senha' onChange={e => setPassword(e.target.value)} value={password} />
                <button id='submit' onClick={isRegistered}>{loading}</button>
            </Form>
            <Link to='/cadastro'><Ancora src='#'>Não tem uma conta? Cadastre-se!</Ancora></Link>
        </Container>
    );
};





