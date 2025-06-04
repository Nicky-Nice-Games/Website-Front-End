import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#1a1a1a]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">Welcome Racers</CardTitle>
          <CardDescription className="text-[#D0D3D4]">
            Login with your RIT or login credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">

                 <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-[#F76902] text-white hover:bg-[#1a1a1a] hover:text-white">
                  <img src='images/RITLogo.png' alt="RIT Logo" className="w-6 h-6 brightness-0 contrast-800" />
                  Login with RIT
                </Button>

              </div>
               <div className="after:border-[#A2AAAD] relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-[#1a1a1a] text-[#D0D3D4] relative z-10 px-4">
                  Or continue with email
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3 text-[#D0D3D4]">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center text-[#D0D3D4]">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-[#F76902]"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full border border-1 text-white bg-[#F76902]">
                  Start Racing
                </Button>
              </div>
              <div className="text-center text-sm text-[#D0D3D4]">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4 text-[#F76902]">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#" className="text-[#F76902]">Terms of Service</a>{" "}
        and <a href="#" className="text-[#F76902]">Privacy Policy</a>.
      </div>
    </div>
  )
}
