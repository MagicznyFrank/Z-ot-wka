import { Category } from "../types/Category";

export const categories: Category = {
    food: {title: 'Żywność', color: '#0077FF', expense: true},
    rent: {title: 'Wynajem', color: '#FF4839', expense: true},
    salary: {title: 'Wypłata', color: '#64B83C', expense: false},
    transport: {title: 'Transport', color: '#FFBC1C', expense: true},
    entertainment: {title: 'Rozrywka', color: '#191CCF', expense: true},
    others: {title: 'Inne wydatki', color: '#B70CFF', expense: true},
    otherIncome: {title: 'Inne dochody', color: '#34EBC0', expense: true}
};