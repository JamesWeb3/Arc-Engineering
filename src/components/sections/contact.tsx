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
import James from '../../../public/james.jpeg'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Label } from '@/components/ui/label'

const formSchema = z.object({
  email: z
    .string()
    .email()
    .min(4, 'Email must be more than 3 characters and contain @'),
  name: z.string().min(4, 'Name must be more than 3 characters'),
  price: z.string().min(1, 'Price must be selected'),
  message: z.string().min(51, 'Message must be more than 50 characters'),
})

const ContactComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: '',
      email: '',
      price: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div
      id="contact"
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center max-w-7xl mx-auto w-full my-20"
    >
      <Card className="cols-span-1 flex flex-col justify-between gap-14 p-8 py-12 ">
        <h2 className="sub-heading">Contact Us</h2>
        <p className="sub-text">
          Reach out for a free quote and run down of your project.
        </p>
        <div className="flex items-center gap-4">
          <Image
            width={70}
            height={70}
            src={James}
            alt="James"
            className="rounded-full"
          />
          <div>
            <p className="text-xl font-medium">James Oldham</p>
            <p className="sub-text">Lead Developer</p>
          </div>
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
                    <Label>Name</Label>
                    <FormControl>
                      <Input type="name" placeholder="John Smith" {...field} />
                    </FormControl>
                    <FormMessage className="absolute bottom-[-14px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <Label>Email</Label>
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
              name="price"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <Label>Select Project Scope</Label>
                  <FormControl>
                    <ToggleGroup type="single" className="justify-between px-4 pt-2">
                    <ToggleGroupItem className="flex flex-col p-3 h-14 hover:bg-[#111114]/50 data-[state=on]:bg-[#111114] data-[state=off]:border-[#252428] border-transparent" value="tiny">Quick Automation<span className="text-xs sub-text *:">(couple days)</span></ToggleGroupItem>
                      <ToggleGroupItem className="flex flex-col p-3 h-14 hover:bg-[#111114]/50 data-[state=on]:bg-[#111114] data-[state=off]:border-[#252428] border-transparent" value="small">Website Creation<span className="text-xs sub-text *:">(couple days)</span></ToggleGroupItem>
                      <ToggleGroupItem className="flex flex-col p-3 h-14 hover:bg-[#111114]/50 data-[state=on]:bg-[#111114] data-[state=off]:border-[#252428] border-transparent" value="large">Component Building<span className="text-xs sub-text *:">(several weeks)</span></ToggleGroupItem>
                      <ToggleGroupItem className="flex flex-col p-3 h-14 hover:bg-[#111114]/50 data-[state=on]:bg-[#111114] data-[state=off]:border-[#252428] border-transparent" value="huge">Complex Project<span className="text-xs sub-text *:">(several months)</span></ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
    </div>
  )
}

export default ContactComponent
