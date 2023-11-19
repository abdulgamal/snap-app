import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <div className="mb-4 flex justify-center items-center">
        <img src="assets/images/logo.svg" alt="" />
      </div>
      <h2 className="text-white font-bold text-center mb-2">
        Log in to your account
      </h2>
      <p className="text-gray-400 text-xs">
        Welcome back! Please enter your details.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#1F1F22] border-0"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#1F1F22] border-0"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full my-4" type="submit">
            Log In
          </Button>
        </form>
      </Form>
      <div className="flex items-center my-4">
        <p className="text-gray-400 text-xs">Don't have an account?</p>
        <Link to={"/sign-up"} className="text-blue-500 text-xs ml-1 underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
