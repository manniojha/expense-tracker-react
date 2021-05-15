import Card from '../UI/Card';
import ExpensesFilter from './../NewExpense/ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear=> setFilteredYear(selectedYear);

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (   
            <div>
                <Card className="expenses">
                    <ExpensesFilter selectedYear={filteredYear} onChangeFilter = {filterChangeHandler} />
                    <ExpensesList items={filteredExpenses} />
                </Card>
            </div>
           )
}

export default Expenses; 