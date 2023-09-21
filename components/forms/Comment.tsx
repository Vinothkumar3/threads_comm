"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/lib/utils";
import { CommentValidation } from "@/lib/validations/thread";
import { updateUser } from "@/lib/actions/user.actions"
import { addCommentToThread, createThread } from "@/lib/actions/thread.actions";

interface Props{
    threadId:string
    currentUserImg:string
    currentUserId:string
}

const Comment =({threadId, currentUserImg, currentUserId}:Props)=>{

        
  const router = useRouter();
  const pathname = usePathname();
 

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread:'',
  

      
    },
  });

  const onSubmit=async (values:z.infer<typeof CommentValidation>) => {

  await addCommentToThread(
   threadId,
   values.thread,
   JSON.parse(currentUserId),pathname)
   form.reset()
  }


    return(
        <Form {...form}>
      <form
        className='comment-form'
        onSubmit={form.handleSubmit(onSubmit)}
      >
          <FormField
          control={form.control}
          name='thread'
          render={({ field }) => (
            <FormItem className='flex w-full items-center gap-3'>
              <FormLabel>
             <Image src={currentUserImg}
              alt="profile image"
              width={48}
              height={48}
              className="rounded-full object-cover"/>
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                 type="text"
                 placeholder="Comment..."

                  className=' no-focus text-light-1 outline-none'
                  {...field}
                />
              </FormControl>
            
            </FormItem>
          )}
        />
        <button type="submit" className="comment-form_btn"> Reply</button>
      </form>
      </Form>
    )
}
export default Comment