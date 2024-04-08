"use client";

import * as z from "zod";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const FormSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    firstName: z.string().min(1, {
      message: "Please enter your first name",
    }),
    lastName: z.string().min(1, {
      message: "Please enter your last name",
    }),
    phone: z.string().min(1, {
      message: "Please enter your phone number",
    }),
    message: z.string().min(1, {
      message: "Please enter your message",
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          ...form,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      toast.success("Form Submitted!");
      console.log("Submitted!");
      return res;
    } catch (error) {
      console.log("Err", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen  bg-gray-100 py-12 pt-36 dark:bg-gray-900">
      {" "}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute left-0 top-0 z-0 h-full w-full" />
      {/* Content with higher z-index */}
      <div className="relative z-10 mx-auto max-w-2xl p-4">
        {" "}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="mb-8 text-center font-sans text-lg font-bold text-white md:text-7xl">
          Contact Us
        </h1>
        <p className="mx-auto my-2 max-w-lg text-center text-lg text-neutral-500">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <div className="mx-auto mt-10 w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Welcome to Audio Alchemy
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Send us a message and we&apos;ll usually get back to you the very
            same day
          </p>

          <Form {...form}>
            <form className="my-8" onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="firstname">First name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="firstname"
                          placeholder="John"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="lastname">Last name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="firstname"
                          placeholder="Doe"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="email"
                        placeholder="musicalgenius@info.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} id="phone" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        id="message"
                        placeholder="Please enter your project details"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

              <div className="flex gap-2">
                <button
                  className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Submit &rarr;
                  <BottomGradient />
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
