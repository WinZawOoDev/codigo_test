
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { teamInterface } from '@/interface/teamInterface';


type Props = {
    isUpdate: boolean,
    openDialog: boolean;
    openDialogChange: (open: boolean) => void,
    form: UseFormReturn<teamInterface, any, undefined>,
    onSubmit: (values: any) => void
}


export default function TeamForm({ isUpdate, form, openDialog, openDialogChange, onSubmit }: Props) {
    return (
        <Dialog open={openDialog} onOpenChange={openDialogChange} >
            <DialogTrigger asChild>
                <Button size="sm" className='float-right mb-2'>
                    Create new team
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {isUpdate ? "Edit team" : "Create new team"}
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem className='my-2' >
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter name' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='city'
                                render={({ field }) => (
                                    <FormItem className='my-2'>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter city'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='division'
                                render={({ field }) => (
                                    <FormItem className='my-2'>
                                        <FormLabel>Division</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter division'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='region'
                                render={({ field }) => (
                                    <FormItem className='my-2'>
                                        <FormLabel>Region</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter region'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='player_count'
                                render={({ field }) => (
                                    <FormItem className='my-2'>
                                        <FormLabel>Player Count</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter player count'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='country'
                                render={({ field }) => (
                                    <FormItem className='my-2'>
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter country'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className='w-full mt-3 mb-2'>{isUpdate ? "Update" : "Add"} team</Button>
                        </form>
                    </Form>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
