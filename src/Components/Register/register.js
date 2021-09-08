import TrackIt from '../../Shared/images/trackit.svg'
import { Container, Image, Form, Ancora } from './cssRegister'

export default function Register() {
    return (
        <Container>
        <Image src={TrackIt} alt='' />
        <Form>
            <input type='text' id='email' placeholder='email'/>
            <input type='text' id='senha' placeholder='senha'/>
            <input type='text' id='email' placeholder='nome'/>
            <input type='text' id='foto' placeholder='foto'/>
            <input type='submit' id='submit' value='Cadastrar'/>
        </Form>
        <Ancora src='#'>Já tem uma conta? Faça login!</Ancora>
        </Container>
    );
};