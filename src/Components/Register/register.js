import TrackIt from '../../Shared/images/trackit.svg'
import { Container, Image, Form, Ancora } from './cssRegister'
import { useState } from 'react';
import { postRegister } from '../../Services/axios';
import { useHistory } from 'react-router-dom';
import LoaderSpinner from '../../Shared/Components/spinner/loader';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('')
    const [loading, setLoading] = useState('Cadastrar');
    const [disabled, setDisabled] = useState(false);
    const history = useHistory();

    function registering() {
        const body = {
            email,
            name,
            image,
            password
        };

        setLoading(<LoaderSpinner />)
        setDisabled(true)

        postRegister(body).then(() => {
            history.push('/');
        }).catch(() => {
            alert('Usuário ou senha inválidos');
            setLoading('Cadastrar');
            setDisabled(false);
        })
    }

    return (
        <Container>
            <Image src={TrackIt} alt='' />
            <Form>
                <input type='text' id='email' placeholder='email' disabled={disabled} value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='text' id='senha' placeholder='senha' disabled={disabled} value={password} onChange={e => setPassword(e.target.value)}/>
                <input type='text' id='email' placeholder='nome' disabled={disabled} value={name} onChange={e => setName(e.target.value)}/>
                <input type='text' id='foto' placeholder='foto' disabled={disabled} value={image} onChange={e => setImage(e.target.value)}/>
                <button id='submit' onClick={registering}>{loading}</button>
            </Form>
            <Ancora src='#'>Já tem uma conta? Faça login!</Ancora>
        </Container>
    );
};