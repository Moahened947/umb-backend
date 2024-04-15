export class CreateUserDto {
    fullName: string;
    dateOfBirth: string;
    dateOfHiring: Date;
    department: string;
    title: string;
    contractNo: string;
    contractType: string;
    role: string;
    phoneNumber: string;
    address: string;
    totalSalary: number;
    vacationDays: number;
    username: string;
    code: number;
    pic: string;
    signature: string;
    accessLevel: string;
    activeStatus: boolean;
    lastLogin: Date;
    notes: string[];
    todos: string[];
    managerTasks: string[];
    userShortcut: string;
  }