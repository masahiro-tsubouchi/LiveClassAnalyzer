/// <reference types="react-scripts" />

// Add module declarations for missing type definitions
declare module '@tremor/react' {
  export const Card: any;
  export const Title: any;
  export const LineChart: any;
}

declare module '@livekit/components-react' {
  export const LiveKitRoom: any;
  export const ControlBar: any;
  export const GridLayout: any;
  export const RoomAudioRenderer: any;
  export const useRemoteParticipants: any;
  export const ParticipantTile: any;
}

declare module 'livekit-client' {
  export class Room {
    constructor(options?: any);
    connect(url: string, token: string): Promise<any>;
    disconnect(): void;
  }
}
