import { SignupForm } from "@/components/signup-form";
import { Trophy } from "lucide-react";
import type { AccountSchema } from "@/App";
import { useNavigate } from "react-router-dom";

const signup = (successCallback: Function, failedCallback: Function) => {
  const email: HTMLInputElement | null = document.querySelector("#email");
  const username: HTMLInputElement | null = document.querySelector("#username");
  const password: HTMLInputElement | null = document.querySelector("#password");
  const password2: HTMLInputElement | null =
    document.querySelector("#retype-password");

  if (!email || !username || !password || !password2) return false;
  if (password.value != password2.value) {
    failedCallback(username, password, password2, "password");
    return false;
  }

  const accountInfoCheck = async (): Promise<any> => {
    const requestBody = {
      email: email.value,
      username: username.value,
      password: password.value,
    };

    const response: Response = await fetch(
      `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    const accountInfo = await response.json();
    return accountInfo;
  };

  const accountInfo = accountInfoCheck();
  accountInfo.then(
    (info) => {
      localStorage.setItem("pid", info.pid);
      localStorage.setItem("username", info.username);
      successCallback({ pid: info.pid, username: info.username });
    },
    () => {
      failedCallback(username, password);
      return false;
    }
  );
  accountInfo.catch((error) => {
    console.log(error);
    return false;
  });
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
