// Header 컴포넌트
import reactImg from "../../assets/images/react.jpg";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={reactImg} alt="리액트 이미지" />
      <h1>React Essentials</h1>
    </header>
  );
}
export default Header;
