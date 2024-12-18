"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea component exists.

const formSchema = z.object({
  name: z
    .string()
    .nonempty("Tên là bắt buộc.")
    .min(2, { message: "Tên phải có ít nhất 2 ký tự." })
    .max(100, { message: "Tên không được vượt quá 100 ký tự." }),
  email: z
    .string()
    .email({ message: "Vui lòng nhập địa chỉ email hợp lệ." })
    .nonempty("Email là bắt buộc."),
  subject: z
    .string()
    .nonempty("Chủ đề là bắt buộc.")
    .min(2, { message: "Chủ đề phải có ít nhất 2 ký tự." })
    .max(100, { message: "Chủ đề không được vượt quá 100 ký tự." }),
  message: z
    .string()
    .nonempty("Nội dung là bắt buộc.")
    .min(10, { message: "Nội dung phải có ít nhất 10 ký tự." })
    .max(500, { message: "Nội dung không được vượt quá 500 ký tự." }),
});

export function ProfileForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      console.log(values);
      // Simulate API submission or further processing here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên của bạn</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên của bạn..." {...field} />
              </FormControl>
              <FormDescription>Đây sẽ là tên hiển thị công khai của bạn.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Địa chỉ email</FormLabel>
              <FormControl>
                <Input placeholder="Nhập email của bạn..." {...field} />
              </FormControl>
              <FormDescription>Chúng tôi sẽ không chia sẻ email của bạn với bất kỳ ai khác.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chủ đề</FormLabel>
              <FormControl>
                <Input placeholder="Nhập chủ đề của bạn..." {...field} />
              </FormControl>
              <FormDescription>Chủ đề của tin nhắn bạn muốn gửi.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nội dung</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Nhập nội dung của bạn..."
                  {...field}
                />
              </FormControl>
              <FormDescription>Nội dung nên rõ ràng và súc tích.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang gửi..." : "Gửi"}
        </Button>
      </form>
    </Form>
  );
}
