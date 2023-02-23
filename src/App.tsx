import { useState, useEffect } from 'react';
import * as C from './App.styles';
import {Item} from './types/item';
import {Category} from './types/Category';
import { categories } from './data/categories';
import { items } from './data/item';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { connection } from './db';
const App = () => {  
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);




    useEffect(()=> {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(()=> {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList  = [...list];
    newList.push(item);
    setList(newList);
  }

// create a connection and log a message on successful connection
    const connection = createConnection();
    connection.connect((err) => {
        if (err) {
            console.error("Error connecting to database:", err);
            return;
        }
        console.log("Connected to database.");
    });


    return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Złotóweczka</C.HeaderText>
      </C.Header>
      <C.Container>
        <C.Header>
          <C.HeaderText>Twoje finanse w jednym miejscu!</C.HeaderText>
        </C.Header>
      </C.Container>
      <C.Body>


      {/* Área de informações */}
      <InfoArea
      currentMonth={currentMonth} 
      onMonthChange={handleMonthChange}
      income={income}
      expense={expense}
      />

      
      {/* Inserir informações */}
      <InputArea onAdd={handleAddItem}/>


        
      {/* Tabela de itens */}
      <TableArea list={filteredList}/>


      </C.Body>
    </C.Container>
  );
}

export default App;