import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import { Trophy } from "lucide-react";


const LoginPage = () => {
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
                    <LoginForm />
                </div>
            </div>
        </>
    );
}
export default LoginPage