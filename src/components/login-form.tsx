import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#DDDDDD] border-black">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">Welcome Back, Racers</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <p id="error-message" className="text-red-600 text-center"></p>
                <div className="grid gap-3 text-[#111111]">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    className="border-[#111111]"
                    placeholder="username..."
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center text-[#111111]">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-[#F76902]"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" className="border-[#111111]" required />
                </div>
                <Button type="submit" className="w-full border border-1 border-black bg-[#F76902]" //onSubmit={() => login()}
                >
                  Start Racing
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <button onClick={() => navigate("/signup")} className="underline underline-offset-4 text-[#F76902]">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
