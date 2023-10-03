import { playerInterface } from '@/interface/playerInterface'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PlayerList({ players }: { players: playerInterface[] }) {
    return (
        <Table >
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Player</TableHead>
                    <TableHead className="text-center">Position</TableHead>
                    <TableHead className="text-left w-[100px]">Team</TableHead>
                    <TableHead>City</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className='h-52 overflow-auto'>
                {players.map((player: playerInterface) => (
                    <TableRow key={player.id}>
                        <TableCell className="font-medium">{player.id}</TableCell>
                        <TableCell className='flex items-center'>
                            <Avatar className='mx-3'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            {player.first_name}
                        </TableCell>
                        <TableCell className="text-center">{player.position}</TableCell>
                        <TableCell className="text-left w-[150px]">{player.team.name}</TableCell>
                        <TableCell>{player.team.city}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
    )
}
