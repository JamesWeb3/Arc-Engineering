import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SectionLayout } from '@/layouts/SectionLayout'
import James from '../../public/james.jpeg'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { IconCalendly } from '@/components/icons'

const formSchema = z.object({
  email: z
    .string()
    .email()
    .min(4, 'Email must be more than 3 characters and contain @'),
  name: z.string().min(4, 'Name must be more than 3 characters'),
  message: z.string().min(51, 'Message must be more than 50 characters'),
})

const ContactComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <SectionLayout className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
      <Card className="cols-span-1 flex flex-col justify-between gap-4 p-8 ">
        <h2 className="sub-heading">Contact Us</h2>
        <p className="sub-text">Lorem Ipsum</p>
        <div className="flex items-center gap-4">
          <Image
            width={80}
            height={80}
            src={James}
            alt="James"
            className="rounded-full"
          />
          <div>
            <p className="text-xl font-medium">James Oldham</p>
            <p className="sub-text">Lead Developer</p>
          </div>
          <IconCalendly />
        </div>
      </Card>

      <div className="cols-span-1 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex w-full gap-8">

            
            <FormField
            
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full relative">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="name" placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage className="absolute bottom-[-14px]"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="johnsmith@gmail.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter message" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </SectionLayout>
  )
}

export default ContactComponent
