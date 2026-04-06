const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <div className="flex flex-wrap justify-center p-5">
                {/* HobbyCard에 title과 desc라는 2개의 props를 전달하고 있음 */}
                <HobbyCard title="💻 코딩" desc="새로운 웹사이트를 만드는 것이 즐거워요." />
                <HobbyCard title="🎮 게임" desc="스트레스를 풀기 위해 가끔 즐깁니다." />
                <HobbyCard title="🏃 러닝" desc="매일 아침 공원을 뛰며 건강을 챙겨요." />
            </div>
            <About />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);