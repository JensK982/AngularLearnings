export class User {
  Id: number = 0;
  FirstName: string = '';
  LastName: string = '';
  Age: number = 0;
  DateOfBirth: Date | undefined;
  email: string = '';
  adresse = new UserAddress();
}

export class UserAddress {
  Street: string = '';
  PostalCode: string = '';
  City: string = '';
  Country: string = '';
}
