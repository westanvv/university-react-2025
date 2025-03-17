export type Avatar = string;

export type UserPermissions = {
  can: string[];
  inherits: string[];
};

export type User = {
  id: number;
  firstName: string;
  secondName: string;
  lastName: string;
  fullName: string;
  shortName: string;
  avatar: Avatar;
  userDiscounts: any[];
  userSalarySettings: any[];
  email: string;
  phones: string[];
  password: string;
  note: string;
  status: string;
  userGroupId: number;
  userGroup: {
    socketChannels: string[];
    id: number;
    name: string;
    slug: string;
    permissions: UserPermissions;
  };
  accessId: number;
  isHead: boolean;
  isSystem: boolean;
  startSeniorityDate: string;
  startWorkDate: string;
  vacationDayCount: number;
};

export type SizeSettings = {
  measurement: string;
  pattern: string;
  size: string[]; // 'width', 'height', 'depth', 'thickness', 'length'
};

export type Size = {
  size: object;
  sizeLists: number[]; // ids
  sizeSettings: SizeSettings;
};
