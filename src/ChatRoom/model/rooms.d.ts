export interface RoomsItem {
    roomId: number,
    groupName: string,
    groupDescription: string,
    url: string,
    createdAt: Date
}

interface roomsProps {
   room: RoomsItem
}

