'use client'

import React, { useState } from 'react'
import TeamsList from './TeamsList';
import TeamForm from './TeamForm';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { deleteTeam, updateTeam } from '@/features/teamSlice';
import { addTeam } from '@/features/teamSlice';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { teamInterface } from '@/interface/teamInterface';

const teamScheam = z.object({
    name: z.string().min(5).max(15),
    city: z.string().min(1),
    division: z.string().min(5),
    region: z.string().min(5),
    player_count: z.coerce.number().gt(3).lte(11),
    country: z.string().min(1)
});


export default function Teams() {

    const team = useAppSelector(store => store.teams);
    const dispatch = useAppDispatch();

    const [openDialog, setOpenDialog] = useState(false);
    const [update, setUpdate] = useState({ status: false, id: null });
    const resetUpdate = () => setUpdate(prev => ({ ...prev, status: false, id: null }));


    const form = useForm<z.infer<typeof teamScheam>>({
        resolver: zodResolver(teamScheam),
        defaultValues: {
            name: "",
            city: "",
            division: "",
            region: "",
            player_count: 0,
            country: ""
        }
    });

    function onSubmit(values: z.infer<typeof teamScheam>) {
        if (update.status) {
            dispatch(updateTeam({ id: update.id!, ...values }));
            resetUpdate();
        } else {
            dispatch(addTeam(values));
        }
        setOpenDialog(false);
        form.reset()
    }

    function handleUpdateTeam(team: teamInterface) {
        setUpdate((prev: any) => ({ ...prev, status: true, id: team.id }))
        setOpenDialog(true);
        form.setValue("name", team.name);
        form.setValue("city", team.city);
        form.setValue("division", team.division);
        form.setValue("region", team.region);
        form.setValue("player_count", team.player_count);
        form.setValue("country", team.country);
    }

    function handleDeleteTeam(id: string) {
        dispatch(deleteTeam({ id }));
    }

    function handleOpenDialogChange(open: boolean) {
        if (!open && update.status) {
            resetUpdate()
            form.reset()
        }
        setOpenDialog(open)
    }


    return (
        <div className='w-full'>
            <TeamForm
                isUpdate={update.status}
                openDialog={openDialog}
                openDialogChange={handleOpenDialogChange}
                form={form}
                onSubmit={onSubmit}
            />
            <TeamsList
                teams={team}
                updateTeam={handleUpdateTeam}
                deleteTeam={handleDeleteTeam}
            />
        </div>
    )
}
