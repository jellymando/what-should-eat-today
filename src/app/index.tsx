import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "../components/Header";
import Home from "../pages/Home";
import Member from "../pages/Member";
import Place from "../pages/Place";
import Loader from "../components/Loader";
import { Container, NoticeWrap, Notice } from "./styled";

function App() {
    const kakaoMaps = window.kakao;

    return (
        <RecoilRoot>
            <Container>
                {kakaoMaps ? (
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <Suspense fallback={<Loader />}>
                                    <Home />
                                </Suspense>
                            </Route>
                            <Route path="/member">
                                <Suspense fallback={<Loader />}>
                                    <Member />
                                </Suspense>
                            </Route>
                            <Route path="/place">
                                <Suspense fallback={<Loader />}>
                                    <Place />
                                </Suspense>
                            </Route>
                        </Switch>
                    </Router>
                ) : (
                    <NoticeWrap>
                        <Notice>
                            앱 실행 권한이 없습니다.
                            <br />
                            관리자에게 문의하세요.
                        </Notice>
                    </NoticeWrap>
                )}
            </Container>
        </RecoilRoot>
    );
}

export default App;
