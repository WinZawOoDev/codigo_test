import { teamInterface } from '@/interface/teamInterface'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { BiEdit, BiTrash } from 'react-icons/bi'

type Props = {
    teams: teamInterface[],
    deleteTeam: (id: string) => void,
    updateTeam: (team: teamInterface) => void
}

export default function TeamsList({ teams, deleteTeam, updateTeam }: Props) {

    return (
        <Table >
            <TableHeader>
                <TableRow>
                    <TableHead className="">Name</TableHead>
                    <TableHead className="">Division</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead className='text-center'>Region</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className='h-52 overflow-auto'>
                {teams.map((team: teamInterface) => (
                    <TableRow key={team.id}>
                        <TableCell className='flex items-center'>
                            {team.name}
                        </TableCell>
                        <TableCell>{team.division}</TableCell>
                        <TableCell className="text-left w-[150px]">{team.city}</TableCell>
                        <TableCell className='text-center'>{team.region}</TableCell>
                        <TableCell className='flex items-center justify-center'>
                            <button onClick={() => updateTeam(team)} type='button' className='mx-2 text-2xl outline-none'><BiEdit /></button>
                            <button onClick={() => deleteTeam(team.id!)} type='button' className='text-2xl outline-none'><BiTrash /></button>
                        </TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
    )
}
