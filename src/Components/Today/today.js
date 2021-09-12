import Menu from "../../Shared/Components/Menu/menu";
import Navbar from "../../Shared/Components/Navbar/navbar";
import Check from '../../Shared/images/check.svg';
import { Header, Habits, Container } from './cssToday';

export default function Today() {
    return (
        <>
            <Navbar />
            <Container>
                <Header>
                    <h1>Segunda, 17/05</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </Header>
                <Habits>
                    <div>
                        <h1>
                            Ler 1 capítulo de livro
                        </h1>
                        <span>
                            Sequência atual: 3 dias
                        </span>
                        <span>
                            Seu recorde: 5 dias
                        </span>
                    </div>
                    <div>
                        <img src={Check} alt='' />
                    </div>
                </Habits>
            </Container>
            <Menu />
        </>
    );
};

