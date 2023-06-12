export interface Subscriber {
  SystemId: string | null;
  Area: string;
  PublicId: number;
  CountryCode: string;
  CountryName: string;
  Name: string;
  Email: string;
  JobTitle: string;
  PhoneNumber: string;
  PhoneCode: string;
  PhoneCodeAndNumber: string;
  LastActivityUtc: string;
  LastActivity: string;
  SubscriptionDate: string;
  SubscriptionMethod: number;
  SubscriptionState: number;
  SubscriptionStateDescription: string;
  Topics: [Array<string>];
  Activity: string;
  ConnectionState: number;
  Id: number;
}

export interface TableSubscriber {
  Id: number;
  Name: string;
  Email: string;
  CountryName: string;
}
