'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@/hooks/use-toast';

import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name is required.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name is required.',
  }),
  email: z.string().email({ message: 'Email is required' }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="w-full h-full mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name Field */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">First Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Last Name Field */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Email@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-500 transition-all"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
