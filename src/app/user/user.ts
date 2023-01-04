// class Gift {
//   constructor(
//     public id: string,
//     public title: string,
//     public price: number,
//     public purchased: boolean,
//     public affiliatedUrl: string,
//     public createdAt: number = Date.now(),
//   ) {
//   }
// }
//
// interface URL {
//   hash: string;
//   host: string;
//   hostname: string;
//   href: string;
//   readonly origin: string;
//   password: string;
//   pathname: string;
//   port: string;
//   protocol: string;
//   search: string;
//   username: string;
//
//   toString(): string;
// }

export class User {
  constructor(
    public uuid: string,
    public username: string,
    public followersId: string[],
    public followingId: string[],
    public createdAt: null | number = Date.now(),
    public updatedAt: null | number = Date.now() || createdAt,
    public isOnline: boolean = false,
    // public favoriteGiftId: string[],
    // public gifts: Gift[],
    // public lastTimeOnline: null | number = Date.now() || createdAt,
    // public avatarUrl: URL,
    // public profileUri: URL,
    // public email: string,
    // public password?: string
  ) {

  }
}
