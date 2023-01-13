class Gift {
  constructor(
    public id: string,
    public title: string,
    public price: number,
    public purchased: boolean,
    public affiliatedUrl: string,
    public createdAt: number = Date.now(),
  ) {
  }

}


export class User {
  // avatarUrl: string;
  // createdAt: number | Timestamp<string>;
  email: string;
  // favoriteGifts: string[];
  // followers: string[];
  // followingId: string[];
  // isOnline: boolean;
  name: string | null;
  // profileUrl: URL;
  // myGifts: Gift[];
  // updatedAt: number | Timestamp<string>;
  username: string;
  id: string;

  // password?: string;


  constructor(user?: any) {
    // this.avatarUrl = user.avatarUrl;
    // this.createdAt = user.createdAt = Date.now();
    this.email = user.email;
    // this.favoriteGifts = user.favoriteGifts;
    // this.followers = user.followers;
    // this.followingId = user.followingId;
    // this.isOnline = user.isOnline;
    this.name = user.name || null;
    // this.profileUrl = user.profileUrl;
    // this.myGifts = user.myGifts;
    // this.updatedAt = user.updatedAt = Date.now();
    this.username = user.username;
    this.id = user.uid;

    // this.password = user.password;
  }
}
