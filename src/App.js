import ContactForm from './Components/ContactForm/ContactForm';
import Counter from './Components/Counter';
import CounterWithValues from './Components/CounterWithValues/CounterWithValues';
import ThemeSwitcher from './Components/ThemeSwitcher/ThemeSwitcher';
import TodoList from './Components/todolist/TodoList';
import UserProfile from './Components/UserProfile/UserProfile';
import SearchFilter from './SearchFilter/SearchFilter';

function App() {
  return (
    <div className="App">
      <Counter initialCount={0}/>
      <SearchFilter/>
      <ContactForm/>
      <CounterWithValues/>
      <TodoList/>
      <UserProfile/>
      <ThemeSwitcher/>
    </div>
  );
}

export default App;
