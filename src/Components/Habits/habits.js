
import Increment from '../../Shared/images/+.svg'
import Menu from "../../Shared/Components/Menu/menu";
import { MyHabits, Add, NewHabit, NoHabitsText } from './cssHabits'
import Navbar from '../../Shared/Components/Navbar/navbar';

export default function Habits() {
    return (
        <>
            <Navbar />
            <MyHabits>
                <h1>Meus hábitos</h1>
                <Add>
                    <img src={Increment} alt='' />
                </Add>
            </MyHabits>
            <NewHabit>
                <input type='text' id='habitName' placeholder='nome do hábito' />
                <ul>
                    <li>D</li>
                    <li>S</li>
                    <li>T</li>
                    <li>Q</li>
                    <li>Q</li>
                    <li>S</li>
                    <li>S</li>
                </ul>
                <div>
                <button>Cancelar</button>
                <button>Salvar</button>
                </div>
            </NewHabit>
            <NoHabitsText>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabitsText>
            <Menu />
        </>
    )
}



