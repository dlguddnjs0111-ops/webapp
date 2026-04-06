// 1. Header 컴포넌트
const Header = () => (
    <header className="bg-blue-600 p-4 text-white text-center text-2xl font-bold">
        My Hobby Introduction
    </header>
);

// 2. Hero 컴포넌트
const Hero = () => (
    <div className="bg-gray-100 p-10 text-center">
        <h1 className="text-4xl font-bold">환영합니다!</h1>
        <p>제가 좋아하는 것들을 소개하는 페이지입니다.</p>
    </div>
);

// 3. HobbyCard 컴포넌트 (★핵심: 2개 이상의 Props - title, desc 전달받음)
const HobbyCard = (props) => (
    <div className="border p-4 m-2 rounded shadow-lg bg-white">
        <h3 className="text-xl font-bold text-blue-500">{props.title}</h3>
        <p className="text-gray-600">{props.desc}</p>
    </div>
);

// 4. About 컴포넌트
const About = () => (
    <div className="p-8 bg-yellow-50">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>웹프로그래밍 응용 수업을 듣고 있는 학생입니다.</p>
    </div>
);

// 5. Footer 컴포넌트
const Footer = () => (
    <footer className="bg-gray-800 p-4 text-white text-center text-sm">
        © 2026 웹프로그래밍 과제 | 학번: 202XXXXX
    </footer>
);