export interface Location {
  id: number;
  sidebar?:boolean;
  name: string;
  logo: string;
  latitude: number;
  longitude: number;
  description: string;
  groupId?: number;
  images?: string[];
}