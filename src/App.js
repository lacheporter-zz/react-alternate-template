import { useLocalStorage } from "./hooks/useLocalStorage";
import { Route, Switch } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import CourseMenu from "./pages/CourseMenu";
import Lesson from "./pages/Lesson";

function App() {
  //get lesson number on refresh
  const [lesson, setLesson] = useLocalStorage("lesson", "");
  //set lesson number
  function setLessonHandler(param) {
    setLesson(param);
  }
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/">
          <CourseMenu setLesson={setLessonHandler} />
        </Route>
        <Route path="/Lesson">
          <Lesson lesson={lesson} />
        </Route>
      </Switch>
    </AppProvider>
  );
}

export default App;
