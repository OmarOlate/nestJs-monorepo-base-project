export type FindAllUsersInputDto = Readonly<{
  name?: string;
  status?: string;
  email?: string;
  page?: number;
  perPage?: number;
}>;
