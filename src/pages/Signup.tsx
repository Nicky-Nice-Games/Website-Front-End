import { SignupForm } from "@/components/signup-form";
import { Trophy } from "lucide-react";
import type { AccountSchema } from "@/App";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@/utils";

const signup = (successCallback: Function, failedCallback: Function) => {
  const email: HTMLInputElement | null = document.querySelector("#email");
  const username: HTMLInputElement | null = document.querySelector("#username");
  const password: HTMLInputElement | null = document.querySelector("#password");
  const password2: HTMLInputElement | null =
    document.querySelector("#retype-password");

  if (!email || !username || !password || !password2) return false;
  if (password.value != password2.value) {
    failedCallback(email, username, password, password2, "password");
    return false;
  }
  // Check if the given username is already used by an account
  fetchData(
    "GET",
    `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/verifyusername?username=${username.value}`,
    "json",
    (usernameExists: boolean) => {
      if (usernameExists) {
        failedCallback(email, username, password, password2, "usernameExists");
        return false;
      }

      // Check if the given email is already used by an account
      fetchData(
        "GET",
        `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/verifyemail?email=${email.value}`,
        "json",
        (emailExists: boolean) => {
          if (emailExists) {
            failedCallback(email, username, password, password2, "emailExists");
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

const error = (
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
      errorMessage.innerHTML = "An account already exists with this username.";
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

interface SignupParams {
  setAccount: Function;
}

const SignupPage = ({ setAccount }: SignupParams) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[url('images/items-background.png')] bg-[#BBB] bg-fixed bg-size-[130%] bg-blend-difference flex min-h-[98vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="bg-[#F76902] text-white flex size-12 items-center justify-center rounded-full">
          <Trophy className="size-8" />
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
              }, error);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default SignupPage;
