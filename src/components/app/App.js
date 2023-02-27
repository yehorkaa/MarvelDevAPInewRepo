import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// Router оборачивает все странички и маршруты по которым будет идти пользователь
// import { MainPage, ComicsPage , SingleComicPage} from "../pages";
import Spinner from "../spinner/Spinner";
import AppHeader from "../appHeader/AppHeader";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicLayout = lazy(() =>
  import("../pages/singleComicLayout/SingleComicLayout")
);
const SingleCharacterLayout = lazy(() =>
  import("../pages/singleCharacterLayout/SingleCharacterLayout")
);
const SinglePage = lazy(() => import("../pages/SinglePage"));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));

{
  /*тут я описываю роутинг*/
}
const App = () => {
  return (
    // оборачиваем все в рутер чтобы тут можно было путешествовать по ссылкам
    //именно роут будет грузиться если у нас будет какая-то ссылка
    //из-за продолжения юрл адресов (/ дальше /комикс) они грузятся один под другим сразу же
    <Router>
      <div className="app">
        {" "}
        {/*!роутер показывает что мы будем в аппхэдер делать роутинг! */}
        <AppHeader />
        <main>
          {/* // Отобразится <Spinner> до тех пор, пока не загрузится какой-то из роутов */}
          <Suspense fallback={<Spinner></Spinner>}>
            <Routes>
              {/*мейнпейдж относится к пэс / и тд*/}
              <Route path="/" element={<MainPage />}></Route>

              <Route path="/comics" element={<ComicsPage />}></Route>
              <Route
                path="/comics/:comicId"
                element={<SingleComicPage />}
              ></Route>
              <Route
                path="/comics/:id"
                element={
                  <SinglePage Component={SingleComicLayout} dataType="comic" />
                }
              ></Route>
              <Route
                path="/characters/:id"
                element={
                  <SinglePage
                    Component={SingleCharacterLayout}
                    dataType="character"
                  />
                }
              ></Route>
              <Route path="*" element={<Page404 />}></Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};
{
  /* <Route exact path="/">
<MainPage/>
</Route>
<Route exact path="/comics">
<ComicsPage/>
</Route>
<Route exact path="/comics/:id">
<SinglePage Component={SingleComicLayout} dataType='comic'/>
</Route>
<Route exact path="/characters/:id">
<SinglePage Component={SingleCharacterLayout} dataType='character'/>
</Route>
<Route path="*">
<Page404/>
</Route>
export default App; */
}
export default App;
