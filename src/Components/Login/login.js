import TrackIt from './images/trackit.svg'
import { Container, Image, Form, Ancora } from './cssLogin'

export default function Login() {
    return (
        <Container>
        <Image src={TrackIt} alt='' />
        <Form>
            <input type='text' id='email' placeholder='email'/>
            <input type='text' id='senha' placeholder='senha'/>
            <input type='submit' id='submit'/>
        </Form>
        <Ancora src='#'>Não tem uma conta? Cadastre-se!</Ancora>
        </Container>
    );
};





