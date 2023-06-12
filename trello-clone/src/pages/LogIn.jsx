import "../styles/loginPage.scss";
import logoImg from "../asset/Trello_logo.png";
import googleIcon from "../asset/googleIcon.png";

const LoginPage = () => {
  return (
    <div className="center-box">
      <div className="center-item">
        <div className="logo-box">
          <img src={logoImg} alt="logo" id="logoImg" />
        </div>
        <p id="ment">Log in to continue</p>
        <form action="" id="loginForm">
          {/* <label htmlFor="idInput">ID</label> */}
          <input type="text" id="idInput" placeholder="Enter your email" />
          <button>Continue</button>
        </form>

        <span id="or">OR</span>

        <div className="social-login">
          <img
            src={googleIcon}
            alt="구글아이콘"
            style={{ width: "20px", float: "left", marginLeft: "15px" }}
          />
          <span>Continue with Google</span>
        </div>

        <div>
          <a href="">Cant't log in?</a>
          <span style={{ color: "#6b778c" }}>　•　</span>
          <a href="">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
