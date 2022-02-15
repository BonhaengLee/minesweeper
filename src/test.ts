// type Permissions = "admin" | "user" | "manager";

type BasicUser<A = boolean, P = string[]> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions: P[];
};

type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

const user: FullUser<boolean, "admin" | "user" | "manager"> = {
  name: "John",
  surname: "Doe",
  age: 30,
  isAdmin: true,
  account: 100,
  permissions: ["admin", "user", "manager"],
};
