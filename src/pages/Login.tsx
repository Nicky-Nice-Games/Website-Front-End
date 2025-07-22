import { LoginForm } from "@/components/login-form";
import { Trophy } from "lucide-react";
import type { AccountSchema } from "@/App";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/utils";

const login = (successCallback: Function, failedCallback: Function) => {
  const username: HTMLInputElement | null = document.querySelector("#username");
  const password: HTMLInputElement | null = document.querySelector("#password");

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

interface LoginParams {
  setAccount: Function;
}

const LoginPage = ({ setAccount }: LoginParams) => {
  const navigate = useNavigate();

  return (
    <>
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
          <LoginForm
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
              login(
                (account: AccountSchema) => {
                  setAccount(account);
                  navigate("/home");
                },
                (
                  usernameElement: HTMLInputElement,
                  passwordElement: HTMLInputElement
                ) => {
                  usernameElement.className += " border-red-800";
                  passwordElement.className += " border-red-800";
                  const errorMessage: HTMLParagraphElement | null =
                    document.querySelector("#error-message");
                  if (errorMessage)
                    errorMessage.innerHTML = "Incorrect username/password";
                }
              );
            }}
          />
        </div>
      </div>
    </>
  );
};
export default LoginPage;
