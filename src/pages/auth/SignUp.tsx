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
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(4),
});

function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className=" w-7/12">
      <div className="mb-4 flex justify-center items-center">
        <img src="assets/images/logo.svg" alt="" />
      </div>
      <h2 className="text-white font-bold text-center mb-2">
        Create a new account
      </h2>
      <p className="text-gray-400 text-xs">
        To use snapp, Please enter your details.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Name</FormLabel>
                <FormControl>
                  <Input className="bg-[#1F1F22] border-0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Sign Up
          </Button>
        </form>
      </Form>
      <div className="flex items-center my-4">
        <p className="text-gray-400 text-xs">Already have an account?</p>
        <Link to={"/sign-in"} className="text-blue-500 text-xs ml-1 underline">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
