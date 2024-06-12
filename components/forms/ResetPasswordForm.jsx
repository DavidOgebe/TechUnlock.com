/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { ToastAction } from "@/components/ui/toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import formSchema from "@/schema/Signin";
import Logo from "@/components/reusables/Logo";
import LoadingSpinner from "@/components/reusables/LoadingSpinner";
import { ArrowLeft } from "lucide-react";

export default function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const { toast } = useToast();

  const router = useRouter();

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    handleOnlineStatus(); // Initial check
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  const form =
    useForm({})

  const onSubmit = async (values) => {
    if (values.password.length < 5) {
      toast({
        variant: "destructive",
        title: "Password validation failed",
        description: "Password must be more than 5 characters",
      });
      return;
    }

    if (!isOnline) {
      toast({
        variant: "destructive",
        title: "Ohh no! Network error",
        description:
          "You are currently offline. Please check your internet connection.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    try {
      setIsLoading(true);

      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 3000));

      toast({
        variant: "success",
        title: "Password changed successfully",
        description: `You can now login with your new password!`,
      });

      router.push("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description:
          "There was an error resetting your password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      {isLoading && <LoadingSpinner />}
      <motion.div
        className="mx-auto max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-none drop-shadow-none rounded-none mx-auto space-y-3 border-0 m-0 p-0">
          <CardHeader className="m-0 p-0">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex justify-center mb-3 lg:hidden"
            >
              <Logo />
            </motion.div>
          </CardHeader>
          <CardContent className="shadow-none drop-shadow-none rounded-none mx-auto space-y-1 border-0 m-0 p-0">
            <Form {...form}>
              <motion.form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, staggerChildren: 0.3 }}
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FormItem>
                        <FormLabel>Enter new paswword</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </motion.div>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FormItem>
                        <FormLabel>Confirm paswword</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </motion.div>
                  )}
                />

                <div className="flex flex-col justify-center text-white space-y-6">
                  <Button
                    className="w-1/3 bg-primary text-white flex self-center mt-3"
                    type="submit"
                  >
                    Confirm
                  </Button>

                  <p
                    className="flex gap-x-2 items-center text-primary"
                    onClick={() => router.back()}
                  >
                    <ArrowLeft size={16} /> <span className="">Go back</span>
                  </p>
                </div>
              </motion.form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}