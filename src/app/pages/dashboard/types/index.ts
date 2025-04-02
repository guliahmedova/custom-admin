export interface Sale {
  id: string;
  title: string;
  amount: number;
  percentage: number;
  icon: string;
}

export interface MapCard {
  id: string;
  title: string;
  status: 'Delivered' | 'Stuck' | 'In Transit';
  location: string;
}
