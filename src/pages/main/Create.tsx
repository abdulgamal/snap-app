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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  caption: z.string().min(5),
  location: z.string().min(4),
  photoUrl: z.string().min(4),
});

function Create() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caption: "",
      location: "",
      photoUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="px-4">
      <div className="mb-5 flex items-center gap-3">
        <img
          src="assets/icons/add-post.svg"
          alt=""
          className="h-5 w-5 text-white"
        />
        <p className="text-white text-xl font-bold">Create a Post</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 max-w-xl flex flex-col"
        >
          <FormField
            control={form.control}
            name="caption"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Caption</FormLabel>
                <FormControl>
                  <Textarea className="bg-[#1F1F22] border-0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="photoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Add Photo/Video</FormLabel>
                <FormControl>
                  <div className="bg-[#1F1F22] p-4 rounded-xl flex flex-col justify-center items-center">
                    <img
                      src="assets/icons/file-upload.svg"
                      alt=""
                      className="h-20 w-20"
                    />
                    <p className="my-2 text-gray-400 text-xs">
                      SVG,PNG,JPG or GIF (max. 800 * 400px)
                    </p>
                    <label
                      htmlFor="imgFile"
                      className="text-gray-400 text-xs cursor-pointer bg-white/20 p-2 rounded-lg"
                    >
                      Choose from Computer
                    </label>
                    <Input
                      className="bg-[#1F1F22] border-0 hidden"
                      id="imgFile"
                      type="file"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Add Location</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#1F1F22] border-0"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="my-4 self-end" type="submit">
            Share Post
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Create;
