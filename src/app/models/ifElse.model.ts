
export interface IfElse {
    top_cards:     TopCard[];
    new_users:     NewUser[];
    recent_orders: RecentOrder[];
}

export interface NewUser {
    id:       string;
    picture:  string;
    name:     string;
    isActive: boolean;
    country:  string;
    progress: number;
}

export interface RecentOrder {
    id:            string;
    name:          string;
    product:       string;
    delivery_date: string;
    status:        Status;
    tracking_no:   string;
    shipping:      boolean;
}

export enum Status {
  Failed = "danger",
  Paid = "success",
  Pending = "secondary",
}

export interface TopCard {
    header:     string;
    sub_header: string;
    value:      number;
}