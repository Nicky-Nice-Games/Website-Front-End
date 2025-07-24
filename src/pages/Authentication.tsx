import type { AccountSchema } from "@/App";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/utils";
import { useState } from "react";
import { SignupForm } from "@/components/signup-form";
import { LoginForm } from "@/components/login-form";
const AuthPage = ({ setAccount }: { setAccount: Function }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // Login function
  const login = (successCallback: Function, failedCallback: Function) => {
    const username: HTMLInputElement | null =
      document.querySelector("#username");
    const password: HTMLInputElement | null =
      document.querySelector("#password");

    if (!username || !password) return false;

    fetchData(
      "GET",
      `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/getinfo/${username.value}/${password.value}`,
      "json",
      (info: any) => {
        localStorage.setItem("pid", info.pid);
        localStorage.setItem("username", info.username);
        localStorage.setItem("pfp", info.pfpLink);
        successCallback({
          pid: info.pid,
          username: info.username,
          pfp: info.pfpLink,
        });
      },
      null,
      () => {
        failedCallback(username, password);
        return false;
      }
    );
  };

  // Signup function
  const signup = (successCallback: Function, failedCallback: Function) => {
    const email: HTMLInputElement | null = document.querySelector("#email");
    const username: HTMLInputElement | null =
      document.querySelector("#username");
    const password: HTMLInputElement | null =
      document.querySelector("#password");
    const password2: HTMLInputElement | null =
      document.querySelector("#retype-password");

    if (!email || !username || !password || !password2) return false;
    if (password.value != password2.value) {
      failedCallback(email, username, password, password2, "password");
      return false;
    }

    fetchData(
      "GET",
      `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/verifyusername?username=${username.value}`,
      "json",
      (usernameExists: boolean) => {
        if (usernameExists) {
          failedCallback(
            email,
            username,
            password,
            password2,
            "usernameExists"
          );
          return false;
        }

        fetchData(
          "GET",
          `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/verifyemail?email=${email.value}`,
          "json",
          (emailExists: boolean) => {
            if (emailExists) {
              failedCallback(
                email,
                username,
                password,
                password2,
                "emailExists"
              );
              return false;
            }

            fetchData(
              "POST",
              `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/create`,
              "json",
              (info: any) => {
                if (info.error) {
                  failedCallback(email, username, password, password2);
                  return false;
                }
                localStorage.setItem("pid", info.pid);
                localStorage.setItem("username", info.username);
                localStorage.setItem("pfp", info.pfp);
                successCallback({
                  pid: info.pid,
                  username: info.username,
                  pfp: info.pfp,
                });
              },
              JSON.stringify({
                email: email.value,
                username: username.value,
                password: password.value,
                pfp: 0,
              }),
              () => {
                failedCallback(username, password);
                return false;
              }
            );
          }
        );
      }
    );
  };

  // Login error handler
  const loginError = (
    usernameElement: HTMLInputElement,
    passwordElement: HTMLInputElement
  ) => {
    usernameElement.className += " border-red-800";
    passwordElement.className += " border-red-800";
    const errorMessage: HTMLParagraphElement | null =
      document.querySelector("#error-message");
    if (errorMessage) errorMessage.innerHTML = "Incorrect username/password";
  };

  // Signup error handler
  const signupError = (
    emailElement: HTMLInputElement,
    usernameElement: HTMLInputElement,
    passwordElement: HTMLInputElement,
    retypePasswordElement: HTMLInputElement,
    errorType: string
  ) => {
    const errorMessage: HTMLParagraphElement | null =
      document.querySelector("#error-message");
    if (errorMessage) {
      if (errorType === "password") {
        passwordElement.className += " border-red-800";
        retypePasswordElement.className += " border-red-800";
        errorMessage.innerHTML = "Passwords don't match.";
      } else if (errorType === "usernameExists") {
        usernameElement.className += " border-red-800";
        errorMessage.innerHTML =
          "An account already exists with this username.";
      } else if (errorType === "emailExists") {
        emailElement.className += " border-red-800";
        errorMessage.innerHTML = "An account already exists with this email.";
      } else {
        emailElement.className += " border-red-800";
        usernameElement.className += " border-red-800";
        passwordElement.className += " border-red-800";
        errorMessage.innerHTML = "Incorrect username/password.";
      }
    }
  };

  return (
    <>
      {isLogin ? (
        // Login Page

        <div
          className="bg-size-[90%] bg-blend-multiply min-h-[80vh] flex flex-col items-center justify-center gap-6 p-6"
          style={{
            backgroundImage:
              "linear-gradient(#FFA962, #F76902), url('images/items-background-darkoutline.png')",
          }}
        >
          <div className="text-white flex size-16 items-center justify-center rounded-full">
            <img src="images/logo/gizmo-icon.svg" alt="Gizmo Icon" />
          </div>
          <div className="flex w-full max-w-sm flex-col gap-6">
            <h1 className="poppins font-bold text-center text-white text-4xl">
              Gizmo Go-Kartz
            </h1>
            <LoginForm
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                login(
                  (account: AccountSchema) => {
                    setAccount(account);
                    navigate("/home");
                  },

                  loginError
                );
              }}
              onSignupClick={() => setIsLogin(false)}
            />
          </div>
        </div>
      ) : (
        // Signup Page
        <div className="bg-[url('images/items-background.png')] bg-[#BBB] bg-fixed bg-size-[130%] bg-blend-difference flex min-h-[98vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="text-white flex size-16 items-center justify-center rounded-full">
            <img src="images/logo/gizmo-icon-hover.svg" alt="Gizmo Icon" />
          </div>
          <div className="flex w-full max-w-sm flex-col gap-6">
            <h1 className="text-white poppins font-bold text-center text-4xl">
              Gizmo Go-Kartz
            </h1>
            <SignupForm
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                signup((account: AccountSchema) => {
                  setAccount(account);
                  navigate("/home");
                }, signupError);
              }}
              onSignupClick={() => setIsLogin(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
