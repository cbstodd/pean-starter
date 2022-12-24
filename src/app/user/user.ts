// TODO: Replace gifts 'string' type with 'Gift' class when created.
export class User {
  constructor(
    public uuid: string,
    public username: string,
    public followersId: string[],
    public followingId: string[],
    public gifts: string[],
    public isOnline: boolean = false,
    public createdAt: null | number = Date.now(),
    public updatedAt: null | number = Date.now() || createdAt,
    public profilePicture: string,
    public email: string,
    public password?: string,
  ) {
  }
}
