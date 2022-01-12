export class Admin {
  public firstName?: string;
  public secondName?: string;
  public email: string;
  public password: String;
  public isAdmin?: boolean;


  constructor(email: string, password: string, firstName?: string, secondName?: string, isAdmin?: boolean) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}

