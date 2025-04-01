export interface ReqINFO {
    id: number;
    Type: string;
    Ram: string;
    Size: string;
    CPU: string;
    GPU: string;
  }
export const REQ_INFO = [
    { 
        id: 1,
        Type:"Minimum",
        Ram: "4 GB", 
        Size: "2 GB",
        CPU: "Intel Core i3",
        GPU: "NVIDIA Geforce GTX 470",
     },
    { 
        id: 2,
        Type:"Recommended",
        Ram: "8 GB", 
        Size: "3 GB",
        CPU: "Intel core I5",
        GPU: "NVIDIA Geforce GTX 780",
     },
    
  ];