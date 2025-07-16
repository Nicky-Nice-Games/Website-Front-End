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
              localStorage.setItem("pid", info.pid);
              localStorage.setItem("username", info.username);
              localStorage.setItem("pfp", info.pfp);
              successCallback({
                pid: info.pid,
                username: info.username,
                pfp: info.pfp,
              });
            },
            {
              email: email.value,
              username: username.value,
              password: password.value,
            },
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
      <div className="bg-[#000000] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="bg-[#F76902] text-white flex size-12 items-center justify-center rounded-full">
          <Trophy className="size-8" />
        </div>
        <div className="flex w-full max-w-sm flex-col gap-6">
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium"
          >
            <h1 className="text-white text-4xl">Name TBD</h1>
          </a>
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
