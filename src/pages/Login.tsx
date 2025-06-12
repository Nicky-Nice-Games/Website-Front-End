import { LoginForm } from "@/components/login-form"
import { Trophy } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react"

const login = (callback: Function) => {
  const username = document.querySelector('#username');
    const password = document.querySelector('#password');

  const accountInfoCheck = async (): Promise<any> => {
    const response: Response = await fetch(`https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/${username}`);
    const accountInfo = response.json();
    return accountInfo;
  }

  const accountInfo = accountInfoCheck();
  accountInfo.then(info => {
    if (info.username != username || info.password != password) return false;
    callback(info);
  }, () => {
    console.log("Username and password don't match.")
    return false;
  })
  accountInfo.catch(error => {
    console.log(error)
    return false;
  });

}

interface LoginParams {
    setAccount: Function
    setIsLoggedIn: Function
}

const LoginPage = ({ setAccount, setIsLoggedIn}: LoginParams) => {
    return(

        <>
            <div className="bg-[#000000] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                 <div className="bg-[#F76902] text-white flex size-12 items-center justify-center rounded-full">
                    <Trophy className="size-8" />
                </div>
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                       
                    <h1 className="text-white text-4xl">
                        Name TBD
                    </h1>
                    </a>
                    <LoginForm onSubmit={e => {e.preventDefault(); console.log(e); login(setAccount); setIsLoggedIn(true); }}/>
                </div>
            </div>
        </>
    );
}
export default LoginPage