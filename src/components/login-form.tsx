import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#1a1a1a]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">
            Welcome Back, Racers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <p id="error-message" className="text-red-600 text-center"></p>
                <div className="grid gap-3 text-[#D0D3D4]">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    className="border-[#D0D3D4]"
                    placeholder="username..."
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center text-[#D0D3D4]">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="text-white"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full border border-1 text-white bg-[#F76902]" //onSubmit={() => login()}
                >
                  Start Racing
                </Button>
              </div>
              <div className="text-center text-sm text-[#D0D3D4]">
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => navigate("/signup")}
                  className="underline underline-offset-4 cursor-pointer text-[#F76902]"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
