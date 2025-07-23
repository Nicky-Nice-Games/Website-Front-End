import { Trophy } from "lucide-react";
import type { AccountSchema } from "@/App";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/utils";
import { useState } from "react";

const AuthPage = ({ setAccount }: { setAccount: Function }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // Login function (unchanged)
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

  // Signup function (unchanged)
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

  // Login error handler (unchanged)
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

  // Signup error handler (unchanged)
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
        // Login Page (unchanged styling and structure)
        <div
          className="bg-size-[90%] bg-blend-multiply min-h-[80vh] flex flex-col items-center justify-center gap-6 p-6"
          style={{
            backgroundImage:
              "linear-gradient(#FFA962, #F76902), url('images/items-background-darkoutline.png')",
          }}
        >
          <div className="bg-[#F76902] text-white flex size-12 items-center justify-center rounded-full">
            <Trophy className="size-8" />
          </div>
          <div className="flex w-full max-w-sm flex-col gap-6">
            <h1 className="poppins font-bold text-center text-white text-4xl">
              Gizmo Go-Kartz
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                login((account: AccountSchema) => {
                  setAccount(account);
                  navigate("/home");
                }, loginError);
              }}
              className="flex flex-col gap-4"
            >
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F76902]"
                required
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F76902]"
                required
              />
              <p id="error-message" className="text-red-600 text-sm"></p>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#F76902] px-4 py-2 text-white hover:bg-[#FFA962] focus:outline-none focus:ring-2 focus:ring-[#F76902]"
              >
                Login
              </button>
              <p className="text-center text-white">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-[#F76902] hover:underline focus:outline-none"
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      ) : (
        // Signup Page (unchanged styling and structure)
        <div className="bg-[url('images/items-background.png')] bg-[#BBB] bg-fixed bg-size-[130%] bg-blend-difference flex min-h-[98vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="bg-[#F76902] text-white flex size-12 items-center justify-center rounded-full">
            <Trophy className="size-8" />
          </div>
          <div className="flex w-full max-w-sm flex-col gap-6">
            <h1 className="text-white poppins font-bold text-center text-4xl">
              Gizmo Go-Kartz
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signup((account: AccountSchema) => {
                  setAccount(account);
                  navigate("/home");
                }, signupError);
              }}
              className="flex flex-col gap-4"
            >
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F76902]"
                required
              />
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F76902]"
                required
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F76902]"
                required
              />
              <input
                id="retype-password"
                type="password"
                placeholder="Retype Password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F76902]"
                required
              />
              <p id="error-message" className="text-red-600 text-sm"></p>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#F76902] px-4 py-2 text-white hover:bg-[#FFA962] focus:outline-none focus:ring-2 focus:ring-[#F76902]"
              >
                Sign Up
              </button>
              <p className="text-center text-white">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-[#F76902] hover:underline focus:outline-none"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
